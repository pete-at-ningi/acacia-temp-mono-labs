export default {
    name: 'QuestionsSection',
    category: 'FAQ',
    description: `
      The QuestionsSection component is designed to display a series of frequently asked questions (FAQs) or key information points. This section is typically used to provide users with answers to common queries or to highlight important details in a structured format. It consists of a bold introductory text, followed by a title and description, and then a grid of questions and answers. Each question is represented with an icon, a title, and a brief description. The section is fully responsive, with a grid layout that adjusts based on the screen size. On larger screens, the content is displayed in two columns, while on smaller screens it adapts to a single-column layout. This component is ideal for FAQ sections, product highlights, or informational content that needs to be presented in an organized, easy-to-read manner.`,
    
    fields: [
      {
        name: 'boldText',
        type: 'string',
        label: 'Bold Introductory Text',
        description: `
          A short, bolded text that introduces the section. It should be concise and impactful, providing context or highlighting a key point. This text is styled to stand out at the top of the section. Ideal length is between 20 to 50 characters.`,
        required: false,
        example: 'Common Questions'
      },
      {
        name: 'title',
        type: 'string',
        label: 'Section Title',
        description: `
          The main title of the section, displayed prominently. It introduces the questions or content of the section and should be clear and engaging. Ideal length is between 30 to 70 characters.`,
        required: true,
        example: 'Frequently Asked Questions'
      },
      {
        name: 'description',
        type: 'string',
        label: 'Section Description',
        description: `
          A brief description that provides additional context about the section. This text appears below the title and gives users an idea of what the section covers. Ideal length is 100 to 200 characters.`,
        required: false,
        example: 'Here are the answers to some of the most common questions we receive from our users.'
      },
      {
        name: 'questions',
        type: 'array',
        label: 'Questions',
        description: `
          An array of question objects that make up the core content of the section. Each question object includes a title and a short answer or explanation. These questions are displayed in a grid layout and are accompanied by an icon for visual clarity.`,
        required: true,
        fields: [
          {
            name: 'title',
            type: 'string',
            label: 'Question Title',
            description: 'The title or question being answered. It should be concise, typically between 30 to 50 characters.',
            example: 'What is the return policy?'
          },
          {
            name: 'text',
            type: 'string',
            label: 'Question Answer',
            description: `
              A brief answer or explanation for the question. This text should provide users with the information they need in a clear and concise manner. Ideal length is 50 to 150 characters.`,
            example: 'You can return any item within 30 days of purchase, no questions asked.'
          }
        ]
      }
    ],
    
    options: [
      {
        name: 'layout',
        type: 'select',
        label: 'Questions Layout',
        description: `
          This option controls the layout of the questions grid. The default layout is a two-column grid on larger screens, but it can be adjusted to a single-column layout on smaller screens for better readability.`,
        choices: ['single-column', 'two-column'],
        default: 'two-column'
      }
    ]
  };
  