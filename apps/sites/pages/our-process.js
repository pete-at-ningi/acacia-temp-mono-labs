import React from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  max-width: ${(props) => props.theme.breakpoints.maxWidth};
  margin: 0 auto;
  padding: ${(props) => props.theme.spacings.large};
`;

const ImageBanner = styled.div`
  width: 100%;
  height: 250px;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
  margin-bottom: ${(props) => props.theme.spacings.large};
`;

const Section = styled.section`
  margin-bottom: ${(props) => props.theme.spacings.xlarge};
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontSizes.xxlarge};
  font-weight: bold;
  margin-bottom: ${(props) => props.theme.spacings.large};
  text-align: center;
  color: ${(props) => props.theme.colors.dark};
`;

const Subtitle = styled.h2`
  font-size: ${(props) => props.theme.fontSizes.xlarge};
  margin-bottom: ${(props) => props.theme.spacings.medium};
  color: ${(props) => props.theme.colors.primary};
`;

const StepContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${(props) => props.theme.spacings.large};
  margin-bottom: ${(props) => props.theme.spacings.large};

  @media ${(props) => props.theme.breakpoints.tablet} {
    grid-template-columns: 1fr;
  }
`;

const Step = styled.div`
  padding: ${(props) => props.theme.spacings.large};
  background-color: ${(props) => props.theme.colors.lightGray};
  border-radius: ${(props) => props.theme.borders.radius};
`;

const StepTitle = styled.h3`
  font-size: ${(props) => props.theme.fontSizes.large};
  font-weight: bold;
  margin-bottom: ${(props) => props.theme.spacings.medium};
`;

const StepDescription = styled.p`
  font-size: ${(props) => props.theme.fontSizes.medium};
  margin-bottom: ${(props) => props.theme.spacings.medium};
`;

const FAQContainer = styled.div`
  margin-top: ${(props) => props.theme.spacings.large};
`;

const FAQItem = styled.div`
  margin-bottom: ${(props) => props.theme.spacings.large};
`;

const FAQQuestion = styled.h3`
  font-size: ${(props) => props.theme.fontSizes.large};
  font-weight: bold;
  margin-bottom: ${(props) => props.theme.spacings.small};
  color: ${(props) => props.theme.colors.dark};
`;

const FAQAnswer = styled.p`
  font-size: ${(props) => props.theme.fontSizes.medium};
  color: ${(props) => props.theme.colors.gray};
`;

const HowWeWork = () => {
  const processSteps = [
    {
      step: 'Step 1',
      title: 'Deep Dive',
      description: `In this free, initial meeting, we’ll get to know each other, discover what’s important to you, and understand where you are on your journey. You'll leave this meeting knowing:
      - We’ve listened to your concerns and ambitions
      - If you’d like us to be your financial planner
      - How much designing and building a plan will cost`,
    },
    {
      step: 'Step 2',
      title: 'Designing Your Plan',
      description: `Over the next 2-4 weeks, we’ll work with you to:
      - Clearly define your financial objectives
      - Review your existing finances
      - Design and present your personalised financial plan and cashflow models
      
      Following our design meeting, you'll know:
      - What actions you need to take to improve your position
      - Whether you are on track to achieve your money goals
      - How suitable your current arrangements are`,
    },
    {
      step: 'Step 3',
      title: 'Bringing Your Plan to Life',
      description: `Once you’re happy with your plan, we’ll help you to bring it to life by:
      - Applying for suitable insurance
      - Organising your pensions
      - Setting up new investments
      - Moving cash between accounts`,
    },
    {
      step: 'Step 4',
      title: 'Ongoing Support',
      description: `Once built, we understand your life and priorities may change. We’ll work with you to:
      - Review and adjust your plan as needed
      - Provide ongoing advice
      - Continue to help you make the right decisions with your money
      - Keep you on track with your goals`,
    },
  ];

  const faqs = [
    {
      question: 'What is holistic financial planning?',
      answer:
        'Holistic financial planning is an approach that considers all aspects of your financial life, including investments, taxes, retirement, estate planning, and more, to create a comprehensive plan that aligns with your goals and values.',
    },
    {
      question: 'How do I know if I need a financial planner?',
      answer:
        'If you have financial goals but are unsure how to achieve them, or if you want to ensure your financial decisions are aligned with your long-term objectives, a financial planner can provide valuable guidance and support.',
    },
    {
      question: 'What does the initial consultation involve?',
      answer:
        'The initial consultation is a free, no-obligation meeting where we get to know each other. We discuss your financial goals, concerns, and current situation, and explore how we can help you achieve your objectives.',
    },
    {
      question: 'How much does financial planning cost?',
      answer:
        'The cost of financial planning varies depending on the complexity of your situation and the services you require. We provide a clear and transparent fee structure during our initial consultation, so you know exactly what to expect.',
    },
    {
      question:
        'What is the difference between financial planning and investment advice?',
      answer:
        'Financial planning is a comprehensive approach that considers all aspects of your financial life, while investment advice focuses specifically on managing and growing your investments. Both are important components of a successful financial strategy.',
    },
    {
      question: 'How often will we review my financial plan?',
      answer:
        'We recommend reviewing your financial plan at least once a year or whenever there are significant changes in your life, such as a new job, marriage, or the birth of a child. This ensures your plan remains aligned with your goals.',
    },
    {
      question: 'Can you help with retirement planning?',
      answer:
        'Yes, retirement planning is one of our core services. We help you create a strategy that ensures you can maintain your lifestyle and achieve financial independence in retirement.',
    },
    {
      question: 'What if my financial goals change?',
      answer:
        'We understand that your goals may change over time. We work with you to regularly review and adjust your plan to ensure it continues to meet your evolving needs and objectives.',
    },
    {
      question: 'Do you offer tax planning services?',
      answer:
        'Yes, we provide tax-efficient strategies to help you minimize your tax liabilities while maximizing your wealth. This is an important part of our holistic financial planning approach.',
    },
    {
      question: 'How do I get started?',
      answer:
        'Getting started is easy. Simply contact us to schedule your initial consultation, and we’ll take it from there. We look forward to helping you achieve your financial goals.',
    },
  ];

  return (
    <PageContainer>
      <ImageBanner src='/process.jpg' />

      <Section>
        <Subtitle>Our Process</Subtitle>
        <StepContainer>
          {processSteps.map((step, index) => (
            <Step key={index}>
              <StepTitle>{step.step}</StepTitle>
              <Subtitle>{step.title}</Subtitle>
              <StepDescription>{step.description}</StepDescription>
            </Step>
          ))}
        </StepContainer>
      </Section>

      <ImageBanner src='/questions.jpg' />

      <Section>
        <Subtitle>Frequently Asked Questions</Subtitle>
        <FAQContainer>
          {faqs.map((faq, index) => (
            <FAQItem key={index}>
              <FAQQuestion>{faq.question}</FAQQuestion>
              <FAQAnswer>{faq.answer}</FAQAnswer>
            </FAQItem>
          ))}
        </FAQContainer>
      </Section>
    </PageContainer>
  );
};

export default HowWeWork;
