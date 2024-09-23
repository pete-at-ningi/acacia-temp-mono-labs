export default {
    name: 'NewsletterSignup',
    category: 'Forms',
    description: `
      The NewsletterSignup component allows users to subscribe to a newsletter by entering their email address. It features an animated form that slides in from the left, ensuring the user's attention is focused on the sign-up process. The design is clean and modern, with customizable text for the heading, subtext, and privacy notice. This component is designed to encourage signups by being both visually appealing and easy to use. After form submission, it can be linked to a backend service (e.g., Supabase) to handle the email sign-up process.`,
    
    fields: [
      {
        name: 'heading',
        type: 'string',
        label: 'Heading Text',
        description: `
          The heading text that appears at the top of the newsletter section, inviting users to sign up.`,
        required: true,
        example: 'Subscribe to our newsletter.'
      },
      {
        name: 'subtext',
        type: 'string',
        label: 'Subtext',
        description: `
          The subtext below the heading that provides more context and encourages users to subscribe.`,
        required: true,
        example: 'Stay updated with the latest financial planning tips and news from Acacia Wealth.'
      },
      {
        name: 'privacyUrl',
        type: 'string',
        label: 'Privacy Policy URL',
        description: `
          The URL that links to the website's privacy policy, giving users information about how their data will be handled.`,
        required: true,
        example: 'https://example.com/privacy-policy'
      }
    ],
  
    options: [
      {
        name: 'animationDuration',
        type: 'number',
        label: 'Animation Duration',
        description: `
          The duration (in seconds) for the slide-in animation of the form.`,
        example: 0.5,
        default: 0.5
      },
      {
        name: 'easeType',
        type: 'select',
        label: 'Ease Type for Animation',
        description: `
          The easing function to use for the form’s entrance animation.`,
        choices: ['easeInOut', 'easeIn', 'easeOut'],
        default: 'easeInOut'
      },
      {
        name: 'backgroundGradient',
        type: 'string',
        label: 'Background Gradient',
        description: `
          The radial gradient used for the background of the newsletter section, which can be customized for visual appeal.`,
        required: true,
        example: 'radial-gradient(circle, #6E85B7 0%, #2C3A47 100%)'
      }
    ]
  };
  