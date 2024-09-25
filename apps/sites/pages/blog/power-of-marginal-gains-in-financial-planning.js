import { Content } from 'shared-components';

const marginalGainsFinancialPlanningConfig = {
  subtitle: 'Exploring',
  title:
    'The Power of Marginal Gains in Financial Planning: Lessons from British Cycling',
  description:
    'Discover how the concept of marginal gains, made famous by British Cycling, can be applied to financial planning. Learn how small, incremental improvements can create significant long-term benefits for your financial health.',
  content: [
    {
      type: 'paragraph',
      text: 'With the Paris 2024 Olympics underway, we can draw inspiration from sports and apply it to financial planning. British Cycling’s success under Sir Dave Brailsford was built on the “Aggregation of Marginal Gains,” a philosophy focused on making incremental 1% improvements in every aspect of performance. These small gains, when combined, led to unprecedented success.',
    },
    {
      type: 'image',
      src: '/blog/marginal-gains-financial-planning.png',
      caption:
        'Marginal gains: The 1% improvements in financial planning can create significant long-term impact.',
    },
    {
      type: 'title',
      text: 'Applying Marginal Gains to Financial Planning',
    },
    {
      type: 'paragraph',
      text: 'The same approach of incremental improvements can be applied to your personal finances. By making small, manageable changes across various areas, you can significantly improve your financial health over time.',
    },
    {
      type: 'list',
      items: [
        {
          title: 'Budget Optimisation',
          description:
            'Review your expenses and identify areas for small savings, like negotiating bills or cutting out unnecessary subscriptions.',
        },
        {
          title: 'Debt Reduction',
          description:
            'Paying an extra 1% towards your debt can reduce the interest paid and shorten the repayment period.',
        },
        {
          title: 'Investment Increment',
          description:
            'Increase your investment contributions by 1%. Over time, the power of compound growth can turn this small increase into significant gains.',
        },
        {
          title: 'Income Enhancement',
          description:
            'Look for opportunities to increase your income by 1%, whether through asking for a raise, freelancing, or enhancing your skill set.',
        },
        {
          title: 'Financial Education',
          description:
            'Spend 1% of your time improving your financial literacy through reading, attending webinars, or consulting with a financial adviser.',
        },
      ],
    },
    {
      type: 'paragraph',
      text: 'By focusing on small improvements, you can build a resilient financial foundation and achieve significant long-term benefits. Remember, it’s the aggregation of these marginal gains that leads to substantial transformation over time.',
    },
    {
      type: 'quote',
      text: '“Small, continuous improvements can lead to remarkable financial outcomes. The principle of marginal gains teaches us that incremental changes are a powerful strategy for achieving big goals.”',
      author: {
        name: 'Tyron Edmonds',
        role: 'Adviser at Acacia Wealth',
        image: '/tyron_edmonds_min.jpg',
      },
    },
    {
      type: 'paragraph',
      text: 'At Acacia Wealth, we help you identify areas for improvement and implement small, impactful changes that enhance your financial health. By adopting a marginal gains approach, you can secure your financial future one step at a time.',
    },
  ],
};

const MarginalGainsFinancialPlanning = () => {
  return (
    <>
      <Content.Basic config={marginalGainsFinancialPlanningConfig} />
    </>
  );
};

export default MarginalGainsFinancialPlanning;
