/*
Copyright 2014  IBM Corp. 
Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0 

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
*/
(function(){
	if(!i$.isIE){
		i$.addOnLoad(function() {
			 // create a test node off the browser screen to calculate high contrast mode
			var testNode = document.createElement("div");
			testNode.style.cssText = 'border:1px solid;border-color:red green;position:absolute;height:5px;top:-999px;background-image:url("data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");';
			document.body.appendChild(testNode);
			// look at the computed style for the test node
			var styles = null;
			try {
				styles = document.defaultView.getComputedStyle(testNode, "");
			} catch(e) {
				styles = testNode.currentStyle;
			}
			if(styles) {
				var testImg = styles.backgroundImage;
				if ((styles.borderTopColor == styles.borderRightColor) || (testImg != null && (testImg == "none" || testImg == "url(invalid-url:)" ))) {
					document.getElementsByTagName("body")[0].className+=" wpthemeImagesOff";
				}
				document.body.removeChild(testNode);
			}
		});
	}
})();
