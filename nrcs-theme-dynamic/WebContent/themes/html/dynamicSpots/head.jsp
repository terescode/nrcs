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
<portal-core:constants/><portal-core:defineObjects/> <portal-core:stateBase/>

<%-- Lazily load the base path to the current theme, and the current page node object --%>
<portal-core:lazy-set var="themeWebDAVBaseURI" elExpression="wp.themeList.current.metadata['com.ibm.portal.theme.template.ref']"/>
<portal-core:lazy-set var="currentNavNode" elExpression="wp.selectionModel.selected"/>

<%-- Display the page title --%>
<title><c:out value='${wp.title}'/></title>

<%-- Outputs any HTML contributed to the head section by any JSR286 portlets on the page --%>
<portal-core:portletsHeadMarkupElements method="html" filter="title"/>

<%-- Add links for the Portal navigation state and to bookmark the current page --%>
<c:set var="bookmarkUrl" value="${fn:escapeXml(currentNavNode.urlGeneration.keepNavigationalState)}"/>
<link id="com.ibm.lotus.NavStateUrl" rel="alternate" href="${bookmarkUrl}" />
<link rel="bookmark" title='<c:out value='${currentNavNode.title}'/>' href='${bookmarkUrl}' hreflang="${wp.preferredLocale}"/>

<%-- Link to the Portal favicon --%>
<link href="<r:url uri="${themeWebDAVBaseURI}images/favicon.ico" keepNavigationalState="false" lateBinding="false" protected="false"/>" rel="shortcut icon" type="image/x-icon" />
