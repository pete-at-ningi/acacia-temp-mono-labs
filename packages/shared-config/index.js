import BlogFeaturedBasic from './components/BlogFeatured/Basic';

import ContentBasic from './components/Content/Basic';
import ContentBlogProgress from './components/Content/BlogProgress';
import ContentWithTestimonial from './components/Content/WithTestimonial';

import FeaturesBasic from './components/Features/Basic';
import FeaturesChecklist from './components/Features/Checklist';
import FeaturesVideo from './components/Features/Video';

import FooterBasic from './components/Footer/Basic';

import HeaderBasic from './components/Header/Basic';

import HeroBasic from './components/Hero/Basic';
import HeroNoImage from './components/Hero/NoImage';
import HeroSlantedImage from './components/Hero/SlantedImage';
import HeroSplitWithImage from './components/Hero/SplitWithImage';
import HeroWithOffsetImage from './components/Hero/WithOffsetImage';

import DividerLine from './components/Misc/DividerLine';

import NewsletterBasic from './components/Newsletter/Basic';
import NewsletterCenterCard from './components/Newsletter/CenterCard';
import NewsletterSimple from './components/Newsletter/Simple';

import TestimonialsBasic from './components/Testimonials/Basic';
import TestimonialsQuote from './components/Testimonials/Quote';

export default {
  blogFeatured: {
    description:
      'Featured blog sections which provide a list of some recent content with images and descriptions',
    components: [BlogFeaturedBasic],
  },
  content: {
    description:
      'Content sections with titles, subtitles, descriptions, and various content elements like paragraphs, titles, quotes, lists, and images',
    components: [ContentBasic, ContentBlogProgress, ContentWithTestimonial],
  },
  features: {
    description:
      'Feature sections that showcase different services or products with titles, descriptions, and icons',
    components: [FeaturesBasic, FeaturesChecklist, FeaturesVideo],
  },
  footer: {
    description:
      'Footer sections that typically contain links, contact information, and social media icons',
    components: [FooterBasic],
  },
  header: {
    description:
      'Header sections that typically contain a logo, navigation links, and a call to action button',
    components: [HeaderBasic],
  },
  hero: {
    description:
      'Hero sections typically for the top of a webpage with a header, some content and some call to action buttons',
    components: [
      HeroBasic,
      HeroNoImage,
      HeroSlantedImage,
      HeroSplitWithImage,
      HeroWithOffsetImage,
    ],
  },
  miscellaneous: {
    description: 'Miscellaneous sections that do not fit into other categories',
    components: [DividerLine],
  },
  newsletter: {
    description:
      'Newsletter sections that encourage users to sign up for a newsletter with a form and some information',
    components: [NewsletterBasic, NewsletterCenterCard, NewsletterSimple],
  },
  testimonials: {
    description:
      'Testimonial sections that showcase quotes from customers or clients with their images and names',
    components: [TestimonialsBasic, TestimonialsQuote],
  },
};
