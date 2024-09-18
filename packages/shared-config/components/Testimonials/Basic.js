// shared-config/components/Testimonials/TestimonialsWithGrid.js
export default {
    name: 'TestimonialsWithGrid',
    category: 'Testimonials',
    description: `
      The TestimonialsWithGrid component is designed to showcase customer testimonials in an organized, visually appealing layout. It features a flexible grid layout for larger screens, displaying testimonials in three distinct columns, and a single-column list for mobile or smaller screens. Each testimonial card includes a quote, the author's image, name, and area (location or profession). This component is ideal for websites looking to build trust and credibility by sharing client or customer feedback. The background is styled with a gradient to add depth and visual interest.`,
    
    fields: [
      {
        name: 'subheading',
        type: 'string',
        label: 'Subheading',
        description: `
          A short introductory heading displayed above the main title. This helps introduce the testimonial section and set the tone for the quotes below. Ideal length is between 20 to 50 characters.`,
        required: false,
        example: 'What Our Clients Say'
      },
      {
        name: 'heading',
        type: 'string',
        label: 'Main Heading',
        description: `
          The primary heading for the testimonials section. It should capture the essence of the feedback and create a strong impact on the user. Ideal length is 30 to 70 characters.`,
        required: true,
        example: 'Our Clients Love Working With Us'
      },
      {
        name: 'testimonials',
        type: 'array',
        label: 'Testimonials',
        description: `
          An array of testimonial objects, each containing the testimonial text (body), the author's name, image, and area (location or profession).`,
        required: true,
        fields: [
          {
            name: 'body',
            type: 'string',
            label: 'Testimonial Body',
            description: 'The text of the testimonial, typically a quote from the client or customer.',
            example: 'Acacia Wealth helped me plan for my future, and I couldn’t be happier with the results!'
          },
          {
            name: 'author',
            type: 'object',
            label: 'Author',
            description: `
              The author object contains details about the person giving the testimonial, including their name, image, and area (location or profession).`,
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
                name: 'imageUrl',
                type: 'string',
                label: 'Author Image URL',
                description: 'The URL of the author’s image, usually a headshot or profile picture.',
                example: 'https://example.com/johndoe.jpg'
              },
              {
                name: 'area',
                type: 'string',
                label: 'Author Area',
                description: 'The author’s location or profession, displayed under their name.',
                example: 'Financial Advisor, New York'
              }
            ]
          }
        ]
      }
    ],
    
    options: [
      {
        name: 'backgroundGradient',
        type: 'string',
        label: 'Background Gradient',
        description: `
          The linear gradient background that transitions from the primary to the dark color, creating a stylish and professional backdrop for the testimonial section.`,
        default: 'linear-gradient(135deg, theme.colors.primary 0%, theme.colors.dark 100%)'
      }
    ]
  };
  