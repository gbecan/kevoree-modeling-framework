#include <utils/ModelVisitor.h>

void ModelVisitor::stopVisit()
{
        visitStopped = true;
}

void ModelVisitor::noChildrenVisit()
{
        visitChildren = true;
}


ModelVisitor::ModelVisitor(){
	  visitStopped = false;
	  visitChildren = true;
	  alreadyVisited.set_empty_key("");
}
