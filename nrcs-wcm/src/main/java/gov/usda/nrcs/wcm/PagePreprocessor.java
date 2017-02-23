package gov.usda.nrcs.wcm;

import java.util.ArrayList;
import java.util.Enumeration;
import java.util.List;
import java.util.Locale;

import javax.servlet.ServletRequest;
import javax.servlet.http.HttpServletRequest;

import com.ibm.portal.ListModel;
import com.ibm.workplace.wcm.api.RenderingContext;
import com.ibm.workplace.wcm.api.plugin.rendering.RenderingPluginDefinition;
import com.ibm.workplace.wcm.api.plugin.rendering.RenderingPluginException;
import com.ibm.workplace.wcm.api.plugin.rendering.RenderingPluginModel;
import com.ibm.workplace.wcm.api.plugin.rendering.RenderingPluginParameter;
import com.ibm.workplace.wcm.api.plugin.rendering.RenderingPluginType;

public class PagePreprocessor implements RenderingPluginDefinition {

	public PagePreprocessor() {
		System.out.println("I AM GROOT");
		new Throwable().printStackTrace();
	}
	
	@Override
	public List<RenderingPluginParameter> getParameters() {
		List<RenderingPluginParameter> params=new ArrayList<RenderingPluginParameter>();
		/*
		params.add(new RenderingPluginParameterImpl("partName").required(Required.NOT_REQUIRED_SHOW_BY_DEFAULT));
		params.add(new RenderingPluginParameterImpl("include").required(Required.NOT_REQUIRED_SHOW_BY_DEFAULT));
		params.add(new RenderingPluginParameterImpl("type").required(Required.NOT_REQUIRED_SHOW_BY_DEFAULT).allowedValues(new ValueOptionImpl("content"),new ValueOptionImpl("query"),new ValueOptionImpl("endquery"),new ValueOptionImpl("separator")).defaultValue("content"));
		params.add(new RenderingPluginParameterImpl("library").required(Required.NOT_REQUIRED_HIDE_BY_DEFAULT));
		params.add(new RenderingPluginParameterImpl("path").required(Required.NOT_REQUIRED_HIDE_BY_DEFAULT));
		params.add(new RenderingPluginParameterImpl("context").required(Required.NOT_REQUIRED_HIDE_BY_DEFAULT));
		params.add(new RenderingPluginParameterImpl("pathType").required(Required.NOT_REQUIRED_HIDE_BY_DEFAULT));
		params.add(new RenderingPluginParameterImpl("noNull").required(Required.NOT_REQUIRED_HIDE_BY_DEFAULT));
		*/
		return params;
	}
	
	@Override
	public RenderingPluginType getType() {
		return NrcsRenderingPluginType.Type;
	}
	
	@Override
	public String getDescription(final Locale p_locale) {
		return "Provides page pre-processing functions for NRCS content templates.";
	}

	@Override
	public ListModel<Locale> getLocales() {
		return NrcsRenderingPluginType.ENGLISH_ONLY;
	}

	@Override
	public String getName() {
		return "Preprocess";
	}

	@Override
	public String getTitle(final Locale p_locale) {
		return "NrcsPagePreprocessor";
	}

	@Override
	public boolean isShownInAuthoringUI() {
		return true;
	}

	@Override
	public boolean render(final RenderingPluginModel p_model) throws RenderingPluginException {

		RenderingContext rc = p_model.getRenderingContext();
		HttpServletRequest request = (HttpServletRequest)p_model.getRequest();
		System.out.println("RC PATH: " + rc.getPath());
		System.out.println("RC PATH: " + rc.getURL());
		System.out.println("RC PATH: " + rc.getPathInfo());
		System.out.println("Request URI: " + request.getRequestURI());
		System.out.println("Request URL: " + request.getRequestURL());
		System.out.println("Request Path Info: " + request.getPathInfo());
		System.out.println("Request Path Trans: " + request.getPathTranslated());
		for (Enumeration e = request.getParameterNames();
			 e.hasMoreElements();) {
			String name = (String) e.nextElement();
			System.out.println(name + ": " + request.getParameter(name));
		}
		for (Enumeration e = request.getAttributeNames();
			 e.hasMoreElements();) {
			String name = (String) e.nextElement();
			System.out.println(name + ": " + request.getParameter(name));
		}
		return false;
	}

	// preprocessor to get URL pieces
	// generic preprocessor that could invoke by type/id (like Drupal)
	// gradle deploy step - clean/build/deploy for testing
}
