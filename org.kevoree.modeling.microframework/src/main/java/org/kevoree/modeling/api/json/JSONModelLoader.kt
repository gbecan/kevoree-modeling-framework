package org.kevoree.modeling.api.json

import java.io.ByteArrayInputStream
import java.io.InputStream
import org.kevoree.modeling.api.KMFContainer
import java.util.ArrayList
import org.kevoree.modeling.api.util.ActionType
import org.kevoree.modeling.api.KMFFactory
import org.kevoree.modeling.api.ModelLoader

/**
 * Created with IntelliJ IDEA.
 * User: duke
 * Date: 28/08/13
 * Time: 13:08
 */
public open class JSONModelLoader : ModelLoader {

    open var factory : KMFFactory? = null

    override fun loadModelFromString(str: String): List<KMFContainer>? {
        val bytes = ByteArray(str.length)
        var i = 0
        while(i < str.length){
            bytes.set(i,str.get(i) as Byte)
            i = i +1
        }
        return deserialize(ByteArrayInputStream(bytes))
    }

    override fun loadModelFromStream(inputStream: InputStream): List<KMFContainer>? {
        return deserialize(inputStream)
    }

    private fun deserialize(instream: InputStream): List<KMFContainer> {
        var resolverCommands = ArrayList<ResolveCommand>()
        var roots = ArrayList<KMFContainer>()
        var lexer: Lexer = Lexer(instream)
        var currentToken = lexer.nextToken()
        if(currentToken.tokenType == org.kevoree.modeling.api.json.Type.LEFT_BRACE){
            loadObject(lexer, null, null, roots, resolverCommands)
        } else {
            throw Exception("Bad Format / { expected")
        }
        for(resol in resolverCommands){
            resol.run()
        }
        return roots
    }


    fun loadObject(lexer: Lexer, nameInParent: String?, parent: KMFContainer?, roots: ArrayList<KMFContainer>, commands: ArrayList<ResolveCommand>) {
        //must ne currently on { at input
        var currentToken = lexer.nextToken()
        var currentObject: KMFContainer? = null
        if(currentToken.tokenType == org.kevoree.modeling.api.json.Type.VALUE){
            if(currentToken.value == "eClass"){
                lexer.nextToken() //unpop :
                currentToken = lexer.nextToken() //Two step for having the name
                val name = currentToken.value?.toString()!!
                currentObject = factory?.create(name)
                if(parent == null){
                    roots.add(currentObject!!)
                }
                //next loop while begin a sub Elem
                var currentNameAttOrRef: String? = null
                var refModel = false
                currentToken = lexer.nextToken()
                while(currentToken.tokenType != org.kevoree.modeling.api.json.Type.EOF){
                    if(currentToken.tokenType == org.kevoree.modeling.api.json.Type.LEFT_BRACE){
                        loadObject(lexer, currentNameAttOrRef!!, currentObject, roots, commands)
                    }
                    if(currentToken.tokenType == org.kevoree.modeling.api.json.Type.COMMA){
                        //ignore
                    }
                    if(currentToken.tokenType == org.kevoree.modeling.api.json.Type.VALUE){
                        if(currentNameAttOrRef == null){
                            currentNameAttOrRef = currentToken.value.toString()
                        } else {
                            if(refModel){
                                commands.add(ResolveCommand(roots, currentToken.value!!.toString(), currentObject!!, currentNameAttOrRef!!))
                            } else {
                                currentObject!!.reflexiveMutator(ActionType.SET, currentNameAttOrRef!!, currentToken.value)
                                currentNameAttOrRef = null //unpop
                            }
                        }
                    }
                    if(currentToken.tokenType == org.kevoree.modeling.api.json.Type.LEFT_BRACKET){
                        currentToken = lexer.nextToken()
                        if(currentToken.tokenType == org.kevoree.modeling.api.json.Type.LEFT_BRACE){
                            loadObject(lexer, currentNameAttOrRef!!, currentObject, roots, commands)
                        } else {
                            refModel = true //wait for all ref to be found
                        }
                    }
                    if(currentToken.tokenType == org.kevoree.modeling.api.json.Type.RIGHT_BRACKET){
                        currentNameAttOrRef = null //unpop
                        refModel = false
                    }
                    if(currentToken.tokenType == org.kevoree.modeling.api.json.Type.RIGHT_BRACE){
                        if(parent != null){
                            parent.reflexiveMutator(ActionType.ADD, nameInParent!!, currentObject)
                        }
                        return //go out
                    }
                    currentToken = lexer.nextToken()
                }
            } else {
                throw Exception("Bad Format / eClass att must be first")
                //TODO save temp att
            }
        } else {
            throw Exception("Bad Format")
        }
    }

}

class ResolveCommand(val roots: ArrayList<KMFContainer>, val ref: String, val currentRootElem: KMFContainer, val refName: String) {
    fun run() {
        var referencedElement: Any? = null
        var i = 0
        while(referencedElement == null && i < roots.size()) {
            referencedElement = roots.get(i++).findByPath(ref)
        }
        if(referencedElement != null) {
            currentRootElem.reflexiveMutator(ActionType.ADD, refName, referencedElement)
        }
    }
}
