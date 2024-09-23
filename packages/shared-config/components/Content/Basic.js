export default {
    name: 'ContentPageWithSections',
    category: 'Content',
    description: `
      The ContentPage component is a versatile page layout designed to display various types of content in a structured and visually appealing manner. The section begins with a subtitle, title, and description, followed by dynamically rendered content elements such as paragraphs, titles, quotes, lists, and images. Each type of content is styled to create a clean and organized reading experience. This component is ideal for blog posts, articles, and informational pages where different content types need to be seamlessly integrated. The layout adjusts to different screen sizes and devices, ensuring readability and accessibility across platforms. Content elements like quotes and lists are highlighted with distinct styles to capture the reader’s attention. The component allows for flexibility, supporting various content formats, including images with captions, bullet-point lists, and author details in quotes.`,
    
    fields: [
      {
        name: 'subtitle',
        type: 'string',
        label: 'Page Subtitle',
        description: `
          The subtitle of the content page is a short text displayed above the main title. It helps provide context or introduce the section. It is typically styled in a smaller font than the title but still prominent. Ideal length is around 30 to 60 characters.`,
        required: true,
        example: 'Our Mission and Values'
      },
      {
        name: 'title',
        type: 'string',
        label: 'Page Title',
        description: `
          The main title of the page, displayed prominently at the top of the content section. It sets the tone for the entire page and should be concise yet impactful. Ideal length is around 20 to 50 characters. The title is styled in a large font and bold to make it stand out.`,
        required: true,
        example: 'Why We Do What We Do'
      },
      {
        name: 'description',
        type: 'string',
        label: 'Page Description',
        description: `
          A brief introductory description that appears below the title. This text provides additional context or information about the page. It should summarize the key message of the content and engage the reader. Ideal length is between 100 to 200 characters.`,
        required: false,
        example: 'At our company, we are driven by our values of innovation, inclusivity, and sustainability.'
      },
      {
        name: 'content',
        type: 'array',
        label: 'Content Elements',
        description: `
          An array of content objects that make up the body of the page. The content can consist of various elements such as paragraphs, titles, quotes, lists, and images. Each element is dynamically rendered based on its type, allowing for flexibility in structuring the page. The content is displayed in a clean and organized manner, ensuring readability and visual appeal.`,
        required: true,
        fields: [
          {
            name: 'type',
            type: 'string',
            label: 'Content Type',
            description: `
              The type of content element to be displayed. The component supports several types, including paragraphs, titles, quotes, lists, and images. The type determines how the content is styled and rendered on the page.`,
            required: true,
            choices: ['paragraph', 'title', 'quote', 'list', 'image']
          },
          {
            name: 'text',
            type: 'string',
            label: 'Text Content',
            description: `
              The text content of the element. This field is used for paragraphs, titles, and quotes. The length and formatting depend on the element type: paragraphs should be around 150-300 characters, while titles and quotes can be shorter.`,
            required: true,
            example: 'Innovation is at the heart of everything we do, driving us to create solutions that make a difference.'
          },
          {
            name: 'items',
            type: 'array',
            label: 'List Items',
            description: `
              An array of list items for list-type content elements. Each list item consists of a title and a brief description. Lists are displayed as bullet points or icons with accompanying text. They are ideal for presenting key points or steps in a process.`,
            required: false,
            fields: [
              {
                name: 'title',
                type: 'string',
                label: 'List Item Title',
                description: 'The title of the list item, usually a key point or step in the list.',
                example: 'Sustainability'
              },
              {
                name: 'description',
                type: 'string',
                label: 'List Item Description',
                description: 'A brief description of the list item, providing additional context or details.',
                example: 'Our commitment to sustainability drives our efforts to reduce environmental impact.'
              }
            ]
          },
          {
            name: 'author',
            type: 'object',
            label: 'Author Information (For Quotes)',
            description: `
              The author object is used for quotes, providing information about the person who made the statement. It includes the author’s name, role, and profile image. This information is displayed alongside the quote, adding credibility and context.`,
            required: false,
            fields: [
              {
                name: 'name',
                type: 'string',
                label: 'Author Name',
                description: 'The name of the author, displayed below the quote. This should be concise and relevant to the content.',
                example: 'Jane Doe'
              },
              {
                name: 'role',
                type: 'string',
                label: 'Author Role',
                description: 'The role or title of the author (e.g., CEO, Founder), adding context to the quote.',
                example: 'CEO & Founder'
              },
              {
                name: 'image',
                type: 'string',
                label: 'Author Image URL',
                description: `
                  The URL of the author’s profile image. This image is displayed as a small avatar next to the author’s name and role. It should be a square image, preferably 40x40px.`,
                example: 'https://example.com/author-profile.jpg'
              }
            ]
          },
          {
            name: 'src',
            type: 'string',
            label: 'Image Source',
            description: `
              The URL of the image to be displayed. This field is used for image-type content elements. The image will be displayed with a caption, if provided, and should be high quality. It should have a width of at least 600px for optimal display.`,
            required: false,
            example: 'https://example.com/image.jpg'
          },
          {
            name: 'caption',
            type: 'string',
            label: 'Image Caption',
            description: 'A short description or caption for the image. This text appears below the image and provides context or additional information.',
            required: false,
            example: 'Our team working on the latest project.'
          }
        ]
      }
    ]
  };
  