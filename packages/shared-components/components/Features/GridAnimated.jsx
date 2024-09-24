import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion'; 

const OutsideWrapper = styled.div`
  padding: ${(props) => props.theme.spacings.xlarge} ${(props) => props.theme.spacings.large};
`;

const FeatureSection = styled.section`
  max-width: ${(props) => props.theme.breakpoints.maxWidth};
  margin: 0 auto;
`;

const SectionHeader = styled.div`
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: ${(props) => props.theme.fontSizes.medium};
  font-weight: 600;
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
  margin-left: auto;
  margin-right: auto;
`;

const FeaturesGrid = styled(motion.dl)`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${(props) => props.theme.spacings.large};
  margin-top: ${(props) => props.theme.spacings.large};

  @media ${(props) => props.theme.breakpoints.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${(props) => props.theme.breakpoints.desktop} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${(props) => props.theme.breakpoints.mobile} {
    grid-template-columns: 1fr;
  }
`;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25, 
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const FeatureItem = styled(motion.a)` 
  display: flex;
  align-items: flex-start;
  gap: ${(props) => props.theme.spacings.medium};
  padding-left: ${(props) => props.theme.spacings.large};
  text-decoration: none;
  color: inherit;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: ${(props) => props.theme.hover.opacity};
  }
`;

const FeatureIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 40px;
  border-radius: ${(props) => props.theme.borders.radius};
  flex-shrink: 0;
`;

const FeatureContent = styled.div`
  flex: 1;
`;

const FeatureTitle = styled.dt`
  font-size: ${(props) => props.theme.fontSizes.large};
  font-weight: 600;
  color: ${(props) => props.theme.colors.dark};
`;

const FeatureDescription = styled.dd`
  margin-top: ${(props) => props.theme.spacings.small};
  font-size: ${(props) => props.theme.fontSizes.medium};
  color: ${(props) => props.theme.colors.gray};
`;

const Features = ({ services }) => {
  return (
    <OutsideWrapper>
      <FeatureSection>
        <SectionHeader>
          <SectionTitle>{services.title}</SectionTitle>
          <SectionSubtitle>{services.subtitle}</SectionSubtitle>
          <SectionDescription>{services.description}</SectionDescription>
        </SectionHeader>
        <FeaturesGrid
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
        >
          {services.items.map((feature) => (
            <FeatureItem key={feature.name} href={feature.href} variants={itemVariants}>
              <FeatureIconWrapper>
                <feature.icon aria-hidden="true" />
              </FeatureIconWrapper>
              <FeatureContent>
                <FeatureTitle>{feature.name}</FeatureTitle>
                <FeatureDescription>{feature.description}</FeatureDescription>
              </FeatureContent>
            </FeatureItem>
          ))}
        </FeaturesGrid>
      </FeatureSection>
    </OutsideWrapper>
  );
};

export default Features;
