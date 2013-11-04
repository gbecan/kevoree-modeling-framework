#include <compare/ModelCompareVisitors.h>

ModelCompareVisitorCreateTraces::ModelCompareVisitorCreateTraces (google::dense_hash_map<string,KMFContainer*> *_objectsMap, bool _inter,bool _merge,list<ModelTrace *> *_traces,list<ModelTrace *> *_tracesRef)
{
		objectsMap = _objectsMap;
		inter = _inter;
		traces = _traces;
		merge = _merge;
		tracesRef =_tracesRef;
}

ModelCompareVisitorCreateTraces::~ModelCompareVisitorCreateTraces(){


}


void ModelCompareVisitorCreateTraces::visit (KMFContainer * elem, string refNameInParent,KMFContainer * parent)
 {
	  string childPath = elem->path ();
	  if (!childPath.empty ())
	  {

	    if(objectsMap->find(childPath) !=    objectsMap->end())
		{
				if (inter)
		      {
				  ModelAddTrace *modeladdtrace = new ModelAddTrace (parent->path (), refNameInParent,elem->path (), elem->metaClassName ());
				  traces->push_back (modeladdtrace);
				}


		        KMFContainer *ptr_elem= (*objectsMap)[childPath];

				 // traces attributes
				  list<ModelTrace*> *result_atttributes = ptr_elem->createTraces (elem, inter, merge,false, true);
				 std::copy(result_atttributes->begin(), result_atttributes->end(), std::back_insert_iterator<std::list<ModelTrace*> >(*traces));
				 // traces references
				 list<ModelTrace*> *result_references = ptr_elem->createTraces (elem, inter, merge,true, false);
				 std::copy(result_references->begin(), result_references->end(), std::back_insert_iterator<std::list<ModelTrace*> >(*tracesRef));

                 objectsMap->set_deleted_key(childPath);
                 objectsMap->erase(objectsMap->find(childPath));
		}
	      else
		{
		    if (!inter)
		      {
				 ModelAddTrace *modeladdtrace = new ModelAddTrace (parent->path (), refNameInParent,elem->path (), elem->metaClassName ());
				  traces->push_back (modeladdtrace);

				  // traces attributes
				 list<ModelTrace*> *result_atttributes = elem->createTraces (elem, true, merge,false, true);
				 std::copy(result_atttributes->begin(), result_atttributes->end(), std::back_insert_iterator<std::list<ModelTrace*> >(*traces));
				 // traces references
				 list<ModelTrace*> *result_references = elem->createTraces (elem, true, merge,true, false);
				 std::copy(result_references->begin(), result_references->end(), std::back_insert_iterator<std::list<ModelTrace*> >(*tracesRef));
		      }
		}
	  }
	else
	  {
	      cout << "ERROR the child path is not defined " << endl;
	  }

}


ModelCompareVisitorFiller::ModelCompareVisitorFiller (google::dense_hash_map<string,KMFContainer*> *_objectsMap)
{
  	objectsMap = _objectsMap;
}
ModelCompareVisitorFiller:: ~ModelCompareVisitorFiller()
{


}

void ModelCompareVisitorFiller::visit (KMFContainer * elem, string refNameInParent,KMFContainer * parent)
{
	string childPath = elem->path ();

	if (!childPath.empty ())
	  {
	    (*objectsMap)[childPath] = elem;
	 //   cout <<   "INSERT " << childPath << " " << refNameInParent <<  endl;
	  }
	else
	  {
	      cout << "Null child path "<< endl;
	  }
}