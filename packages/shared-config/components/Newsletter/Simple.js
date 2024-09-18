// shared-config/components/NewsletterSignup/NewsletterSignupWithPrivacy.js
export default {
    name: 'NewsletterSignupWithPrivacy',
    category: 'Newsletter',
    description: `
      The NewsletterSignupWithPrivacy component is designed to encourage users to subscribe to a newsletter. It features a strong call-to-action, with a heading, subtext, and a privacy policy link. The component includes a customizable signup form, styled with a radial gradient background and responsive design. The privacy policy link reassures users about data protection and encourages trust. This component is perfect for websites looking to expand their email list while maintaining transparency regarding data usage.`,
    
    fields: [
      {
        name: 'heading',
        type: 'string',
        label: 'Heading',
        description: `
          The main heading for the newsletter signup section. It captures attention and encourages users to subscribe. Ideal length is 30 to 60 characters.`,
        required: true,
        example: 'Subscribe to our newsletter.'
      },
      {
        name: 'subText',
        type: 'string',
        label: 'Subtext',
        description: `
          A brief description that appears below the heading, explaining the value of subscribing. Ideal length is 50 to 100 characters.`,
        required: false,
        example: 'Stay updated with the latest financial planning tips and news from Acacia Wealth.'
      },
      {
        name: 'privacyUrl',
        type: 'string',
        label: 'Privacy Policy URL',
        description: `
          The URL linking to the website's privacy policy. This is displayed at the bottom of the newsletter section to assure users of data protection practices.`,
        required: true,
        example: '/privacy-policy'
      },
      {
        name: 'signupWidget',
        type: 'component',
        label: 'Signup Widget',
        description: `
          The signup form component where users can enter their email to subscribe. This form should be connected to a backend service to manage subscriptions.`,
        required: true
      }
    ],
    
    options: [
      {
        name: 'backgroundGradient',
        type: 'string',
        label: 'Background Gradient',
        description: `
          The radial gradient background that transitions from the secondary to the primary color, creating a visually engaging backdrop for the newsletter section.`,
        default: 'radial-gradient(circle, theme.colors.secondary 0%, theme.colors.primary 100%)'
      },
      {
        name: 'privacyTextColor',
        type: 'string',
        label: 'Privacy Text Color',
        description: `
          The color of the privacy policy text and link, allowing customization to match the overall design.`,
        default: 'white'
      }
    ]
  };
  