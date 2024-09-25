import React from 'react';
import styled from 'styled-components';

const OutsideWrapper = styled.div`
  background-color: white;
  padding: 3rem 1.5rem;
`;

const ServicesSection = styled.section`
  max-width: ${(props) => props.theme.breakpoints.maxWidth};
  margin: 0 auto;
`;

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  @media ${(props) => props.theme.breakpoints.tablet} {
    grid-template-columns: 1fr 2fr;
    gap: 2rem;
  }

  @media ${(props) => props.theme.breakpoints.desktop} {
    grid-template-columns: 1fr 2fr; 
  }
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.dark};
  margin-bottom: 1rem;

  @media ${(props) => props.theme.breakpoints.tablet} {
    font-size: 2.5rem;
  }
`;

const SectionSubtitle = styled.p`
  font-size: 1.25rem;
  font-weight: 500;
  color: ${(props) => props.theme.colors.gray};
  margin-bottom: 1rem;
`;

const SectionDescription = styled.p`
  font-size: 1rem;
  color: ${(props) => props.theme.colors.gray};
  margin-bottom: 1.5rem;
`;

const FeaturesGrid = styled.dl`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  @media ${(props) => props.theme.breakpoints.tablet} {
    grid-template-columns: 1fr 1fr;
  }
`;

const FeatureItem = styled.div`
  display: flex;
  flex-direction: column;
`;

const FeatureIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.5rem;
  width: 2.5rem; 
  margin-bottom: 1.5rem;
  border-radius: 0.5rem;
`;

const FeatureTitle = styled.dt`
  font-size: 1rem;
  font-weight: 600;
  color: ${(props) => props.theme.colors.dark};
`;

const FeatureDescription = styled.dd`
  margin-top: 0.25rem;
  font-size: 1rem;
  color: ${(props) => props.theme.colors.gray};
`;

const ServicesFeature = ({ services }) => {
  return (
    <OutsideWrapper>
      <ServicesSection>
        <GridWrapper>
          <LeftColumn>
            <SectionTitle>{services.title}</SectionTitle>
            <SectionSubtitle>{services.subtitle}</SectionSubtitle> 
            <SectionDescription>{services.description}</SectionDescription> 
          </LeftColumn>

          <FeaturesGrid>
            {services.items.map((feature) => (
              <FeatureItem key={feature.name}>
                <FeatureIconWrapper>
                  <feature.icon aria-hidden="true" />
                </FeatureIconWrapper>
                <FeatureTitle>{feature.name}</FeatureTitle>
                <FeatureDescription>{feature.description}</FeatureDescription>
              </FeatureItem>
            ))}
          </FeaturesGrid>
        </GridWrapper>
      </ServicesSection>
    </OutsideWrapper>
  );
};

export default ServicesFeature;
