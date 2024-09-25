import { Newsletter } from 'shared-components';
import { BlogFeatured } from 'shared-components';

const HomePage = () => {
  const config = {
    route: '/blog',
    title: 'Acacia Wealth Blog',
    featuredIntro: 'From our blog',
    featuredSub: 'Latest industry news and financial planning insights',
    description:
      'Welcome to the Acacia Wealth blog, where we share the latest financial planning tips, news, and insights. Our experienced advisers offer valuable content on managing your wealth, securing your legacy, and empowering your financial future. Stay updated with the Acacia Wealth blog today.',
    keywords:
      'financial planning, wealth management, retirement planning, investment strategies, inheritance tax planning, financial advice UK, wealth building, legacy planning, financial literacy, Birmingham financial advisers, London financial advisers',
    ogTitle: 'Acacia Wealth Blog',
    ogType: 'website',
    ogUrl: 'https://www.acaciawealth.co.uk/blog',
    ogImage: '/android-chrome-512x512.png',
    content: [
      {
        route: '/blog/empowering-your-financial-future',
        title: 'Empowering Your Financial Future',
        description:
          'Empowering your financial future is about taking control of your finances and making informed decisions that support your long-term goals. In this article, we explore how to empower your financial future with Acacia Wealth.',
        keywords:
          'financial planning, wealth management, retirement planning, investment strategies, inheritance tax planning, financial advice UK, wealth building, legacy planning, financial literacy, Birmingham financial advisers, London financial advisers',
        ogTitle: 'Empowering Your Financial Future | Acacia Wealth Blog',
        ogType: 'website',
        ogUrl:
          'https://www.acaciawealth.co.uk/blog/empowering-your-financial-future',
        ogImage: '/android-chrome-512x512.png',
        image: '/blog/empower-future.jpg',
        date: '8th April 2024',
        author: {
          name: 'Tyron Edmonds',
          role: 'Adviser at Acacia Wealth',
          imageUrl: '/tyron_edmonds_min.jpg',
          href: '/the-team',
        },
      },
      {
        route: '/blog/securing-your-legacy',
        title: 'Securing Your Legacy',
        description:
          'Securing your legacy is an essential part of financial planning, ensuring that your assets are protected and passed on to future generations. In this article, we explore the importance of legacy planning and how to secure your legacy with Acacia Wealth.',
        keywords:
          'financial planning, wealth management, retirement planning, investment strategies, inheritance tax planning, financial advice UK, wealth building, legacy planning, financial literacy, Birmingham financial advisers, London financial advisers',
        ogTitle: 'Securing Your Legacy | Acacia Wealth Blog',
        ogType: 'website',
        ogUrl: 'https://www.acaciawealth.co.uk/blog/securing-your-legacy',
        ogImage: '/android-chrome-512x512.png',
        image: '/blog/secure-legacy.jpg',
        date: '15th May 2024',
        author: {
          name: 'Tyron Edmonds',
          role: 'Adviser at Acacia Wealth',
          imageUrl: '/tyron_edmonds_min.jpg',
          href: '/the-team',
        },
      },
      {
        route: '/blog/how-to-build-wealth',
        title: 'How to Build Wealth',
        description:
          'Building wealth is a journey that requires careful planning, discipline, and patience. In this article, we explore the key steps to building wealth and achieving your financial goals. Discover how to build wealth with Acacia Wealth today.',
        keywords:
          'financial planning, wealth management, retirement planning, investment strategies, inheritance tax planning, financial advice UK, wealth building, legacy planning, financial literacy, Birmingham financial advisers, London financial advisers',
        ogTitle: 'How to Build Wealth | Acacia Wealth Blog',
        ogType: 'website',
        ogUrl: 'https://www.acaciawealth.co.uk/blog/how-to-build-wealth',
        ogImage: '/android-chrome-512x512.png',
        image: '/blog/build-wealth.jpg',
        date: '12th June 2024',
        author: {
          name: 'Tyron Edmonds',
          role: 'Adviser at Acacia Wealth',
          imageUrl: '/tyron_edmonds_min.jpg',
          href: '/the-team',
        },
      },
      {
        route: '/blog/what-new-government-means-for-you',
        title: 'A New Government - What Could This Mean for You?',
        description:
          'With the recent UK election results, the Labour party takes over, and Rachel Reeves becomes the first female Chancellor of the Exchequer. What does this mean for your personal finances? In this article, we explore the key changes and their potential impact.',
        keywords:
          'financial planning, UK election, government change, personal finances, Labour policies, investment strategies, Acacia Wealth, UK financial advisers, pension planning, tax policies',
        ogTitle:
          'A New Government - What Could This Mean for You? | Acacia Wealth Blog',
        ogType: 'website',
        ogUrl:
          'https://www.acaciawealth.co.uk/blog/what-new-government-means-for-you',
        ogImage: '/android-chrome-512x512.png',
        image: '/blog/new-government-impact.jpg',
        date: '19th July 2024',
        author: {
          name: 'Tyron Edmonds',
          role: 'Adviser at Acacia Wealth',
          imageUrl: '/tyron_edmonds_min.jpg',
          href: '/the-team',
        },
      },
      {
        route: '/blog/power-of-marginal-gains-in-financial-planning',
        title:
          'The Power of Marginal Gains in Financial Planning: Lessons from British Cycling',
        description:
          'Discover how the concept of marginal gains, made famous by British Cycling, can be applied to financial planning. Learn how small, incremental improvements can create significant long-term benefits for your financial health.',
        keywords:
          'financial planning, marginal gains, British Cycling, personal finance, incremental improvements, wealth building, budget management, Acacia Wealth, UK financial advisers, financial goals',
        ogTitle:
          'The Power of Marginal Gains in Financial Planning | Acacia Wealth Blog',
        ogType: 'website',
        ogUrl:
          'https://www.acaciawealth.co.uk/blog/power-of-marginal-gains-in-financial-planning',
        ogImage: '/android-chrome-512x512.png',
        image: '/blog/marginal-gains-financial-planning.png',
        date: '7th August 2024',
        author: {
          name: 'Tyron Edmonds',
          role: 'Adviser at Acacia Wealth',
          imageUrl: '/tyron_edmonds_min.jpg',
          href: '/the-team',
        },
      },
      {
        route: '/blog/how-does-new-school-term-affect-financial-planning',
        title:
          'How Does the New School Term Affect Financial Planning for Working Parents?',
        description:
          'The start of a new school term brings a unique set of financial challenges for working parents. In this article, we explore how to manage childcare, school costs, and financial goals effectively during this period.',
        keywords:
          'financial planning, working parents, school term expenses, childcare costs, financial goals, budget management, Acacia Wealth, back to school, family finances, UK financial advisers',
        ogTitle:
          'How Does the New School Term Affect Financial Planning for Working Parents? | Acacia Wealth Blog',
        ogType: 'website',
        ogUrl:
          'https://www.acaciawealth.co.uk/blog/how-does-new-school-term-affect-financial-planning',
        ogImage: '/android-chrome-512x512.png',
        image: '/blog/back-to-school-financial-planning.png',
        date: '13th September 2024',
        author: {
          name: 'Tyron Edmonds',
          role: 'Adviser at Acacia Wealth',
          imageUrl: '/tyron_edmonds_min.jpg',
          href: '/the-team',
        },
      },
    ],
  };

  return (
    <>
      <Newsletter.Basic />
      <BlogFeatured.Basic config={config} />
    </>
  );
};

export default HomePage;
