import { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '../utils/supabaseClient';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState(null);
  const [avatarUrl, setAvatarUrl] = useState(null);

  useEffect(() => {
    const session = supabase.auth.session();
    setSession(session);
    if (session) {
      fetchProfile();
    } else {
      setLoading(false);
    }

    const { data: listener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setSession(session);
        if (session) {
          fetchProfile();
        } else {
          setProfile(null);
          setLoading(false);
        }
      }
    );

    return () => {
      listener.unsubscribe();
    };
  }, []);

  const fetchProfile = async () => {
    try {
      setLoading(true);
      const user = supabase.auth.user();
      if (user) {
        let { data, error, status } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', user.id)
          .single();

        if (error && status !== 406) {
          throw error;
        }

        if (data) {
          setProfile(data);
          await downloadImage(data.avatar_url);
        }
      }
    } catch (error) {
      console.error('Error fetching profile:', error.message);
    } finally {
      setLoading(false);
    }
  };

  const downloadImage = async (path) => {
    try {
      const { data, error } = await supabase.storage
        .from('avatars')
        .download(path);
      if (error) {
        throw error;
      }
      const url = URL.createObjectURL(data);
      setAvatarUrl(url);
    } catch (error) {
      console.error('Error downloading image:', error.message);
    }
  };

  if (loading) {
    return <div>Loading...</div>; // Or your custom loader component
  }

  return (
    <AuthContext.Provider value={{ session, profile, avatarUrl, fetchProfile }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
