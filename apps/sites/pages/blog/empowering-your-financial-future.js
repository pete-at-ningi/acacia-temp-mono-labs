import { Content } from 'shared-components';

const empowerFutureConfig = {
  subtitle: 'Introducing',
  title: 'Empowering Your Financial Future',
  description:
    'Empowering your financial future is about taking control of your finances and making informed decisions. At Acacia Wealth, we provide the guidance and tools you need to secure your financial future.',
  content: [
    {
      type: 'paragraph',
      text: 'Taking control of your financial future starts with understanding your current situation and making informed decisions that align with your long-term goals. At Acacia Wealth, we empower you with the knowledge and strategies you need to build a secure financial future.',
    },
    {
      type: 'list',
      items: [
        {
          title: 'Financial Goal Setting.',
          description:
            'Setting clear financial goals is the first step towards empowerment. We help you define your financial objectives, whether it’s saving for retirement, purchasing a home, or building wealth, and create a plan to achieve them.',
        },
        {
          title: 'Budgeting and Cash Flow Management.',
          description:
            'Effective budgeting is key to taking control of your finances. We help you create a budget that aligns with your goals and provides the foundation for financial security. Our cash flow management strategies ensure that your money is working for you.',
        },
        {
          title: 'Investment Strategies.',
          description:
            'Investing is a powerful tool for building wealth and securing your financial future. We provide expert investment advice, helping you develop a diversified portfolio that aligns with your risk tolerance and financial goals.',
        },
        {
          title: 'Risk Management and Insurance.',
          description:
            'Protecting your financial future requires managing risk. We help you identify potential risks and recommend insurance solutions that provide the coverage you need to safeguard your assets and income.',
        },
      ],
    },
    {
      type: 'paragraph',
      text: 'Empowering your financial future is an ongoing process. At Acacia Wealth, we provide the guidance and support you need to make informed decisions and take control of your finances. Our goal is to help you build a secure financial future that aligns with your values and aspirations.',
    },
    {
      type: 'title',
      text: 'Why Choose Acacia Wealth for Financial Empowerment?',
    },
    {
      type: 'paragraph',
      text: 'At Acacia Wealth, we believe that financial empowerment is about more than just managing money—it’s about achieving your goals and living the life you want. Our personalized approach ensures that your financial plan is tailored to your unique needs and circumstances, providing you with the tools and confidence to succeed.',
    },
    {
      type: 'quote',
      text: '“Empowering our clients to take control of their financial future is at the heart of what we do. At Acacia Wealth, we provide the guidance and strategies needed to help our clients achieve financial independence and live the life they’ve always dreamed of.”',
      author: {
        name: 'Tyron Edmonds',
        role: 'Adviser at Acacia Wealth',
        image: '/tyron_edmonds_min.jpg',
      },
    },
    {
      type: 'paragraph',
      text: 'Whether you are just starting out or looking to take your finances to the next level, Acacia Wealth is here to help. Our comprehensive financial planning services are designed to empower you with the knowledge and tools you need to achieve your financial goals and build a secure future.',
    },
    {
      type: 'image',
      src: '/blog/empower-future.jpg',
      caption:
        'Empowering your financial future with Acacia Wealth: Taking control of your finances and achieving your goals.',
    },
    {
      type: 'title',
      text: 'The Acacia Wealth Difference',
    },
    {
      type: 'paragraph',
      text: 'At Acacia Wealth, we are committed to your success. Our holistic approach to financial planning ensures that every aspect of your financial life is integrated and aligned with your goals. We take the time to understand your unique needs and provide personalized advice and strategies that empower you to take control of your financial future.',
    },
    {
      type: 'paragraph',
      text: 'Trust Acacia Wealth to help you achieve financial empowerment. With our expert guidance and support, you can build the future you’ve always envisioned.',
    },
  ],
};

const EmpowerFuture = () => {
  return (
    <>
      <Content.Basic config={empowerFutureConfig} />
    </>
  );
};

export default EmpowerFuture;
