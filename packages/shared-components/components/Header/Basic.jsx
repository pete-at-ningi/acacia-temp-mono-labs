import React, { useState } from 'react';
import styled from 'styled-components';
import { Bars3Icon, XMarkIcon, PhoneIcon } from '@heroicons/react/24/outline';

const Header = styled.header`
  background-color: ${(props) => props.theme.colors.white};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 100;
`;

const Nav = styled.nav`
  max-width: ${(props) => props.theme.breakpoints.maxWidth};
  margin: 0 auto;
  padding: ${(props) => props.theme.spacings.medium};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${(props) => props.theme.colors.dark};
  font-size: ${(props) => props.theme.fontSizes.large};
  font-weight: bold;

  img {
    height: ${(props) => props.theme.nav.logo};
    margin-right: ${(props) => props.theme.spacings.small};
  }
`;

const Menu = styled.div`
  display: none;

  @media ${(props) => props.theme.breakpoints.desktop} {
    display: flex;
    gap: ${(props) => props.theme.spacings.large};
  }
`;

const MenuItem = styled.a`
  font-size: ${(props) => props.theme.fontSizes.medium};
  font-weight: 500;
  color: ${(props) => props.theme.colors.dark};
  text-decoration: none;

  &:hover {
    color: ${(props) => props.theme.colors.primary};
    opacity: ${(props) => props.theme.hover.opacity};
    cursor: pointer;
  }
`;

const Actions = styled.div`
  display: none;

  @media ${(props) => props.theme.breakpoints.desktop} {
    display: flex;
    gap: ${(props) => props.theme.spacings.large};
  }
`;

const ActionButton = styled.a`
  display: flex;
  align-items: center;
  svg {
    width: ${(props) => props.theme.fontSizes.medium};
  }
  grid-gap: ${(props) => props.theme.spacings.small};
  font-size: ${(props) => props.theme.fontSizes.medium};
  padding: ${(props) => props.theme.spacings.small}
    ${(props) => props.theme.spacings.medium};
  border-radius: ${(props) => props.theme.borders.radius};
  text-decoration: none;
  font-weight: 600;

  &.primary {
    border: 2px solid ${(props) => props.theme.colors.primary};
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.white};
    &:hover {
      background-color: ${(props) => props.theme.colors.secondary};
    }
  }

  &.secondary {
    background-color: transparent;
    color: ${(props) => props.theme.colors.primary};
    border: 2px solid ${(props) => props.theme.colors.primary};
    &:hover {
      background-color: ${(props) => props.theme.colors.light};
    }
  }
`;

const MobileMenuButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  margin: 0;
  padding: 0;
  svg {
    min-width: ${(props) => props.theme.nav.logo};
  }
  @media ${(props) => props.theme.breakpoints.desktop} {
    display: none;
  }
`;

const MobileMenuOverlay = styled.div`
  display: ${(props) => (props.open ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 900;
`;

const MobileMenu = styled.div`
  display: ${(props) => (props.open ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.white};
  padding: ${(props) => props.theme.spacings.large};
  z-index: 1000;
  overflow-y: auto;
`;

const MobileMenuCloseButton = styled.button`
  width: 100%;
  background: none;
  text-align: right;
  border: none;
  font-size: ${(props) => props.theme.fontSizes.large};
  cursor: pointer;
  margin-bottom: ${(props) => props.theme.spacings.large};
  svg {
    width: ${(props) => props.theme.nav.logo};
  }
  &:hover {
    opacity: ${(props) => props.theme.hover.opacity};
  }
`;

const MobileMenuItem = styled.a`
  display: block;
  font-size: ${(props) => props.theme.fontSizes.large};
  margin-bottom: ${(props) => props.theme.spacings.medium};
  text-decoration: none;
  color: ${(props) => props.theme.colors.dark};

  &:hover {
    color: ${(props) => props.theme.colors.primary};
  }
`;

const MobileActionMenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacings.medium};
`;

const BasicHeader = ({ config }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <Header>
      <Nav>
        <Logo href='/'>
          <img src='/icon.png' alt='Acacia Wealth' />
          Acacia Wealth
        </Logo>

        <Menu>
          {config.menu.map((item) => (
            <MenuItem key={item.label} href={item.route}>
              {item.label}
            </MenuItem>
          ))}
        </Menu>

        <Actions>
          <ActionButton href={config.primaryCTA.route} className='primary'>
            <PhoneIcon /> {config.primaryCTA.label}
          </ActionButton>
          <ActionButton href={config.secondaryCTA.route} className='secondary'>
            {config.secondaryCTA.label}
          </ActionButton>
        </Actions>

        <MobileMenuButton onClick={toggleMobileMenu}>
          <Bars3Icon />
        </MobileMenuButton>
      </Nav>

      <MobileMenuOverlay open={mobileMenuOpen} onClick={toggleMobileMenu} />

      <MobileMenu open={mobileMenuOpen}>
        <MobileMenuCloseButton onClick={toggleMobileMenu}>
          <XMarkIcon />
        </MobileMenuCloseButton>
        {config.menu.map((item) => (
          <MobileMenuItem
            key={item.label}
            href={item.route}
            onClick={toggleMobileMenu}
          >
            {item.label}
          </MobileMenuItem>
        ))}
        <MobileActionMenuWrapper>
          <ActionButton href={config.primaryCTA.route} className='primary'>
            {config.primaryCTA.label}
          </ActionButton>
          <ActionButton href={config.secondaryCTA.route} className='secondary'>
            {config.secondaryCTA.label}
          </ActionButton>
        </MobileActionMenuWrapper>
      </MobileMenu>
    </Header>
  );
};

export default BasicHeader;
