package gov.usda.nrcs.wcm;

import java.util.Locale;

import com.ibm.portal.ListModel;
import com.ibm.workplace.wcm.api.plugin.rendering.RenderingPluginType;

public class NrcsRenderingPluginType implements RenderingPluginType {

	public static final ListModel<Locale> ENGLISH_ONLY 
		= new SimpleLocaleListModel<Locale>(new Locale[] { Locale.ENGLISH });
	public static final RenderingPluginType Type 
		= new NrcsRenderingPluginType();

	@Override
	public ListModel<Locale> getLocales() {
		return ENGLISH_ONLY;
	}

	@Override
	public String getDescription(Locale arg0) {
		return "NRCS Custom Rendering Plugins";
	}

	@Override
	public String getName() {
		return "NRCS";
	}

	@Override
	public String getTitle(Locale arg0) {
		return "NRCS Custom Rendering Plugins";
	}

}
