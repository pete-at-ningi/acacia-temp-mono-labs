export default {
    name: 'HeroWithBlogTagAndImage',
    category: 'Hero',
    description: `
      The HeroWithBlogTagAndImage component is a visually engaging hero section that combines a promotional call to action with a background image. It features a left column with a blog tag, title, subtitle, and a call-to-action (CTA) button, while the right column showcases an image or background gradient. This hero is designed to be responsive, switching to a single-column layout on smaller screens. The blog tag is a link that directs users to the latest blog or news update, making it ideal for content-driven websites. The component includes a blend of textual content and imagery to draw the user's attention, and the CTAs can guide users to key areas of the website.`,
    
    fields: [
      {
        name: 'blogtagtitle',
        type: 'string',
        label: 'Blog Tag Title',
        description: `
          The blog tag is a short label that introduces the latest blog or content piece. It is displayed at the top of the hero section and serves as a link to the blog page. Ideal length is between 10 to 30 characters.`,
        required: false,
        example: 'Latest News'
      },
      {
        name: 'blogtagroute',
        type: 'string',
        label: 'Blog Tag URL',
        description: `
          The URL or route that the blog tag links to. This typically directs users to the latest blog post or news page.`,
        required: false,
        example: '/blog/latest'
      },
      {
        name: 'title',
        type: 'string',
        label: 'Title',
        description: `
          The main headline of the hero section. It is displayed prominently in the left column and serves as the focal point of the hero. Ideal length is between 30 to 60 characters.`,
        required: true,
        example: 'Discover How We Empower Your Business.'
      },
      {
        name: 'subtitle',
        type: 'string',
        label: 'Subtitle',
        description: `
          A short descriptive text displayed under the main title. It provides additional context or a brief explanation of the message. Ideal length is 50 to 100 characters.`,
        required: false,
        example: 'Our innovative solutions are designed to help you succeed in a competitive market.'
      },
      {
        name: 'primaryCTA',
        type: 'object',
        label: 'Primary Call to Action (CTA)',
        description: `
          The primary call-to-action button, designed to encourage users to take immediate action. It includes a label and a route (URL).`,
        required: true,
        fields: [
          {
            name: 'label',
            type: 'string',
            label: 'Primary CTA Label',
            description: 'The text displayed on the primary CTA button.',
            example: 'Learn More'
          },
          {
            name: 'route',
            type: 'string',
            label: 'Primary CTA URL',
            description: 'The URL or route the primary CTA directs to.',
            example: '/learn-more'
          }
        ]
      },
      {
        name: 'imageUrl',
        type: 'string',
        label: 'Background Image URL',
        description: `
          The URL of the background image used in the right column. This image is blended with a gradient and fills the entire right section of the hero. The image should be high-quality and at least 1920px wide for optimal display.`,
        required: true,
        example: 'https://example.com/hero-background.jpg'
      }
    ],
    
    options: [
      {
        name: 'gridLayout',
        type: 'select',
        label: 'Grid Layout',
        description: `
          This option controls the layout of the hero section. It determines the proportion of space the left and right columns take up. The default layout is a 3:2 ratio, but it can be adjusted based on design needs.`,
        choices: ['3:2', '2:1'],
        default: '3:2'
      }
    ]
  };
  