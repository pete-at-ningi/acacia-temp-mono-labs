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

  // Update a website section
  const updateWebsiteSection = async (sectionId, sectionData) => {
    setIsSaving(true);
    const { data, error } = await supabase
      .from('website_page_sections')
      .update(sectionData)
      .eq('id', sectionId)
      .single();

    if (error) {
      addNotification('Error updating section', error.message, 'error');
    } else {
      const pageId = data.page_id;
      setWebsiteSections((prev) => ({
        ...prev,
        [pageId]: prev[pageId].map((section) =>
          section.id === sectionId ? data : section
        ),
      }));
      addNotification(
        'Section Updated',
        'Section updated successfully',
        'success'
      );
    }
    setIsSaving(false);
  };

  // Delete a website section
  const deleteWebsiteSection = async (sectionId) => {
    const { data, error } = await supabase
      .from('website_page_sections')
      .delete()
      .eq('id', sectionId);

    if (error) {
      addNotification('Error deleting section', error.message, 'error');
    } else {
      const pageId = data.page_id;
      setWebsiteSections((prev) => ({
        ...prev,
        [pageId]: prev[pageId].filter((section) => section.id !== sectionId),
      }));
      addNotification(
        'Section Deleted',
        'Section deleted successfully',
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
        updateWebsiteSection,
        deleteWebsiteSection,
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
