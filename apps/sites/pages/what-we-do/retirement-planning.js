import { Content } from 'shared-components';

const retirementPlanningConfig = {
  subtitle: 'Introducing',
  title: 'Retirement Planning',
  description:
    'At Acacia Wealth, we understand that retirement is not just an end, but a new beginning. Our retirement planning services are designed to ensure that you can enjoy your post-work years with financial security and peace of mind.',
  content: [
    {
      type: 'paragraph',
      text: 'Retirement planning at Acacia Wealth goes beyond simply saving for the future. We work with you to create a comprehensive strategy that encompasses all aspects of your financial life, ensuring that you can retire on your terms and with confidence.',
    },
    {
      type: 'list',
      items: [
        {
          title: 'Customized Retirement Strategies.',
          description:
            'We take the time to understand your vision for retirement and craft a plan that is tailored to your unique goals and financial situation. Whether you dream of traveling the world, pursuing new hobbies, or simply enjoying more time with loved ones, we help make your retirement dreams a reality.',
        },
        {
          title: 'Income Planning and Distribution.',
          description:
            'One of the biggest challenges in retirement is ensuring that your savings last throughout your retirement years. We create a detailed income plan that considers your lifestyle, inflation, and other factors to ensure that you have a steady and reliable income stream during retirement.',
        },
        {
          title: 'Investment Management.',
          description:
            'Our investment strategies are designed to grow your retirement savings while managing risk. We provide ongoing management and adjustments to your investment portfolio to ensure it continues to align with your retirement goals.',
        },
        {
          title: 'Healthcare and Long-Term Care Planning.',
          description:
            'We help you navigate the complexities of healthcare in retirement, including long-term care planning, to ensure that your healthcare needs are met without compromising your financial security.',
        },
        {
          title: 'Tax-Efficient Withdrawal Strategies.',
          description:
            'Minimizing taxes in retirement is critical to preserving your wealth. We develop tax-efficient strategies for withdrawing from your retirement accounts, ensuring that you keep more of your hard-earned money.',
        },
      ],
    },
    {
      type: 'paragraph',
      text: 'Our retirement planning services are designed to provide you with peace of mind, knowing that your financial future is secure. We work with you every step of the way, from the initial planning stages to ongoing management and adjustments, ensuring that your retirement is everything you want it to be.',
    },
    {
      type: 'title',
      text: 'Why Choose Acacia Wealth for Retirement Planning?',
    },
    {
      type: 'paragraph',
      text: 'At Acacia Wealth, we are committed to helping you achieve financial independence in retirement. Our personalized approach ensures that your retirement plan is tailored to your unique goals and financial situation, giving you the confidence to enjoy your retirement years to the fullest.',
    },
    {
      type: 'quote',
      text: '“Helping our clients prepare for retirement is one of the most rewarding aspects of our work. We take pride in knowing that we have helped them achieve financial security and the freedom to enjoy their retirement on their own terms.”',
      author: {
        name: 'Tyron Edmonds',
        role: 'Financial Planner & Managing Director at Acacia Wealth',
        image: '/tyron_edmonds_min.jpg',
      },
    },
    {
      type: 'paragraph',
      text: 'Retirement should be a time of joy and relaxation, not worry and uncertainty. Let Acacia Wealth help you create a retirement plan that allows you to live your best life, free from financial stress.',
    },
    {
      type: 'image',
      src: '/retirement-planning.jpg',
      caption:
        'Our retirement planning services help you navigate the complexities of retirement, ensuring that you can enjoy your post-work years with confidence and security.',
    },
    {
      type: 'title',
      text: 'The Acacia Wealth Difference',
    },
    {
      type: 'paragraph',
      text: 'At Acacia Wealth, we believe that retirement planning is about more than just numbers. It’s about understanding your dreams, aspirations, and what you want your retirement to look like. Our personalized approach ensures that your retirement plan is as unique as you are, providing you with the confidence to embrace your future.',
    },
    {
      type: 'paragraph',
      text: 'With a focus on long-term relationships and a commitment to your success, Acacia Wealth is here to guide you through every stage of your retirement journey. Trust us to help you create a retirement plan that not only meets your needs today but also adapts to your changing circumstances over time.',
    },
  ],
};

const RetirementPlanning = () => {
  return (
    <>
      <Content.Basic config={retirementPlanningConfig} />
    </>
  );
};

export default RetirementPlanning;
