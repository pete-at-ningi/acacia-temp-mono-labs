export default {
    name: 'ServicesWithGrid',
    category: 'Services',
    description: `
      The ServicesWithGrid component is designed to display a section showcasing multiple services, typically used on a homepage or services page. The section starts with a title, subtitle, and description, followed by a grid layout of service items. Each service item includes an icon, a title, a brief description, and a "Learn More" link for users to explore further. The grid is fully responsive, adjusting to different screen sizes with single-column, two-column, and three-column layouts depending on the device. The section is flexible, allowing for a variety of service items to be presented in an organized, visually appealing way. This component is ideal for businesses or organizations looking to highlight their key offerings and encourage user engagement through service-specific links.`,
    
    fields: [
      {
        name: 'title',
        type: 'string',
        label: 'Section Title',
        description: `
          The main title of the services section, displayed at the top of the section. It introduces the services being offered and should be concise yet impactful. This text is styled prominently to draw attention. Ideal length is between 20 to 50 characters.`,
        required: true,
        example: 'Our Services'
      },
      {
        name: 'subtitle',
        type: 'string',
        label: 'Section Subtitle',
        description: `
          A short subtitle displayed under the main title. The subtitle provides additional context or highlights the importance of the services being presented. It should be slightly longer than the title, typically around 30 to 70 characters.`,
        required: true,
        example: 'What We Offer'
      },
      {
        name: 'description',
        type: 'string',
        label: 'Section Description',
        description: `
          A brief description that appears below the title and subtitle. It explains the services in more detail and sets the tone for what users can expect. Ideal length is 100 to 200 characters, giving users a clear understanding of the services offered.`,
        required: false,
        example: 'Explore the wide range of services we provide to help businesses grow and succeed.'
      },
      {
        name: 'items',
        type: 'array',
        label: 'Service Items',
        description: `
          An array of service objects that are displayed in a grid. Each service object includes an icon, a title, a description, and a link. These items are the core of the section and are displayed in an interactive grid that adjusts based on screen size. Each service should be concise and focused on a single offering.`,
        required: true,
        fields: [
          {
            name: 'name',
            type: 'string',
            label: 'Service Name',
            description: 'The name of the service, displayed as the title of the service item. It should be clear and descriptive, typically around 20 to 40 characters.',
            example: 'Web Development'
          },
          {
            name: 'description',
            type: 'string',
            label: 'Service Description',
            description: `
              A brief description of the service, providing users with an overview of what the service entails. It should be around 50 to 100 characters, keeping it concise while providing enough information to engage the reader.`,
            example: 'We build high-quality websites that are optimized for performance and user experience.'
          },
          {
            name: 'href',
            type: 'string',
            label: 'Service Link',
            description: 'The URL or link to the page that provides more detailed information about the service. This should direct users to a dedicated service page.',
            example: '/services/web-development'
          },
          {
            name: 'icon',
            type: 'string',
            label: 'Service Icon',
            description: 'An icon that visually represents the service. The icon should be relevant to the service and is displayed next to the service title.',
            example: 'CodeIcon'
          }
        ]
      }
    ],
    
    options: [
      {
        name: 'gridColumns',
        type: 'select',
        label: 'Grid Layout',
        description: `
          This option controls the number of columns in the grid layout. It allows for different layouts based on the content and screen size. The default layout is single-column on mobile, two columns on tablets, and three columns on desktop.`,
        choices: ['1', '2', '3'],
        default: '3'
      }
    ]
  };
  