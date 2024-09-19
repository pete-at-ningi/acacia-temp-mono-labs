import { useEffect, useState } from 'react';
import { supabase } from '../../utils/supabaseClient';
import styled from 'styled-components';
import { UserCircleIcon } from '@heroicons/react/24/solid';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  p {
    font-size: 90%;
    opacity: 0.6;
    line-height: 1.5;
    margin-top: 0;
  }
`;

const AvatarContainer = styled.div`
  width: 150px; // Set the desired size
  height: 150px; // Set the desired size
  border-radius: 50%; // Round corners
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background-color: #f0f0f0;
`;

const UploadLabel = styled.label`
  cursor: pointer;
  font-weight: bold;
  font-size: 100%;
  margin-top: 10px;
`;

const HiddenInput = styled.input`
  display: none;
`;

export default function Avatar({ url, onUpload }) {
  const [avatarUrl, setAvatarUrl] = useState(null);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    if (url) downloadImage(url);
  }, [url]);

  async function downloadImage(path) {
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
      console.log('Error downloading image: ', error.message);
    }
  }

  async function uploadAvatar(event) {
    try {
      setUploading(true);

      if (!event.target.files || event.target.files.length === 0) {
        throw new Error('You must select an image to upload.');
      }

      const file = event.target.files[0];
      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `${fileName}`;

      let { error: uploadError } = await supabase.storage
        .from('avatars')
        .upload(filePath, file);

      if (uploadError) {
        throw uploadError;
      }

      onUpload(filePath);
      downloadImage(filePath); // Update the avatar URL after uploading
    } catch (error) {
      alert(error.message);
    } finally {
      setUploading(false);
    }
  }

  return (
    <Wrapper>
      <AvatarContainer
        style={{
          backgroundImage: avatarUrl ? `url(${avatarUrl})` : 'none',
        }}
      >
        {!avatarUrl && <></>}
      </AvatarContainer>
      <UploadLabel htmlFor='single'>
        {uploading
          ? 'Uploading ...'
          : avatarUrl
          ? 'Replace Image'
          : 'Upload Image'}
      </UploadLabel>
      <p>
        Please upload a square profile image, ideally around 250x250 in size.
      </p>
      <HiddenInput
        type='file'
        id='single'
        accept='image/*'
        onChange={uploadAvatar}
        disabled={uploading}
      />
    </Wrapper>
  );
}
