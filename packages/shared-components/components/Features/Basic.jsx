import React from 'react';
import styled from 'styled-components';
import DividerLine from '../Misc/DividerLine';
const OutsideWrapper = styled.div`
  padding: ${(props) => props.theme.spacings.xlarge}
    ${(props) => props.theme.spacings.large};
`;
const ServicesSection = styled.section`
  max-width: ${(props) => props.theme.breakpoints.maxWidth};
  margin: 0 auto;
`;

const SectionHeader = styled.div``;

const SectionTitle = styled.h2`
  font-size: ${(props) => props.theme.fontSizes.large};
  font-weight: 700;
  color: ${(props) => props.theme.colors.primary};
`;

const SectionSubtitle = styled.p`
  font-size: ${(props) => props.theme.fontSizes.xlarge};
  font-weight: 700;
  margin-top: ${(props) => props.theme.spacings.small};
  color: ${(props) => props.theme.colors.dark};
`;

const SectionDescription = styled.p`
  font-size: ${(props) => props.theme.fontSizes.medium};
  color: ${(props) => props.theme.colors.gray};
  margin-top: ${(props) => props.theme.spacings.medium};
  max-width: 850px;
`;

const ServicesGrid = styled.dl`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${(props) => props.theme.spacings.large};
  margin-top: ${(props) => props.theme.spacings.large};

  @media ${(props) => props.theme.breakpoints.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${(props) => props.theme.breakpoints.desktop} {
    grid-template-columns: repeat(3, 1fr);
  }

  @media ${(props) => props.theme.breakpoints.mobile} {
    grid-template-columns: 1fr;
  }
`;

const ServiceItem = styled.a`
  display: flex;
  flex-direction: column;
  max-width: 350px;
  &:hover {
    opacity: ${(props) => props.theme.hover.opacity};
  }

  @media ${(props) => props.theme.breakpoints.mobile} {
    max-width: 550px;
  }
`;

const ServiceTitle = styled.dt`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.spacings.small};
  font-size: ${(props) => props.theme.fontSizes.large};
  font-weight: 600;
  color: ${(props) => props.theme.colors.dark};
  svg {
    width: 24px;
    height: 24px;
    fill: ${(props) => props.theme.colors.primary};
  }
`;

const ServiceDescription = styled.dd`
  font-size: ${(props) => props.theme.fontSizes.medium};
  color: ${(props) => props.theme.colors.gray};
  margin-top: ${(props) => props.theme.spacings.small};
`;

const LearnMoreLink = styled.p`
  margin-top: ${(props) => props.theme.spacings.medium};
  font-size: ${(props) => props.theme.fontSizes.small};
  font-weight: 600;
  color: ${(props) => props.theme.colors.primary};
  text-decoration: none;

  &:hover {
    color: ${(props) => props.theme.colors.secondary};
  }
`;

const Services = ({ services }) => {
  return (
    <OutsideWrapper>
      <ServicesSection>
        <SectionHeader>
          <SectionTitle>{services.title}</SectionTitle>
          <SectionSubtitle>{services.subtitle}</SectionSubtitle>
          <SectionDescription>{services.description}</SectionDescription>
          <DividerLine />
        </SectionHeader>
        <ServicesGrid>
          {services.items.map((service) => (
            <ServiceItem key={service.name} href={service.href}>
              <ServiceTitle>
                <service.icon aria-hidden='true' />
                {service.name}
              </ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>
              <LearnMoreLink>
                Learn more <span aria-hidden='true'>→</span>
              </LearnMoreLink>
            </ServiceItem>
          ))}
        </ServicesGrid>
      </ServicesSection>
    </OutsideWrapper>
  );
};

export default Services;
