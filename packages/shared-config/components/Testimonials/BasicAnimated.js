export default {
    name: 'Testimonials',
    category: 'Feedback',
    description: `
      The Testimonials component is designed to display feedback or reviews in a visually appealing grid format. It includes a heading, subheading, and multiple testimonials, each with an author image, name, and area. Testimonials are organized into three separate groups for a well-structured layout, and each group appears sequentially with a smooth animation effect. This component is ideal for showcasing user feedback, customer reviews, or any form of positive reinforcement.`,
    
    fields: [
      {
        name: 'subheading',
        type: 'string',
        label: 'Subheading Text',
        description: 'The subheading displayed above the main heading.',
        required: true,
        example: 'What People Are Saying'
      },
      {
        name: 'heading',
        type: 'string',
        label: 'Heading Text',
        description: 'The main heading text for the testimonials section.',
        required: true,
        example: 'Our Customers Love Us'
      },
      {
        name: 'testimonials',
        type: 'array',
        label: 'Testimonials Content',
        description: 'An array of testimonials to be displayed in the grid. Each testimonial contains the feedback and author details.',
        required: true,
        fields: [
          {
            name: 'body',
            type: 'string',
            label: 'Testimonial Body',
            description: 'The main feedback text from the user.',
            example: 'This service has changed my life! Highly recommended.'
          },
          {
            name: 'author',
            type: 'object',
            label: 'Author Information',
            description: 'Details of the person giving the testimonial, including their name, image, and location.',
            required: true,
            fields: [
              {
                name: 'name',
                type: 'string',
                label: 'Author Name',
                description: 'The name of the person giving the testimonial.',
                example: 'John Doe'
              },
              {
                name: 'area',
                type: 'string',
                label: 'Author Area/Location',
                description: 'The location or area of the author.',
                example: 'New York, USA'
              },
              {
                name: 'imageUrl',
                type: 'string',
                label: 'Author Image URL',
                description: 'The URL of the author’s image/avatar.',
                example: 'https://example.com/john-doe.jpg'
              }
            ]
          }
        ]
      }
    ],
  
    options: [
      {
        name: 'animationDuration',
        type: 'number',
        label: 'Animation Duration',
        description: 'The duration (in seconds) for the testimonial card animations.',
        example: 0.6,
        default: 0.6
      },
      {
        name: 'staggerChildren',
        type: 'number',
        label: 'Stagger Children Animation Delay',
        description: 'The delay between each testimonial card animation in seconds.',
        example: 0.3,
        default: 0.3
      }
    ]
  };
  