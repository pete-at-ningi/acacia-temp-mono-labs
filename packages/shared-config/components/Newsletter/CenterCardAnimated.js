export default {
    name: 'CenterCard',
    category: 'NewsletterSignup',
    description: `
      The CenterCard component is a central newsletter sign-up card designed to gather user emails in a clean, eye-catching layout. It features a flexible, modern card with a radial gradient background, a prominent call-to-action heading, and subtext. The component includes smooth scale-in animations triggered when in view, drawing user attention. Additionally, a privacy policy link is provided for transparency. This component is fully responsive, making it ideal for various screen sizes and use cases.`,
    
    fields: [
      {
        name: 'heading',
        type: 'string',
        label: 'Newsletter Heading',
        description: `
          The main heading text, which encourages users to sign up for the newsletter. It should be clear and compelling.`,
        required: true,
        example: 'Subscribe to our newsletter.'
      },
      {
        name: 'subText',
        type: 'string',
        label: 'Newsletter Subtext',
        description: `
          The text that provides more context or information about the newsletter. This is displayed below the heading.`,
        required: true,
        example: 'Stay updated with the latest financial planning tips and news from Acacia Wealth. We promise no spam, just valuable insights.'
      },
      {
        name: 'privacyUrl',
        type: 'string',
        label: 'Privacy Policy URL',
        description: `
          The URL for the privacy policy, linked in the footer of the card. This reassures users about how their data will be handled.`,
        required: true,
        example: '/privacy-policy'
      }
    ],
  
    options: [
      {
        name: 'backgroundGradient',
        type: 'color',
        label: 'Background Gradient Colors',
        description: `
          The colors used in the radial gradient background of the newsletter card, enhancing visual appeal.`,
        example: 'radial-gradient(circle, #EDEDED 0%, #333333 100%)'
      },
      {
        name: 'animationDuration',
        type: 'number',
        label: 'Animation Duration',
        description: `
          Controls how fast the card scales up into view. It provides control over the speed of the animation, ensuring smooth entry.`,
        default: 0.8,
        example: 1
      },
      {
        name: 'animationEase',
        type: 'select',
        label: 'Animation Easing',
        description: `
          Determines the easing curve of the scale animation. This option affects how the animation progresses over time, providing control over its smoothness.`,
        choices: ['easeInOut', 'easeIn', 'easeOut', 'linear'],
        default: 'easeInOut'
      }
    ]
  };
  