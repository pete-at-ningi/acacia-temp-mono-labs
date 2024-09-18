export default {
    name: 'Hero',
    category: 'Hero',
    description:
      'This is a basic hero component typically positioned at the top of a webpage. It is designed to immediately capture the visitor’s attention upon landing on the site. The component is split into two main sections: **on the left**, it features a prominent headline (title), a subtitle (optional), and up to two call-to-action (CTA) buttons; **on the right**, it displays a background image that complements the textual content. The entire hero section has a background image that spans its full width and height, providing a visually engaging backdrop. An overlay with a gradient effect is applied on top of the background image to enhance text readability and add visual depth. This hero component is ideal for highlighting key messages, promoting offers, or guiding users toward important actions. It ensures that critical information is front and center, encouraging user engagement from the moment they arrive on the page.',
  
    fields: [
      {
        name: 'title',
        type: 'string',
        label: 'Title',
        required: true,
        description:
          'The main headline of the hero section. This should be a concise and impactful statement that communicates the core message or value proposition of your site or offer. **Ideal length**: 5 to 10 words. **Purpose**: To grab the user’s attention and convey the primary focus of the page. **Examples**:\n- "Discover Your Next Adventure"\n- "Innovating the Future of Tech"\n- "Welcome to [Your Company Name]"',
      },
      {
        name: 'subtitle',
        type: 'string',
        label: 'Subtitle',
        required: false,
        description:
          'An optional subheading that provides additional context or elaborates on the title. It appears directly beneath the title and can further entice users to explore your site. **Ideal length**: 10 to 20 words. **Purpose**: To offer supporting information or highlight key benefits. **Examples**:\n- "Join us in revolutionizing the way you connect with the world."\n- "Experience unparalleled service and quality with our expert team."\n- "Bringing you the latest insights in sustainable living."',
      },
      {
        name: 'imageUrl',
        type: 'image',
        label: 'Background Image URL',
        required: true,
        description:
          'The URL of the background image displayed in the hero section. This image fills the entire hero area and should be high-quality and relevant to your content or brand. **Recommended specifications**:\n- **Resolution**: At least 1920x1080 pixels for optimal display on large screens.\n- **Format**: JPEG or PNG.\n- **Purpose**: To create a visually engaging backdrop that enhances the overall aesthetic and draws users into your site. **Note**: Ensure the image works well with the overlay gradient and that important visual elements are not obscured by text.',
      },
      {
        name: 'primaryCTA',
        type: 'object',
        label: 'Primary Call-to-Action',
        required: false,
        description:
          'The primary call-to-action button encourages users to take a significant next step. It is styled to stand out and is typically placed to the left of the secondary CTA if both are present. **Purpose**: To drive users toward a desired action, such as signing up, purchasing, or learning more.',
        fields: [
          {
            name: 'label',
            type: 'string',
            label: 'Button Label',
            required: true,
            description:
              'The text displayed on the primary CTA button. Should be compelling and action-oriented, prompting users to click. **Ideal length**: 2 to 4 words. **Examples**:\n- "Get Started"\n- "Sign Up Now"\n- "Learn More"',
          },
          {
            name: 'route',
            type: 'string',
            label: 'Button URL',
            required: true,
            description:
              'The URL or route where users are directed upon clicking the primary CTA button. This should be a valid link that leads to the next step in the user journey. **Examples**:\n- "/signup"\n- "https://www.yoursite.com/pricing"\n- "/products"',
          },
        ],
      },
      {
        name: 'secondaryCTA',
        type: 'object',
        label: 'Secondary Call-to-Action',
        required: false,
        description:
          'An optional secondary call-to-action button that offers an alternative or less prominent action for users to take. It is usually styled less prominently than the primary CTA. **Purpose**: To provide additional options without overwhelming the user.',
        fields: [
          {
            name: 'label',
            type: 'string',
            label: 'Button Label',
            required: true,
            description:
              'The text displayed on the secondary CTA button. Should still be action-oriented but may represent a less critical action than the primary CTA. **Ideal length**: 2 to 4 words. **Examples**:\n- "Contact Us"\n- "Read More"\n- "Join Newsletter"',
          },
          {
            name: 'route',
            type: 'string',
            label: 'Button URL',
            required: true,
            description:
              'The URL or route where users are directed upon clicking the secondary CTA button. Should complement the primary CTA by offering a different pathway. **Examples**:\n- "/contact"\n- "https://www.yoursite.com/about-us"\n- "/blog"',
          },
        ],
      },
    ],
  
    options: [
      {
        name: 'alignment',
        type: 'select',
        label: 'Content Alignment',
        required: false,
        choices: ['left', 'center', 'right'],
        default: 'left',
        description:
          'Controls the horizontal alignment of the textual content (title, subtitle, CTAs) within the hero section. **Options**:\n- **Left**: Aligns content to the left, which is the default and most common for readability.\n- **Center**: Centers content horizontally, suitable for a more balanced or formal presentation.\n- **Right**: Aligns content to the right, which can be used for stylistic purposes.',
      },
      {
        name: 'overlayOpacity',
        type: 'number',
        label: 'Overlay Opacity',
        required: false,
        default: 0.85,
        description:
          'Adjusts the opacity of the gradient overlay that sits on top of the background image. **Value Range**: 0 (fully transparent) to 1 (fully opaque). **Purpose**: To enhance text readability against the background image by dimming the image. **Recommendation**: An opacity between 0.5 and 0.9 usually provides a good balance.',
      },
      {
        name: 'textColor',
        type: 'color',
        label: 'Text Color',
        required: false,
        default: '#FFFFFF',
        description:
          'Sets the color of the text within the hero section, including the title, subtitle, and CTA labels. **Purpose**: To ensure text stands out against the background image and overlay. **Examples**:\n- "#FFFFFF" for white text\n- "#000000" for black text\n- Any valid HEX color code.',
      },
      {
        name: 'buttonStyle',
        type: 'select',
        label: 'Button Style',
        required: false,
        choices: ['filled', 'outlined', 'text'],
        default: 'filled',
        description:
          'Determines the visual style of the CTA buttons. **Options**:\n- **Filled**: Solid background color, typically more eye-catching.\n- **Outlined**: Transparent background with a colored border, more subtle.\n- **Text**: No background or border, resembles a hyperlink.',
      },
    ],
  };
  