package org.kevoree.modeling.cpp.generator;

import java.io.File;

/**
 * Created with IntelliJ IDEA.
 * User: jed
 * Date: 28/10/13
 * Time: 11:26
 * To change this templates use File | Settings | File Templates.
 */
public class GenerationContext {
    private String rootGenerationDirectory = "";
    private File ecore=null;
    private String name_package ="";
    private String root ="";
   private boolean debug_model = false;
    public String getRootGenerationDirectory() {
        return rootGenerationDirectory;
    }

    public void setRootGenerationDirectory(String rootGenerationDirectory) {
        this.rootGenerationDirectory = rootGenerationDirectory;
    }

    public File getEcore() {
        return ecore;
    }

    public void setEcore(String ecore) {
        this.ecore = new File(ecore);
    }

    public void setEcore(File ecore) {
        this.ecore = ecore;
    }

    public String getName_package() {
        return name_package;
    }

    public void setName_package(String name_package) {
        this.name_package = name_package;
    }

    public String getRoot() {
        return root;
    }

    public void setRoot(String root) {
        this.root = root;
    }

    public boolean isDebug_model() {
        return debug_model;
    }

    public void setDebug_model(boolean debug_model) {
        this.debug_model = debug_model;
    }
}