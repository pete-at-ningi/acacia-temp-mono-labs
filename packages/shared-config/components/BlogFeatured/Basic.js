export default {
    name: 'Basic',
    category: 'BlogFeatured',
    description: `
      The BlogSection component is designed to display a grid of blog posts, typically used in a section of a web page. The section is styled with clean, minimal padding and background colors to ensure focus on the content. It is divided into a header area, which includes a title and a short introductory paragraph, and a grid layout that displays blog posts with accompanying images, titles, descriptions, and author information. Each post is displayed as a clickable card, with hover effects to enhance interactivity. The grid is responsive, adapting to different screen sizes, from mobile to desktop. This component can be used to showcase featured or recent posts, engaging users to explore more content. Each post contains a title, image, description, publication date, category, and author information to give the reader an overview of the post content before navigating further. It is flexible and customizable, allowing for the inclusion of any number of posts, and offers clean and organized presentation.`,
    
    fields: [
      {
        name: 'featuredIntro',
        type: 'string',
        label: 'Featured Section Title',
        description: `
          This is the main heading of the blog section, displayed at the top. It should be short and impactful, giving the reader a clear indication of the purpose of the section, such as "Featured Posts" or "Latest Articles." The text is displayed in a large, bold font, making it the most prominent element in the header. Ideal length is between 20 to 50 characters for readability and to maintain visual balance.`,
        required: true,
        example: 'Latest Blog Posts'
      },
      {
        name: 'featuredSub',
        type: 'string',
        label: 'Featured Section Subtitle',
        description: `
          This is the subheading that appears directly below the featured section title. It provides additional context or information to support the main title, encouraging users to explore the posts further. The subtitle is smaller in size compared to the title but should still be clear and engaging. It should be around 50 to 100 characters for optimal readability.`,
        required: false,
        example: 'Explore the latest articles on technology and innovation.'
      },
      {
        name: 'content',
        type: 'array',
        label: 'Blog Posts Content',
        description: `
          The content of the blog section is an array of post objects. Each post contains several key fields including the title, description, image, author information, and the publication date. These elements are displayed in a grid, with a dynamic layout that adjusts to different screen sizes. The posts should be relevant to the audience and align with the theme of the blog.`,
        required: true,
        fields: [
          {
            name: 'title',
            type: 'string',
            label: 'Post Title',
            description: 'The title of the blog post, displayed prominently on the post card. It should be concise and engaging, ideally around 30 to 60 characters.',
            example: 'How AI is Revolutionizing the Tech Industry'
          },
          {
            name: 'description',
            type: 'string',
            label: 'Post Description',
            description: `
              A brief summary of the blog post content, displayed below the title. This description gives the reader an idea of the post’s subject matter and tone. Ideally, the description should be between 150 to 200 characters. Longer descriptions will be truncated with ellipsis if they exceed this length.`,
            example: 'Discover how artificial intelligence is transforming industries and creating new opportunities in technology and beyond.'
          },
          {
            name: 'image',
            type: 'string',
            label: 'Post Image URL',
            description: `
              The URL of the image associated with the blog post. The image will be displayed at the top of the post card, providing a visual element to complement the text. The image should be high quality and have a resolution suitable for display across different screen sizes. The image size will automatically adjust, but it should have a width of at least 600px for optimal display.`,
            example: 'https://example.com/blog-post-image.jpg'
          },
          {
            name: 'datetime',
            type: 'string',
            label: 'Post Date (ISO Format)',
            description: `
              The date the blog post was published, formatted in ISO 8601 (YYYY-MM-DD) format. The date is displayed next to the category or other metadata of the post, giving the user an idea of when the post was published.`,
            example: '2024-09-15'
          },
          {
            name: 'route',
            type: 'string',
            label: 'Post URL',
            description: 'The URL the user is taken to when they click on the post card. It should lead to the full blog post or the relevant content page.',
            example: '/blog/ai-revolution'
          },
          {
            name: 'author',
            type: 'object',
            label: 'Author Information',
            description: `
              The author object contains details about the writer of the blog post, including their name, role, and a profile image. This information is displayed at the bottom of the post card, giving credit to the author and providing additional context for the reader.`,
            required: true,
            fields: [
              {
                name: 'name',
                type: 'string',
                label: 'Author Name',
                description: 'The name of the author, displayed below the post description. Should be between 10 to 30 characters.',
                example: 'John Doe'
              },
              {
                name: 'role',
                type: 'string',
                label: 'Author Role',
                description: 'The role or title of the author (e.g., Editor, Contributor), displayed next to the author name.',
                example: 'Senior Editor'
              },
              {
                name: 'imageUrl',
                type: 'string',
                label: 'Author Profile Image URL',
                description: `
                  The URL of the author’s profile image. This image is displayed as a small avatar next to the author name and role. It should be a square image, preferably 40x40px.`,
                example: 'https://example.com/author-profile.jpg'
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
        label: 'Number of Posts Per Row',
        description: `
          This option controls how many blog post cards are displayed per row in the grid layout. The default is three posts per row, but it can be adjusted to one, two, or three depending on the page design and screen size. The layout automatically adjusts for mobile and tablet breakpoints.`,
        choices: ['1', '2', '3'],
        default: '3'
      }
    ]
  };
  