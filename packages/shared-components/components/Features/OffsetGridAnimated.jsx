import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion'; // Import framer-motion

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

const FeaturesGrid = styled(motion.dl)` /* Add motion.dl for animation */
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  @media ${(props) => props.theme.breakpoints.tablet} {
    grid-template-columns: 1fr 1fr;
  }
`;

const FeatureItem = styled(motion.div)` /* Add motion.div for animation */
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

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Staggered effect between items
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

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

          {/* FeaturesGrid with motion for animation */}
          <FeaturesGrid
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.7 }} // Triggers when 70% in view
          >
            {services.items.map((feature) => (
              <FeatureItem key={feature.name} variants={itemVariants}>
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
