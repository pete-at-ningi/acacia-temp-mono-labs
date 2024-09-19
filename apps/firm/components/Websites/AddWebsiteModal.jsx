import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useFirms } from '../../hooks/useFirms';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(128, 128, 128, 0.3);
  backdrop-filter: blur(5px);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: auto;

  @media (max-width: 600px) {
    align-items: flex-start;
  }
`;

const ModalContent = styled.div`
  background-color: #fff;
  padding: 2rem;
  border-radius: 8px;
  width: 100%;
  max-width: 500px;
  position: relative;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 600px) {
    width: 100%;
    height: 100vh;
    border-radius: 0;
    padding-bottom: 80px; /* Space for fixed buttons */
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  background: transparent;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
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

const ButtonsWrapper = styled.div`
  display: flex;
  grid-gap: 1rem;
  margin-top: 1rem;

  @media (max-width: 600px) {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background: #fff;
    padding: 1rem;
    box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.1);
  }
`;

const Button = styled.button`
  flex: 1;
  padding: 12px;
  background-color: ${(props) =>
    props.variant === 'cancel'
      ? '#ccc'
      : props.theme.colors.primary || '#0070f3'};
  color: ${(props) => (props.variant === 'cancel' ? '#000' : '#fff')};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  &:hover {
    opacity: 0.9;
  }
`;

const Select = styled.select`
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export default function AddWebsiteModal({ onClose, onSave }) {
  const { activeFirm, firms } = useFirms();
  const [name, setName] = useState('');
  const [firmId, setFirmId] = useState(activeFirm ? activeFirm.id : '');

  useEffect(() => {
    if (activeFirm) {
      setFirmId(activeFirm.id);
    }
  }, [activeFirm]);

  const handleSave = (e) => {
    e.preventDefault();
    if (name.trim() === '') {
      alert('Please enter a website name.');
      return;
    }
    if (!firmId) {
      alert('Please select a firm.');
      return;
    }
    onSave({ name, firm_id: firmId });
    setName('');
  };

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <h2>Add New Website</h2>
        <Form onSubmit={handleSave}>
          <Label>Website Name</Label>
          <Input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoFocus
          />

          {/* Conditionally render the firm select input */}
          {!activeFirm && (
            <>
              <Label>Select Firm</Label>
              <Select
                value={firmId}
                onChange={(e) => setFirmId(e.target.value)}
              >
                <option value='' disabled>
                  -- Select Firm --
                </option>
                {firms.map((firm) => (
                  <option key={firm.id} value={firm.id}>
                    {firm.name}
                  </option>
                ))}
              </Select>
            </>
          )}

          <ButtonsWrapper>
            <Button type='button' variant='cancel' onClick={onClose}>
              Cancel
            </Button>
            <Button type='submit'>Save</Button>
          </ButtonsWrapper>
        </Form>
      </ModalContent>
    </ModalOverlay>
  );
}
