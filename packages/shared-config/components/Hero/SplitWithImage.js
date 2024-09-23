export default {
    name: 'HeroWithBlogLinkAndImage',
    category: 'Hero',
    description: `
      The HeroWithBlogLinkAndImage component is a visually engaging hero section designed to introduce a key message with a strong call to action (CTA) and a promotional blog link. It features a two-column layout, with the left column containing a blog link, title, subtitle, and a primary CTA button, while the right column showcases a full-width background image overlaid with a gradient. The component adjusts to a single-column layout on smaller screens, making it fully responsive. This hero component is ideal for content-driven websites, where promoting the latest blog or news update alongside a main CTA can enhance user engagement.`,
    
    fields: [
      {
        name: 'bloglinktitle',
        type: 'string',
        label: 'Blog Link Title',
        description: `
          A short text that introduces the latest blog post or content piece. This blog link is displayed at the top of the hero section and serves as a link to the blog page. Ideal length is between 10 to 30 characters.`,
        required: false,
        example: 'Latest News'
      },
      {
        name: 'bloglinkroute',
        type: 'string',
        label: 'Blog Link URL',
        description: `
          The URL or route that the blog link directs to. This typically links to the latest blog post or news page.`,
        required: false,
        example: '/blog/latest'
      },
      {
        name: 'title',
        type: 'string',
        label: 'Title',
        description: `
          The main headline of the hero section. It serves as the focal point of the hero and should capture the core message or theme. Ideal length is between 30 to 60 characters.`,
        required: true,
        example: 'Empowering Your Business with Innovation.'
      },
      {
        name: 'subtitle',
        type: 'string',
        label: 'Subtitle',
        description: `
          A brief descriptive text that appears below the main title. It provides additional context or a brief explanation of the hero message. Ideal length is 50 to 100 characters.`,
        required: false,
        example: 'Our innovative solutions are tailored to help your business thrive in a competitive landscape.'
      },
      {
        name: 'primaryCTA',
        type: 'object',
        label: 'Primary Call to Action (CTA)',
        description: `
          The primary call-to-action button that encourages users to take immediate action. This includes a label and a route (URL).`,
        required: true,
        fields: [
          {
            name: 'label',
            type: 'string',
            label: 'Primary CTA Label',
            description: 'The text displayed on the primary CTA button, usually action-oriented and clear.',
            example: 'Learn More'
          },
          {
            name: 'route',
            type: 'string',
            label: 'Primary CTA URL',
            description: 'The URL or route that the primary CTA links to.',
            example: '/learn-more'
          }
        ]
      },
      {
        name: 'imageUrl',
        type: 'string',
        label: 'Background Image URL',
        description: `
          The URL of the background image used in the right column. This image is combined with a gradient overlay and fills the entire right section of the hero. It should be high-quality and at least 1920px wide for optimal display.`,
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
          This option controls the layout of the hero section. It determines the proportion of space the left and right columns take up. The default layout is a 3:2 ratio, but it can be adjusted for different design needs.`,
        choices: ['3:2', '2:1'],
        default: '3:2'
      }
    ]
  };
  