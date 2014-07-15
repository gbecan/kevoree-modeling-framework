// This is a generated file. Not intended for manual editing.
package org.kevoree.modeling.idea.psi.impl;

import java.util.List;
import org.jetbrains.annotations.*;
import com.intellij.lang.ASTNode;
import com.intellij.psi.PsiElement;
import com.intellij.psi.PsiElementVisitor;
import com.intellij.psi.util.PsiTreeUtil;
import static org.kevoree.modeling.idea.psi.MetaModelTypes.*;
import com.intellij.extapi.psi.ASTWrapperPsiElement;
import org.kevoree.modeling.idea.psi.*;

public class MetaModelMultiplicityDeclarationImpl extends ASTWrapperPsiElement implements MetaModelMultiplicityDeclaration {

  public MetaModelMultiplicityDeclarationImpl(ASTNode node) {
    super(node);
  }

  public void accept(@NotNull PsiElementVisitor visitor) {
    if (visitor instanceof MetaModelVisitor) ((MetaModelVisitor)visitor).visitMultiplicityDeclaration(this);
    else super.accept(visitor);
  }

  @Override
  @NotNull
  public MetaModelMultiplicityDeclarationLower getMultiplicityDeclarationLower() {
    return findNotNullChildByClass(MetaModelMultiplicityDeclarationLower.class);
  }

  @Override
  @NotNull
  public MetaModelMultiplicityDeclarationUpper getMultiplicityDeclarationUpper() {
    return findNotNullChildByClass(MetaModelMultiplicityDeclarationUpper.class);
  }

}