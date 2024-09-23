export default {
    name: 'AdvancedHero',
    category: 'HeroSection',
    description: `
      The AdvancedHero component features a split-grid design with animated text and image columns. The left column displays a title, subtitle, blog tag, and call-to-action button. The right column contains a background image with a rotating animation effect. This component is suitable for hero sections on landing pages and promotional pages, with a highly customizable layout and animation settings.`,
    
    fields: [
      {
        name: 'title',
        type: 'string',
        label: 'Hero Title',
        description: `
          The main heading displayed prominently on the left column. This should communicate the main message of the page.`,
        required: true,
        example: 'Achieve Financial Freedom'
      },
      {
        name: 'subtitle',
        type: 'string',
        label: 'Hero Subtitle',
        description: `
          A brief supporting statement that appears below the title, offering additional information.`,
        required: true,
        example: 'Expert advice and tools to guide your financial journey.'
      },
      {
        name: 'primaryCTA',
        type: 'object',
        label: 'Primary Call-To-Action',
        description: `
          The main button for the user to take action (e.g., "Get Started"). This is usually the most important element of the hero section.`,
        required: true,
        fields: [
          {
            name: 'label',
            type: 'string',
            label: 'CTA Label',
            description: 'The text displayed on the button.',
            example: 'Get Started'
          },
          {
            name: 'route',
            type: 'string',
            label: 'CTA Route',
            description: 'The URL or path the button links to.',
            example: '/start'
          }
        ]
      },
      {
        name: 'bloglinktitle',
        type: 'string',
        label: 'Blog Tag Title',
        description: `
          The text displayed within the blog tag that links to the latest blog post or blog section.`,
        required: false,
        example: 'Read Our Blog'
      },
      {
        name: 'bloglinkroute',
        type: 'string',
        label: 'Blog Tag Route',
        description: `
          The URL or path for the blog tag link, allowing users to navigate to the latest blog post.`,
        required: false,
        example: '/blog'
      },
      {
        name: 'imageUrl',
        type: 'string',
        label: 'Background Image URL',
        description: `
          The URL for the background image that will appear on the right side of the hero section. The image should be high-quality and appropriately sized for the layout.`,
        required: true,
        example: 'https://example.com/hero-image.jpg'
      }
    ],
  
    options: [
      {
        name: 'textColor',
        type: 'color',
        label: 'Text Color',
        description: `
          The color for the title and subtitle text to ensure readability and match the site's theme.`,
        example: '#000000'
      },
      {
        name: 'ctaButtonColor',
        type: 'color',
        label: 'CTA Button Color',
        description: `
          The background color for the call-to-action button.`,
        example: '#FF5733'
      },
      {
        name: 'animationDuration',
        type: 'number',
        label: 'Animation Duration',
        description: `
          The duration of the animations for the title, subtitle, and buttons.`,
        default: 0.8,
        example: 1.0
      },
      {
        name: 'animationDelay',
        type: 'number',
        label: 'Animation Delay',
        description: `
          The delay before the animations start for each element, allowing for a staggered entrance.`,
        default: 0.3,
        example: 0.5
      }
    ]
  };
  