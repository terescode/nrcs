/*
Copyright 2014  IBM Corp. 
Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0 

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
*/
(function(){
   if(!i$.isIE){

   	i$.addOnLoad(function() {
         var sectionElements = document.getElementsByTagName("SECTION");
         for (var i = 0; i < sectionElements.length; i++) {
            if (i$.hasClass(sectionElements[i], "a11yRegionTarget")) {
               var sectionRegionNode = sectionElements[i];
               var tempSpanNode = null;
               var tempSpanNodes = sectionRegionNode.getElementsByTagName("SPAN");
               for (var j = 0; j < tempSpanNodes.length; j++) {
                 if (i$.hasClass(tempSpanNodes[j], "a11yRegionLabel")) {
                     tempSpanNode = tempSpanNodes[j];
                 }
               }
               if (tempSpanNode) {
                  var spanRegionNode = tempSpanNode;
                  var tempParentNode = sectionRegionNode;
                  var regionNodeWindowID = null;
                  // get window id
                 while ((tempParentNode = tempParentNode.parentNode) != null ) {
                   if (i$.hasClass(tempParentNode, "component-control")) {
                       var m = tempParentNode && (tempParentNode.className || "").match(/id-([\S]+)/);
                        regionNodeWindowID = m && m[1];
                        break;
                       }
                  }
                  if (regionNodeWindowID) {
                     var ariaRegionId = "wpRegionId"+regionNodeWindowID;
   
                     spanRegionNode.setAttribute("id", ariaRegionId); 
                     sectionRegionNode.setAttribute("aria-labelledby",ariaRegionId);
                  }
   
               }
            }
         }
      });
   }
})();
