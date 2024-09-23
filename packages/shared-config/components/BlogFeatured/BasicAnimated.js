export default {
    name: 'BlogSection',
    category: 'Blog',
    description: `
      The BlogSection component displays a collection of blog posts in a responsive grid layout. It consists of a header with a title and subtitle, followed by a grid of posts. Each post is shown as a clickable card with an image, title, description, and author details. The component is designed with framer-motion animations for smooth load-in and hover effects. It is customizable to control the number of posts displayed per row and adapts to different screen sizes.`,
      
    fields: [
      {
        name: 'featuredIntro',
        type: 'string',
        label: 'Section Title',
        description: `
          The title for the section that appears at the top. It should be a clear, engaging heading indicating the purpose of the section, such as "Featured Articles" or "Latest Blogs." It is displayed prominently to attract user attention.`,
        required: true,
        example: 'Featured Articles'
      },
      {
        name: 'featuredSub',
        type: 'string',
        label: 'Section Subtitle',
        description: `
          A subtitle that provides additional context or detail below the section title. It is smaller in size than the main title and offers more information about the blog posts.`,
        required: false,
        example: 'Stay updated with the latest insights from our blog.'
      },
      {
        name: 'content',
        type: 'array',
        label: 'Blog Posts Content',
        description: `
          An array of blog posts, where each post includes a title, description, image, date, route (URL), and author details. Each post is displayed as a card in a grid layout and supports hover animations.`,
        required: true,
        fields: [
          {
            name: 'title',
            type: 'string',
            label: 'Post Title',
            description: 'The title of the blog post, displayed prominently. Should be concise and engaging.',
            example: 'Understanding Blockchain Technology'
          },
          {
            name: 'description',
            type: 'string',
            label: 'Post Description',
            description: `
              A brief summary of the blog post content. Should be engaging and informative, providing users with a preview of the post. Long descriptions are truncated.`,
            example: 'Learn the basics of blockchain technology and how it’s transforming industries.'
          },
          {
            name: 'image',
            type: 'string',
            label: 'Post Image URL',
            description: `
              The URL for the image representing the blog post. The image appears at the top of each post card and provides visual context.`,
            example: 'https://example.com/blockchain-image.jpg'
          },
          {
            name: 'datetime',
            type: 'string',
            label: 'Post Date (ISO Format)',
            description: `
              The publication date of the blog post in ISO format (YYYY-MM-DD). This is displayed on each card.`,
            example: '2023-11-15'
          },
          {
            name: 'route',
            type: 'string',
            label: 'Post URL',
            description: 'The URL that users are taken to when clicking on the post card. It should link to the full blog post.',
            example: '/blog/blockchain-technology'
          },
          {
            name: 'author',
            type: 'object',
            label: 'Author Information',
            description: `
              An object containing details about the author of the blog post. The author's name, role, and profile image are displayed on the card.`,
            required: true,
            fields: [
              {
                name: 'name',
                type: 'string',
                label: 'Author Name',
                description: 'The name of the blog post author.',
                example: 'Jane Smith'
              },
              {
                name: 'role',
                type: 'string',
                label: 'Author Role',
                description: 'The role or title of the author (e.g., Contributor, Writer).',
                example: 'Tech Contributor'
              },
              {
                name: 'imageUrl',
                type: 'string',
                label: 'Author Image URL',
                description: `
                  The URL for the author’s profile image, displayed next to their name.`,
                example: 'https://example.com/jane-smith.jpg'
              }
            ]
          }
        ]
      }
    ],
  
    options: [
      {
        name: 'postsPerRow',
        type: 'select',
        label: 'Posts per Row',
        description: `
          Controls how many blog posts are displayed per row in the grid. Adjusts responsively for mobile, tablet, and desktop views.`,
        choices: ['1', '2', '3'],
        default: '3'
      },
      {
        name: 'animationDuration',
        type: 'number',
        label: 'Animation Duration (seconds)',
        description: `
          This option controls how long (in seconds) the animation takes to complete when the blog posts are first displayed. A lower value makes the animation faster, while a higher value makes it slower.`,
        default: 0.5,
        example: 0.8
      },
      {
        name: 'animationDelay',
        type: 'number',
        label: 'Animation Delay (seconds)',
        description: `
          Controls the delay between each post animation. A higher value will create a more staggered appearance of posts as they load into view.`,
        default: 0.35,
        example: 0.6
      },
      {
        name: 'hoverAnimationEase',
        type: 'select',
        label: 'Hover Animation Ease',
        description: `
          Defines the easing function for the hover animation on the blog post cards. This controls how smooth or bouncy the hover effect is.`,
        choices: ['ease-in', 'ease-out', 'ease-in-out', 'linear', 'ease'],
        default: 'ease-in-out'
      }
    ]
  };
  