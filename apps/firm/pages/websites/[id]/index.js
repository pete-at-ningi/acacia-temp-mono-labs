import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useWebsites } from '../../../hooks/useWebsites';
import PageWrapper from '../../../components/Layout/PageWrapper';
import styled from 'styled-components';
import { websiteConfig } from '../../../components/Websites/config';
import { FiInfo } from 'react-icons/fi';

const Wrapper = styled.div`
  padding: 2rem;
  h1 {
    span {
      font-size: 0.8rem;
      margin-left: 0.5rem;
      font-weight: 400;
      opacity: 0.7;
    }
  }
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

const InfoIcon = styled(FiInfo)`
  margin-left: 8px;
  cursor: pointer;
  color: #888;
`;

const Tooltip = styled.div`
  position: absolute;
  background-color: #fff;
  color: #333;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 250px;
  z-index: 1000;
  top: 100%;
  left: 0;
  margin-top: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
`;
export default function WebsiteDetails() {
  const router = useRouter();
  const { id } = router.query;

  const {
    activeWebsite,
    handleSetActiveWebsite,
    clearActiveWebsite,
    isSaving,
    handleUpdateWebsite,
    handleDeleteWebsite,
  } = useWebsites();

  const [tooltipVisible, setTooltipVisible] = useState(null);

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

  const handleDeleteThisWebsite = () => {
    handleDeleteWebsite(activeWebsite.id);
    router.push(`/websites`);
  };

  const handleTooltipToggle = (index) => {
    setTooltipVisible((prev) => (prev === index ? null : index));
  };

  return (
    <PageWrapper title={`Website Details - ${activeWebsite.name}`}>
      <Wrapper>
        <h1>
          {activeWebsite.name}
          <span>{isSaving && 'Saving Changes...'}</span>
        </h1>
        <button
          onClick={() => {
            router.push(`/websites/${activeWebsite.id}/editor`);
          }}
        >
          Editor
        </button>
        <Form>
          {websiteConfig.map((field, index) => {
            if (field.type === 'heading') {
              return <h2 key={index}>{field.label}</h2>;
            }

            if (field.type === 'subheading') {
              return <h3 key={index}>{field.label}</h3>;
            }

            if (field.type === 'subsubheading') {
              return <h4 key={index}>{field.label}</h4>;
            }

            return (
              <div key={index} style={{ position: 'relative' }}>
                <Label>
                  {field.label}
                  <InfoIcon onClick={() => handleTooltipToggle(index)} />
                  {tooltipVisible === index && (
                    <Tooltip onMouseLeave={() => setTooltipVisible(null)}>
                      {field.description}
                    </Tooltip>
                  )}
                </Label>
                {field.data_type === 'text' && (
                  <Input
                    type='text'
                    name={field.database_key}
                    value={activeWebsite[field.database_key] || ''}
                    onChange={handleInputChange}
                  />
                )}
                {field.data_type === 'email' && (
                  <Input
                    type='email'
                    name={field.database_key}
                    value={activeWebsite[field.database_key] || ''}
                    onChange={handleInputChange}
                  />
                )}
                {field.data_type === 'tel' && (
                  <Input
                    type='tel'
                    name={field.database_key}
                    value={activeWebsite[field.database_key] || ''}
                    onChange={handleInputChange}
                  />
                )}
                {field.data_type === 'textarea' && (
                  <TextArea
                    name={field.database_key}
                    value={activeWebsite[field.database_key] || ''}
                    onChange={handleInputChange}
                  />
                )}
                {field.data_type === 'select' && (
                  <Select
                    name={field.database_key}
                    value={activeWebsite[field.database_key] || ''}
                    onChange={handleInputChange}
                  >
                    <option value='' disabled>
                      -- Select --
                    </option>
                    {field.options.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </Select>
                )}
              </div>
            );
          })}
        </Form>
        <h3>Danger Zone</h3>
        <button onClick={handleDeleteThisWebsite}>Delete</button>
      </Wrapper>
    </PageWrapper>
  );
}
