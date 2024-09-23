export default {
    name: 'ContentPage',
    category: 'Page',
    description: `
      The ContentPage component is designed to display a detailed article or blog post with rich formatting options including paragraphs, titles, quotes, lists, and images. It is structured with a clean and responsive layout, focusing on clarity and readability. The component also includes a progress bar at the top to indicate how far the user has scrolled, providing a visual guide for user engagement. The content sections can include author information, lists of bullet points, or images to enrich the user's reading experience.`,
    
    fields: [
      {
        name: 'subtitle',
        type: 'string',
        label: 'Subtitle',
        description: `
          A smaller heading that introduces the main content of the page. The subtitle provides additional context or information about the content that follows.`,
        required: true,
        example: 'Discover Our Latest Innovations'
      },
      {
        name: 'title',
        type: 'string',
        label: 'Title',
        description: `
          The main heading for the page content. This title should be engaging and provide the user with a clear understanding of the article's topic.`,
        required: true,
        example: 'The Future of Technology in 2025'
      },
      {
        name: 'description',
        type: 'string',
        label: 'Description',
        description: `
          A brief introduction to the content of the page. The description provides a summary of what users can expect to read and entices them to explore further.`,
        required: false,
        example: 'Explore how emerging technologies will shape the world in the coming years.'
      },
      {
        name: 'content',
        type: 'array',
        label: 'Page Content',
        description: `
          The content array includes various types of sections like paragraphs, titles, quotes, lists, and images. These elements help structure the page and present information in a rich, engaging format.`,
        required: true,
        fields: [
          {
            name: 'type',
            type: 'select',
            label: 'Content Type',
            description: 'Select the type of content to display, such as paragraph, title, quote, list, or image.',
            choices: ['paragraph', 'title', 'quote', 'list', 'image'],
            required: true
          },
          {
            name: 'text',
            type: 'string',
            label: 'Content Text',
            description: 'The text content of the element. This is used for paragraphs, titles, and quotes.',
            example: 'Innovation is the key to future growth.'
          },
          {
            name: 'items',
            type: 'array',
            label: 'List Items',
            description: 'An array of items to be displayed if the content type is set to "list".',
            fields: [
              {
                name: 'title',
                type: 'string',
                label: 'List Item Title',
                description: 'The title for the list item.',
                example: 'Efficiency'
              },
              {
                name: 'description',
                type: 'string',
                label: 'List Item Description',
                description: 'A short description for the list item.',
                example: 'Increasing productivity through automation.'
              }
            ]
          },
          {
            name: 'src',
            type: 'string',
            label: 'Image URL',
            description: 'The URL of the image if the content type is set to "image".',
            example: 'https://example.com/image.jpg'
          },
          {
            name: 'author',
            type: 'object',
            label: 'Author Information',
            description: 'Details about the author of a quote, if the content type is set to "quote".',
            fields: [
              {
                name: 'name',
                type: 'string',
                label: 'Author Name',
                description: 'The name of the person being quoted.',
                example: 'Elon Musk'
              },
              {
                name: 'role',
                type: 'string',
                label: 'Author Role',
                description: 'The role or title of the quoted individual.',
                example: 'CEO of Tesla'
              },
              {
                name: 'image',
                type: 'string',
                label: 'Author Image URL',
                description: 'The profile image URL of the author.',
                example: 'https://example.com/elon.jpg'
              }
            ]
          }
        ]
      }
    ],
  
    options: [
      {
        name: 'progressBarColor',
        type: 'string',
        label: 'Progress Bar Color',
        description: `
          Allows customization of the color of the progress bar that tracks how far the user has scrolled through the page.`,
        default: '#007BFF',
        example: '#FF4500'
      }
    ]
  };
  