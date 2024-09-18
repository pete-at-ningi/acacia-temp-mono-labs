import { Content } from 'shared-components'

const holisticFinancialPlanningConfig = {
  subtitle: 'Introducing',
  title: 'Holistic Financial Planning',
  description:
    'At Acacia Wealth, we believe that financial planning is not just about numbers; it’s about creating a life that reflects your values and aspirations. Our holistic approach ensures that every aspect of your financial life is integrated and aligned with your personal and professional goals.',
  content: [
    {
      type: 'paragraph',
      text: 'Holistic financial planning involves more than just managing your investments or planning for retirement. It’s about understanding your complete financial picture and how each component interacts with the others. Our approach helps you navigate the complexities of your financial world with confidence and clarity.',
    },
    {
      type: 'list',
      items: [
        {
          title: 'Personalized Financial Roadmaps.',
          description:
            'We start by understanding your unique situation, including your current financial standing, future goals, and any potential obstacles. This allows us to create a customized financial roadmap that serves as a guide for your journey towards financial independence.',
        },
        {
          title: 'Comprehensive Wealth Management.',
          description:
            'Our wealth management services are designed to help you grow and protect your assets, ensuring that your financial resources are aligned with your goals. We take a proactive approach, regularly reviewing and adjusting your strategies as your life circumstances change.',
        },
        {
          title: 'Strategic Retirement Planning.',
          description:
            'Whether you’re planning to retire in 5 years or 25 years, we help you create a strategy that ensures you can maintain your lifestyle and achieve financial independence in retirement. We consider everything from investment strategies to income distribution to create a plan that works for you.',
        },
        {
          title: 'Tax-Efficient Strategies.',
          description:
            'Our tax-efficient planning strategies are designed to help you minimize your tax liabilities while maximizing your wealth. We work closely with tax professionals to ensure that your financial plan is as tax-efficient as possible.',
        },
      ],
    },
    {
      type: 'paragraph',
      text: 'In addition to these services, we also provide estate planning and legacy building to ensure that your wealth is passed on according to your wishes, and business exit planning to help business owners transition smoothly and maximize the value of their business. Our holistic approach means that every aspect of your financial life is considered and optimized to help you achieve your goals.',
    },
    {
      type: 'title',
      text: 'Why Choose Holistic Financial Planning?',
    },
    {
      type: 'paragraph',
      text: 'Choosing holistic financial planning means choosing a path that is uniquely yours. It’s about ensuring that every financial decision you make is aligned with your values, goals, and life aspirations. At Acacia Wealth, we are committed to guiding you through this process with personalized attention and expert advice.',
    },
    {
      type: 'quote',
      text: '“As a financial adviser at Acacia Wealth, I take pride in helping our clients achieve peace of mind. We ensure that every aspect of their financial lives is carefully managed and aligned with their goals, providing them with a clear and confident roadmap for the future.”',
      author: {
        name: 'John Doe',
        role: 'Client',
        image: '/tyron.jpg',
      },
    },
    {
      type: 'paragraph',
      text: 'Whether you are just starting out on your financial journey, or you are well-established and looking to optimize your wealth, our holistic approach ensures that all the pieces of your financial puzzle fit together seamlessly. Let us help you create a plan that not only meets your needs today but also sets you up for future success.',
    },
    {
      type: 'image',
      src: '/holistic-financial-planning.jpg',
      caption:
        'Our holistic financial planning process is designed to align your financial goals with your personal values and aspirations.',
    },
    {
      type: 'title',
      text: 'The Acacia Wealth Difference',
    },
    {
      type: 'paragraph',
      text: 'At Acacia Wealth, we are more than just financial advisors; we are your partners in achieving financial wellness. Our holistic approach means that we look at the big picture, integrating all aspects of your financial life into a cohesive plan. We take the time to understand your unique needs and goals, and we are with you every step of the way as you work towards achieving them.',
    },
    {
      type: 'paragraph',
      text: 'With a commitment to excellence and a focus on building long-term relationships, Acacia Wealth is the trusted partner you need to navigate life’s financial complexities with confidence and peace of mind.',
    },
  ],
};
const OurClients = () => {
  return (
    <>
      <Content.Basic config={holisticFinancialPlanningConfig} />
    </>
  );
};

export default OurClients;
