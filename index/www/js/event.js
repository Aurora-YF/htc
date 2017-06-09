function addEvent(obj,type,fn){
	if(obj.addEventListener){
		obj.addEventListener(type,fn,false);
	}
}