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
        date: '2nd September 2024',
        author: {
          name: 'John Doe',
          role: 'Financial Adviser',
          imageUrl:
            'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
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
        date: '5th September 2024',
        author: {
          name: 'John Doe',
          role: 'Financial Adviser',
          imageUrl:
            'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          href: '/the-team',
        },
      },
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
        date: '14th September 2024',
        author: {
          name: 'John Doe',
          role: 'Financial Adviser',
          imageUrl:
            'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          href: '/the-team',
        },
      },
      {
        route: '/blog/financial-literacy-tips',
        title: 'Financial Literacy Tips',
        description:
          'Financial literacy is the foundation of sound financial planning, helping you make informed decisions about your money. In this article, we share valuable financial literacy tips to help you build wealth, secure your legacy, and empower your financial future.',
        keywords:
          'financial planning, wealth management, retirement planning, investment strategies, inheritance tax planning, financial advice UK, wealth building, legacy planning, financial literacy, Birmingham financial advisers, London financial advisers',
        ogTitle: 'Financial Literacy Tips | Acacia Wealth Blog',
        ogType: 'website',
        ogUrl: 'https://www.acaciawealth.co.uk/blog/financial-literacy-tips',
        ogImage: '/android-chrome-512x512.png',
        image: '/blog/financial-literacy.jpg',
        date: '22nd September 2024',
        author: {
          name: 'John Doe',
          role: 'Financial Adviser',
          imageUrl:
            'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          href: '/the-team',
        },
      },
    ],
  };

  return (
    <>
      <Newsletter.Basic />
      <BlogFeatured.Basic limit={3} config={config} />
    </>
  );
};

export default HomePage;
