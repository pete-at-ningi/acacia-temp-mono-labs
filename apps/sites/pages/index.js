import { Hero } from 'shared-components';
import { Features } from 'shared-components';
import { Newsletter } from 'shared-components';
import { Testimonials } from 'shared-components';
import { Misc } from 'shared-components';
import { Stats } from 'shared-components';
import { HeaderSections } from 'shared-components';
import { CTASections } from 'shared-components';

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
  const lcmConfig = {
    imageUrl: '/lcm_mockup.png',
    pretitle: 'A Personal Financial Forecast',
    title: 'Lifetime Cashflow Model',
    subtitle:
      "Our lifetime cashflow modeller helps you assess your current wealth and project retirement needs. It provides a personalized report with tailored recommendations to ensure you're on track. Start today and plan your financial future with confidence.",
    CTAroute: 'https://lcm--d8c2351b.ningi.app/intro',
    CTAlabel: 'Get Started',
  };

  const fhcConfig = {
    imageUrl: '/fhc_mockup.png',
    pretitle: 'A Personal Financial Overview',
    title: 'Financial Health Check',
    subtitle:
      'Our Financial Health Check helps you understand your financial wellbeing by identifying key areas for improvement. It provides a personalized report with clear next steps. Get started today and take control of your financial future.',
    CTAroute: 'https://fhc--e5eab88e.ningi.app/questions',
    CTAlabel: 'Get Started',
  };

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
    vouchedForFirmID: 2418,
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

  const vouchedForConfig = {
    vouchedForFirmID: '2418',
    title: 'What Our Clients Say',
    backgroundImageUrl: '/process.png',
  };

  const teamSectionConfig = {
    subheading: 'Good financial planning',
    heading: '...is a team effort',
    paragraph:
      'At Acacia Wealth, we pride ourselves on having a well-rounded team of experts to support you with all elements of financial planning and administration. Our team works collaboratively to ensure every aspect of your financial journey is covered, from investments to estate planning, ensuring you have a comprehensive plan that meets your goals.',
    badges: [
      {
        icon: UsersIcon,
        number: 4,
        description: 'Team Members',
      },
      {
        icon: ClockIcon,
        number: 55,
        description: 'Years Combined Experience',
      },
      {
        icon: TrophyIcon,
        number: 14,
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

  const QuoteConfig = {
    imageUrl: '/ben_hayward.jpg',
    quote:
      'At Acacia Wealth, our clients’ futures are our priority. I believe that financial planning is not just about numbers; it’s about building trust, understanding your unique story, and guiding you towards your goals with compassion and expertise. With years of experience and a dedication to making complex financial decisions clear and manageable, I’m here to help you achieve financial confidence and security for you and your family.',
    authorName: 'Ben Hayward',
    authorTitle: 'Financial Planner & Founder',
  };

  const newsletterConfig = {
    privacyUrl: '/privacy-policy',
  };

  const calendlyConfig = {
    url: 'https://calendly.com/ben-hayward-jhwm/30min',
  };

  return (
    <>
      <Hero.Basic config={heroConfig} /> <Misc.Spacing />
      <Stats.SplitWithImage config={ourClients} />
      <Misc.Spacing />
      <HeaderSections.Basic config={whyAcacia} />
      <Misc.Spacing />
      <Features.Video config={teamSectionConfig} />
      <Misc.CalendlyEmbed config={calendlyConfig} />
      <CTASections.DarkPanelWithScreenshot config={lcmConfig} />
      <Misc.VouchedForCarousel config={vouchedForConfig} />
      <Misc.Spacing />
      <Features.Checklist config={questionsConfig} />
      <Misc.Spacing />
      <Newsletter.Simple config={newsletterConfig} />
      <Misc.Spacing />
      <Testimonials.Quote config={QuoteConfig} />
      <CTASections.DarkPanelWithScreenshot config={fhcConfig} />
      <Features.Basic services={services} />
    </>
  );
};

export default HomePage;
