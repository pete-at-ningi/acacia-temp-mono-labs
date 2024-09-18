// shared-config/components/NewsletterSignup/NewsletterSignupWithBadges.js
export default {
    name: 'NewsletterSignupWithBadges',
    category: 'Newsletter',
    description: `
      The NewsletterSignupWithBadges component is a dedicated section for encouraging users to subscribe to a newsletter. It includes a call-to-action to sign up, with supporting text that highlights the value of the subscription. The section features two badges that emphasize the benefits of subscribing, such as receiving monthly articles and the promise of no spam. This component is visually enhanced with a radial gradient background, and it is fully responsive, adjusting the layout to fit different screen sizes. The signup form is linked to a backend service for processing subscriptions. Ideal for websites looking to grow their mailing lists by offering valuable insights or tips.`,
    
    fields: [
      {
        name: 'heading',
        type: 'string',
        label: 'Heading',
        description: `
          The main heading of the newsletter signup section. This is displayed prominently to capture the attention of the user and encourage them to subscribe. Ideal length is between 30 to 60 characters.`,
        required: true,
        example: 'Subscribe to our newsletter.'
      },
      {
        name: 'subText',
        type: 'string',
        label: 'Subtext',
        description: `
          A brief descriptive text that appears below the heading. It provides additional context or a brief explanation of the value of subscribing. Ideal length is 50 to 100 characters.`,
        required: false,
        example: 'Stay updated with the latest financial planning tips and news from Acacia Wealth.'
      },
      {
        name: 'badges',
        type: 'array',
        label: 'Badges',
        description: `
          An array of badge objects that highlight the benefits of subscribing to the newsletter. Each badge consists of an icon, a title, and a description.`,
        required: true,
        fields: [
          {
            name: 'icon',
            type: 'string',
            label: 'Badge Icon',
            description: 'An icon that visually represents the benefit of the badge.',
            example: 'CalendarDaysIcon'
          },
          {
            name: 'title',
            type: 'string',
            label: 'Badge Title',
            description: 'The title of the badge, highlighting the specific benefit.',
            example: 'Monthly articles'
          },
          {
            name: 'description',
            type: 'string',
            label: 'Badge Description',
            description: 'A short description explaining the benefit of the badge. Ideal length is 30 to 60 characters.',
            example: 'Get the latest insights and tips on managing your wealth.'
          }
        ]
      },
      {
        name: 'signupWidget',
        type: 'component',
        label: 'Signup Widget',
        description: `
          The signup form widget, where users can enter their email to subscribe. This form should be linked to a backend service such as Supabase or another database to handle subscriptions.`,
        required: true
      }
    ],
    
    options: [
      {
        name: 'backgroundGradient',
        type: 'string',
        label: 'Background Gradient',
        description: `
          The radial gradient used as the background of the section, which transitions from the secondary color to the primary color. This creates a visually appealing backdrop for the signup section.`,
        default: 'radial-gradient(circle, theme.colors.secondary 0%, theme.colors.primary 100%)'
      }
    ]
  };
  