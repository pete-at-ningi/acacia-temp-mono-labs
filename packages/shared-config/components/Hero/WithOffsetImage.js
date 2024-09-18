// shared-config/components/Hero/HeroWithImageAndCTA.js
export default {
    name: 'HeroWithImageAndCTA',
    category: 'Hero',
    description: `
      The HeroWithImageAndCTA component is a split-layout hero section that features a text-based call-to-action (CTA) on the left and an image on the right. It is designed to provide a compelling introduction to a product, service, or content with a bold headline, a supporting subtitle, and a CTA button. The right side of the section displays an image, which is ideal for showcasing a product or visual representation related to the content. The layout adjusts to a single-column format on mobile, ensuring full responsiveness across devices. This component is suitable for homepages, landing pages, or any content where a visually balanced hero section is needed to drive user engagement.`,
    
    fields: [
      {
        name: 'title',
        type: 'string',
        label: 'Title',
        description: `
          The main headline of the hero section. It serves as the focal point and should capture the core message or theme. The title is styled prominently to draw attention. Ideal length is between 30 to 60 characters.`,
        required: true,
        example: 'Innovate and Grow Your Business with Us.'
      },
      {
        name: 'subtitle',
        type: 'string',
        label: 'Subtitle',
        description: `
          A brief descriptive text displayed below the main title. It provides additional context or a brief explanation of the hero's message. Ideal length is 50 to 100 characters.`,
        required: false,
        example: 'We offer cutting-edge solutions to help your business thrive in a competitive landscape.'
      },
      {
        name: 'primaryCTA',
        type: 'object',
        label: 'Primary Call to Action (CTA)',
        description: `
          The primary call-to-action button that encourages users to take action. This includes a label and a route (URL).`,
        required: true,
        fields: [
          {
            name: 'label',
            type: 'string',
            label: 'Primary CTA Label',
            description: 'The text displayed on the primary CTA button, usually action-oriented and clear.',
            example: 'Get Started'
          },
          {
            name: 'route',
            type: 'string',
            label: 'Primary CTA URL',
            description: 'The URL or route that the primary CTA directs to.',
            example: '/get-started'
          }
        ]
      },
      {
        name: 'imageUrl',
        type: 'string',
        label: 'Image URL',
        description: `
          The URL of the image displayed in the right column of the hero section. This image should visually support the message and be at least 800px wide for optimal display. The image is responsive and will be adjusted based on screen size.`,
        required: true,
        example: 'https://example.com/hero-image.jpg'
      }
    ],
    
    options: [
      {
        name: 'layout',
        type: 'select',
        label: 'Layout',
        description: `
          This option controls the layout of the hero section. It allows the section to switch between a split 3:2 layout for larger screens and a stacked layout for mobile devices.`,
        choices: ['3:2', '2:1'],
        default: '3:2'
      }
    ]
  };
  