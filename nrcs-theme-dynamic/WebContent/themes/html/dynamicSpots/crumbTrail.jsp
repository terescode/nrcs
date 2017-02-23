<%--
Copyright 2014  IBM Corp. 
Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0 

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
--%>
<%@ page session="false" buffer="none" %> 
<%@ page trimDirectiveWhitespaces="true" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
<%@ include file="../includePortalTaglibs.jspf" %>

<%-- lazy load the selection path array --%>
<portal-core:lazy-set var="selectionPath" elExpression="wp.selectionModel.selectionPath"/>

<%-- Display the breadcrumb when the current page is at least 3 levels away from the navigation content root --%>
<c:if test="${fn:length(selectionPath) > 2}">
<portal-navigation:uiNavigationModel var="uiNavigationModel" mobileDeviceClassTest="smartphone/tablet" >
	<div class="wpthemeCrumbTrail wpthemeLeft">
		You are Here: &nbsp;&nbsp;
		<%-- Loop through the selection path starting at the primary navigation level (2) --%>
		<c:forEach var="node" items="${selectionPath}" begin="1" varStatus="status">

			<c:set var="uiNode" value="${uiNavigationModel[node]}"/>
			<c:if test="${uiNode != null}">
				
				<%-- Print out a separator before the page title if it is not the first item in the breadcrumb --%>
				<c:if test="${status.count > 1}">
					<span class="wpthemeCrumbTrailSeparator">&gt;</span>
				</c:if>

				<%-- if the node is currently selected, make it bold --%>
				<c:if test="${uiNode.isSelected}"><strong></c:if>

				<%-- if the node is not currently selected, make the title a link --%>
				<c:if test="${!uiNode.isSelected}"><a href="${uiNode.url}"></c:if>

					<%-- set the CSS class to be placed on the page title anchor below --%>
					<c:set var="titleClass" value=""/>
					<c:if test="${uiNode.isHidden || uiNode.isDraft}">
						<c:choose>
						<%-- if the page is BOTH in the current project and hidden, choose the wpthemeHiddenDraftPageText class --%>
						<c:when test="${uiNode.isHidden && uiNode.isDraft}"><c:set var="titleClass" value=" wpthemeHiddenDraftPageText"/></c:when>
						<%-- if the page is hidden, choose the wpthemeHiddenPageText class --%>
						<c:when test="${uiNode.isHidden}"><c:set var="titleClass" value=" wpthemeHiddenPageText"/></c:when>
						<%-- if the page has a draft in the current project, choose the wpthemeDraftPageText class --%>
						<c:otherwise><c:set var="titleClass" value=" wpthemeDraftPageText"/></c:otherwise>
						</c:choose>
					</c:if>

					<%-- add a CSS class if the node is currently selected --%>
					<span class="${titleClass}<c:if test="${uiNode.isSelected}"> wpthemeSelected</c:if>" lang="${uiNode.title.xmlLocale}" dir="${uiNode.title.direction}">
								
						<!-- print out the page title -->
						<c:out value="${uiNode.title}"/>

					<%-- close all node title markup --%>
					</span>
				<c:if test="${!uiNode.isSelected}"></a></c:if>
				<c:if test="${uiNode.isSelected}"></strong></c:if>

			</c:if>
		</c:forEach>
	</div><%-- close breadcrumb container --%>

	<div id="socialmedia" style="margin-top: 0px; position: absolute; margin-left: 650px;">
			<i>Stay Connected</i>
						<a target="_blank" href="http://www.facebook.com/usda" tabindex="20"><img alt="USDA In Facebook" src="/nrcs-theme-static/nrcs/images/sc-facebook-small.png"></a>
						
						<a target="" href="https://twitter.com/NRCS_AZ" tabindex="21"><img alt="NRCS In Twitter" src="/nrcs-theme-static/nrcs/images/sc-twitter-small.png"></a>
						
						<a target="" href="http://www.youtube.com/theusdanrcs" tabindex="22"><img alt="NRCS In Youtube" src="/nrcs-theme-static/nrcs/images/sc-youtube-small.png"></a>
						
						<a target="" href="https://public.govdelivery.com/accounts/USDANRCS/subscriber/new" tabindex="23"><img alt="NRCS In Mail" src="/nrcs-theme-static/nrcs/images/govdelivery_bubble.png"></a>
						
						<a target="_blank" href="http://www.flickr.com/usdagov" tabindex="24"><img alt="USDA In Flicker" src="/nrcs-theme-static/nrcs/images/sc-flickr-small.png"></a>
						
	</div>
	
</portal-navigation:uiNavigationModel>
</c:if>