export default {
    name: 'BasicHeaderWithCTAAndMobileMenu',
    category: 'Header',
    description: `
      The BasicHeaderWithCTAAndMobileMenu component is a responsive header designed for navigation and user engagement. It includes a logo, navigation menu, primary and secondary call-to-action (CTA) buttons, and a mobile-friendly menu. On desktop, the navigation and CTAs are displayed side-by-side, while on mobile, the header uses a hamburger menu to toggle a full-screen menu. This component is ideal for websites that require both desktop and mobile navigation with clear CTAs for actions such as calling a business or visiting a specific page. The header is sticky, ensuring it remains at the top of the page as users scroll.`,
    
    fields: [
      {
        name: 'logo',
        type: 'object',
        label: 'Logo',
        description: `
          The logo object contains the source URL of the logo image and the alt text. The logo is displayed prominently in the header and is linked to the homepage.`,
        required: true,
        fields: [
          {
            name: 'src',
            type: 'string',
            label: 'Logo Image Source',
            description: 'The URL of the logo image, typically an SVG or PNG.',
            example: '/icon.png'
          },
          {
            name: 'alt',
            type: 'string',
            label: 'Logo Alt Text',
            description: 'The alt text for the logo, used for accessibility and SEO purposes.',
            example: 'Acacia Wealth'
          }
        ]
      },
      {
        name: 'menu',
        type: 'array',
        label: 'Navigation Menu Items',
        description: `
          An array of menu items representing the navigation links. Each item contains the label and the URL or route it links to.`,
        required: true,
        fields: [
          {
            name: 'label',
            type: 'string',
            label: 'Menu Item Label',
            description: 'The text displayed for the menu item.',
            example: 'Home'
          },
          {
            name: 'route',
            type: 'string',
            label: 'Menu Item URL',
            description: 'The URL or route that the menu item links to.',
            example: '/home'
          }
        ]
      },
      {
        name: 'primaryCTA',
        type: 'object',
        label: 'Primary Call to Action (CTA)',
        description: `
          The primary call-to-action button, typically used for high-priority actions like contacting the business. The CTA includes the label and the route it links to.`,
        required: true,
        fields: [
          {
            name: 'label',
            type: 'string',
            label: 'Primary CTA Label',
            description: 'The text displayed on the primary CTA button.',
            example: 'Call Us'
          },
          {
            name: 'route',
            type: 'string',
            label: 'Primary CTA URL',
            description: 'The URL or route the primary CTA directs to.',
            example: 'tel:+441234567890'
          }
        ]
      },
      {
        name: 'secondaryCTA',
        type: 'object',
        label: 'Secondary Call to Action (CTA)',
        description: `
          The secondary call-to-action button, typically used for actions such as booking a service or visiting a secondary page. The CTA includes the label and the route it links to.`,
        required: false,
        fields: [
          {
            name: 'label',
            type: 'string',
            label: 'Secondary CTA Label',
            description: 'The text displayed on the secondary CTA button.',
            example: 'Book a Meeting'
          },
          {
            name: 'route',
            type: 'string',
            label: 'Secondary CTA URL',
            description: 'The URL or route the secondary CTA directs to.',
            example: '/book-meeting'
          }
        ]
      }
    ],
    
    options: [
      {
        name: 'mobileMenu',
        type: 'boolean',
        label: 'Mobile Menu Enabled',
        description: `
          This option enables or disables the mobile menu. When enabled, a hamburger icon is displayed on smaller screens to toggle the mobile menu.`,
        default: true
      }
    ]
  };
  