import { Hero } from 'shared-components';
import { Features } from 'shared-components';
import { Newsletter } from 'shared-components';
import { Testimonials } from 'shared-components';
import { Misc } from 'shared-components';
import { Stats } from 'shared-components';
import { HeaderSections } from 'shared-components';

import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  LockClosedIcon,
  ChartBarIcon,
  BanknotesIcon,
  ShieldCheckIcon,
  UsersIcon,
  ClockIcon,
  TrophyIcon,
} from '@heroicons/react/20/solid';

const HomePage = () => {
  const heroConfig = {
    imageUrl: '/home-hero.png',
    title: 'Your trusted partner, wherever life’s journeys take you.',
    subtitle:
      'Tailored, no-nonsense financial planning. It’s the passport to the life you want now, to the future you dream of – and to creating a lasting legacy for future generations.',
    primaryCTA: {
      label: 'Speak to an adviser',
      route: '/contact',
    },
    secondaryCTA: {
      label: 'Meet the Team',
      route: '/the-team',
    },
  };
  const ourClients = {
    imageUrl: '/our-clients.png',
    pretitle: 'Our Clients',
    title:
      'Helping Aspirational Families and Professionals Secure Their Future',
    subtitle:
      'At Acacia Wealth, we work with clients who are navigating complex financial decisions in a fast-paced world. Whether you’re a young professional planning for your first home or a family securing wealth for future generations, we provide tailored financial advice that supports your goals and values.',
    items: [
      {
        title: 'Aspirational Families',
        content:
          'Supporting families who are juggling careers, childcare, and life’s priorities, ensuring their finances grow as their dreams evolve.',
      },
      {
        title: 'Legacy Builders',
        content:
          'We work with clients who are thoughtful about creating a meaningful legacy, whether through financial security or making memories with loved ones.',
      },
      {
        title: 'Young Professionals',
        content:
          'Helping ambitious professionals make informed decisions on saving, investing, and planning for long-term financial success while navigating their careers.',
      },
      {
        title: 'Proactive Planning and Support',
        content:
          'We provide ongoing support, regular reviews, and expert advice, ensuring your financial plan adapts as your life and priorities change.',
      },
    ],
    CTA: {
      label: 'More about our Clients',
      route: '/our-clients',
    },
  };

  const whyAcacia = {
    imageUrl: '/leaf.png',
    pretitle: 'Why Acacia?',
    title: 'Your Trusted Financial Partner',
    subtitle:
      'At Acacia Wealth, we combine decades of experience with a deeply personal approach. We offer financial planning that not only secures your future but empowers you to live the life you want. Our commitment to transparent advice, cutting-edge technology, and a proactive relationship ensures that you have a trusted partner every step of the way.',
    items: [
      {
        icon: ArrowPathIcon,
        title: 'Holistic Planning',
        content:
          'We take a 360-degree view of your financial life, helping you align your goals, values, and aspirations with a clear plan for your future.',
      },
      {
        icon: CloudArrowUpIcon,
        title: 'Client-Centered Approach',
        content:
          'We build long-term relationships with our clients, offering personalized advice and support that evolves as your life changes.',
      },
      {
        icon: LockClosedIcon,
        title: 'Transparent and Trusted',
        content:
          'With our jargon-free advice and transparent fee structure, you always know where you stand, ensuring you feel confident in every decision.',
      },
    ],
  };
  const services = {
    title: 'Our Services',
    subtitle: 'What We Do',
    description:
      'At Acacia Wealth, we provide a comprehensive range of financial planning services tailored to meet your unique needs.',
    items: [
      {
        name: 'Holistic financial planning',
        description:
          'We guide you through your financial journey, creating tailored plans to help you achieve financial freedom and fulfillment, no matter your life stage.',
        href: '/what-we-do/holistic-financial-planning',
        icon: ArrowPathIcon,
      },
      {
        name: 'Retirement planning',
        description:
          'Ensure your financial independence in retirement with comprehensive planning that lets you choose whether to work or enjoy your freedom.',
        href: '/what-we-do/retirement-planning',
        icon: LockClosedIcon,
      },
      {
        name: 'Investment advice',
        description:
          'Expert investment strategies to help you grow your wealth while managing risk, tailored to your goals and risk tolerance.',
        href: '/what-we-do/investment-advice',
        icon: CloudArrowUpIcon,
      },
      {
        name: 'Tax-efficient strategies',
        description:
          'Optimise your tax situation with strategies that help you keep more of your hard-earned money and achieve your financial goals.',
        href: '/what-we-do/tax-efficient-strategies',
        icon: ChartBarIcon,
      },
      {
        name: 'Estate planning & will writing',
        description:
          'Secure your legacy by ensuring that your assets are passed on according to your wishes, protecting your loved ones and your wealth.',
        href: '/what-we-do/estate-planning-will-writing',
        icon: BanknotesIcon,
      },
      {
        name: 'Business exit planning',
        description:
          'Plan for a successful business exit with strategies designed to maximise value and ensure a smooth transition.',
        href: '/what-we-do/business-exit-planning',
        icon: ShieldCheckIcon,
      },
    ],
  };

  const teamSectionConfig = {
    subheading: 'Good financial planning',
    heading: '...is a team effort',
    paragraph:
      'At Acacia Wealth, we pride ourselves on having a well-rounded team of experts to support you with all elements of financial planning and administration. Our team works collaboratively to ensure every aspect of your financial journey is covered, from investments to estate planning, ensuring you have a comprehensive plan that meets your goals.',
    badges: [
      {
        icon: UsersIcon,
        number: 8,
        description: 'Team Members',
      },
      {
        icon: ClockIcon,
        number: 142,
        description: 'Years Combined Experience',
      },
      {
        icon: TrophyIcon,
        number: 24,
        description: 'Financial Planning Exams Passed',
      },
    ],
    cta: {
      text: 'Meet the Team',
      link: '/team',
    },
    videoUrl:
      'https://player.vimeo.com/video/1005109818?h=f467e048b6&amp;badge=0&amp;autopause=0&amp;transparent=0&amp;player_id=0&amp;app_id=5847',
  };

  const questionsConfig = {
    boldText: 'Your questions',
    title: 'Financial planning, simplified',
    description:
      'We often get people come to us and ask these kinds of questions. We are here to help you find the answers that are right for you.',
    questions: [
      {
        title: 'How do I know if I’m saving enough for my future?',
        text: 'Our team will guide you in assessing your savings plan.',
      },
      {
        title: 'Are my pensions and investments in the right place?',
        text: 'Get expert advice on the optimal placement of your assets.',
      },
      {
        title: 'What would happen to my family if I couldn’t work?',
        text: 'We can help you set up the right protections.',
      },
      {
        title: 'When can I realistically think about stopping work?',
        text: 'We’ll create a clear retirement roadmap.',
      },
      {
        title: 'How can I take money out of my business?',
        text: 'Explore tax-efficient strategies for business owners.',
      },
      {
        title: 'Am I doing all I can to plan ahead and save tax?',
        text: 'We’ll ensure you’re maximizing your tax savings opportunities.',
      },
    ],
  };

  const testimonialsConfig = {
    subheading: 'Testimonials',
    heading: 'We have worked with hundreds of amazing people',
    featuredTestimonial: {
      body: 'Acacia Wealth has been a game changer for our family. The advice on inheritance planning was invaluable.',
      author: {
        name: 'Mr. and Mrs. Jones',
        area: 'Inheritance Planning',
        imageUrl:
          'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=800&q=80',
      },
    },
    testimonials: [
      {
        body: 'The team at Acacia made our retirement planning stress-free and straightforward. Their detailed approach gave us confidence in our financial future.',
        author: {
          name: 'John and Susan Smith',
          area: 'Retirement Planning',
          imageUrl:
            'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
      {
        body: 'They provided expert advice on our investments, helping us achieve our financial goals in a more efficient and strategic manner.',
        author: {
          name: 'Michael Johnson',
          area: 'Investments',
          imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },

      {
        body: 'We couldn’t be happier with the estate planning services provided by Acacia. They ensured that every detail was covered, allowing us to feel secure in our legacy planning.',
        author: {
          name: 'Emily and David Wilson',
          area: 'Estate Planning',
          imageUrl:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
      {
        body: 'Acacia helped us understand the best ways to take money out of our business efficiently. Their expertise saved us a significant amount of time and potential tax implications.',
        author: {
          name: 'Sarah and Matthew Taylor',
          area: 'Business Exit Strategies',
          imageUrl:
            'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },

      {
        body: 'After working with Acacia Wealth, we have a clear roadmap for our financial future. Their team is approachable, knowledgeable, and always ready to answer our questions.',
        author: {
          name: 'Jessica Brown',
          area: 'Financial Planning',
          imageUrl:
            'https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
      {
        body: 'The advice we received from Acacia on managing our investments has been outstanding. Their tailored approach meant that our portfolio was perfectly aligned with our risk tolerance and long-term goals.',
        author: {
          name: 'Steven and Laura Green',
          area: 'Investment Advice',
          imageUrl:
            'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },

      {
        body: 'Acacia Wealth provided us with exceptional advice on inheritance tax planning, ensuring our assets would be passed on according to our wishes while minimizing tax exposure.',
        author: {
          name: 'Thomas and Catherine Blake',
          area: 'Inheritance Tax Planning',
          imageUrl:
            'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
      {
        body: 'Their team helped us streamline our business finances and provided expert guidance on making our business more tax-efficient. We highly recommend Acacia to any business owner looking for solid financial advice.',
        author: {
          name: 'Daniel Richards',
          area: 'Business Financial Planning',
          imageUrl:
            'https://images.unsplash.com/photo-1516570161787-df5e439ce49f?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },

      {
        body: 'Acacia Wealth took the time to understand our unique situation and provided us with a comprehensive financial plan that addresses our current needs and future aspirations. Their level of personalized service is unparalleled.',
        author: {
          name: 'Maria Garcia',
          area: 'Personal Financial Planning',
          imageUrl:
            'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
      {
        body: 'We approached Acacia for advice on setting up a trust for our grandchildren. Their expert advice helped us structure the trust in a way that benefits our family for generations to come.',
        author: {
          name: 'The Harris Family',
          area: 'Trusts and Estates',
          imageUrl:
            'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },

      {
        body: 'Acacia helped me understand the complexities of pension planning. With their guidance, I’m confident that I’ll be able to retire comfortably when the time comes.',
        author: {
          name: 'Patrick Miller',
          area: 'Pension Planning',
          imageUrl:
            'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
      {
        body: 'As a young couple just starting out, we were overwhelmed by the financial decisions we needed to make.',
        author: {
          name: 'Kelly and James White',
          area: 'Young Couples Financial Planning',
          imageUrl:
            'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
    ],
  };

  const QuoteConfig = {
    imageUrl: '/ben_hayward.jpg',
    quote:
      'At Acacia Wealth, our clients’ futures are our priority. I believe that financial planning is not just about numbers; it’s about building trust, understanding your unique story, and guiding you towards your goals with compassion and expertise. With years of experience and a dedication to making complex financial decisions clear and manageable, I’m here to help you achieve financial confidence and security for you and your family.',
    authorName: 'Ben Hayward',
    authorTitle: 'Financial Planner & Founder',
  };

  const newsletterConfig = {
    privacyUrl: '/privacy',
  };

  const calendlyConfig = {
    url: 'https://calendly.com/ben-hayward-jhwm/30min',
  };

  return (
    <>
      <Hero.Basic config={heroConfig} />
      <Misc.Spacing />
      <Stats.SplitWithImage config={ourClients} />
      <Misc.Spacing />
      <HeaderSections.Basic config={whyAcacia} />
      <Features.Basic services={services} />
      <Features.Video config={teamSectionConfig} />
      <Newsletter.Simple config={newsletterConfig} />
      <Misc.VouchedForCarousel />
      <Features.Checklist config={questionsConfig} />
      <Misc.CalendlyEmbed config={calendlyConfig} />
      <Testimonials.Basic config={testimonialsConfig} />
      <Misc.VouchedForRating />
      <Testimonials.Quote config={QuoteConfig} />
    </>
  );
};

export default HomePage;
