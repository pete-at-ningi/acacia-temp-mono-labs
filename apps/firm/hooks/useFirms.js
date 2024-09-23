import { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '../utils/supabaseClient';
import { useDebounce } from './useDebounce';
import { useNotification } from './useNotification';
import { useAuth } from './useAuth';

const FirmContext = createContext();

export function FirmProvider({ children }) {
  const { addNotification } = useNotification();
  const { profile } = useAuth();

  const [allFirms, setAllFirms] = useState([]);
  const [firms, setFirms] = useState([]);
  const [activeFirm, setActiveFirm] = useState(null);
  const [search, setSearch] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const [unsavedChanges, setUnsavedChanges] = useState(false);

  const debouncedSearch = useDebounce(search, 500);
  const debouncedSave = useDebounce(activeFirm, 1000); // Debounce for auto-save

  // Fetch all firms
  const fetchFirms = async () => {
    let query = supabase.from('firms').select('*');

    const { data, error } = await query;
    if (error) {
      console.error('fetchFirms error', error);
      addNotification('Error fetching firms', error.message, 'error');
    } else {
      setAllFirms(data);
      setFirms(data);
    }
  };

  useEffect(() => {
    fetchFirms();
  }, [profile]);

  // Handle search functionality
  useEffect(() => {
    if (debouncedSearch) {
      const filteredFirms = allFirms.filter(
        (firm) =>
          firm.name.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
          (firm.email &&
            firm.email.toLowerCase().includes(debouncedSearch.toLowerCase()))
      );
      setFirms(filteredFirms);
    } else {
      setFirms(allFirms);
    }
  }, [debouncedSearch, allFirms]);

  // Autosave functionality with debounced activeFirm changes
  useEffect(() => {
    if (debouncedSave && unsavedChanges) {
      handleSaveUpdates();
    }
  }, [debouncedSave]);

  // Fetch a single firm by ID
  const fetchFirmById = async (firmId) => {
    const { data, error } = await supabase
      .from('firms')
      .select('*')
      .eq('id', firmId)
      .single();

    if (error) {
      console.error('Error fetching firm:', error);
      addNotification('Error fetching firm', error.message, 'error');
    } else {
      setActiveFirm(data);
    }
  };

  // Set the active firm
  const handleSetActiveFirm = async (firmId) => {
    let foundFirm = firms.find((firm) => firm.id === firmId);
    if (foundFirm) {
      setActiveFirm(foundFirm);
    } else {
      await fetchFirmById(firmId);
    }
  };

  // Clear the active firm
  const clearActiveFirm = () => {
    setActiveFirm(null);
  };

  // Update the active firm's data locally
  const handleUpdateFirm = (key, value) => {
    const updatedFirm = { ...activeFirm, [key]: value };
    setActiveFirm(updatedFirm);
    setUnsavedChanges(true);
  };

  // Save updates to the active firm in Supabase
  const handleSaveUpdates = async () => {
    if (!activeFirm) {
      addNotification(
        'No active firm',
        'Please select a firm to update',
        'error'
      );
      return;
    }

    setIsSaving(true);

    try {
      const { data, error } = await supabase
        .from('firms')
        .update(activeFirm)
        .eq('id', activeFirm.id)
        .single();

      if (error) {
        throw error;
      } else {
        await fetchFirms();
        setUnsavedChanges(false);
        addNotification(
          'Firm Saved',
          'Successfully saved changes to firm record',
          'success'
        );
        return data;
      }
    } catch (error) {
      console.error('update error', error);
      addNotification('Update Error', error.message, 'error');
    } finally {
      setIsSaving(false);
    }
  };

  // Add a new firm
  const addFirm = async (firmData) => {
    const { data, error } = await supabase
      .from('firms')
      .insert([firmData])
      .single();

    if (error) {
      console.error('Error adding firm:', error);
      addNotification('Error adding firm', error.message, 'error');
      return null;
    } else {
      setAllFirms((prev) => [...prev, data]);
      setFirms((prev) => [...prev, data]);
      addNotification('Firm Added', 'New firm added successfully', 'success');
      return data;
    }
  };

  // Delete a firm
  const handleDeleteFirm = async (firmId) => {
    const { error } = await supabase.from('firms').delete().eq('id', firmId);

    if (error) {
      console.error('delete error', error);
      addNotification('Error deleting firm', error.message, 'error');
    } else {
      setAllFirms((prev) => prev.filter((firm) => firm.id !== firmId));
      setFirms((prev) => prev.filter((firm) => firm.id !== firmId));
      if (activeFirm && activeFirm.id === firmId) {
        clearActiveFirm();
      }
      addNotification('Firm Deleted', 'Firm has been deleted', 'success');
    }
  };

  return (
    <FirmContext.Provider
      value={{
        firms,
        activeFirm,
        search,
        setSearch,
        handleSetActiveFirm,
        clearActiveFirm,
        handleUpdateFirm,
        handleSaveUpdates,
        addFirm,
        handleDeleteFirm,
        fetchFirmById,
        isSaving,
        unsavedChanges,
      }}
    >
      {children}
    </FirmContext.Provider>
  );
}

export function useFirms() {
  return useContext(FirmContext);
}
