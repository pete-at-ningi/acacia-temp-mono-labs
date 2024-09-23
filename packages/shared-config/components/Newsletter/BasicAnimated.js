export default {
    name: 'NewsletterSignup',
    category: 'NewsletterSection',
    description: `
      The NewsletterSignup component is designed to collect user email addresses and sign them up for a newsletter. It features a two-column layout: the left column contains the signup form and a heading, while the right column showcases information about the newsletter using badges. The component is styled with a background gradient and includes animated elements such as badges that slide into view. It is fully responsive and customizable, providing a simple and effective way to increase newsletter subscriptions.`,
    
    fields: [
      {
        name: 'heading',
        type: 'string',
        label: 'Heading',
        description: `
          The main heading text displayed above the signup form. It should be engaging and encourage users to subscribe to the newsletter.`,
        required: true,
        example: 'Subscribe to our newsletter.'
      },
      {
        name: 'subText',
        type: 'string',
        label: 'Subtext',
        description: `
          The text displayed below the heading, providing additional information or context about the newsletter and what users can expect.`,
        required: true,
        example: 'Stay updated with the latest financial planning tips and news from Acacia Wealth.'
      },
      {
        name: 'primaryCTA',
        type: 'object',
        label: 'Primary Call-to-Action',
        description: `
          The call-to-action button that users click to submit their email and subscribe to the newsletter.`,
        required: true,
        fields: [
          {
            name: 'label',
            type: 'string',
            label: 'CTA Label',
            description: 'The text displayed on the call-to-action button.',
            example: 'Sign Up'
          },
          {
            name: 'route',
            type: 'string',
            label: 'CTA Route',
            description: 'The URL or path the user is directed to upon clicking the CTA.',
            example: '/signup'
          }
        ]
      },
      {
        name: 'badges',
        type: 'array',
        label: 'Badges',
        description: `
          The badges provide key information about the newsletter in a compact format. Each badge contains an icon, title, and description.`,
        required: true,
        fields: [
          {
            name: 'icon',
            type: 'string',
            label: 'Badge Icon',
            description: 'The icon displayed within the badge. It is usually a visual representation of the badge’s message.',
            example: 'CalendarDaysIcon'
          },
          {
            name: 'title',
            type: 'string',
            label: 'Badge Title',
            description: 'The title of the badge, displayed prominently next to the icon.',
            example: 'Monthly articles'
          },
          {
            name: 'description',
            type: 'string',
            label: 'Badge Description',
            description: 'A short description that explains the value of the badge to the user.',
            example: 'Get the latest insights and tips on managing your wealth.'
          }
        ]
      }
    ],
  
    options: [
      {
        name: 'backgroundGradient',
        type: 'color',
        label: 'Background Gradient Colors',
        description: `
          The colors used in the radial gradient background of the newsletter section, creating a visually appealing design.`,
        example: 'linear-gradient(circle, #EDEDED 0%, #333333 100%)'
      },
      {
        name: 'animationDuration',
        type: 'number',
        label: 'Animation Duration',
        description: `
          The duration of the animation for the badges, controlling how fast they appear.`,
        default: 0.5,
        example: 0.7
      },
      {
        name: 'animationDelay',
        type: 'number',
        label: 'Animation Delay',
        description: `
          The delay before the badges appear, allowing for a staggered effect as they come into view.`,
        default: 0.3,
        example: 0.5
      }
    ]
  };
  