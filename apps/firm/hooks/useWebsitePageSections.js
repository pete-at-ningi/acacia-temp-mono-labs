import { useState, useContext, createContext } from 'react';
import { supabase } from '../utils/supabaseClient';
import { useNotification } from './useNotification';

const WebsitePageSectionsContext = createContext();

export function WebsitePageSectionsProvider({ children }) {
  const { addNotification } = useNotification();
  const [websiteSections, setWebsiteSections] = useState({});
  const [isSaving, setIsSaving] = useState(false);

  // Fetch sections for a specific page
  const fetchWebsiteSections = async (pageId) => {
    const { data, error } = await supabase
      .from('website_page_sections')
      .select('*')
      .eq('page_id', pageId)
      .order('order', { ascending: true });

    if (error) {
      console.error('Error fetching website sections:', error);
      addNotification('Error fetching page sections', error.message, 'error');
    } else {
      setWebsiteSections((prev) => ({ ...prev, [pageId]: data }));
    }
  };

  // Add a new website section
  const addWebsiteSection = async (pageId, sectionData) => {
    const { data, error } = await supabase
      .from('website_page_sections')
      .insert([{ ...sectionData, page_id: pageId }])
      .single();

    if (error) {
      console.error('Error adding section', error);
      addNotification('Error adding section', error.message, 'error');
    } else {
      setWebsiteSections((prev) => ({
        ...prev,
        [pageId]: [...(prev[pageId] || []), data],
      }));
      addNotification(
        'Section Added',
        'New section added successfully',
        'success'
      );
    }
  };

  return (
    <WebsitePageSectionsContext.Provider
      value={{
        websiteSections,
        fetchWebsiteSections,
        addWebsiteSection,
        isSaving,
      }}
    >
      {children}
    </WebsitePageSectionsContext.Provider>
  );
}

export function useWebsitePageSections() {
  return useContext(WebsitePageSectionsContext);
}
