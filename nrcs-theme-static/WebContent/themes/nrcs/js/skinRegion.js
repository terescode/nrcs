/*
Copyright 2014  IBM Corp. 
Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0 

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
*/
(function(){
if(!i$.isIE){
i$.addOnLoad(function(){
var _1=document.getElementsByTagName("SECTION");
for(var i=0;i<_1.length;i++){
if(i$.hasClass(_1[i],"a11yRegionTarget")){
var _2=_1[i];
var _3=null;
var _4=_2.getElementsByTagName("SPAN");
for(var j=0;j<_4.length;j++){
if(i$.hasClass(_4[j],"a11yRegionLabel")){
_3=_4[j];
}
}
if(_3){
var _5=_3;
var _6=_2;
var _7=null;
while((_6=_6.parentNode)!=null){
if(i$.hasClass(_6,"component-control")){
var m=_6&&(_6.className||"").match(/id-([\S]+)/);
_7=m&&m[1];
break;
}
}
if(_7){
var _8="wpRegionId"+_7;
_5.setAttribute("id",_8);
_2.setAttribute("aria-labelledby",_8);
}
}
}
}
});
}
})();

