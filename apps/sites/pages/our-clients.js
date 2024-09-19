import React from 'react';
import config from '../config'

import { Hero } from 'shared-components'
import { Newsletter } from 'shared-components';
import { Content } from 'shared-components';
import { BlogFeatured } from 'shared-components';

import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from '@heroicons/react/20/solid';

const ourClientsConfig = {
  imageUrl: '/ourclients-hero.jpg',
  subtitle:
    'We understand that each client’s financial situation is unique, and we take pride in working with individuals and families who are thoughtful about their future, their legacy, and their impact on the world. Our clients come to us not only for financial advice but also for a partnership that helps them navigate life’s complexities with confidence and clarity.',
  title: 'Who We Work With',
  primaryCTA: {
    label: 'Speak to an adviser',
    route: '/contact',
  }
};

const WithTestimonalConfig = {
  subheading: 'Dedicated to Your Financial Success',
  heading: 'Your Financial Journey, Simplified',
  description:
    'At Acacia, we work with you to create a financial plan that aligns with your unique goals. From saving for retirement to growing your wealth, our comprehensive approach ensures that you’re on the path to success.',
  content: [
    "We understand the challenges you face in managing your finances, and we're here to help you navigate them.",
    'Our team of experts is dedicated to providing personalized advice and strategies that cater to your specific needs.',
    "Whether you're planning for retirement or looking to grow your wealth, we're here to support you every step of the way.",
  ],
  bullets: [
    {
      icon: CloudArrowUpIcon,
      title: 'Tailored Plans',
      description:
        'Our financial plans are tailored to meet your individual needs and objectives.',
    },
    {
      icon: LockClosedIcon,
      title: 'Security & Trust',
      description:
        'We prioritize the security of your assets and maintain the highest level of trust.',
    },
    {
      icon: ServerIcon,
      title: 'Expert Guidance',
      description:
        'Receive expert guidance from our seasoned advisers, committed to your success.',
    },
  ],
  subsections: [
    {
      title: 'Start Your Journey',
      content:
        "It’s never too early or too late to start planning for your financial future. Whether you're just starting out or looking to optimize your existing portfolio, Acacia is here to help.",
    },
  ],
  quote: {
    text: '“The peace of mind that comes with knowing my financial future is secure is priceless. Acacia has been with me every step of the way.”',
    image:
      'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',

    name: 'John Doe',
    handle: '@johndoe',
  },
};

const newsletterConfig = {
  privacyUrl: "/privacy"
}

const OurClients = () => {
  return (
    <>
      <Hero.SlantedImage config={ourClientsConfig} /> <Newsletter.CenterCard config={newsletterConfig}/>
      <Content.WithTestimonial config={WithTestimonalConfig} />
      <BlogFeatured.Basic config={config.blog} limit={3} />
    </>
  );
};

export default OurClients;
