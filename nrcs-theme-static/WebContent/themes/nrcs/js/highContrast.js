/*
Copyright 2014  IBM Corp. 
Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0 

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
*/
(function(){
if(!i$.isIE){
i$.addOnLoad(function(){
var _1=document.createElement("div");
_1.style.cssText="border:1px solid;border-color:red green;position:absolute;height:5px;top:-999px;background-image:url(\"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7\");";
document.body.appendChild(_1);
var _2=null;
try{
_2=document.defaultView.getComputedStyle(_1,"");
}
catch(e){
_2=_1.currentStyle;
}
if(_2){
var _3=_2.backgroundImage;
if((_2.borderTopColor==_2.borderRightColor)||(_3!=null&&(_3=="none"||_3=="url(invalid-url:)"))){
document.getElementsByTagName("body")[0].className+=" wpthemeImagesOff";
}
document.body.removeChild(_1);
}
});
}
})();

