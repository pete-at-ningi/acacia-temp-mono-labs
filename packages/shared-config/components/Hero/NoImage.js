export default {
    name: 'HeroWithOverlayAndCTA',
    category: 'Hero',
    description: `
      The HeroWithOverlayAndCTA component is a visually impactful hero section designed to be placed at the top of a webpage. It features a full-width and full-height section with a customizable background color or image, overlaid by a semi-transparent layer to ensure legibility of the text content. The component contains a title, a subtitle, and one or two call-to-action (CTA) buttons. It is fully responsive, adjusting the layout and font sizes based on screen size. The hero section is ideal for making strong first impressions, introducing key messages, and guiding users with clear actions. The CTAs direct users to important sections of the website, such as a product page or contact form. The overlay ensures that text remains readable regardless of the background content, making this component versatile for various industries.`,
    
    fields: [
      {
        name: 'imageUrl',
        type: 'string',
        label: 'Background Image URL',
        description: `
          The URL of the background image that will cover the entire hero section. This image will be displayed behind the content, and the overlay ensures text remains legible. The image should be high-resolution and at least 1920px wide for optimal display on large screens.`,
        required: false,
        example: 'https://example.com/hero-background.jpg'
      },
      {
        name: 'subtitle',
        type: 'string',
        label: 'Subtitle',
        description: `
          A short subtitle that appears above the title. It provides additional context or a brief description. The subtitle is styled with a bordered background to make it stand out, and is usually shorter than the main title. Ideal length is between 50 to 100 characters.`,
        required: false,
        example: 'Join us on the journey of innovation and success.'
      },
      {
        name: 'title',
        type: 'string',
        label: 'Title',
        description: `
          The main headline of the hero section. It is the most prominent text and should capture the essence of the message or product being highlighted. The title is large, bold, and designed to immediately capture the user's attention. Ideal length is between 30 to 60 characters.`,
        required: true,
        example: 'Empowering Your Business for Tomorrow.'
      },
      {
        name: 'primaryCTA',
        type: 'object',
        label: 'Primary Call to Action (CTA)',
        description: `
          The primary call-to-action button is prominently displayed and should encourage users to take the most important action on the page. It is styled with a solid background color to stand out and includes a label and a link.`,
        required: true,
        fields: [
          {
            name: 'label',
            type: 'string',
            label: 'Primary CTA Label',
            description: 'The text displayed on the primary CTA button. It should be concise and action-oriented (e.g., "Get Started").',
            example: 'Get Started'
          },
          {
            name: 'route',
            type: 'string',
            label: 'Primary CTA URL',
            description: 'The URL or route the primary CTA directs to.',
            example: '/get-started'
          }
        ]
      },
      {
        name: 'secondaryCTA',
        type: 'object',
        label: 'Secondary Call to Action (CTA)',
        description: `
          The secondary call-to-action button offers an alternative or less urgent action, such as learning more or contacting the business. It is styled with a transparent background and a border to differentiate it from the primary CTA.`,
        required: false,
        fields: [
          {
            name: 'label',
            type: 'string',
            label: 'Secondary CTA Label',
            description: 'The text displayed on the secondary CTA button. It should offer an alternative action (e.g., "Learn More").',
            example: 'Learn More'
          },
          {
            name: 'route',
            type: 'string',
            label: 'Secondary CTA URL',
            description: 'The URL or route the secondary CTA directs to.',
            example: '/learn-more'
          }
        ]
      }
    ],
    
    options: [
      {
        name: 'overlayOpacity',
        type: 'number',
        label: 'Overlay Opacity',
        description: `
          This option controls the opacity of the overlay, which sits over the background image or color. The opacity ensures that text remains legible regardless of the background content. The default is set to 0.85, but it can be adjusted for different visual effects.`,
        default: 0.85
      }
    ]
  };
  