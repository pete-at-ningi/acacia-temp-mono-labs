// shared-config/components/Hero/HeroWithImage.js
export default {
  name: 'HeroWithImage',
  category: 'Hero',
  description: 'A hero section with an image on the side.',
  fields: [
    {
      name: 'headline',
      type: 'string',
      label: 'Headline',
      required: true,
    },
    {
      name: 'subheading',
      type: 'string',
      label: 'Subheading',
      required: false,
    },
    {
      name: 'image',
      type: 'image',
      label: 'Hero Image',
      required: true,
    },
    {
      name: 'ctaLabel',
      type: 'string',
      label: 'CTA Button Label',
      required: false,
    },
    {
      name: 'ctaLink',
      type: 'string',
      label: 'CTA Button Link',
      required: false,
    },
    // ...other fields
  ],
  options: [
    {
      name: 'alignment',
      type: 'select',
      label: 'Content Alignment',
      choices: ['left', 'center', 'right'],
      default: 'center',
    },
    // ...other options
  ],
};
