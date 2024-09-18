import { Content } from 'shared-components'

const investmentAdviceConfig = {
  subtitle: 'Introducing',
  title: 'Investment Advice',
  description:
    'At Acacia Wealth, our investment advice is rooted in a deep understanding of your financial goals, risk tolerance, and time horizon. We believe that a well-structured investment plan is key to building and preserving wealth over the long term.',
  content: [
    {
      type: 'paragraph',
      text: 'Investing is a crucial component of any comprehensive financial plan. At Acacia Wealth, we provide expert investment strategies that are designed to help you grow your wealth while managing risk. Our approach is tailored to your unique goals and risk tolerance, ensuring that your investment portfolio is aligned with your financial objectives.',
    },
    {
      type: 'list',
      items: [
        {
          title: 'Personalized Investment Strategies.',
          description:
            'We take the time to understand your financial situation, goals, and risk tolerance. Based on this understanding, we develop a personalized investment strategy that aligns with your overall financial plan, helping you achieve your long-term objectives.',
        },
        {
          title: 'Diversified Portfolios.',
          description:
            'Our investment philosophy is centered around diversification. By spreading your investments across different asset classes, sectors, and geographies, we aim to reduce risk and enhance potential returns. We carefully select investments that complement each other, providing a balanced and resilient portfolio.',
        },
        {
          title: 'Ongoing Portfolio Management.',
          description:
            'Investing is not a one-time activity. We provide ongoing portfolio management services to ensure that your investments remain aligned with your goals. This includes regular reviews and rebalancing, as well as adjustments to your strategy in response to market conditions and changes in your personal circumstances.',
        },
        {
          title: 'Risk Management.',
          description:
            'Understanding and managing risk is a critical part of our investment process. We help you identify the risks associated with different investment options and develop strategies to mitigate them. Whether you have a conservative, moderate, or aggressive risk tolerance, we ensure that your portfolio reflects your comfort level with risk.',
        },
        {
          title: 'Tax-Efficient Investing.',
          description:
            'We integrate tax considerations into our investment advice to help you maximize after-tax returns. By utilizing tax-efficient investment vehicles and strategies, we ensure that your investment gains are as tax-efficient as possible, helping you keep more of your wealth.',
        },
      ],
    },
    {
      type: 'paragraph',
      text: 'Our goal at Acacia Wealth is to provide you with the guidance and expertise you need to make informed investment decisions. We are committed to helping you build a strong, diversified investment portfolio that supports your financial goals and adapts to your changing needs.',
    },
    {
      type: 'title',
      text: 'Why Choose Acacia Wealth for Investment Advice?',
    },
    {
      type: 'paragraph',
      text: 'Choosing Acacia Wealth for investment advice means choosing a partner who is dedicated to your financial success. Our experienced team of advisors takes a holistic approach to investment planning, ensuring that every decision is made with your best interests in mind. We are committed to providing you with personalized, professional advice that helps you achieve your financial goals.',
    },
    {
      type: 'quote',
      text: '“At Acacia Wealth, we believe that successful investing is about more than just picking the right stocks. It’s about creating a balanced, diversified portfolio that aligns with your goals and risk tolerance. Our clients trust us to provide the guidance they need to navigate the complexities of the financial markets and achieve long-term success.”',
      author: {
        name: 'Tyron Smith',
        role: 'Financial Planner and Director',
        image: '/tyron.jpg',
      },
    },
    {
      type: 'paragraph',
      text: 'Whether you are a seasoned investor or just starting out, Acacia Wealth is here to help you navigate the world of investing with confidence. Our tailored investment strategies are designed to grow and protect your wealth, giving you the peace of mind that comes with knowing your financial future is in good hands.',
    },
    {
      type: 'image',
      src: '/investment-advice.jpg',
      caption:
        'Our investment strategies are designed to help you grow your wealth while managing risk, ensuring that your portfolio aligns with your financial goals.',
    },
    {
      type: 'title',
      text: 'The Acacia Wealth Difference',
    },
    {
      type: 'paragraph',
      text: 'At Acacia Wealth, we are committed to providing you with investment advice that is tailored to your unique needs. Our personalized approach, combined with our deep expertise and commitment to excellence, makes us the trusted partner you need to achieve your financial goals.',
    },
    {
      type: 'paragraph',
      text: 'With Acacia Wealth, you can be confident that your investment strategy is designed to support your long-term success, helping you achieve your financial goals while managing risk along the way.',
    },
  ],
};

const InvestmentAdvice = () => {
  return (
    <>
      <Content.Basic config={investmentAdviceConfig} />
    </>
  );
};

export default InvestmentAdvice;
