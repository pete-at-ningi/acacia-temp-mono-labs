export default {
  theme: {
    colors: {
      primary: '#002522',
      secondary: '#003836',
      accent: '#008883',
      light: '#a5cdce',
      dark: '#0e1615',
      white: '#ffffff',
    },
    fonts: {
      primary: "'Nunito Sans', sans-serif",
    },
    fontSizes: {
      small: '0.875rem', // 14px
      medium: '1rem', // 16px
      large: '1.25rem', // 20px
      xlarge: '2.5rem', // 24px
      massive: '3.5rem', // 24px
    },
    spacings: {
      small: '8px',
      medium: '16px',
      large: '24px',
      xlarge: '64px',
    },
    borders: {
      radius: '4px',
    },
    breakpoints: {
      mobile: 'only screen and (max-width: 600px)',
      tablet: 'only screen and (min-width: 601px) and (max-width: 900px)',
      desktop: 'only screen and (min-width: 901px)',
      maxWidth: '1400px',
    },
    nav: {
      logo: '48px',
    },
    hover: { opacity: 0.5 },
  },
  header: {
    title: 'Acacia Wealth',
    description:
      'Your trusted partner, wherever life’s journeys take you. Tailored, no-nonsense financial planning. It’s the passport to the life you want now, to the future you dream of – and to creating a lasting legacy for future generations.',
    keywords:
      'financial planning, wealth management, retirement planning, investment strategies, inheritance tax planning, financial advice UK, wealth building, legacy planning, financial literacy, Birmingham financial advisers, London financial advisers',
    ogTitle:
      'Acacia Wealth | Building Wealth, Securing Legacy, Empowering Your Financial Future',
    ogType: 'website',
    ogUrl: 'https://www.acaciawealth.co.uk/',
    ogImage: '/android-chrome-512x512.png',
    themeColor: '#ffffff',
  },
  business: {
    name: 'Acacia Wealth Ltd',
    address: '7 Bell Yard, London, WC2A 2JR',
    email: 'support@acaciawealth.co.uk',
    FCAnumber: '504742',
    companyNumber: '06956439',
  },
  nav: {
    primaryCTA: {
      label: 'Book a call',
      route: '/contact',
    },
    secondaryCTA: {
      label: 'Subscribe',
      route: '/blog',
    },
    menu: [
      { label: 'Our clients', route: '/our-clients' },
      { label: 'What we do', route: '/what-we-do' },
      { label: 'Our process', route: '/our-process' },
      { label: 'The team', route: '/the-team' },
    ],
  },

  socials: [
    {
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/tyron-edmonds-cfa-chartered-msci-15696415/',
    },
  ],
  legal: [
    { label: 'Privacy Policy', route: '/privacy-policy' },
    { label: 'Terms & Conditions', route: '/terms-and-conditions' },
  ],

  pages: [
    {
      route: '/our-clients',
      title: 'Our clients',
      description:
        'Our clients are at the heart of everything we do. We are dedicated to providing tailored financial planning solutions that empower you to build wealth, secure your legacy, and achieve your financial aspirations. Discover the Acacia Wealth difference today.',
      keywords:
        'financial planning, wealth management, retirement planning, investment strategies, inheritance tax planning, financial advice UK, wealth building, legacy planning, financial literacy, Birmingham financial advisers, London financial advisers',
      ogTitle: 'Our Clients | Acacia Wealth',
      ogType: 'website',
      ogUrl: 'https://www.acaciawealth.co.uk/our-clients',
      ogImage: '/android-chrome-512x512.png',
    },
    {
      route: '/what-we-do',
      title: 'What we do',
      description:
        'At Acacia Wealth, we offer a comprehensive suite of financial planning services designed to help you build wealth, secure your legacy, and empower your financial future. Our experienced advisers are dedicated to providing personalised strategies tailored to your unique needs, ensuring transparency, integrity, and empathy at every step.',
      keywords:
        'financial planning, wealth management, retirement planning, investment strategies, inheritance tax planning, financial advice UK, wealth building, legacy planning, financial literacy, Birmingham financial advisers, London financial advisers',
      ogTitle: 'What We Do | Acacia Wealth',
      ogType: 'website',
      ogUrl: 'https://www.acaciawealth.co.uk/what-we-do',
      ogImage: '/android-chrome-512x512.png',
    },
    {
      route: '/our-process',
      title: 'Our process',
      description:
        'Our process is designed to help you build wealth, secure your legacy, and empower your financial future. We offer a personalised approach to financial planning, ensuring transparency, integrity, and empathy at every step. Discover the Acacia Wealth difference today.',
      keywords:
        'financial planning, wealth management, retirement planning, investment strategies, inheritance tax planning, financial advice UK, wealth building, legacy planning, financial literacy, Birmingham financial advisers, London financial advisers',
      ogTitle: 'Our Process | Acacia Wealth',
      ogType: 'website',
      ogUrl: 'https://www.acaciawealth.co.uk/our-process',
      ogImage: '/android-chrome-512x512.png',
    },
    {
      route: '/the-team',
      title: 'The team',
      description:
        'Our team of experienced financial advisers are dedicated to helping you build wealth, secure your legacy, and empower your financial future. We offer personalised strategies tailored to your unique needs, ensuring transparency, integrity, and empathy at every step. Discover the Acacia Wealth difference today.',
      keywords:
        'financial planning, wealth management, retirement planning, investment strategies, inheritance tax planning, financial advice UK, wealth building, legacy planning, financial literacy, Birmingham financial advisers, London financial advisers',
      ogTitle: 'The Team | Acacia Wealth',
      ogType: 'website',
      ogUrl: 'https://www.acaciawealth.co.uk/the-team',
      ogImage: '/android-chrome-512x512.png',
    },
    {
      route: '/privacy-policy',
      title: 'Privacy Policy',
      description:
        'At Acacia Wealth, we are committed to protecting your privacy and personal information. Our privacy policy outlines how we collect, use, and protect your data, ensuring that your information is secure and confidential. Discover our privacy policy today.',
      keywords:
        'financial planning, wealth management, retirement planning, investment strategies, inheritance tax planning, financial advice UK, wealth building, legacy planning, financial literacy, Birmingham financial advisers, London financial advisers',
      ogTitle: 'Privacy Policy | Acacia Wealth',
      ogType: 'website',
      ogUrl: 'https://www.acaciawealth.co.uk/privacy-policy',
      ogImage: '/android-chrome-512x512.png',
    },
  ],
  blog: {
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
  },
};
