export default {
    name: 'ModernHero',
    category: 'HeroSection',
    description: `
      The ModernHero component presents a hero section with a split grid layout, featuring a large title, subtitle, and call-to-action buttons on the left, and a dynamic image on the right. It also includes a rotating animation for the image and staggered entrance animations for the text and CTA buttons. This hero section is responsive and adapts to both desktop and mobile layouts. Perfect for promoting blog content, products, or services with an eye-catching design.`,
    
    fields: [
      {
        name: 'title',
        type: 'string',
        label: 'Main Title',
        description: `
          The primary heading of the hero section, displayed prominently. The title should communicate the main message or call to action, such as a promotion or an announcement.`,
        required: true,
        example: 'Empower Your Financial Future'
      },
      {
        name: 'subtitle',
        type: 'string',
        label: 'Subtitle',
        description: `
          A smaller piece of text that appears below the title, providing additional context or a brief explanation of the content.`,
        required: true,
        example: 'Discover the tools and insights to achieve your financial goals.'
      },
      {
        name: 'primaryCTA',
        type: 'object',
        label: 'Primary Call-To-Action',
        description: `
          The primary button that encourages the user to take an action, such as "Get Started" or "Learn More."`,
        required: true,
        fields: [
          {
            name: 'label',
            type: 'string',
            label: 'CTA Label',
            description: 'Text displayed on the CTA button.',
            example: 'Get Started'
          },
          {
            name: 'route',
            type: 'string',
            label: 'CTA Route',
            description: 'The URL or route where the button directs the user.',
            example: '/get-started'
          }
        ]
      },
      {
        name: 'blogtagtitle',
        type: 'string',
        label: 'Blog Tag Title',
        description: `
          This text is displayed in the blog tag, a small promotional label for linking to recent blog posts or articles.`,
        required: false,
        example: 'Check Out Our Blog'
      },
      {
        name: 'blogtagroute',
        type: 'string',
        label: 'Blog Tag Route',
        description: `
          The URL or route for the blog tag. It takes the user to the blog or specific article section when clicked.`,
        required: false,
        example: '/blog'
      },
      {
        name: 'imageUrl',
        type: 'string',
        label: 'Background Image URL',
        description: `
          The URL of the background image displayed on the right side of the hero section. The image should be high-quality and responsive.`,
        required: true,
        example: 'https://example.com/hero-background.jpg'
      }
    ],
  
    options: [
      {
        name: 'textColor',
        type: 'color',
        label: 'Text Color',
        description: `
          The color of the title and subtitle text to ensure it contrasts with the background image and is easy to read.`,
        example: '#FFFFFF'
      },
      {
        name: 'ctaButtonColor',
        type: 'color',
        label: 'CTA Button Background Color',
        description: `
          The background color of the primary call-to-action button, allowing customization to match the site's theme.`,
        example: '#FF5733'
      },
      {
        name: 'animationDuration',
        type: 'number',
        label: 'Animation Duration',
        description: `
          Controls the duration of the animations applied to the title, subtitle, and CTA buttons. This gives the user the ability to adjust how quickly the elements appear on the screen.`,
        default: 0.8,
        example: 1.2
      },
      {
        name: 'animationDelay',
        type: 'number',
        label: 'Animation Delay',
        description: `
          Adds a delay before the animations for the text and buttons begin, allowing for staggered effects when the section comes into view.`,
        default: 0.3,
        example: 0.5
      }
    ]
  };
  