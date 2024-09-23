export default {
    name: 'TeamSectionWithBadgesAndVideo',
    category: 'Team',
    description: `
      The TeamSectionWithBadgesAndVideo component is designed to showcase a team, company, or product, combining rich textual content with badges and an embedded video. This component is split into two main parts: the left section contains the text content (subheading, heading, paragraph) and badges representing key achievements or metrics, while the right section features an embedded video. The layout is responsive, adapting to different screen sizes with a column layout for smaller screens and a row layout for larger screens. The badges are styled with icons and numbers to highlight key information such as awards, milestones, or achievements. The call-to-action (CTA) button encourages users to take further action, such as watching the video, learning more, or contacting the team. This component is ideal for use on landing pages, about pages, or promotional sections where visual engagement and key highlights are crucial.`,
    
    fields: [
      {
        name: 'subheading',
        type: 'string',
        label: 'Subheading',
        description: `
          A smaller introductory heading displayed above the main title. It serves to introduce the section and provide context for the main heading. Ideal length is 20 to 50 characters.`,
        required: false,
        example: 'Meet Our Team'
      },
      {
        name: 'heading',
        type: 'string',
        label: 'Main Heading',
        description: `
          The primary heading of the section, displayed prominently. It should clearly convey the key message or theme of the section, such as introducing a team, showcasing a product, or highlighting key achievements. Ideal length is 30 to 70 characters.`,
        required: true,
        example: 'Our Journey of Success'
      },
      {
        name: 'paragraph',
        type: 'string',
        label: 'Main Paragraph',
        description: `
          A paragraph that provides additional context or information about the section. This text should expand on the main heading and give users a clearer understanding of the content, whether it’s about the team, product, or company milestones. Ideal length is 100 to 200 characters.`,
        required: true,
        example: 'We are a team of dedicated professionals who have consistently delivered exceptional results across various industries, ensuring success for our clients and partners.'
      },
      {
        name: 'badges',
        type: 'array',
        label: 'Achievement Badges',
        description: `
          An array of badge objects that highlight key achievements, milestones, or metrics. Each badge consists of an icon, a number, and a short description. These badges are visually displayed in a grid and offer quick insights into important statistics or accolades.`,
        required: true,
        fields: [
          {
            name: 'icon',
            type: 'string',
            label: 'Badge Icon',
            description: 'An icon representing the achievement, such as an award, milestone, or accomplishment.',
            example: 'TrophyIcon'
          },
          {
            name: 'number',
            type: 'string',
            label: 'Badge Number',
            description: 'The number or metric associated with the achievement, displayed prominently next to the icon.',
            example: '50+'
          },
          {
            name: 'description',
            type: 'string',
            label: 'Badge Description',
            description: `
              A short description explaining the significance of the badge. It should be concise and informative, typically between 20 to 50 characters.`,
            example: 'Awards Won Globally'
          }
        ]
      },
      {
        name: 'cta',
        type: 'object',
        label: 'Call to Action (CTA)',
        description: `
          A call-to-action button that encourages users to take a specific action. The CTA typically links to another page or section, inviting users to explore more or engage with the content.`,
        required: true,
        fields: [
          {
            name: 'text',
            type: 'string',
            label: 'Button Text',
            description: 'The text displayed on the CTA button. It should be action-oriented and clear, typically between 10 to 30 characters.',
            example: 'Watch Our Story'
          },
          {
            name: 'link',
            type: 'string',
            label: 'Button Link',
            description: 'The URL or link the button directs to. This could lead to a video, another section of the site, or an external page.',
            example: '/our-story'
          }
        ]
      },
      {
        name: 'videoUrl',
        type: 'string',
        label: 'Video URL',
        description: `
          The URL of the embedded video displayed on the right side of the section. This video can be a company introduction, product demo, or any relevant content. It should be hosted on a platform that supports embedding (e.g., YouTube, Vimeo) and be high-quality.`,
        required: true,
        example: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
      }
    ],
    
    options: [
      {
        name: 'layout',
        type: 'select',
        label: 'Layout',
        description: `
          This option controls the layout of the section. The default layout places the text content and badges on the left and the video on the right, but this can be adjusted to stack the content vertically on smaller screens.`,
        choices: ['left-text-right-video', 'stacked'],
        default: 'left-text-right-video'
      }
    ]
  };
  