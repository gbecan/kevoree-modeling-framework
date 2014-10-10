package org.kevoree.modeling.api.json;

import java.io.ByteArrayInputStream;
import java.io.InputStream;

import org.kevoree.modeling.api.Callback;
import org.kevoree.modeling.api.KObject;

import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

import org.kevoree.modeling.api.util.ActionType;
import org.kevoree.modeling.api.KFactory;
import org.kevoree.modeling.api.ModelLoader;
import org.kevoree.modeling.api.util.Converters;

/**
 * Created with IntelliJ IDEA.
 * User: duke
 * Date: 28/08/13
 * Time: 13:08
 */


class JSONLoadingContext {
    public Lexer lexer;
    public ArrayList<ResolveCommand> resolveCommands;
    public ArrayList<KObject> roots;
    public Callback<KObject> successCallback;
    public Callback<Exception> errorCallback;
}



public class JSONModelLoader implements ModelLoader {
    private KFactory factory;
    private ExecutorService executor = Executors.newCachedThreadPool();

    public JSONModelLoader(KFactory factory) {
        this.factory = factory;
    }

    // TODO asynchronous implementation
    @Override
    public void loadModelFromString(String str, Callback<KObject> callback, Callback<Exception> error) {
        loadModelFromStream(new ByteArrayInputStream(str.getBytes(StandardCharsets.UTF_8)), callback, error);
        //deserialize(new Converters().byteArrayInputStreamFromString(str));
    }

    // TODO asynchronous implementation
    @Override
    public void loadModelFromStream(InputStream inputStream, Callback<KObject> callback, Callback<Exception> error) {
        if (inputStream == null) {
            throw new RuntimeException("Null input Stream");
        }
        executor.submit(createLoadingTask(inputStream, callback, error));
        //deserialize(inputStream);
    }

    private Runnable createLoadingTask(final InputStream inputStream, final Callback<KObject> callback, final Callback<Exception> error) {
        return () -> {

            Lexer lexer = new Lexer(inputStream);
            Token currentToken = lexer.nextToken();

            if (currentToken.getTokenType() != org.kevoree.modeling.api.json.Type.LEFT_BRACE) {
                error.on(new Exception("Bad Format. Expected '{' got " + currentToken.getTokenType().name()));
            } else {
                JSONLoadingContext context = new JSONLoadingContext();
                context.lexer = lexer;
                context.resolveCommands = new ArrayList<ResolveCommand>();
                context.roots = new ArrayList<KObject>();
                context.errorCallback = error;
                context.successCallback = callback;

                deserialize(context);
            }
        };
    }

    private void deserialize(JSONLoadingContext context) {
        try {
            loadObject(context, null, null);
            for (ResolveCommand resol : context.resolveCommands) {
                resol.run();
            }
            context.successCallback.on(context.roots.get(0));
        } catch(Exception e) {
            context.errorCallback.on(e);
        }
    }


    private void loadObject(JSONLoadingContext context, String nameInParent, KObject parent) throws Exception {
        //must ne currently on { at input
        Token currentToken = context.lexer.nextToken();
        KObject currentObject = null;
        if (currentToken.getTokenType() == org.kevoree.modeling.api.json.Type.VALUE) {
            if (currentToken.getValue() == "class") {
                context.lexer.nextToken(); //unpop :
                currentToken = context.lexer.nextToken(); //Two step for having the name
                String name = (currentToken.getValue() != null ? currentToken.getValue().toString():null);
                String typeName = null;
                boolean isRoot = false;
                if (name.startsWith("root:")) {
                    isRoot = true;
                    name = name.substring("root:".length());
                }
                if (name.contains("@")) {
                    typeName = name.substring(0, name.indexOf("@"));
                    String key = name.substring(name.indexOf("@") + 1);
                    if (parent == null) {
                        if (isRoot) {
                            currentObject = factory.lookup("/");
                        }
                    } else {
                        String path = parent.path() + "/" + nameInParent + "[" + key + "]";
                        currentObject = factory.lookup(path);
                    }
                } else {
                    typeName = name;
                }
                if (currentObject == null) {
                    currentObject = factory.create(typeName);
                }
                if (isRoot) {
                    factory.root(currentObject);
                }
                if (parent == null) {
                    context.roots.add(currentObject);
                }
                //next loop while begin a sub Elem
                String currentNameAttOrRef = null;
                boolean refModel = false;
                currentToken = context.lexer.nextToken();
                while (currentToken.getTokenType() != org.kevoree.modeling.api.json.Type.EOF) {
                    if (currentToken.getTokenType() == org.kevoree.modeling.api.json.Type.LEFT_BRACE) {
                        loadObject(context, currentNameAttOrRef, currentObject);
                    }
                    if (currentToken.getTokenType() == org.kevoree.modeling.api.json.Type.COMMA) {
                        //ignore
                    }
                    if (currentToken.getTokenType() == org.kevoree.modeling.api.json.Type.VALUE) {
                        if (currentNameAttOrRef == null) {
                            currentNameAttOrRef = currentToken.getValue().toString();
                        } else {
                            if (refModel) {
                                context.resolveCommands.add(new ResolveCommand(context, currentToken.getValue().toString(), currentObject, currentNameAttOrRef));
                            } else {
                                String unscaped = JSONString.unescape(currentToken.getValue().toString());
                                currentObject.mutate(ActionType.SET, currentNameAttOrRef, unscaped, false, false);
                                currentNameAttOrRef = null; //unpop
                            }
                        }
                    }
                    if (currentToken.getTokenType() == org.kevoree.modeling.api.json.Type.LEFT_BRACKET) {
                        currentToken = context.lexer.nextToken();
                        if (currentToken.getTokenType() == org.kevoree.modeling.api.json.Type.LEFT_BRACE) {
                            loadObject(context, currentNameAttOrRef, currentObject);
                        } else {
                            refModel = true; //wait for all ref to be found
                            if (currentToken.getTokenType() == org.kevoree.modeling.api.json.Type.VALUE) {
                                context.resolveCommands.add(new ResolveCommand(context, currentToken.getValue().toString(), currentObject, currentNameAttOrRef));
                            }
                        }
                    }
                    if (currentToken.getTokenType() == org.kevoree.modeling.api.json.Type.RIGHT_BRACKET) {
                        currentNameAttOrRef = null; //unpop
                        refModel = false;
                    }
                    if (currentToken.getTokenType() == org.kevoree.modeling.api.json.Type.RIGHT_BRACE) {
                        if (parent != null) {
                            parent.mutate(ActionType.ADD, nameInParent, currentObject, false, false);
                        }
                        return; //go out
                    }
                    currentToken = context.lexer.nextToken();
                }
            } else {
                throw new Exception("Bad Format. eClass att must be first");
                //TODO save temp att
            }
        } else {
            throw new Exception("Bad Format");
        }
    }

}

class ResolveCommand {
    private JSONLoadingContext context;
    private String ref;
    private KObject currentRootElem;
    private String refName;

    public ResolveCommand(JSONLoadingContext context, String ref, KObject currentRootElem, String refName) {
        this.context = context;
        this.ref = ref;
        this.currentRootElem = currentRootElem;
        this.refName = refName;
    }

    public void run() throws Exception {
        KObject referencedElement = null;
        int i = 0;
        while (referencedElement == null && i < context.roots.size()) {
            referencedElement = context.roots.get(i++).findByPath(ref);
        }
        if (referencedElement != null) {
            currentRootElem.mutate(ActionType.ADD, refName, referencedElement, false, false);
        } else {
            throw new Exception("Unresolved " + ref);
        }
    }
}

