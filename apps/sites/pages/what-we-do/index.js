import React from 'react';
import Hero from '../../components/Hero/WithOffsetImage';
import Services from '../../components/Features/Basic';
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

const WhatWeDoHero = {
  title: 'Comprehensive Financial Planning Tailored to You',
  subtitle:
    'At Acacia Wealth, we understand that your financial situation is as unique as you are. Our mission is to provide you with personalized financial planning services that not only address your current needs but also help you achieve your long-term goals. Whether you are planning for retirement, looking to invest wisely, or seeking tax-efficient strategies, our team of experienced advisers is here to guide you every step of the way.',
  primaryCTA: {
    label: 'Meet our Team',
    route: '/the-team',
  },
  imageUrl: '/what-we-do-hero.jpg',
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

const OurClients = () => {
  return (
    <>
      <Hero config={WhatWeDoHero} />
      <Services services={services} />
    </>
  );
};

export default OurClients;
