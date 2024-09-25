import { CTASections } from 'shared-components';

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

export default function Page({}) {
  return (
    <>
      <CTASections.DarkPanelWithScreenshot config={lcmConfig} />
      <CTASections.DarkPanelWithScreenshot config={fhcConfig} />
    </>
  );
}
