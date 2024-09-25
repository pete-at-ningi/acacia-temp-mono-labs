import { Content } from 'shared-components';

const newGovernmentImpactConfig = {
  subtitle: 'Exploring',
  title: 'A New Government - What Could This Mean for You?',
  description:
    'With the recent UK election results, the Labour party takes over, and Rachel Reeves becomes the first female Chancellor of the Exchequer. What does this mean for your personal finances? In this article, we explore the key changes and their potential impact.',
  content: [
    {
      type: 'paragraph',
      text: 'With the UK election results in, the Labour party has taken over from the Conservatives, and Rachel Reeves has made history as Britain’s first-ever female Chancellor of the Exchequer. For many, this political shift raises questions about the impact on personal finances. In this article, we’ll explore the key policy changes and what they could mean for your financial future.',
    },
    {
      type: 'image',
      src: '/blog/new-government-impact.jpg',
      caption:
        'Political change can impact financial planning—here’s what the new Labour government may mean for your finances.',
    },
    {
      type: 'title',
      text: 'What We Know So Far',
    },
    {
      type: 'paragraph',
      text: 'While many of Labour’s policies are still taking shape, here are five notable changes that have been outlined in their manifesto or reported in the press:',
    },
    {
      type: 'list',
      items: [
        {
          title: 'State Pension Triple Lock',
          description:
            'The state pension will continue to rise in line with the state pension triple-lock, ensuring protection for pensioners.',
        },
        {
          title: 'No Rise in Main Taxes',
          description:
            'There will be no increase in the main rates of VAT, National Insurance, Income Tax, or Corporation Tax, but income tax allowances will remain frozen.',
        },
        {
          title: 'VAT on Private School Fees',
          description:
            'VAT will now be added to private school fees, increasing the financial burden on families opting for private education.',
        },
        {
          title: 'Minimum Wage Expansion',
          description:
            'Labour will make the minimum wage available to all adults by removing the age band that currently restricts younger workers.',
        },
        {
          title: 'No Plans to Scrap UK ISA',
          description:
            'There are no current plans to scrap the UK ISA, and there will be an additional £5,000 allowance for investments in UK companies.',
        },
      ],
    },
    {
      type: 'title',
      text: 'How Will Markets React?',
    },
    {
      type: 'paragraph',
      text: 'Historically, markets have remained resilient in the face of political uncertainty. “Time in the Market” has consistently proven to be a successful long-term investment strategy, regardless of who is in power. Investors are encouraged to stay the course and avoid reacting to short-term political changes.',
    },
    {
      type: 'image',
      src: '/blog/new-government-impact-chart.png',
      caption: 'Source: www.investing.com;FTSE100',
    },
    {
      type: 'quote',
      text: '“While political changes can create uncertainty, long-term investors who focus on staying in the market rather than trying to time it have always benefited.”',
      author: {
        name: 'Tyron Edmonds',
        role: 'Financial Planner & Director at Acacia Wealth',
        image: '/tyron_edmonds_min.jpg',
      },
    },
    {
      type: 'paragraph',
      text: 'At Acacia Wealth, we monitor political developments closely and provide our clients with the guidance needed to navigate any changes. If you have questions about how the new government may impact your financial situation, our advisers are here to help you create a resilient, long-term financial strategy.',
    },
  ],
};

const NewGovernmentImpact = () => {
  return (
    <>
      <Content.Basic config={newGovernmentImpactConfig} />
    </>
  );
};

export default NewGovernmentImpact;
