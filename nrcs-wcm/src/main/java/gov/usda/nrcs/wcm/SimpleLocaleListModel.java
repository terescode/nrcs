package gov.usda.nrcs.wcm;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Locale;

import com.ibm.portal.ListModel;
import com.ibm.portal.ModelException;

public class SimpleLocaleListModel<K> implements ListModel<Locale>
   {
      final List<Locale> m_localeList = new ArrayList<Locale>();

      public SimpleLocaleListModel(final Locale[] p_locales)
      {
         if (p_locales != null)
         {
            for (int i = 0; i < p_locales.length; ++i)
            {
               m_localeList.add(p_locales[i]);
            }
         }
      }

      @Override
      public Iterator<Locale> iterator() throws ModelException
      {
         return m_localeList.iterator();
      }
   }