export default {
    name: 'SimpleSignupWidget',
    category: 'Newsletter',
    description: `
      The SimpleSignupWidget component is a form designed to collect email addresses for newsletter or email subscription purposes. It includes an input field for the user's email and a submit button. Upon submission, the email can be sent to a backend service (such as Supabase) for storage and processing. The widget has built-in validation to ensure that a valid email is entered before submission. Once the form is successfully submitted, a confirmation message is displayed. This component is ideal for integrating into newsletter sections, landing pages, or footers.`,
    
    fields: [
      {
        name: 'inputPlaceholder',
        type: 'string',
        label: 'Input Placeholder',
        description: `
          The placeholder text that appears inside the email input field before the user enters their email address. It should prompt the user to enter their email in a clear and concise way. Ideal length is between 20 to 40 characters.`,
        required: false,
        default: 'Enter your email',
        example: 'Enter your email to subscribe'
      },
      {
        name: 'buttonText',
        type: 'string',
        label: 'Button Text',
        description: `
          The text displayed on the submit button. This should clearly indicate the action the user is taking, such as subscribing to a newsletter or joining an email list. Ideal length is 10 to 20 characters.`,
        required: true,
        default: 'Subscribe',
        example: 'Join Now'
      },
      {
        name: 'confirmationMessage',
        type: 'string',
        label: 'Confirmation Message',
        description: `
          The message displayed to the user after successfully submitting the form. This should confirm that their email has been received and that the signup was successful. Ideal length is 20 to 50 characters.`,
        required: false,
        default: 'Thanks, sign-up confirmed!',
        example: 'You have successfully subscribed!'
      }
    ],
    
    options: [
      {
        name: 'inputStyling',
        type: 'boolean',
        label: 'Input Styling Customization',
        description: `
          This option allows customization of the input field's appearance, such as the background color, font size, or padding.`,
        default: true
      },
      {
        name: 'buttonStyling',
        type: 'boolean',
        label: 'Button Styling Customization',
        description: `
          This option allows customization of the button's appearance, including the background color, hover effects, and font styling.`,
        default: true
      }
    ]
  };
  