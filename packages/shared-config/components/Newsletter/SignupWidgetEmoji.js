export default {
    name: 'SignupWidget',
    category: 'Forms',
    description: `
      The SignupWidget component provides a simple and engaging way for users to sign up for newsletters or any email-based communications. It includes an email input field and a submit button. Once the form is submitted, the widget displays a confirmation message with an animated emoji as feedback to the user. This widget is designed to be fully responsive and user-friendly, with accessible input and a clear call to action.`,
    
    fields: [
      {
        name: 'placeholderText',
        type: 'string',
        label: 'Input Placeholder Text',
        description: `
          The placeholder text that appears in the email input field, guiding the user on what to enter.`,
        required: true,
        example: 'Enter your email'
      },
      {
        name: 'buttonText',
        type: 'string',
        label: 'Button Text',
        description: `
          The text displayed on the submit button, encouraging users to subscribe.`,
        required: true,
        example: 'Subscribe'
      },
      {
        name: 'confirmationMessage',
        type: 'string',
        label: 'Confirmation Message',
        description: `
          The message displayed after successful form submission to confirm the sign-up.`,
        required: true,
        example: 'Thanks, sign-up confirmed!'
      },
      {
        name: 'confirmationEmoji',
        type: 'string',
        label: 'Confirmation Emoji',
        description: `
          The emoji displayed after submission to add a fun and visual confirmation.`,
        required: false,
        example: '🎉'
      }
    ],
  
    options: [
      {
        name: 'inputBackgroundColor',
        type: 'color',
        label: 'Input Background Color',
        description: `
          The background color for the email input field. It should contrast well with the text for readability.`,
        example: 'rgba(255, 255, 255, 0.9)'
      },
      {
        name: 'inputFocusColor',
        type: 'color',
        label: 'Input Focus Color',
        description: `
          The background color of the input field when the user focuses on it.`,
        example: 'rgba(255, 255, 255, 0.2)'
      },
      {
        name: 'buttonBackgroundColor',
        type: 'color',
        label: 'Button Background Color',
        description: `
          The background color of the submit button.`,
        example: '#FFFFFF'
      },
      {
        name: 'buttonHoverColor',
        type: 'color',
        label: 'Button Hover Color',
        description: `
          The background color of the submit button when hovered over.`,
        example: '#007BFF'
      },
      {
        name: 'emojiAnimationDuration',
        type: 'number',
        label: 'Emoji Animation Duration',
        description: `
          The duration of the emoji scale-up animation upon successful submission.`,
        default: 1.5,
        example: 1.5
      }
    ]
  };
  