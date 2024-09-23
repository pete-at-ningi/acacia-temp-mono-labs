export default {
    name: 'WithTestimonial',
    category: 'Testimonial',
    description: `
      The WithTestimonial component is designed to display a section with content and a supporting testimonial. This component is typically used to provide information along with a user or customer testimonial to build trust and credibility. It is split into two main columns: the left column contains the heading, description, and additional content such as paragraphs and bullet points, while the right column highlights a quote with the author’s information. The component adjusts to different screen sizes, making it fully responsive. The testimonial section is visually distinct with a border and styled text, and it includes an optional profile image, name, and handle for the person being quoted. The content section allows for rich text elements, subsections, and bullet points, making it flexible for a variety of content presentations.`,
    
    fields: [
      {
        name: 'subheading',
        type: 'string',
        label: 'Subheading',
        description: `
          A short subheading displayed above the main title. It helps introduce the content and set the tone for the section. The subheading is smaller in size but should still be impactful and relevant to the content. Ideal length is between 20 to 50 characters.`,
        required: false,
        example: 'Why Our Customers Love Us'
      },
      {
        name: 'heading',
        type: 'string',
        label: 'Main Heading',
        description: `
          The main heading of the section, displayed prominently in the left column. It serves as the key message or title for the section and should be concise yet impactful. Ideal length is around 30 to 70 characters. This is typically the first thing users see, so it needs to be engaging and clear.`,
        required: true,
        example: 'Customer Testimonials'
      },
      {
        name: 'description',
        type: 'string',
        label: 'Description',
        description: `
          A brief description that appears under the main heading. This text provides context or additional information related to the heading. It should summarize the content of the section in a clear and engaging manner. Ideal length is between 100 to 200 characters.`,
        required: false,
        example: 'Discover how our solutions have transformed businesses and learn why our customers trust us.'
      },
      {
        name: 'content',
        type: 'array',
        label: 'Content Paragraphs',
        description: `
          An array of paragraph strings that make up the core content of the section. These paragraphs can cover the main points or messages related to the section topic. Each paragraph should be around 100 to 300 characters, providing enough detail to be informative without overwhelming the reader.`,
        required: true,
        example: ['Our innovative approach helps companies streamline their operations.', 'We offer personalized solutions to meet each client’s unique needs.']
      },
      {
        name: 'bullets',
        type: 'array',
        label: 'Bullet Points',
        description: `
          An array of bullet point objects. Each bullet contains a title, description, and an optional icon. Bullet points are used to highlight key features, benefits, or services in a concise and structured manner. They are styled with icons to enhance visual clarity.`,
        required: false,
        fields: [
          {
            name: 'title',
            type: 'string',
            label: 'Bullet Title',
            description: 'A short, impactful title for the bullet point, typically a feature or benefit.',
            example: 'Efficient Workflow'
          },
          {
            name: 'description',
            type: 'string',
            label: 'Bullet Description',
            description: 'A brief description explaining the bullet point in more detail. Ideal length is 50 to 100 characters.',
            example: 'Our system ensures smooth, efficient operations with minimal downtime.'
          },
          {
            name: 'icon',
            type: 'string',
            label: 'Bullet Icon',
            description: 'An optional icon for visual representation of the bullet point. It should be a relevant symbol or graphic.',
            example: 'CheckCircleIcon'
          }
        ]
      },
      {
        name: 'subsections',
        type: 'array',
        label: 'Subsections',
        description: `
          An array of subsections that provide additional structure to the content. Each subsection consists of a title and content, allowing for more detailed breakdowns within the section. This is ideal for highlighting specific topics or themes.`,
        required: false,
        fields: [
          {
            name: 'title',
            type: 'string',
            label: 'Subsection Title',
            description: 'The title of the subsection, typically used to introduce a new topic or content area.',
            example: 'How We Help'
          },
          {
            name: 'content',
            type: 'string',
            label: 'Subsection Content',
            description: 'The text content for the subsection. Ideal length is 100 to 300 characters.',
            example: 'Our platform helps businesses automate tasks, saving time and reducing costs.'
          }
        ]
      },
      {
        name: 'quote',
        type: 'object',
        label: 'Testimonial Quote',
        description: `
          The testimonial quote object contains the text of the quote as well as information about the author. The quote is displayed in a visually distinct format with styling to set it apart from the other content. The author’s name, handle, and profile image can also be included.`,
        required: true,
        fields: [
          {
            name: 'text',
            type: 'string',
            label: 'Quote Text',
            description: 'The text of the quote itself. This should be a short, impactful statement from a customer or user, ideally between 100 and 200 characters.',
            example: 'This product has completely transformed the way we do business, increasing efficiency by 50%.'
          },
          {
            name: 'name',
            type: 'string',
            label: 'Author Name',
            description: 'The name of the person being quoted.',
            example: 'John Smith'
          },
          {
            name: 'handle',
            type: 'string',
            label: 'Author Handle',
            description: 'The job title or social media handle of the person being quoted, displayed alongside their name.',
            example: 'CEO at TechCorp'
          },
          {
            name: 'image',
            type: 'string',
            label: 'Author Image URL',
            description: 'The URL of the author’s profile image, which is displayed alongside the quote. Should be a small square image, preferably 40x40px.',
            example: 'https://example.com/profile.jpg'
          }
        ]
      }
    ]
  };
  