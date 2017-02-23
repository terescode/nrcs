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
<portal-core:constants/><portal-core:defineObjects/>

<%-- Display different help and support links in the footer --%>
<!-- 
<div class="wpthemeFooterCol wpthemeLeft">
	<h3><portal-fmt:text escapeXml="true" key="help.title" bundle="nls.commonUI"/></h3>
	<ul>
		<li><a href="http://www.ibm.com/websphere/portal/library" target="_blank"><portal-fmt:text escapeXml="true" key="help.documentation" bundle="nls.commonUI"/></a></li>
		<li><a href="http://www.lotus.com/ldd/portalwiki.nsf/" target="_blank"><portal-fmt:text escapeXml="true" key="help.wiki" bundle="nls.commonUI"/></a></li>
		<li><a href="http://www.lotus.com/ldd/portalwiki.nsf/xpViewCategories.xsp?lookupName=Video%20Gallery" target="_blank"><portal-fmt:text escapeXml="true" key="help.media" bundle="nls.commonUI"/></a></li>
		<li><a href="http://www.ibm.com/websphere/developer/zones/portal/" target="_blank"><portal-fmt:text escapeXml="true" key="help.zone" bundle="nls.commonUI"/></a></li>
	</ul>
</div>
<div class="wpthemeFooterCol wpthemeLeft">
	<h3><portal-fmt:text escapeXml="true" key="support.title" bundle="nls.commonUI"/></h3>
	<ul>
		<li><a href="http://www.ibm.com/software/genservers/portal/support/" target="_blank"><portal-fmt:text escapeXml="true" key="support.page" bundle="nls.commonUI"/></a></li>
		<li><a href="http://www-01.ibm.com/support/docview.wss?rs=1070&amp;uid=swg27007791" target="_blank"><portal-fmt:text escapeXml="true" key="support.hardware.software" bundle="nls.commonUI"/></a></li>
		<li><a href="http://www14.software.ibm.com/webapp/set2/sas/f/handbook/home.html" target="_blank"><portal-fmt:text escapeXml="true" key="support.guide" bundle="nls.commonUI"/></a></li>
	</ul>
</div>
-->
<%-- If the user is logged in, display links to the Search, Tagging & Rating pages --%>
<!--
<portal-logic:if loggedIn="yes">
<div class="wpthemeFooterCol wpthemeLeft">
	<h3><portal-fmt:text escapeXml="true" key="search.explore.title" bundle="nls.commonUI"/></h3>
	<ul>
        <li><a href="?uri=nm:oid:ibm.portal.Search%2520Center"><portal-fmt:text escapeXml="true" key="search.center.page" bundle="nls.commonUI"/></a></li>
        <li><a href="?uri=nm:oid:ibm.portal.Tag%2520Center"><portal-fmt:text escapeXml="true" key="tagging.rating.page" bundle="nls.commonUI"/></a></li>
	</ul>
</div>
</portal-logic:if>
-->

<%-- lazy load the selection path array --%>
<portal-core:lazy-set var="selectionPath" elExpression="wp.selectionModel.selectionPath"/>
<c:if test="${fn:length(selectionPath) == 2}">
<div id="websiteassist" aria-label="NRCS Websites and Additional Assistance">  
	<div id="websiteassisttitle">
		<p>NRCS Websites &amp; Additional Assistance</p>
	</div>
	<div id="leftwebsiteassist">
		<a href="https://www.nrcs.usda.gov/wps/portal/nrcs/detail/national/home/?cid=stelprdb1049255">Web Applications &amp; Tools</a>
		<p>A list of Web-based resources for access to natural 
		    resource data collected by NRCS.</p>
		<a href="https://www.nrcs.usda.gov/wps/portal/nrcs/main/national/enespanol">En Español</a>
		<p>Información de NRCS en español.</p>
	</div>
	<div id="rightwebsiteassist">
		<a href="https://www.nrcs.usda.gov/wps/portal/nrcs/sitenav/national/states">NRCS State Websites</a>
		<p>Find local program and technical information 
			on our NRCS state websites.</p>
		<a href="https://www.nrcs.usda.gov/wps/portal/nrcs/detail/national/home/?cid=stelprdb1044879">Limited English Proficiency</a>
		<p>Information on Limited English Proficiency.</p>	
	</div>
</div>
</c:if>
<div id="footerhome">
			<p style="text-align:center;">
						<a  href="https://www.nrcs.usda.gov/wps/portal/nrcs/site/national/home" name="lnkNR">NRCS Home</a>  |  <a target='_blank' href="http://www.usda.gov/" name="lnkUS">USDA.gov</a>  | <a href="https://www.nrcs.usda.gov/wps/portal/nrcs/help/national/sitemap">Site Map</a> |  <a  href="https://www.nrcs.usda.gov/wps/portal/nrcs/main/national/about/civilrights/" name="lnkPo">Civil Rights</a>  |  <a  href="https://www.nrcs.usda.gov/wps/portal/nrcs/detailfull/national/about/?cid=NRCS143_021450" name="lnkFO">FOIA</a>  |  <a  href="http://www.usda.gov/wps/portal/usda/usdahome?navid=PLAIN_WRITING" name="lnkPW">Plain Writing</a>  |  <a  href="https://www.nrcs.usda.gov/wps/portal/nrcs/detailfull/national/about/?cid=nrcsdev11_000886" name="lnkAc">Accessibility Statement</a></p>

						<p style="text-align:center;">
			 <a  href="https://www.nrcs.usda.gov/wps/portal/nrcs/detailfull/national/about/?cid=nrcsdev11_000885" name="lnkPr">Privacy Policy</a>| <a  href="https://www.nrcs.usda.gov/wps/portal/nrcs/detailfull/national/about/?cid=nrcsdev11_000882" name="lnkNo">Non-Discrimination Statement</a> | <a  href="https://www.nrcs.usda.gov/wps/portal/nrcs/detailfull/national/about/?cid=nrcsdev11_000881" name="lnkIn">Information Quality</a> | <a target='_blank' href="http://www.usa.gov/" name="lnkUS">USA.gov</a> | <a target='_blank' href="http://www.whitehouse.gov/" name="lnkWh">Whitehouse.gov</a>
		 </div>


<%-- On smartphones, scroll the screen down on page load. This hides the top navigation to save real estate --%>
<portal-logic:if deviceClass="smartphone">
	<script>window.scrollTo(0, 47);</script>
</portal-logic:if>
