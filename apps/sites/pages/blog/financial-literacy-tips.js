import { Content } from 'shared-components';

const financialLiteracyConfig = {
  subtitle: 'Introducing',
  title: 'Financial Literacy Tips',
  description:
    'Financial literacy is the foundation of sound financial planning. At Acacia Wealth, we provide valuable financial literacy tips to help you make informed decisions and build a secure financial future.',
  content: [
    {
      type: 'paragraph',
      text: 'Understanding the basics of personal finance is essential for making informed decisions about your money. At Acacia Wealth, we believe that financial literacy is the key to achieving financial independence and security. In this article, we share essential financial literacy tips to help you navigate the complexities of personal finance.',
    },
    {
      type: 'list',
      items: [
        {
          title: 'Understand Your Income and Expenses.',
          description:
            'The first step to financial literacy is understanding your income and expenses. Create a budget that tracks your income, fixed expenses, and discretionary spending. This will help you manage your money more effectively and identify areas where you can save.',
        },
        {
          title: 'Build an Emergency Fund.',
          description:
            'An emergency fund is a financial safety net that can cover unexpected expenses, such as medical bills or car repairs. Aim to save at least three to six months’ worth of living expenses in an easily accessible account.',
        },
        {
          title: 'Learn the Basics of Investing.',
          description:
            'Investing is a powerful tool for building wealth, but it can also be intimidating. Start by learning the basics of different investment options, such as stocks, bonds, and mutual funds. Understanding these concepts will help you make informed investment decisions that align with your financial goals.',
        },
        {
          title: 'Understand the Importance of Credit.',
          description:
            'Your credit score plays a crucial role in your financial life, affecting your ability to secure loans, mortgages, and even jobs. Learn how to manage your credit responsibly by paying bills on time, keeping credit card balances low, and monitoring your credit report regularly.',
        },
      ],
    },
    {
      type: 'paragraph',
      text: 'Improving your financial literacy is an ongoing process that requires dedication and a willingness to learn. At Acacia Wealth, we are committed to providing you with the resources and guidance you need to build your financial knowledge and achieve your financial goals.',
    },
    {
      type: 'title',
      text: 'Why Choose Acacia Wealth for Financial Literacy?',
    },
    {
      type: 'paragraph',
      text: 'At Acacia Wealth, we believe that financial literacy is the foundation of financial success. Our personalized approach ensures that you have the knowledge and tools you need to make informed decisions about your money and build a secure financial future.',
    },
    {
      type: 'quote',
      text: '“Financial literacy is the key to unlocking your financial potential. At Acacia Wealth, we are dedicated to helping our clients build their financial knowledge, empowering them to make informed decisions and achieve their financial goals.”',
      author: {
        name: 'Tyron Edmonds',
        role: 'Financial Planner & Managing Director at Acacia Wealth',
        image: '/tyron_edmonds_min.jpg',
      },
    },
    {
      type: 'paragraph',
      text: 'Whether you are just starting your financial journey or looking to enhance your financial knowledge, Acacia Wealth is here to help. Our comprehensive financial literacy resources are designed to equip you with the skills and knowledge you need to make informed financial decisions and build a secure future.',
    },
    {
      type: 'image',
      src: '/blog/financial-literacy.jpg',
      caption:
        'Financial literacy tips from Acacia Wealth: Building your financial knowledge and securing your future.',
    },
    {
      type: 'title',
      text: 'The Acacia Wealth Difference',
    },
    {
      type: 'paragraph',
      text: 'At Acacia Wealth, we are committed to your financial education. Our holistic approach to financial planning ensures that every aspect of your financial life is considered and integrated into your plan. We take the time to understand your unique needs and provide personalized advice and strategies that empower you to make informed financial decisions.',
    },
    {
      type: 'paragraph',
      text: 'Trust Acacia Wealth to guide you on your financial literacy journey. With our expert guidance and support, you can build the knowledge and confidence you need to achieve financial success.',
    },
  ],
};

const FinancialLiteracyTips = () => {
  return (
    <>
      <Content.Basic config={financialLiteracyConfig} />
    </>
  );
};

export default FinancialLiteracyTips;
