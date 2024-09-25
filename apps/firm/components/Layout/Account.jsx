import Link from 'next/link';
import { useState, useEffect } from 'react';
import { supabase } from '../../utils/supabaseClient';
import { useAuth } from '../../hooks/useAuth';
import { useNotification } from '../../hooks/useNotification';
import Avatar from './Avatar';

import { ArrowLeftCircleIcon } from '@heroicons/react/24/solid';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 20px;
  max-width: 400px;
  margin: 0 auto;
  svg {
    width: 20px;
    cursor: pointer;
    margin-right: 5px;
  }
`;

const StyledA = styled.a`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  cursor: pointer;
`;

const StyledDiv = styled.div`
  padding-bottom: 10px;
  font-weight: bold;
  color: #1d3b5f;
`;

export default function Account({}) {
  const { session, profile, avatarUrl, fetchProfile } = useAuth();
  const { addNotification } = useNotification();
  const [loading, setLoading] = useState(false);
  const [fullname, setFullName] = useState(profile?.full_name || '');
  const [hasChanges, setHasChanges] = useState(false);

  useEffect(() => {
    if (profile) {
      setFullName(profile.full_name);
    }
  }, [profile]);

  useEffect(() => {
    checkForChanges();
  }, [fullname, avatarUrl]);

  const checkForChanges = () => {
    if (fullname !== profile?.full_name || avatarUrl !== profile?.avatar_url) {
      setHasChanges(true);
    } else {
      setHasChanges(false);
    }
  };

  const updateProfile = async () => {
    try {
      setLoading(true);
      const user = supabase.auth.user();
      const updates = {
        id: user.id,
        full_name: fullname,
        avatar_url: profile.avatar_url,
        updated_at: new Date(),
      };

      const { error } = await supabase.from('profiles').upsert(updates, {
        returning: 'minimal', // Don't return the value after inserting
      });

      if (error) {
        throw error;
      } else {
        await fetchProfile();
        setHasChanges(false);
        addNotification('Success', 'Profile updated successfully', 'success');
      }
    } catch (error) {
      addNotification('Error', error.message, 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Wrapper>
      <Link href='/'>
        <StyledA>
          <ArrowLeftCircleIcon /> Home
        </StyledA>
      </Link>
      <h2>Profile</h2>
      <Avatar
        url={profile?.avatar_url}
        onUpload={async (url) => {
          const user = supabase.auth.user();
          const updates = {
            id: user.id,
            avatar_url: url,
            updated_at: new Date(),
          };

          const { error } = await supabase.from('profiles').upsert(updates, {
            returning: 'minimal', // Don't return the value after inserting
          });

          if (error) {
            throw error;
          } else {
            await fetchProfile();
            setHasChanges(false);
            addNotification(
              'Success',
              'Profile image updated successfully',
              'success'
            );
          }
        }}
      />
      <label>Role Type:</label>
      <StyledDiv>
        {profile?.superuser
          ? 'Superuser'
          : profile?.pro_users
          ? 'Professional'
          : 'Client'}
      </StyledDiv>
      <div>
        <label htmlFor='email'>Email</label>
        <input id='email' type='text' value={session.user.email} disabled />
      </div>
      <div>
        <label htmlFor='fullname'>Name</label>
        <input
          id='fullname'
          type='text'
          value={fullname || ''}
          onChange={(e) => setFullName(e.target.value)}
        />
      </div>
      {hasChanges && (
        <div>
          <button onClick={updateProfile} disabled={loading}>
            {loading ? 'Loading ...' : 'Save Changes'}
          </button>
        </div>
      )}
      <div>
        <button onClick={() => supabase.auth.signOut()}>Sign Out</button>
      </div>
    </Wrapper>
  );
}
