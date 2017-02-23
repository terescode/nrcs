<%--
Copyright 2014  IBM Corp. 
Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0 

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
--%>
<%--  --%>
<%-- This JSP will render the Plain.html template which only displays the layout of the page --%>
<%@ page session="false" buffer="none" %>
<%@ page trimDirectiveWhitespaces="true" %><%@ 
taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %><%@
taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
<%@ include file="./includePortalTaglibs.jspf" %>
<%@ taglib uri="/WEB-INF/tld/portal-internal.tld" prefix="portal-internal" %><%--
--%><portal-core:constants/><portal-core:defineObjects/><portal-internal:adminNavHelper/><portal-core:init-lazy-set/><%--
--%><portal-core:lazy-set var="themeWebDAVBaseURI" elExpression="wp.themeList.current.metadata['com.ibm.portal.theme.template.ref']"/><%--
--%><c:choose><%--
    --%><c:when test="${!empty themeWebDAVBaseURI}"><%--
        --%><r:dataSource uri="spa:${wp.identification[wp.selectionModel.selected]}" escape="none"><%--
            --%><r:param name="themeURI" value="${themeWebDAVBaseURI}Plain.html"/><%--
            --%><r:param name="mime-type" value="text/html"/><%--
        --%></r:dataSource><%--
    --%></c:when><%-- If no Plain template is found, the fallback.jsp is rendered
    --%><c:otherwise><%--
        --%><%@ include file="./fallback.jsp" %><%--
    --%></c:otherwise><%--
--%></c:choose>