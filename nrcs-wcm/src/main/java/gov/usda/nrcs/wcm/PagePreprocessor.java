package gov.usda.nrcs.wcm;

import java.util.Enumeration;

import javax.portlet.PortletRequest;
import javax.servlet.http.HttpSession;

import com.ibm.workplace.wcm.api.ContextProcessor;
import com.ibm.workplace.wcm.api.ContextProcessorParams;
import com.ibm.workplace.wcm.api.RenderingContext;

public class PagePreprocessor implements ContextProcessor {

	@Override
	public void process(HttpSession session, ContextProcessorParams params) {
		RenderingContext rc = params.getRenderingContext();
		PortletRequest portletRequest = params.getPortletRequest();
		System.out.println("RC PATH: " + rc.getPath());
		System.out.println("RC PATH: " + rc.getPathInfo());
		for (Enumeration e = portletRequest.getParameterNames();
			 e.hasMoreElements();) {
			String name = (String) e.nextElement();
			System.out.println(name + ": " + portletRequest.getParameter(name));
		}
		for (Enumeration e = portletRequest.getAttributeNames();
			 e.hasMoreElements();) {
			String name = (String) e.nextElement();
			System.out.println(name + ": " + portletRequest.getParameter(name));
		}
	}

	// preprocessor to get URL pieces
	// generic preprocessor that could invoke by type/id (like Drupal)
	// gradle deploy step - clean/build/deploy for testing
}
