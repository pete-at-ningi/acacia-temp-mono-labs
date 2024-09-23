import { useState, useEffect, createContext, useContext } from 'react';
import { supabase } from '../utils/supabaseClient';
import { useNotification } from './useNotification';

const WebsitePagesContext = createContext();

export function WebsitePagesProvider({ children }) {
  const { addNotification } = useNotification();
  const [websitePages, setWebsitePages] = useState([]);
  const [isSaving, setIsSaving] = useState(false);

  // Fetch website pages
  const fetchWebsitePages = async (websiteId) => {
    const { data, error } = await supabase
      .from('website_pages')
      .select('*')
      .eq('website_id', websiteId);

    if (error) {
      console.error('Error fetching website pages:', error);
      addNotification('Error fetching website pages', error.message, 'error');
    } else {
      setWebsitePages(data);
    }
  };

  // Add a new website page
  const addWebsitePage = async (websiteId, pageData) => {
    const { data, error } = await supabase
      .from('website_pages')
      .insert([{ ...pageData, website_id: websiteId }])
      .single();

    if (error) {
      console.error('Error adding website page:', error);
      addNotification('Error adding website page', error.message, 'error');
    } else {
      setWebsitePages((prev) => [...prev, data]);
      addNotification('Page Added', 'New page added successfully', 'success');
    }
  };

  return (
    <WebsitePagesContext.Provider
      value={{
        websitePages,
        fetchWebsitePages,
        addWebsitePage,
        isSaving,
      }}
    >
      {children}
    </WebsitePagesContext.Provider>
  );
}

export function useWebsitePages() {
  return useContext(WebsitePagesContext);
}
