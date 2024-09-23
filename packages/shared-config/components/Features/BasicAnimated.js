export default {
    name: 'Services',
    category: 'Section',
    description: `
      The Services component is designed to display a section of services in a clean, grid-based layout. It includes a section title, subtitle, and description, followed by a grid of service items. Each service is displayed with an icon, name, and description, alongside a "Learn more" link for additional information. The layout is fully responsive and adjusts based on the screen size. The services appear with a fade-in animation as the user scrolls into view, with each service staggered slightly for an engaging visual effect.`,
    
    fields: [
      {
        name: 'title',
        type: 'string',
        label: 'Section Title',
        description: `
          The title of the services section, displayed prominently at the top. It should give the reader a clear indication of the section’s content, such as "Our Services" or "What We Offer." It is styled in a large, bold font for emphasis.`,
        required: true,
        example: 'Our Services'
      },
      {
        name: 'subtitle',
        type: 'string',
        label: 'Section Subtitle',
        description: `
          A subtitle that appears just below the section title, providing further context or description of the services. It is smaller in size but still important in guiding the user through the section.`,
        required: false,
        example: 'Tailored solutions to meet your business needs.'
      },
      {
        name: 'description',
        type: 'string',
        label: 'Section Description',
        description: `
          A brief description that supports the title and subtitle. It gives more detail on what users can expect from the services listed below.`,
        required: false,
        example: 'Explore our range of services designed to help your business grow and succeed.'
      },
      {
        name: 'items',
        type: 'array',
        label: 'Services',
        description: `
          An array of service items, each representing a specific service offered. Each item includes a name, description, and a clickable link to learn more. Optionally, an icon can be displayed alongside each service for visual emphasis.`,
        required: true,
        fields: [
          {
            name: 'name',
            type: 'string',
            label: 'Service Name',
            description: 'The name of the service, displayed prominently alongside the service icon.',
            example: 'Consulting'
          },
          {
            name: 'description',
            type: 'string',
            label: 'Service Description',
            description: 'A brief description of the service, explaining what it offers and its benefits.',
            example: 'Expert advice to help you navigate complex business challenges.'
          },
          {
            name: 'href',
            type: 'string',
            label: 'Service URL',
            description: 'The URL for the service, where users can learn more or get in touch.',
            example: '/services/consulting'
          },
          {
            name: 'icon',
            type: 'object',
            label: 'Service Icon',
            description: 'An icon representing the service. It should be a small visual element that enhances the user’s understanding of the service offered.',
          }
        ]
      }
    ],
  
    options: [
      {
        name: 'staggerDuration',
        type: 'number',
        label: 'Animation Stagger Duration',
        description: `
          Controls the delay between the animations of each service item in the grid. A higher value results in a more staggered appearance, while a lower value causes the items to appear more quickly.`,
        default: 0.25,
        example: 0.25
      },
      {
        name: 'animationDuration',
        type: 'number',
        label: 'Item Animation Duration',
        description: `
          The duration (in seconds) of the animation for each service item as it appears on the screen. It defines how long the fade and slide animations take.`,
        default: 0.5,
        example: 0.5
      },
      {
        name: 'animationEase',
        type: 'select',
        label: 'Animation Easing Function',
        description: `
          The easing function used for the animations. This controls the speed curve of the animations, giving them a more natural feel.`,
        choices: ['linear', 'easeIn', 'easeOut', 'easeInOut'],
        default: 'easeInOut'
      }
    ]
  };
  