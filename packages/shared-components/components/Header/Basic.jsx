import React, { useState } from 'react';
import styled from 'styled-components';
import { useEffect } from 'react';
import { Bars3Icon, XMarkIcon, PhoneIcon } from '@heroicons/react/24/outline';
import Button from '../../elements/Button';
import ButtonsGroup from '../../elements/ButtonsGroup';

const Header = styled.header`
  background-color: ${(props) => props.theme.colors.white};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 100;
  &.scrolled {
    padding: ${(props) => props.theme.spacings.small};
  }
`;

const Nav = styled.nav`
  max-width: ${(props) => props.theme.breakpoints.maxWidth};
  margin: 0 auto;
  padding: ${(props) => props.theme.spacings.large}
    ${(props) => props.theme.spacings.medium};
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: padding 0.3s ease;

  &.scrolled {
    padding: ${(props) => props.theme.spacings.small};
  }
`;

const DesktopNav = styled(Nav)`
  display: none;
  @media ${(props) => props.theme.breakpoints.desktop} {
    display: flex;
  }
`;

const MobileNav = styled(Nav)`
  display: none;

  @media ${(props) => props.theme.breakpoints.tablet},
    ${(props) => props.theme.breakpoints.mobile} {
    display: flex;
  }
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

const MobileMenuButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  margin: 0;
  padding: 0;
  svg {
    min-width: ${(props) => props.theme.nav.logo};
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
  padding: ${(props) => props.theme.spacings.medium};
  z-index: 1000;
  overflow-y: auto;
`;

const MobileHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: ${(props) => props.theme.spacings.medium};
`;

const MobileMenuCloseButton = styled.button`
  width: 100%;
  background: none;
  text-align: right;
  margin: 0;
  padding: 0;
  border: none;
  font-size: ${(props) => props.theme.fontSizes.large};
  cursor: pointer;

  svg {
    width: ${(props) => props.theme.nav.logo};
  }
  &:hover {
    opacity: ${(props) => props.theme.hover.opacity};
  }
`;

const BasicHeader = ({ config }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <Header>
      <DesktopNav className={isScrolled ? 'scrolled' : ''}>
        <Logo href='/'>
          <img src='/logo.png' alt='Acacia Wealth' />
        </Logo>
        <ButtonsGroup>
          {config.menu.map((item, index) => (
            <Button
              route={item.route}
              label={item.label}
              key={index}
              color='dark'
              type='link'
            />
          ))}
        </ButtonsGroup>
        <ButtonsGroup>
          <Button
            route={config.primaryCTA.route}
            label={config.primaryCTA.label}
            color='primary'
            icon={<PhoneIcon />}
          />
          <Button
            route={config.secondaryCTA.route}
            label={config.secondaryCTA.label}
            color='primary'
            type='outline'
          />
        </ButtonsGroup>
      </DesktopNav>

      <MobileNav className={isScrolled ? 'scrolled' : ''}>
        <Logo href='/'>
          <img src='/logo.png' alt='Acacia Wealth' />
        </Logo>
        <MobileMenuButton onClick={toggleMobileMenu}>
          <Bars3Icon />
        </MobileMenuButton>
      </MobileNav>

      <MobileMenuOverlay open={mobileMenuOpen} onClick={toggleMobileMenu} />

      <MobileMenu open={mobileMenuOpen}>
        <MobileHeader>
          <Logo href='/'>
            <img src='/logo.png' alt='Acacia Wealth' />
          </Logo>
          <MobileMenuCloseButton onClick={toggleMobileMenu}>
            <XMarkIcon />
          </MobileMenuCloseButton>
        </MobileHeader>
        <ButtonsGroup>
          {config.menu.map((item) => (
            <Button
              key={item.label}
              route={item.route}
              onClick={toggleMobileMenu}
              color='dark'
              type='link'
              label={item.label}
            />
          ))}
          <Button
            route={config.primaryCTA.route}
            label={config.primaryCTA.label}
            color='primary'
            icon={<PhoneIcon />}
          >
            {config.primaryCTA.label}
          </Button>
          <Button
            route={config.secondaryCTA.route}
            label={config.secondaryCTA.label}
            color='primary'
            type='outline'
          />
        </ButtonsGroup>
      </MobileMenu>
    </Header>
  );
};

export default BasicHeader;
