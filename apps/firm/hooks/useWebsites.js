// hooks/useWebsites.js

import { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '../utils/supabaseClient';
import { useDebounce } from './useDebounce';
import { useNotification } from './useNotification';
import { useAuth } from './useAuth';
import { useFirms } from './useFirms';

const WebsiteContext = createContext();

export function WebsiteProvider({ children }) {
  const { addNotification } = useNotification();
  const { profile } = useAuth();
  const { activeFirm } = useFirms();

  const [allWebsites, setAllWebsites] = useState([]);
  const [websites, setWebsites] = useState([]);
  const [activeWebsite, setActiveWebsite] = useState(null);
  const [websitePages, setWebsitePages] = useState([]);
  const [websiteSections, setWebsiteSections] = useState({});
  const [search, setSearch] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const [unsavedChanges, setUnsavedChanges] = useState(false);
  const debouncedSearch = useDebounce(search, 500);

  // Fetch all websites
  const fetchWebsites = async () => {
    let query = supabase.from('websites').select('*');

    if (activeFirm) {
      query = query.eq('firm_id', activeFirm.id);
    }

    const { data, error } = await query;
    if (error) {
      console.error('fetchWebsites error', error);
      addNotification('Error fetching websites', error.message, 'error');
    } else {
      setAllWebsites(data);
      setWebsites(data);
    }
  };

  useEffect(() => {
    fetchWebsites();
  }, [activeFirm]);

  // Fetch website pages for a specific website
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

  // Fetch a specific website by ID and its pages
  const fetchWebsiteById = async (websiteId) => {
    const { data, error } = await supabase
      .from('websites')
      .select('*')
      .eq('id', websiteId)
      .single();

    if (error) {
      console.error('Error fetching website:', error);
      addNotification('Error fetching website', error.message, 'error');
    } else {
      setActiveWebsite(data);
      await fetchWebsitePages(websiteId); // Fetch the pages for this website
    }
  };

  // Set the active website and load pages for it
  const handleSetActiveWebsite = async (websiteId) => {
    let foundWebsite = websites.find((website) => website.id === websiteId);
    if (foundWebsite) {
      setActiveWebsite(foundWebsite);
      await fetchWebsitePages(websiteId); // Fetch pages for the active website
    } else {
      await fetchWebsiteById(websiteId); // Fallback if website is not already loaded
    }
  };

  // Clear the active website
  const clearActiveWebsite = () => {
    setActiveWebsite(null);
    setWebsitePages([]); // Clear pages when website changes
    setWebsiteSections({}); // Clear sections as well
  };

  // Update the active website's data locally
  const handleUpdateWebsite = (key, value) => {
    const updatedWebsite = { ...activeWebsite, [key]: value };
    setActiveWebsite(updatedWebsite);
    setUnsavedChanges(true);
  };

  // Save updates to the active website in Supabase
  const handleSaveUpdates = async () => {
    if (!activeWebsite) {
      addNotification(
        'No active website',
        'Please select a website to update',
        'error'
      );
      return;
    }

    setIsSaving(true);

    try {
      const { data, error } = await supabase
        .from('websites')
        .update(activeWebsite)
        .eq('id', activeWebsite.id)
        .single();

      if (error) {
        throw error;
      } else {
        await fetchWebsites(); // Refresh website list
        setUnsavedChanges(false);
        setIsSaving(false);
        addNotification(
          'Website Saved',
          'Successfully saved changes to website',
          'success'
        );
        return data;
      }
    } catch (error) {
      console.error('Update error', error);
      addNotification('Update Error', error.message, 'error');
      setIsSaving(false);
    }
  };

  // Add a new website
  const addWebsite = async (websiteData) => {
    const { data, error } = await supabase
      .from('websites')
      .insert([websiteData])
      .single();

    if (error) {
      console.error('Error adding website:', error);
      addNotification('Error adding website', error.message, 'error');
      return null;
    } else {
      setAllWebsites((prev) => [...prev, data]);
      setWebsites((prev) => [...prev, data]);
      addNotification(
        'Website Added',
        'New website added successfully',
        'success'
      );
      return data;
    }
  };

  // Delete a website
  const handleDeleteWebsite = async (websiteId) => {
    const { error } = await supabase
      .from('websites')
      .delete()
      .eq('id', websiteId);

    if (error) {
      console.error('Delete error', error);
      addNotification('Error deleting website', error.message, 'error');
    } else {
      setAllWebsites((prev) =>
        prev.filter((website) => website.id !== websiteId)
      );
      setWebsites((prev) => prev.filter((website) => website.id !== websiteId));
      if (activeWebsite && activeWebsite.id === websiteId) {
        clearActiveWebsite();
      }
      addNotification('Website Deleted', 'Website has been deleted', 'success');
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

  // Update a website page
  const handleUpdateWebsitePage = async (pageId, pageData) => {
    const { data, error } = await supabase
      .from('website_pages')
      .update(pageData)
      .eq('id', pageId)
      .single();

    if (error) {
      addNotification('Error updating page', error.message, 'error');
    } else {
      setWebsitePages((prev) =>
        prev.map((page) => (page.id === pageId ? data : page))
      );
      addNotification('Page Updated', 'Page updated successfully', 'success');
    }
  };

  // Delete a website page
  const handleDeleteWebsitePage = async (pageId) => {
    const { error } = await supabase
      .from('website_pages')
      .delete()
      .eq('id', pageId);

    if (error) {
      addNotification('Error deleting page', error.message, 'error');
    } else {
      setWebsitePages((prev) => prev.filter((page) => page.id !== pageId));
      addNotification('Page Deleted', 'Page deleted successfully', 'success');
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
  const handleUpdateWebsiteSection = async (sectionId, sectionData) => {
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
  };

  // Delete a website section
  const handleDeleteWebsiteSection = async (sectionId) => {
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
    <WebsiteContext.Provider
      value={{
        websites,
        activeWebsite,
        websitePages,
        websiteSections,
        search,
        setSearch,
        handleSetActiveWebsite,
        clearActiveWebsite,
        handleUpdateWebsite,
        handleSaveUpdates,
        addWebsite,
        handleDeleteWebsite,
        addWebsitePage,
        handleUpdateWebsitePage,
        handleDeleteWebsitePage,
        addWebsiteSection,
        handleUpdateWebsiteSection,
        handleDeleteWebsiteSection,
        fetchWebsiteById,
        fetchWebsitePages,
        fetchWebsiteSections,
        isSaving,
        unsavedChanges,
      }}
    >
      {children}
    </WebsiteContext.Provider>
  );
}

export function useWebsites() {
  return useContext(WebsiteContext);
}
