import React from 'react';
import styled from 'styled-components';
import NewsletterInput from '../Newsletter/SignupWidget';
import {
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline';
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
} from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';

const OutsideWrapper = styled.div`
  padding: 0;
`;

const FooterWrapper = styled.footer`
  background-color: ${(props) => props.theme.colors.dark};
  padding: ${(props) => props.theme.spacings.xlarge}
    ${(props) => props.theme.spacings.large};
  color: ${(props) => props.theme.colors.white};
`;

const FooterContainer = styled.div`
  max-width: ${(props) => props.theme.breakpoints.maxWidth};
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: ${(props) => props.theme.spacings.xlarge};

  @media ${(props) => props.theme.breakpoints.desktop} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacings.medium};
`;

const FooterRow = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${(props) => props.theme.spacings.small};
  margin-bottom: ${(props) => props.theme.spacings.medium};
`;

const SocialsRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${(props) => props.theme.spacings.small};
  margin-bottom: ${(props) => props.theme.spacings.xlarge};
`;

const ContactRow = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: ${(props) => props.theme.spacings.small};
  margin-bottom: ${(props) => props.theme.spacings.medium};
  align-items: flex-start;
  svg {
    width: 24px;
    height: 24px;
  }
`;

const Group = styled.div`
  display: flex;
  align-items: flex-start;

  gap: ${(props) => props.theme.spacings.small};
`;

const FooterHeading = styled.h3`
  font-size: ${(props) => props.theme.fontSizes.medium};
  font-weight: bold;
  margin-top: 0;
`;

const FooterLink = styled.a`
  font-size: ${(props) => props.theme.fontSizes.small};
  color: ${(props) => props.theme.colors.light};
  white-space: nowrap;
  text-decoration: none;
  &:hover {
    color: ${(props) => props.theme.colors.accent};
  }
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.spacings.small};
`;

const Credits = styled.a`
  font-size: ${(props) => props.theme.fontSizes.small};
  color: ${(props) => props.theme.colors.light};

  &:hover {
    color: ${(props) => props.theme.colors.accent};
  }
  img {
    height: 24px;
  }
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.spacings.small};
  justify-content: center;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: ${(props) => props.theme.spacings.medium};

  svg {
    width: 40px;
    height: 40px;
    color: ${(props) => props.theme.colors.white};
  }
`;

const Icon = styled.img`
  width: 24px;
  height: 24px;
`;

const Copyright = styled.p`
  margin-top: ${(props) => props.theme.spacings.large};
  text-align: center;
  font-size: ${(props) => props.theme.fontSizes.small};
  color: ${(props) => props.theme.colors.light};
`;

const Address = styled.div`
  p {
    margin: 0;
    padding: 0;
  }
  b {
    margin-bottom: ${(props) => props.theme.spacings.medium};
  }
`;

const LegalDetails = styled.div`
  a {
    color: ${(props) => props.theme.colors.white};
    text-decoration: underline;
  }
`;

const Footer = ({ config }) => {
  return (
    <OutsideWrapper>
      <FooterWrapper>
        <FooterContainer>
          <FooterColumn>
            <ContactRow>
              <Group>
                <MapPinIcon />
                <Address>
                  <b>{config.business.name}</b>
                  <p>{config.business.address}</p>
                </Address>
              </Group>
              <Group>
                <EnvelopeIcon />
                <FooterLink href={`mailto:${config.business.email}`}>
                  Email Us
                </FooterLink>
              </Group>
              <Group>
                <PhoneIcon />
                <FooterLink href={`tel:${config.business.phone}`}>
                  {config.business.phone}
                </FooterLink>
              </Group>
            </ContactRow>

            <FooterRow>
              <LegalDetails>
                <p>
                  {config.business.name} is authorised and regulated by the
                  Financial Conduct Authority (FCA). You can find{' '}
                  {config.business.name} on the FCA register{' '}
                  <a
                    href='https://register.fca.org.uk'
                    target='_blank'
                    rel='noreferrer noopener'
                  >
                    here
                  </a>
                  .
                </p>
                <p>
                  Registered in England & Wales {config.business.companyNumber}.
                  Registered office: {config.business.address}.
                </p>{' '}
                The Financial Ombudsman Service (FOS) is an agency for
                arbitrating on unresolved complaints between regulated firms and
                their clients. Full details can be found by clicking{' '}
                <a
                  href='http://www.financial-ombudsman.org.uk/'
                  target='_blank'
                  rel='noreferrer noopener'
                >
                  here
                </a>
                .
              </LegalDetails>
            </FooterRow>
          </FooterColumn>
          <FooterColumn>
            <FooterHeading>Pages</FooterHeading>
            {config.pages.map((page, idx) => (
              <FooterLink key={idx} href={page.route}>
                {page.title}
              </FooterLink>
            ))}
          </FooterColumn>
          <FooterColumn>
            <SocialsRow>
              <FooterHeading>Follow Us</FooterHeading>
              <SocialIcons>
                {config.socials.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.url}
                    target='_blank'
                    rel='noreferrer noopener'
                  >
                    {social.label === 'Facebook' && <FaFacebook />}
                    {social.label === 'Twitter' && <FaTwitter />}
                    {social.label === 'Instagram' && <FaInstagram />}
                    {social.label === 'LinkedIn' && <FaLinkedin />}
                    {social.label === 'TikTok' && <FaTiktok />}
                    {social.label === 'X' && <FaSquareXTwitter />}
                  </a>
                ))}
              </SocialIcons>
            </SocialsRow>
            <SocialsRow>
              <FooterHeading>Stay Updated</FooterHeading>
              <NewsletterInput onSubmit={() => console.log('Subscribed!')} />
            </SocialsRow>
          </FooterColumn>
        </FooterContainer>
        <Copyright>&copy; 2024 Acacia Wealth. All rights reserved.</Copyright>
        <Credits href='https://ningi.co.uk'>
          <img src='/ningi-icon.png' alt='Ningi' />
          Website by Ningi
        </Credits>
      </FooterWrapper>
    </OutsideWrapper>
  );
};

export default Footer;
