import { Content } from 'shared-components';

const estatePlanningConfig = {
  subtitle: 'Introducing',
  title: 'Estate Planning',
  description:
    'At Acacia Wealth, we understand that estate planning is about more than just distributing your assets—it’s about securing your legacy and ensuring that your wishes are honored. Our comprehensive estate planning services are designed to protect your loved ones and your wealth, giving you peace of mind for the future.',
  content: [
    {
      type: 'paragraph',
      text: 'Estate planning is a critical aspect of financial management that ensures your assets are passed on according to your wishes. At Acacia Wealth, we work closely with you to create a personalized estate plan that reflects your values and priorities, safeguarding your legacy for future generations.',
    },
    {
      type: 'list',
      items: [
        {
          title: 'Will Writing and Estate Planning.',
          description:
            'A well-crafted will is the cornerstone of your estate plan. We guide you through the process of drafting a will that clearly outlines your wishes, ensuring that your assets are distributed according to your intentions. Our estate planning services also include trusts and other tools to protect your assets and provide for your loved ones.',
        },
        {
          title: 'Minimizing Estate Taxes.',
          description:
            'Estate taxes can significantly impact the value of your estate. We employ tax-efficient strategies to minimize estate taxes, ensuring that more of your wealth is passed on to your beneficiaries. Our team works closely with tax professionals to develop a plan that maximizes the value of your estate.',
        },
        {
          title: 'Protecting Your Beneficiaries.',
          description:
            'Ensuring the financial security of your loved ones is a top priority. We help you establish trusts and other mechanisms to protect your beneficiaries, providing for their needs while preserving your wealth. Our strategies are designed to ensure that your assets are managed and distributed according to your wishes.',
        },
        {
          title: 'Planning for Incapacity.',
          description:
            'In addition to planning for the distribution of your assets, it’s important to plan for potential incapacity. We help you create powers of attorney and other legal documents that ensure your financial and healthcare decisions are made according to your wishes if you become unable to make them yourself.',
        },
      ],
    },
    {
      type: 'paragraph',
      text: 'At Acacia Wealth, we are committed to helping you navigate the complexities of estate planning with confidence. Our goal is to provide you with the tools and guidance you need to secure your legacy and protect your loved ones.',
    },
    {
      type: 'title',
      text: 'Why Choose Acacia Wealth for Estate Planning?',
    },
    {
      type: 'paragraph',
      text: 'Choosing Acacia Wealth for estate planning means choosing a partner who understands the importance of preserving your legacy. Our personalized approach ensures that every aspect of your estate plan is tailored to your unique circumstances and goals. We are here to help you create a plan that provides peace of mind and financial security for you and your loved ones.',
    },
    {
      type: 'quote',
      text: '“At Acacia Wealth, we believe that estate planning is about more than just passing on your wealth—it’s about securing your legacy. We are committed to helping our clients protect their assets and ensure that their wishes are honored, providing peace of mind for the future.”',
      author: {
        name: 'Tyron Edmonds',
        role: 'Financial Planner & Managing Director at Acacia Wealth',
        image: '/tyron_edmonds_min.jpg',
      },
    },
    {
      type: 'paragraph',
      text: 'Whether you are just beginning to think about your estate plan or need to update an existing plan, Acacia Wealth is here to help. Our comprehensive estate planning services are designed to protect your assets, provide for your loved ones, and secure your legacy.',
    },
    {
      type: 'image',
      src: '/estate-planning-will-writing.jpg',
      caption:
        'Our estate planning and will writing services help you secure your legacy and protect your loved ones.',
    },
    {
      type: 'title',
      text: 'The Acacia Wealth Difference',
    },
    {
      type: 'paragraph',
      text: 'At Acacia Wealth, we are dedicated to providing you with the highest level of service and expertise in estate planning. Our holistic approach ensures that every aspect of your financial life is considered and integrated into your estate plan. We take the time to understand your unique needs and goals, and we work with you to create a plan that reflects your values and protects your legacy.',
    },
    {
      type: 'paragraph',
      text: 'With Acacia Wealth, you can be confident that your estate plan is in good hands. We are here to help you navigate the complexities of estate planning and ensure that your wishes are honored, giving you peace of mind for the future.',
    },
  ],
};

const EstatePlanning = () => {
  return (
    <>
      <Content.Basic config={estatePlanningConfig} />
    </>
  );
};

export default EstatePlanning;
