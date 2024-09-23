import { useState, useContext, createContext } from 'react';
import { supabase } from '../utils/supabaseClient';
import { useNotification } from './useNotification';

const WebsitePageSectionsContext = createContext();

export function WebsitePageSectionsProvider({ children }) {
  const { addNotification } = useNotification();
  const [websiteSections, setWebsiteSections] = useState({});
  const [isSaving, setIsSaving] = useState(false);

  // Helper to strip out data.* and options.* keys
  const cleanSectionData = (sectionData) => {
    const cleanData = { data: {}, options: {}, ...sectionData };

    // Move fields with 'data.' prefix to the data object
    Object.keys(sectionData).forEach((key) => {
      if (key.startsWith('data.')) {
        cleanData.data[key.replace('data.', '')] = sectionData[key];
        delete cleanData[key];
      }
      if (key.startsWith('options.')) {
        cleanData.options[key.replace('options.', '')] = sectionData[key];
        delete cleanData[key];
      }
      if (
        cleanData.order === undefined ||
        cleanData.order === null ||
        cleanData.order === '' ||
        isNaN(cleanData.order)
      ) {
        cleanData.order = 1;
      }
    });

    return cleanData;
  };

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
      setWebsiteSections(data);
    }
  };

  // Add a new website section
  const addWebsiteSection = async (pageId, sectionData) => {
    const cleanData = cleanSectionData(sectionData); // Clean up section data
    const { data, error } = await supabase
      .from('website_page_sections')
      .insert([{ ...cleanData, page_id: pageId }])
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
    const cleanData = cleanSectionData(sectionData); // Clean up section data
    setIsSaving(true);
    const { data, error } = await supabase
      .from('website_page_sections')
      .update(cleanData)
      .eq('id', sectionId)
      .single();

    if (error) {
      console.error('Error updating section', error);
      addNotification('Error updating section', error.message, 'error');
    } else {
      setWebsiteSections((prev) => ({
        ...prev,
        [data.page_id]: prev[data.page_id].map((section) =>
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
  const deleteWebsiteSection = async (sectionId, pageId) => {
    const { error } = await supabase
      .from('website_page_sections')
      .delete()
      .eq('id', sectionId);

    if (error) {
      console.error('Error deleting section', error);
      addNotification('Error deleting section', error.message, 'error');
    } else {
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
