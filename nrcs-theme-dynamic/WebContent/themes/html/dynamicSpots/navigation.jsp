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


<c:if test="${empty parentNode}">
    <c:set var="parentNode" value="${wp.selectionModel.selectionPath[param.curLevel]}" />
</c:if>
<%--
01:<c:out value="${wp.localizedTitle}"/><br>
02:<c:out value="${wp.selectionModel.selected.urlGeneration.forceAbsolute}}"/><br>
03:<c:out value="${wp.selectionModel.selected.urlGeneration.setParam('a','b')}"/><br>
<c:set var="currentPageURL" value="${wp.selectionModel.selected.urlGeneration.forceAbsolute}}"/>
--%>