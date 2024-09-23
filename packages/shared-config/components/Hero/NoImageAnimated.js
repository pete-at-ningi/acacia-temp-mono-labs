export default {
    name: 'Hero',
    category: 'HeroSection',
    description: `
      The Hero component is designed to display a visually appealing section with a prominent title, subtitle, and call-to-action buttons. It features a background image, optional overlay, and animated text elements. This hero section is perfect for capturing the user's attention and leading them to take action. The animation effects and colors are customizable to suit different design needs.`,
    
    fields: [
      {
        name: 'imageUrl',
        type: 'string',
        label: 'Background Image URL',
        description: `
          The URL for the background image that appears in the hero section. This image should be high resolution to ensure clarity across different screen sizes. The image is set to cover the entire hero area.`,
        required: true,
        example: 'https://example.com/hero-image.jpg'
      },
      {
        name: 'subtitle',
        type: 'string',
        label: 'Subtitle Text',
        description: `
          The subtitle text that appears above the main title in the hero section. This text provides context or a brief description to accompany the title.`,
        required: true,
        example: 'Welcome to Our Platform'
      },
      {
        name: 'title',
        type: 'string',
        label: 'Main Title',
        description: `
          The primary text in the hero section, usually the largest and most prominent text. It conveys the main message or value proposition of the page.`,
        required: true,
        example: 'Discover Your Financial Freedom'
      },
      {
        name: 'primaryCTA',
        type: 'object',
        label: 'Primary Call-To-Action',
        description: `
          The primary call-to-action (CTA) button encourages the user to take the main action, such as signing up or getting started.`,
        required: true,
        fields: [
          {
            name: 'label',
            type: 'string',
            label: 'CTA Label',
            description: 'Text displayed on the primary CTA button.',
            example: 'Get Started'
          },
          {
            name: 'route',
            type: 'string',
            label: 'CTA Route',
            description: 'The link or route the user will be directed to when they click the button.',
            example: '/get-started'
          }
        ]
      },
      {
        name: 'secondaryCTA',
        type: 'object',
        label: 'Secondary Call-To-Action (Optional)',
        description: `
          An optional secondary call-to-action button that provides an alternative action for the user. This button is displayed alongside the primary CTA.`,
        required: false,
        fields: [
          {
            name: 'label',
            type: 'string',
            label: 'CTA Label',
            description: 'Text displayed on the secondary CTA button.',
            example: 'Learn More'
          },
          {
            name: 'route',
            type: 'string',
            label: 'CTA Route',
            description: 'The link or route the user will be directed to when they click the button.',
            example: '/learn-more'
          }
        ]
      }
    ],
  
    options: [
      {
        name: 'overlayColor',
        type: 'color',
        label: 'Overlay Color',
        description: `
          The color of the overlay that is placed on top of the background image. The overlay increases contrast between the text and the background image, ensuring that the text remains readable.`,
        example: '#000000'
      },
      {
        name: 'subtitleBorderColor',
        type: 'color',
        label: 'Subtitle Border Color',
        description: `
          The border color applied to the subtitle. This allows for customization of the subtitle's appearance to match the overall theme of the page.`,
        example: '#FFFFFF'
      },
      {
        name: 'ctaButtonColor',
        type: 'color',
        label: 'CTA Button Color',
        description: `
          The background color for the call-to-action (CTA) buttons, allowing customization of the button color to match the website's branding.`,
        example: '#FF5733'
      },
      {
        name: 'animationDuration',
        type: 'number',
        label: 'Animation Duration',
        description: `
          Controls the duration of the animations applied to the subtitle, title, and call-to-action buttons when they appear on the page.`,
        default: 0.8,
        example: '1.2'
      },
      {
        name: 'animationDelay',
        type: 'number',
        label: 'Animation Delay',
        description: `
          Sets the delay before the animations for each element (subtitle, title, CTA) start. This controls the staggered effect of the animations.`,
        default: 0.2,
        example: '0.4'
      }
    ]
  };
  