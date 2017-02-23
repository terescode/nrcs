<%--
Copyright 2014  IBM Corp. 
Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0 

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
--%>
<%@ page session="false" buffer="none" %>
<%@ page trimDirectiveWhitespaces="true" %>
<%@ include file="../includePortalTaglibs.jspf" %>

<%-- The div in which the statusbar prints out any message it receives --%>
<div class="wpthemeInner">
	<div id="wpthemeStatusBarContainer" class="wpthemeStatusBarContainer">

		<%-- Renders a message in the status bar alerting the user that javascript is disabled. Javascript is required for the statusbar to work --%>
		<noscript>
			<div class="wpthemeMessage" role="alert" wairole="alert">
				<img class="wpthemeMsgIcon wpthemeMsgIconError" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="Error" />
				<span class="wpthemeAltText">Error:</span>
				<div class="wpthemeMessageBody"><portal-fmt:text key="theme.javascript.disabled" bundle="nls.engine"/></div>
			</div>
		</noscript>

	</div>
</div>
