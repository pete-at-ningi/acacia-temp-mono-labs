import Content from '../components/Content/Basic';

const privacyPolicyConfig = {
  subtitle: 'Our Commitment to Your Privacy',
  title: 'Privacy Policy',
  description:
    'At Acacia Wealth, we are committed to protecting your privacy and ensuring that your personal information is handled with care and respect. This privacy policy explains how we collect, use, and protect your data when you engage with our services.',
  content: [
    {
      type: 'paragraph',
      text: 'Acacia Wealth is dedicated to safeguarding the privacy of our clients and website visitors. This policy outlines the types of personal information we collect, how we use it, and the measures we take to protect it.',
    },
    {
      type: 'title',
      text: 'What Information Do We Collect About You?',
    },
    {
      type: 'paragraph',
      text: 'We collect personal information when you agree to use our services, and as we manage your financial plans and transactions. This includes, but is not limited to, your name, contact details, financial details, and any other relevant information. We may also gather information through voluntary customer surveys, feedback, or cookies when you visit our website.',
    },
    {
      type: 'title',
      text: 'How Will We Use the Information About You?',
    },
    {
      type: 'paragraph',
      text: 'We use your information to provide personalized financial advice, process transactions, and manage your account. Additionally, with your consent, we may use your data to inform you about services and products that may be of interest to you. We may also share your information with third parties involved in your financial transactions, such as regulators, compliance consultants, or fraud prevention agencies, to comply with legal obligations.',
    },
    {
      type: 'title',
      text: 'Marketing',
    },
    {
      type: 'paragraph',
      text: 'We may contact you with information about our services that we believe will benefit you. If you consent to receive marketing communications, you have the right to opt out at any time. Simply contact us using the details provided below if you wish to stop receiving these communications.',
    },
    {
      type: 'title',
      text: 'Access to Your Information and Correction',
    },
    {
      type: 'paragraph',
      text: 'You have the right to request a copy of the personal information we hold about you. If you believe that any information we have is incorrect or incomplete, please contact us to correct or update your data. A small fee may be charged for processing information requests.',
    },
    {
      type: 'title',
      text: 'Cookies',
    },
    {
      type: 'paragraph',
      text: 'Cookies are small text files placed on your computer to collect standard internet log information and visitor behavior details. This information helps us analyze how our website is used and improve your experience. You can set your browser to refuse cookies, but some website features may not function properly without them.',
    },
    {
      type: 'title',
      text: 'Other Websites',
    },
    {
      type: 'paragraph',
      text: 'Our website may contain links to other websites. This privacy policy only applies to our own website, so when you link to other websites, please read their own privacy policies.',
    },
    {
      type: 'title',
      text: 'Changes to Our Privacy Policy',
    },
    {
      type: 'paragraph',
      text: 'We regularly review and update our privacy policy to ensure it remains relevant and compliant with legal requirements. Any updates will be posted on this page. This policy was last updated on [Insert Date].',
    },
    {
      type: 'title',
      text: 'How to Contact Us',
    },
    {
      type: 'paragraph',
      text: 'If you have any questions about our privacy policy or the information we hold about you, please contact us:',
    },
    {
      type: 'paragraph',
      text: 'By Email: info@acaciawealth.co.uk',
    },
    {
      type: 'paragraph',
      text: 'By Post: Acacia Wealth, [Your Address Here]',
    },
  ],
};

const PrivacyPolicy = () => {
  return (
    <>
      <Content config={privacyPolicyConfig} />
    </>
  );
};

export default PrivacyPolicy;
