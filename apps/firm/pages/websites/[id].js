import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useWebsites } from '../../hooks/useWebsites';
import Link from 'next/link';
import PageWrapper from '../../components/Layout/PageWrapper';
import styled from 'styled-components';

const googleFonts = [
  'Roboto',
  'Open Sans',
  'Lato',
  'Montserrat',
  'Oswald',
  'Source Sans Pro',
  'Slabo 27px',
  'Raleway',
  'Poppins',
  'Ubuntu',
  'Merriweather',
  'PT Sans',
  'Noto Sans',
  'Nunito Sans',
  'Playfair Display',
];

const fontSizes = [
  '0.857rem',
  '1rem',
  '1.25rem',
  '1.5rem',
  '1.75rem',
  '2rem',
  '2.5rem',
  '3rem',
  '3.5rem',
  '4rem',
  '5rem',
];

const spacings = [
  '8px',
  '12px',
  '16px',
  '20px',
  '24px',
  '32px',
  '40px',
  '48px',
  '56px',
  '64px',
];

const borderRadius = ['0px', '4px', '8px', '12px', '16px', '20px'];

const Wrapper = styled.div`
  padding: 2rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  grid-gap: 1rem;
`;

const Label = styled.label`
  font-weight: 600;
`;

const Input = styled.input`
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const TextArea = styled.textarea`
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Select = styled.select`
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export default function WebsiteDetails() {
  const router = useRouter();
  const { id } = router.query;

  const {
    activeWebsite,
    handleSetActiveWebsite,
    clearActiveWebsite,
    isSaving,
    unsavedChanges,
    handleUpdateWebsite,
    handleSaveUpdates,
    handleDeleteWebsite,
  } = useWebsites();

  useEffect(() => {
    if (id) {
      handleSetActiveWebsite(id);
    }

    return () => {
      clearActiveWebsite();
    };
  }, [id]);

  if (!activeWebsite) {
    return <p>Loading...</p>;
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    handleUpdateWebsite(name, value);
  };

  const handleSave = async () => {
    await handleSaveUpdates();
  };

  const handleDeleteThisWebsite = () => {
    handleDeleteWebsite(activeWebsite.id);
    router.push(`/websites`);
  };

  return (
    <PageWrapper title={`Website Details - ${activeWebsite.name}`}>
      <Wrapper>
        <Link href='/websites'>
          <a>← Back to Websites</a>
        </Link>
        <h1>{activeWebsite.name}</h1>
        <Form>
          <Label>
            Website Name:
            <Input
              type='text'
              name='name'
              value={activeWebsite.name || ''}
              onChange={handleInputChange}
            />
          </Label>
          <h2>Theme</h2>
          <h3>Colors</h3>
          <Label>
            Primary Color:
            <Input
              type='text'
              name='colors_primary'
              value={activeWebsite.colors_primary || ''}
              onChange={handleInputChange}
            />
          </Label>
          <Label>
            Secondary Color:
            <Input
              type='text'
              name='colors_secondary'
              value={activeWebsite.colors_secondary || ''}
              onChange={handleInputChange}
            />
          </Label>
          <Label>
            Accent Color:
            <Input
              type='text'
              name='colors_accent'
              value={activeWebsite.colors_accent || ''}
              onChange={handleInputChange}
            />
          </Label>
          <Label>
            Light Color:
            <Input
              type='text'
              name='colors_light'
              value={activeWebsite.colors_light || ''}
              onChange={handleInputChange}
            />
          </Label>
          <Label>
            Dark Color:
            <Input
              type='text'
              name='colors_dark'
              value={activeWebsite.colors_dark || ''}
              onChange={handleInputChange}
            />
          </Label>
          <h3>Font</h3>
          <Label>
            Font Family
            <Select
              name='font_primary'
              value={activeWebsite.font_primary || ''}
              onChange={handleInputChange}
            >
              <option value='' disabled>
                -- Select Font --
              </option>
              {googleFonts.map((font) => (
                <option key={font} value={font}>
                  {font}
                </option>
              ))}
            </Select>
          </Label>
          <h4>Sizes</h4>
          <Label>
            Small
            <Select
              name='font_small'
              value={activeWebsite.font_small || ''}
              onChange={handleInputChange}
            >
              <option value='' disabled>
                -- Select Font --
              </option>
              {fontSizes.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </Select>
          </Label>
          <Label>
            Medium
            <Select
              name='font_medium'
              value={activeWebsite.font_medium || ''}
              onChange={handleInputChange}
            >
              <option value='' disabled>
                -- Select Font --
              </option>
              {fontSizes.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </Select>
          </Label>
          <Label>
            Large
            <Select
              name='font_large'
              value={activeWebsite.font_large || ''}
              onChange={handleInputChange}
            >
              <option value='' disabled>
                -- Select Font --
              </option>
              {fontSizes.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </Select>
          </Label>
          <Label>
            Extra Large
            <Select
              name='font_xlarge'
              value={activeWebsite.font_xlarge || ''}
              onChange={handleInputChange}
            >
              <option value='' disabled>
                -- Select Font --
              </option>
              {fontSizes.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </Select>
          </Label>
          <Label>
            Massive
            <Select
              name='font_massive'
              value={activeWebsite.font_massive || ''}
              onChange={handleInputChange}
            >
              <option value='' disabled>
                -- Select Font --
              </option>
              {fontSizes.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </Select>
          </Label>
          <h3>Spacing</h3>
          <Label>
            Small
            <Select
              name='spacings_small'
              value={activeWebsite.spacings_small || ''}
              onChange={handleInputChange}
            >
              <option value='' disabled>
                -- Select Spacing --
              </option>
              {spacings.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </Select>
          </Label>
          <Label>
            Medium
            <Select
              name='spacings_medium'
              value={activeWebsite.spacings_medium || ''}
              onChange={handleInputChange}
            >
              <option value='' disabled>
                -- Select Spacing --
              </option>
              {spacings.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </Select>
          </Label>
          <Label>
            Large
            <Select
              name='spacings_large'
              value={activeWebsite.spacings_large || ''}
              onChange={handleInputChange}
            >
              <option value='' disabled>
                -- Select Spacing --
              </option>
              {spacings.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </Select>
          </Label>
          <Label>
            Extra Large
            <Select
              name='spacings_xlarge'
              value={activeWebsite.spacings_xlarge || ''}
              onChange={handleInputChange}
            >
              <option value='' disabled>
                -- Select Spacing --
              </option>
              {spacings.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </Select>
          </Label>
          <h3>Responsive Breakpoints</h3>
          <Label>
            Mobile
            <Input
              type='text'
              name='breakpoints_mobile'
              value={activeWebsite.breakpoints_mobile || ''}
              onChange={handleInputChange}
            />
          </Label>
          <Label>
            Tablet
            <Input
              type='text'
              name='breakpoints_tablet'
              value={activeWebsite.breakpoints_tablet || ''}
              onChange={handleInputChange}
            />
          </Label>
          <Label>
            Desktop
            <Input
              type='text'
              name='breakpoints_desktop'
              value={activeWebsite.breakpoints_desktop || ''}
              onChange={handleInputChange}
            />
          </Label>
          <Label>
            Max Width
            <Input
              type='text'
              name='breakpoints_maxWidth'
              value={activeWebsite.breakpoints_maxWidth || ''}
              onChange={handleInputChange}
            />
          </Label>
          <h3>Other Theming Items</h3>
          <Label>
            Border Radius
            <Select
              name='borders_radius'
              value={activeWebsite.borders_radius || ''}
              onChange={handleInputChange}
            >
              <option value='' disabled>
                -- Select Font --
              </option>
              {borderRadius.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </Select>
          </Label>
          <Label>
            Nav Logo Width
            <Input
              type='text'
              name='nav_logo'
              value={activeWebsite.nav_logo || ''}
              onChange={handleInputChange}
            />
          </Label>
          <Label>
            On Hover Opacity
            <Input
              type='text'
              name='hover_opacity'
              value={activeWebsite.hover_opacity || ''}
              onChange={handleInputChange}
            />
          </Label>
          <h2>Header Information</h2>
          <Label>
            Title:
            <Input
              type='text'
              name='header_title'
              value={activeWebsite.header_title || ''}
              onChange={handleInputChange}
            />
          </Label>
          <Label>
            Description:
            <TextArea
              name='header_description'
              value={activeWebsite.header_description || ''}
              onChange={handleInputChange}
            />
          </Label>
          <Label>
            Keywords:
            <TextArea
              name='header_keywords'
              value={activeWebsite.header_keywords || ''}
              onChange={handleInputChange}
            />
          </Label>
          <Label>
            og-Title:
            <Input
              name='header_ogtitle'
              value={activeWebsite.header_ogtitle || ''}
              onChange={handleInputChange}
            />
          </Label>
          <Label>
            og-Type:
            <Input
              name='header_ogtype'
              value={activeWebsite.header_ogtype || ''}
              onChange={handleInputChange}
            />
          </Label>
          <Label>
            og-Url:
            <Input
              name='header_ogurl'
              value={activeWebsite.header_ogurl || ''}
              onChange={handleInputChange}
            />
          </Label>
          <Label>
            og-Image:
            <Input
              name='header_ogimage'
              value={activeWebsite.header_ogimage || ''}
              onChange={handleInputChange}
            />
          </Label>
          <Label>
            Theme Color:
            <Input
              name='header_themecolor'
              value={activeWebsite.header_themecolor || ''}
              onChange={handleInputChange}
            />
          </Label>
          <h2>Business Information</h2>
          <Label>
            Legal Name:
            <Input
              type='text'
              name='business_name'
              value={activeWebsite.business_name || ''}
              onChange={handleInputChange}
            />
          </Label>
          <Label>
            Registered Address:
            <TextArea
              name='business_address'
              value={activeWebsite.business_address || ''}
              onChange={handleInputChange}
            />
          </Label>
          <Label>
            Phone:
            <Input
              type='tel'
              name='business_phone'
              value={activeWebsite.business_phone || ''}
              onChange={handleInputChange}
            />
          </Label>
          <Label>
            Email:
            <Input
              type='email'
              name='business_email'
              value={activeWebsite.business_email || ''}
              onChange={handleInputChange}
            />
          </Label>
          <Label>
            FCA Number:
            <Input
              type='text'
              name='business_fca_number'
              value={activeWebsite.business_fca_number || ''}
              onChange={handleInputChange}
            />
          </Label>
          <Label>
            Registered Company Number:
            <Input
              type='text'
              name='business_company_number'
              value={activeWebsite.business_company_number || ''}
              onChange={handleInputChange}
            />
          </Label>
          <h2>Social Media Links</h2>
          <Label>
            LinkedIn URL:
            <Input
              type='text'
              name='linkedin_url'
              value={activeWebsite.linkedin_url || ''}
              onChange={handleInputChange}
            />
          </Label>
          <Label>
            Twitter (X) URL:
            <Input
              type='text'
              name='x_twitter_url'
              value={activeWebsite.x_twitter_url || ''}
              onChange={handleInputChange}
            />
          </Label>
          <Label>
            Facebook URL:
            <Input
              type='text'
              name='facebook_url'
              value={activeWebsite.facebook_url || ''}
              onChange={handleInputChange}
            />
          </Label>
          <Label>
            Instagram URL:
            <Input
              type='text'
              name='instagram_url'
              value={activeWebsite.instagram_url || ''}
              onChange={handleInputChange}
            />
          </Label>
          <Label>
            YouTube URL:
            <Input
              type='text'
              name='youtube_url'
              value={activeWebsite.youtube_url || ''}
              onChange={handleInputChange}
            />
          </Label>
          <Label>
            tiktok URL:
            <Input
              type='text'
              name='tiktok_url'
              value={activeWebsite.tiktok_url || ''}
              onChange={handleInputChange}
            />
          </Label>

          <button onClick={handleSave} disabled={isSaving}>
            {isSaving ? 'Saving...' : 'Save Changes'}
          </button>
          {unsavedChanges && <p>You have unsaved changes.</p>}
        </Form>

        <h3>Danger Zone</h3>
        <button onClick={handleDeleteThisWebsite}>Delete</button>
      </Wrapper>
    </PageWrapper>
  );
}
