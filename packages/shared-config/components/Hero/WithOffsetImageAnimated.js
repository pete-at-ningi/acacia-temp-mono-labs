export default {
    name: 'ImageHero',
    category: 'HeroSection',
    description: `
      The ImageHero component is a two-column hero section designed for prominent display on landing pages. It features a left column with a title, subtitle, and a call-to-action button, while the right column displays an image. The component is highly customizable and includes animations for the title, subtitle, buttons, and image. It is fully responsive, adapting to different screen sizes by collapsing the layout into a single-column format on mobile devices. This hero section is ideal for grabbing attention and guiding users toward an important action or message.`,
    
    fields: [
      {
        name: 'title',
        type: 'string',
        label: 'Hero Title',
        description: `
          The main heading displayed on the left side of the hero section. This should be concise and impactful, communicating the primary message of the page.`,
        required: true,
        example: 'Discover Your Dream Career'
      },
      {
        name: 'subtitle',
        type: 'string',
        label: 'Hero Subtitle',
        description: `
          A secondary heading displayed below the title, offering additional context or supporting information. It should complement the main title.`,
        required: true,
        example: 'Expert guidance to help you achieve your career goals.'
      },
      {
        name: 'primaryCTA',
        type: 'object',
        label: 'Primary Call-To-Action',
        description: `
          The primary button that users can click to take the desired action, such as "Get Started" or "Learn More". This button is emphasized and should be clear and engaging.`,
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
        name: 'imageUrl',
        type: 'string',
        label: 'Hero Image URL',
        description: `
          The URL for the image displayed on the right side of the hero section. This image should be visually compelling and relevant to the content of the page.`,
        required: true,
        example: 'https://example.com/hero-image.jpg'
      }
    ],
  
    options: [
      {
        name: 'titleColor',
        type: 'color',
        label: 'Title Text Color',
        description: `
          The color of the title text, ensuring it contrasts well with the background and aligns with the overall theme.`,
        example: '#000000'
      },
      {
        name: 'subtitleColor',
        type: 'color',
        label: 'Subtitle Text Color',
        description: `
          The color of the subtitle text to match or complement the design.`,
        example: '#333333'
      },
      {
        name: 'buttonColor',
        type: 'color',
        label: 'CTA Button Background Color',
        description: `
          The background color for the primary CTA button.`,
        example: '#FF5733'
      },
      {
        name: 'imageBorderRadius',
        type: 'number',
        label: 'Image Border Radius',
        description: `
          Controls the border radius of the image, allowing the user to customize the look of the image by rounding its corners.`,
        example: 20
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
  