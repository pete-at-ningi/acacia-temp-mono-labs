import React from 'react';

import { Hero } from 'shared-components';
import { Features } from 'shared-components';
import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  LockClosedIcon,
  ChartBarIcon,
  BanknotesIcon,
  ShieldCheckIcon,
} from '@heroicons/react/20/solid';
import { CTASections } from 'shared-components';

const WhatWeDoHero = {
  title: 'We make financial planning simple.',
  subtitle:
    'Acacia is a boutique financial planning business built on becoming a long-term, proactive partner supporting every client through their life’s opportunities and challenges. ',
  primaryCTA: {
    label: 'Meet our Team',
    route: '/the-team',
  },
  imageUrl: '/what-we-do.png',
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

const services = {
  title: 'Our Services',
  subtitle: 'What We Do',
  description:
    'we invest time in getting to know you: your financial circumstances, your priorities and goals. Our approach is a world away from the big corporates, allowing us to custom-build financial plans that are a great fit now – and can flex and switch as life unfolds.',
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
      <Hero.WithOffsetImage config={WhatWeDoHero} />
      <Features.Basic services={services} />
      <CTASections.DarkPanelWithScreenshot config={fhcConfig} />
    </>
  );
};

export default OurClients;
