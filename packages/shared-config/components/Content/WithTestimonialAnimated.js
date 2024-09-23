export default {
    name: 'WithTestimonial',
    category: 'Testimonial',
    description: `
      The WithTestimonial component is designed to showcase a section of content paired with a testimonial or quote. It features a heading, description, and a detailed content section with bullet points and subsections, along with a highlighted testimonial. The testimonial is displayed in a separate area with a quote and author details, creating a clear and engaging layout for the reader. This component is great for emphasizing user feedback, case studies, or featured insights. It includes smooth fade-in animations that trigger when the content comes into view.`,
    
    fields: [
      {
        name: 'subheading',
        type: 'string',
        label: 'Subheading',
        description: `
          A short, introductory text that precedes the main heading. The subheading adds context to the content that follows and should be concise yet informative.`,
        required: false,
        example: 'Trusted by Industry Leaders'
      },
      {
        name: 'heading',
        type: 'string',
        label: 'Heading',
        description: `
          The main title of the section, designed to grab attention. It should be bold, clear, and informative, guiding the reader toward the primary message of the section.`,
        required: true,
        example: 'Why Our Clients Trust Us'
      },
      {
        name: 'description',
        type: 'string',
        label: 'Description',
        description: `
          A more detailed explanation that supports the heading. This description gives readers an overview of what to expect in the section, providing valuable insights.`,
        required: false,
        example: 'Our clients rely on us to deliver exceptional services and results every time.'
      },
      {
        name: 'content',
        type: 'array',
        label: 'Main Content',
        description: `
          The main body of the section, typically structured as an array of paragraphs. This content serves to inform or educate the user about the topic.`,
        required: true,
        fields: [
          {
            name: 'paragraph',
            type: 'string',
            label: 'Paragraph Text',
            description: 'A block of text representing one paragraph of the content.',
            example: 'We have been at the forefront of innovation in our field for over 20 years.'
          }
        ]
      },
      {
        name: 'bullets',
        type: 'array',
        label: 'Bullet Points',
        description: `
          An array of bullet points that provide quick, digestible information. Each bullet contains a title, description, and an optional icon to visually emphasize key points.`,
        required: false,
        fields: [
          {
            name: 'title',
            type: 'string',
            label: 'Bullet Title',
            description: 'A brief, bold title for each bullet point.',
            example: 'Expert Consultation'
          },
          {
            name: 'description',
            type: 'string',
            label: 'Bullet Description',
            description: 'A short description that provides additional information about the bullet point.',
            example: 'Our expert consultants are available 24/7 to assist you with your needs.'
          },
          {
            name: 'icon',
            type: 'object',
            label: 'Bullet Icon',
            description: 'An optional icon to visually accompany each bullet point, typically from a library like Heroicons or FontAwesome.'
          }
        ]
      },
      {
        name: 'subsections',
        type: 'array',
        label: 'Subsections',
        description: `
          Optional subsections within the content area that can include a title and text. These subsections help break the content into smaller, easily digestible parts.`,
        required: false,
        fields: [
          {
            name: 'title',
            type: 'string',
            label: 'Subsection Title',
            description: 'A title that introduces a subsection of the content.',
            example: 'Our Approach'
          },
          {
            name: 'content',
            type: 'string',
            label: 'Subsection Content',
            description: 'Text content that provides details within the subsection.',
            example: 'We take a client-centric approach to deliver customized solutions.'
          }
        ]
      },
      {
        name: 'quote',
        type: 'object',
        label: 'Testimonial Quote',
        description: `
          The testimonial or quote that is featured in the section. This includes the quote text, author name, role, and author image.`,
        required: true,
        fields: [
          {
            name: 'text',
            type: 'string',
            label: 'Quote Text',
            description: 'The main body of the testimonial or quote.',
            example: 'This service has been a game changer for our business!'
          },
          {
            name: 'name',
            type: 'string',
            label: 'Author Name',
            description: 'The name of the person who provided the quote.',
            example: 'Jane Doe'
          },
          {
            name: 'handle',
            type: 'string',
            label: 'Author Handle',
            description: 'The role or title of the person who provided the quote.',
            example: 'CEO at Acme Corp'
          },
          {
            name: 'image',
            type: 'string',
            label: 'Author Image',
            description: 'The URL of the image for the person who provided the quote.',
            example: 'https://example.com/jane.jpg'
          }
        ]
      }
    ],
  
    options: [
      {
        name: 'quoteAnimationDuration',
        type: 'number',
        label: 'Quote Animation Duration',
        description: `
          Set the duration (in seconds) for the quote fade-in animation. This determines how long it takes for the quote to fully appear when in view.`,
        default: 1.5,
        example: 1.5
      },
      {
        name: 'quoteAnimationDelay',
        type: 'number',
        label: 'Quote Animation Delay',
        description: `
          Set the delay (in seconds) before the quote animation starts. This allows you to stagger when the quote fades in compared to other elements.`,
        default: 0,
        example: 0.8
      },
      {
        name: 'quoteViewportAmount',
        type: 'number',
        label: 'Quote Viewport Threshold',
        description: `
          Controls the amount (as a fraction) of the quote that needs to be in the viewport for the animation to trigger. For example, 0.8 means 80% of the quote needs to be visible.`,
        default: 0.8,
        example: 0.8
      }
    ]
  };
  