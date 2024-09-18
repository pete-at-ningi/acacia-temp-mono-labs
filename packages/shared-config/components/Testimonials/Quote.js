// shared-config/components/QuoteItem/QuoteItemWithImageAndAuthor.js
export default {
    name: 'QuoteItemWithImageAndAuthor',
    category: 'Testimonial',
    description: `
      The QuoteItemWithImageAndAuthor component is a visually appealing section designed to display a quote alongside an image of the author. It features a flexible layout that adjusts between single-column and dual-column formats based on screen size. The component includes a quote, author’s name, title, and an accompanying image, all styled with a modern, responsive design. This component is ideal for showcasing client testimonials, executive messages, or inspirational quotes. The image is displayed on one side, and the quote with author details is presented on the other side, creating a balanced layout. The background color and typography are designed to highlight the quote and its significance.`,
    
    fields: [
      {
        name: 'imageUrl',
        type: 'string',
        label: 'Image URL',
        description: `
          The URL of the image displayed alongside the quote. This image can be a portrait or any image that visually supports the quote. Ideal for displaying headshots or product images. The image should be at least 400px wide.`,
        required: true,
        example: 'https://example.com/author-image.jpg'
      },
      {
        name: 'quote',
        type: 'string',
        label: 'Quote',
        description: `
          The main text of the quote. It should be a powerful or insightful statement that supports the message of the section. Ideal length is between 100 to 300 characters.`,
        required: true,
        example: 'Acacia Wealth helped me plan for my future, and I couldn’t be happier with the results!'
      },
      {
        name: 'authorName',
        type: 'string',
        label: 'Author Name',
        description: `
          The name of the person or entity giving the quote. This is displayed prominently under the quote.`,
        required: true,
        example: 'John Doe'
      },
      {
        name: 'authorTitle',
        type: 'string',
        label: 'Author Title',
        description: `
          The title or role of the person giving the quote. This appears below the author’s name and provides context for the quote.`,
        required: false,
        example: 'CEO, Acacia Wealth'
      }
    ],
    
    options: [
      {
        name: 'backgroundColor',
        type: 'string',
        label: 'Background Color',
        description: `
          The background color of the quote section. This option allows for customization of the section’s appearance. The default color is dark, but it can be adjusted to fit the website’s design.`,
        default: 'theme.colors.dark'
      },
      {
        name: 'quoteStyle',
        type: 'boolean',
        label: 'Quote Mark Styling',
        description: `
          This option controls whether large decorative quote marks are displayed around the quote on larger screens. This adds a visual flair to the quote.`,
        default: true
      }
    ]
  };
  