import Content from '../../components/Content/Basic';

const secureLegacyConfig = {
  subtitle: 'Introducing',
  title: 'Securing Your Legacy',
  description:
    'Securing your legacy is an essential part of financial planning. At Acacia Wealth, we help you protect your assets and ensure that your wishes are honored, providing peace of mind for you and your loved ones.',
  content: [
    {
      type: 'paragraph',
      text: 'Legacy planning is about more than just passing on your wealth; it’s about preserving your values, your vision, and your family’s future. At Acacia Wealth, we guide you through the process of securing your legacy, ensuring that your assets are protected and your wishes are carried out.',
    },
    {
      type: 'list',
      items: [
        {
          title: 'Comprehensive Estate Planning.',
          description:
            'Our estate planning services are designed to ensure that your assets are passed on according to your wishes. We help you draft a will, establish trusts, and create other legal documents that protect your estate and provide for your loved ones.',
        },
        {
          title: 'Inheritance Tax Planning.',
          description:
            'Inheritance tax can significantly reduce the value of your estate. We develop tax-efficient strategies to minimize your inheritance tax liability, ensuring that more of your wealth is passed on to your beneficiaries.',
        },
        {
          title: 'Trust and Foundation Management.',
          description:
            'Establishing a trust or foundation can be an effective way to protect your assets and provide for future generations. We help you manage these entities, ensuring that they are structured and administered in accordance with your wishes.',
        },
        {
          title: 'Family Governance and Succession Planning.',
          description:
            'Family governance is key to ensuring that your legacy is preserved for future generations. We help you develop a family governance structure that aligns with your values and goals, ensuring a smooth transition of wealth and responsibilities.',
        },
      ],
    },
    {
      type: 'paragraph',
      text: 'Securing your legacy is one of the most important aspects of financial planning. At Acacia Wealth, we provide the tools and guidance you need to protect your wealth and ensure that your wishes are honored for generations to come.',
    },
    {
      type: 'title',
      text: 'Why Choose Acacia Wealth for Legacy Planning?',
    },
    {
      type: 'paragraph',
      text: 'Choosing Acacia Wealth for legacy planning means choosing a partner who understands the importance of preserving your legacy. Our personalized approach ensures that every aspect of your legacy plan is tailored to your unique circumstances and goals, providing peace of mind for you and your loved ones.',
    },
    {
      type: 'quote',
      text: '“At Acacia Wealth, we believe that legacy planning is about more than just protecting your assets—it’s about preserving your values and ensuring that your wishes are honored. We are committed to helping our clients secure their legacy and provide for future generations.”',
      author: {
        name: 'John Doe',
        role: 'Financial Adviser',
        image:
          'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
      type: 'paragraph',
      text: 'Whether you are just starting to think about your legacy or need to update an existing plan, Acacia Wealth is here to help. Our comprehensive legacy planning services are designed to protect your assets, provide for your loved ones, and secure your legacy.',
    },
    {
      type: 'image',
      src: '/blog/secure-legacy.jpg',
      caption:
        'Securing your legacy with Acacia Wealth: Protecting your assets and preserving your values.',
    },
    {
      type: 'title',
      text: 'The Acacia Wealth Difference',
    },
    {
      type: 'paragraph',
      text: 'At Acacia Wealth, we are dedicated to providing you with the highest level of service and expertise in legacy planning. Our holistic approach ensures that every aspect of your financial life is considered and integrated into your legacy plan. We take the time to understand your unique needs and goals, and we work with you to create a plan that reflects your values and protects your legacy.',
    },
    {
      type: 'paragraph',
      text: 'With Acacia Wealth, you can be confident that your legacy plan is in good hands. We are here to help you navigate the complexities of legacy planning and ensure that your wishes are honored, giving you peace of mind for the future.',
    },
  ],
};

const SecureLegacy = () => {
  return (
    <>
      <Content config={secureLegacyConfig} />
    </>
  );
};

export default SecureLegacy;
