import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { CheckIcon } from '@heroicons/react/20/solid';

const OutsideWrapper = styled.div`
  padding: ${(props) => props.theme.spacings.xlarge}
    ${(props) => props.theme.spacings.large};
`;

const Section = styled.section`
  max-width: ${(props) => props.theme.breakpoints.maxWidth};
  margin: 0 auto;
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${(props) => props.theme.spacings.large};
  @media ${(props) => props.theme.breakpoints.desktop} {
    grid-template-columns: 1fr 2fr;
  }
`;

const Title = styled.h2`
  font-size: ${(props) => props.theme.fontSizes.xlarge};
  font-weight: 700;
  color: ${(props) => props.theme.colors.black};
  margin-top: 0;
`;

const BoldText = styled.span`
  font-size: ${(props) => props.theme.fontSizes.medium};
  margin: 0;
  font-weight: 700;
  color: ${(props) => props.theme.colors.secondary};
`;

const Description = styled.p`
  font-size: ${(props) => props.theme.fontSizes.medium};
  opacity: 0.8;
  margin-top: ${(props) => props.theme.spacings.small};
  color: ${(props) => props.theme.colors.black};
`;

const QuestionsColumnWrapper = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${(props) => props.theme.spacings.large};
`;

const QuestionWrapper = styled(motion.div)`
  display: flex;
  align-items: flex-start;
  gap: ${(props) => props.theme.spacings.small};
`;

const QuestionIcon = styled(CheckIcon)`
  width: 24px;
  height: 24px;
  color: ${(props) => props.theme.colors.primary};
`;

const QuestionTitle = styled.dt`
  font-size: ${(props) => props.theme.fontSizes.medium};
  font-weight: 600;
  color: ${(props) => props.theme.colors.dark};
`;

const QuestionText = styled.dd`
  font-size: ${(props) => props.theme.fontSizes.small};
  opacity: 0.8;
  color: ${(props) => props.theme.colors.gray};
  margin-top: ${(props) => props.theme.spacings.xsmall};
`;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Adjust this for delay between children animations
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }, // Control individual item animation
};

const QuestionsSection = ({ config }) => {
  return (
    <OutsideWrapper>
      <Section>
        <BoldText>{config.boldText}</BoldText>
        <ContentWrapper>
          <div>
            <Title>{config.title}</Title>
            <Description>{config.description}</Description>
          </div>
          <QuestionsColumnWrapper
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }} // Adjust for triggering in view
          >
            {config.questions.map((question, index) => (
              <QuestionWrapper key={index} variants={itemVariants}>
                <QuestionIcon aria-hidden='true' />
                <div>
                  <QuestionTitle>{question.title}</QuestionTitle>
                  <QuestionText>{question.text}</QuestionText>
                </div>
              </QuestionWrapper>
            ))}
          </QuestionsColumnWrapper>
        </ContentWrapper>
      </Section>
    </OutsideWrapper>
  );
};

export default QuestionsSection;
