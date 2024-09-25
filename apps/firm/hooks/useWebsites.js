import { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '../utils/supabaseClient';
import { useDebounce } from './useDebounce';
import { useNotification } from './useNotification';
import { useFirms } from './useFirms';

const WebsiteContext = createContext();

export function WebsiteProvider({ children }) {
  const { addNotification } = useNotification();
  const { activeFirm } = useFirms();

  const [allWebsites, setAllWebsites] = useState([]);
  const [websites, setWebsites] = useState([]);
  const [activeWebsite, setActiveWebsite] = useState(null);
  const [search, setSearch] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const [unsavedChanges, setUnsavedChanges] = useState(false);
  const debouncedSearch = useDebounce(search, 500);
  const debouncedSave = useDebounce(activeWebsite, 1000); // 1-second debounce

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

  // Handle search functionality
  useEffect(() => {
    if (debouncedSearch) {
      const filteredWebsites = allWebsites.filter((website) =>
        website.name.toLowerCase().includes(debouncedSearch.toLowerCase())
      );
      setWebsites(filteredWebsites);
    } else {
      setWebsites(allWebsites);
    }
  }, [debouncedSearch, allWebsites]);

  // Auto-save functionality when website changes
  useEffect(() => {
    if (debouncedSave && unsavedChanges) {
      handleSaveUpdates();
    }
  }, [debouncedSave]);

  // Fetch a single website by ID
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
    }
  };

  // Set the active website
  const handleSetActiveWebsite = async (websiteId) => {
    let foundWebsite = websites.find((website) => website.id === websiteId);
    if (foundWebsite) {
      setActiveWebsite(foundWebsite);
    } else {
      await fetchWebsiteById(websiteId);
    }
  };

  // Clear the active website
  const clearActiveWebsite = () => {
    setActiveWebsite(null);
  };

  // Update the active website's data locally
  const handleUpdateWebsite = (key, value) => {
    const updatedWebsite = { ...activeWebsite, [key]: value };
    setActiveWebsite(updatedWebsite);
    setUnsavedChanges(true);
  };

  // Save updates to the active website in Supabase
  const handleSaveUpdates = async () => {
    if (!activeWebsite) return;

    setIsSaving(true);
    try {
      const { data, error } = await supabase
        .from('websites')
        .update(activeWebsite)
        .eq('id', activeWebsite.id)
        .single();

      if (error) throw error;

      await fetchWebsites(); // Refresh website list
      setUnsavedChanges(false);
      addNotification('Website Saved', 'Successfully saved changes', 'success');
    } catch (error) {
      console.error('Update error', error);
      addNotification('Update Error', error.message, 'error');
    } finally {
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
  return (
    <WebsiteContext.Provider
      value={{
        websites,
        activeWebsite,
        search,
        setSearch,
        handleSetActiveWebsite,
        clearActiveWebsite,
        handleUpdateWebsite,
        addWebsite,
        handleDeleteWebsite,
        fetchWebsiteById,
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
