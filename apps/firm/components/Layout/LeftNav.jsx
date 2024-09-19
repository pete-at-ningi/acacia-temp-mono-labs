import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px 20px;
  width: 100%;
  height: 100%;
  border-right: 1px solid #ebebeb;
  justify-content: flex-start;
  align-items: flex-start;
  img {
    width: 220px;
    margin-bottom: 50px;
  }
`;

const LineItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 10px;
  width: 100%;
  color: black;
  background-color: ${(props) => (props.isActive ? '#ebebeb' : 'transparent')};
  svg {
    margin-right: 10px;
    width: 30px;
  }
  &:hover {
    background-color: #ebebeb;
    color: black;
  }
`;

const LeftNav = ({ items, active, setActive }) => {
  return (
    <Container>
      <img src='/logomark.png' alt='MediFintech | NHS Pensions Modelling' />
      {items.map(({ id, label, Icon }) => (
        <LineItem
          key={id}
          isActive={active === id}
          onClick={() => setActive(id)}
        >
          <Icon />
          {label}
        </LineItem>
      ))}
    </Container>
  );
};

export default LeftNav;
