export default {
    name: 'FooterWithContactAndSocials',
    category: 'Footer',
    description: `
      The FooterWithContactAndSocials component is a highly customizable footer section that includes contact information, social media links, and navigation to key pages. It is divided into three main columns: contact details (business name, address, email, and phone), navigation links to important pages, and social media links. Additionally, it includes legal details and a newsletter subscription form for staying updated. This component is responsive, adjusting its layout from a single column on smaller screens to a three-column grid on larger screens. The footer also includes credit information at the bottom and a copyright statement. It is ideal for websites looking to provide easy access to contact information, page links, and social media engagement.`,
    
    fields: [
      {
        name: 'business',
        type: 'object',
        label: 'Business Information',
        description: `
          The business information object contains details about the business or organization, such as the name, address, email, and phone number. These details are displayed in the contact section of the footer.`,
        required: true,
        fields: [
          {
            name: 'name',
            type: 'string',
            label: 'Business Name',
            description: 'The name of the business or organization, displayed in the contact section.',
            example: 'Acacia Wealth'
          },
          {
            name: 'address',
            type: 'string',
            label: 'Business Address',
            description: 'The full address of the business, displayed below the business name.',
            example: '123 Acacia Avenue, London, UK'
          },
          {
            name: 'email',
            type: 'string',
            label: 'Business Email',
            description: 'The contact email of the business, displayed as a mailto link.',
            example: 'info@acaciawealth.com'
          },
          {
            name: 'phone',
            type: 'string',
            label: 'Business Phone',
            description: 'The contact phone number of the business, displayed as a tel link.',
            example: '+44 1234 567890'
          },
          {
            name: 'companyNumber',
            type: 'string',
            label: 'Company Registration Number',
            description: 'The registration number of the company, typically displayed in the legal section.',
            example: '0987654321'
          }
        ]
      },
      {
        name: 'pages',
        type: 'array',
        label: 'Footer Navigation Pages',
        description: `
          An array of page objects representing the links to key pages in the footer. Each page object includes the title of the page and the URL it links to.`,
        required: true,
        fields: [
          {
            name: 'title',
            type: 'string',
            label: 'Page Title',
            description: 'The title of the page, displayed as a link in the footer navigation.',
            example: 'Home'
          },
          {
            name: 'route',
            type: 'string',
            label: 'Page URL',
            description: 'The URL or route that the page links to.',
            example: '/home'
          }
        ]
      },
      {
        name: 'socials',
        type: 'array',
        label: 'Social Media Links',
        description: `
          An array of social media objects representing the links to the business’s social media accounts. Each object includes the label (platform) and the URL to the social media page.`,
        required: true,
        fields: [
          {
            name: 'label',
            type: 'string',
            label: 'Social Media Platform',
            description: 'The name of the social media platform (e.g., Facebook, Twitter, Instagram).',
            example: 'Facebook'
          },
          {
            name: 'url',
            type: 'string',
            label: 'Social Media URL',
            description: 'The URL to the social media page or account.',
            example: 'https://www.facebook.com/acaciawealth'
          }
        ]
      },
      {
        name: 'cta',
        type: 'object',
        label: 'Newsletter Signup',
        description: `
          A call-to-action object for the newsletter signup. This includes a form input for users to subscribe to the newsletter and stay updated.`,
        required: false,
        fields: [
          {
            name: 'text',
            type: 'string',
            label: 'Newsletter Button Text',
            description: 'The text displayed on the newsletter signup button.',
            example: 'Subscribe'
          }
        ]
      },
      {
        name: 'legalDetails',
        type: 'string',
        label: 'Legal Information',
        description: `
          A section displaying legal details such as FCA registration, company number, and links to external sites such as the FCA register or Financial Ombudsman Service.`,
        required: true,
        example: `
          Acacia Wealth is authorised and regulated by the Financial Conduct Authority. Registered in England & Wales.`
      },
      {
        name: 'credits',
        type: 'object',
        label: 'Footer Credits',
        description: `
          The credits section at the bottom of the footer, giving credit to the website creator or designer. This typically includes a link and a logo.`,
        required: false,
        fields: [
          {
            name: 'url',
            type: 'string',
            label: 'Credits URL',
            description: 'The URL of the website or creator being credited.',
            example: 'https://ningi.co.uk'
          },
          {
            name: 'imageUrl',
            type: 'string',
            label: 'Credits Image URL',
            description: 'The URL of the logo or image representing the creator or company.',
            example: '/ningi-icon.png'
          }
        ]
      }
    ],
    
    options: [
      {
        name: 'layout',
        type: 'select',
        label: 'Footer Layout',
        description: `
          This option controls the layout of the footer, including how the columns are displayed. The default is a three-column layout on desktop and a single-column layout on mobile.`,
        choices: ['single-column', 'three-column'],
        default: 'three-column'
      }
    ]
  };
  