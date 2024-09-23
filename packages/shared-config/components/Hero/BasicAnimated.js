export default {
    name: 'Hero',
    category: 'HeroSection',
    description: `
      The Hero component is designed to be the main visual feature of a web page. It typically contains an eye-catching background image, an overlay, a title, a subtitle, and one or two call-to-action buttons. The section takes up a significant portion of the viewport (e.g., 70vh) and is ideal for showcasing the primary message or offer of the website. The component is fully responsive, with adjustable font sizes and layout for smaller screens, and uses animation effects for enhanced visual appeal.`,
    
    fields: [
      {
        name: 'imageUrl',
        type: 'string',
        label: 'Background Image URL',
        description: `
          The URL for the background image that appears in the hero section. The image should be high resolution and appropriate for display across various screen sizes. It will be displayed as a cover image, meaning it will scale to fit the hero section dimensions.`,
        required: true,
        example: 'https://example.com/hero-background.jpg'
      },
      {
        name: 'subtitle',
        type: 'string',
        label: 'Subtitle Text',
        description: `
          The subtitle text displayed in the hero section. It is a short, descriptive line that provides context for the main message. This text appears above the main title and has a border to make it stand out.`,
        required: true,
        example: 'Welcome to Acacia Wealth'
      },
      {
        name: 'title',
        type: 'string',
        label: 'Main Title',
        description: `
          The main title of the hero section, typically a large, bold statement that grabs the user's attention. It should clearly communicate the primary message of the page.`,
        required: true,
        example: 'Empowering Your Financial Future'
      },
      {
        name: 'primaryCTA',
        type: 'object',
        label: 'Primary Call-To-Action',
        description: `
          The primary call-to-action (CTA) button is a prominent button that encourages the user to take the main action, such as signing up or learning more.`,
        required: true,
        fields: [
          {
            name: 'label',
            type: 'string',
            label: 'CTA Label',
            description: 'The text displayed on the primary CTA button.',
            example: 'Get Started'
          },
          {
            name: 'route',
            type: 'string',
            label: 'CTA Route',
            description: 'The URL or route the user is directed to when clicking the button.',
            example: '/get-started'
          }
        ]
      },
      {
        name: 'secondaryCTA',
        type: 'object',
        label: 'Secondary Call-To-Action (Optional)',
        description: `
          The secondary call-to-action (CTA) button, which is less prominent than the primary button and provides an alternative action for the user. This field is optional and is only displayed if defined.`,
        required: false,
        fields: [
          {
            name: 'label',
            type: 'string',
            label: 'CTA Label',
            description: 'The text displayed on the secondary CTA button.',
            example: 'Learn More'
          },
          {
            name: 'route',
            type: 'string',
            label: 'CTA Route',
            description: 'The URL or route the user is directed to when clicking the button.',
            example: '/learn-more'
          }
        ]
      }
    ],
  
    options: [
      {
        name: 'animationDuration',
        type: 'number',
        label: 'Animation Duration',
        description: `
          The duration of the fade-in and slide animations applied to the subtitle, title, and buttons. The value is in seconds, allowing customization of how fast or slow the elements animate into view.`,
        default: 0.8,
        example: '1.2' 
      },
      {
        name: 'overlayColor',
        type: 'color',
        label: 'Overlay Color',
        description: `
          The color of the overlay applied on top of the background image. The overlay helps increase the contrast between the text and the background, ensuring readability.`,
        example: '#000000'
      },
      {
        name: 'ctaButtonColor',
        type: 'color',
        label: 'CTA Button Color',
        description: `
          The background color for the call-to-action (CTA) buttons, allowing customization of the button color to match the site's branding.`,
        example: '#ff5733'
      }
    ]
  };
  