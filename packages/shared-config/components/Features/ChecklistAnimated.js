export default {
  name: 'QuestionsSection',
  category: 'FAQ',
  description: `
    The QuestionsSection component is designed to display frequently asked questions (FAQs) in a structured and easy-to-read format. It consists of a bold introductory text, a title, description, and a grid of questions and answers. Each question is accompanied by a check icon, providing a visual cue for the user. The layout adjusts to different screen sizes, making it fully responsive. The component includes animations that make the questions appear in a staggered fashion as the user scrolls into view.`,
  
  fields: [
    {
      name: 'boldText',
      type: 'string',
      label: 'Introductory Bold Text',
      description: `
        A bold introductory line that appears at the top of the FAQ section, intended to draw attention to the section's purpose. This text is prominent and serves to introduce the following questions.`,
      required: true,
      example: 'Frequently Asked Questions'
    },
    {
      name: 'title',
      type: 'string',
      label: 'Section Title',
      description: `
        The main heading of the FAQ section. It should clearly describe the content that follows and is displayed prominently at the top of the section.`,
      required: true,
      example: 'Common Questions'
    },
    {
      name: 'description',
      type: 'string',
      label: 'Section Description',
      description: `
        A brief description that provides context or further explanation of the questions below. This text appears beneath the title and helps guide the user.`,
      required: false,
      example: 'Here are the answers to some of the most common questions we receive.'
    },
    {
      name: 'questions',
      type: 'array',
      label: 'Questions',
      description: `
        An array of questions and answers to be displayed in the FAQ section. Each question has a title and text that provides the answer.`,
      required: true,
      fields: [
        {
          name: 'title',
          type: 'string',
          label: 'Question Title',
          description: 'The title or question text. This is displayed prominently at the top of each question card.',
          example: 'What is your refund policy?'
        },
        {
          name: 'text',
          type: 'string',
          label: 'Answer Text',
          description: 'The answer to the question. This is displayed beneath the question title.',
          example: 'We offer a full refund within 30 days of purchase.'
        }
      ]
    }
  ],

  options: [
    {
      name: 'staggerDuration',
      type: 'number',
      label: 'Stagger Animation Duration',
      description: `
        The duration of the staggered animation between each question. Increasing this value will cause more delay between the appearance of each question, while decreasing it will make them appear more quickly.`,
      default: 0.3,
      example: 0.3
    },
    {
      name: 'itemAnimationDuration',
      type: 'number',
      label: 'Item Animation Duration',
      description: `
        The duration of the animation for each individual question when it appears on the screen. This controls how long each question fades in and slides up.`,
      default: 0.5,
      example: 0.5
    },
    {
      name: 'animationEase',
      type: 'select',
      label: 'Animation Easing',
      description: `
        The easing function used for the animation. This controls the speed curve of the animation, giving it a more natural feel.`,
      choices: ['easeIn', 'easeOut', 'easeInOut', 'linear'],
      default: 'easeInOut'
    }
  ]
};
