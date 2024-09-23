export default {
    name: 'SimpleDividerLine',
    category: 'Misc',
    description: `
      The SimpleDividerLine component is a minimalistic horizontal line used to visually separate sections of content. This component is often used between headers, paragraphs, or other content blocks to create a subtle distinction without overwhelming the design. It consists of a 3-pixel high line, with customizable width and color based on the theme. The divider is rounded at the edges for a clean, modern appearance and is fully responsive, adjusting its width based on the containing element.`,
    
    fields: [
      {
        name: 'height',
        type: 'string',
        label: 'Divider Height',
        description: `
          The height of the divider line, typically small and subtle. The default height is 3px, but it can be adjusted depending on design needs.`,
        required: false,
        default: '3px',
        example: '3px'
      },
      {
        name: 'width',
        type: 'string',
        label: 'Divider Width',
        description: `
          The width of the divider line, which controls how long the line appears on the screen. The default width is 40px, but it can be adjusted to fit the layout.`,
        required: false,
        default: '40px',
        example: '40px'
      },
      {
        name: 'color',
        type: 'string',
        label: 'Divider Color',
        description: `
          The color of the divider line, which is typically set based on the theme. The default color is the primary color from the theme, but this can be customized.`,
        required: false,
        default: 'theme.colors.primary',
        example: '#FF5733'
      },
      {
        name: 'borderRadius',
        type: 'string',
        label: 'Border Radius',
        description: `
          The border radius of the divider line, which gives it rounded edges for a modern look. The default value is based on the theme's border radius.`,
        required: false,
        default: 'theme.borders.radius',
        example: '5px'
      }
    ],
    
    options: [
      {
        name: 'alignment',
        type: 'select',
        label: 'Alignment',
        description: `
          This option controls the alignment of the divider line. It can be aligned to the left, right, or center of the container.`,
        choices: ['left', 'center', 'right'],
        default: 'center'
      }
    ]
  };
  