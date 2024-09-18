// shared-config/components/CenterCard/NewsletterSignupCard.js
export default {
    name: 'NewsletterSignupCard',
    category: 'Newsletter',
    description: `
      The NewsletterSignupCard component is a center-aligned card designed for newsletter subscriptions. It features a prominent call-to-action with a heading, a brief description of the newsletter, and a privacy policy link. The card is styled with a radial gradient background, rounded corners, and a shadow for visual impact. This component is ideal for use on landing pages, footers, or dedicated subscription sections. It is fully responsive, adjusting to fit various screen sizes while maintaining its central focus.`,
    
    fields: [
      {
        name: 'heading',
        type: 'string',
        label: 'Heading',
        description: `
          The main heading of the newsletter signup card. This text should be eye-catching and encourage users to subscribe. Ideal length is 30 to 60 characters.`,
        required: true,
        example: 'Subscribe to our newsletter.'
      },
      {
        name: 'subText',
        type: 'string',
        label: 'Subtext',
        description: `
          A short description that explains the value of subscribing to the newsletter. It appears below the heading and provides additional context. Ideal length is 50 to 100 characters.`,
        required: false,
        example: 'Stay updated with the latest financial planning tips and news from Acacia Wealth.'
      },
      {
        name: 'privacyUrl',
        type: 'string',
        label: 'Privacy Policy URL',
        description: `
          A URL linking to the privacy policy of the website or organization. This provides users with information on how their data will be handled. It is displayed at the bottom of the card as a small link.`,
        required: true,
        example: '/privacy-policy'
      },
      {
        name: 'signupWidget',
        type: 'component',
        label: 'Signup Widget',
        description: `
          The signup form widget, where users can enter their email to subscribe. This form should be connected to a backend service (e.g., Supabase) to handle subscriptions.`,
        required: true
      }
    ],
    
    options: [
      {
        name: 'backgroundGradient',
        type: 'string',
        label: 'Background Gradient',
        description: `
          The radial gradient used as the background of the newsletter card. It transitions from the secondary color to the primary color, creating a visually appealing backdrop.`,
        default: 'radial-gradient(circle, theme.colors.secondary 0%, theme.colors.primary 100%)'
      },
      {
        name: 'borderRadius',
        type: 'string',
        label: 'Border Radius',
        description: `
          The border radius of the card, controlling how rounded the corners are. The default is 25px for a smooth, modern look.`,
        default: '25px'
      }
    ]
  };
  