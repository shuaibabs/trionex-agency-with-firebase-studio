import type { Service, Package, CaseStudy, BlogPost, Testimonial, TeamMember, Client, PlaceholderImage } from './types';
import placeholderData from './placeholder-images.json';

export const placeholderImages: PlaceholderImage[] = placeholderData.placeholderImages;

export const services: Service[] = [
  {
    id: 'web-development',
    title: 'Web Development',
    slug: 'web-development',
    shortDescription: 'Crafting high-performance websites that captivate and convert.',
    longDescription: 'Our web development services focus on building responsive, fast, and secure websites tailored to your business needs. From custom React applications to complex WordPress sites, we deliver digital experiences that drive growth.',
    scope: ['Custom Website Design', 'React/Next.js Development', 'WordPress Development', 'E-commerce Solutions', 'API Integration'],
    process: [
      { step: 1, title: 'Discovery & Strategy', description: 'We start by understanding your business goals and target audience to create a strategic plan.' },
      { step: 2, title: 'Design & Prototyping', description: 'Our designers create wireframes and mockups for a seamless user experience.' },
      { step: 3, title: 'Development & Testing', description: 'Our developers bring the designs to life with clean, efficient code and rigorous testing.' },
      { step: 4, title: 'Launch & Optimization', description: 'We deploy your website and monitor performance, making optimizations for continued success.' }
    ],
    pricingOptions: [
      { plan: 'Brochure Site', price: 'Starts at ₹9,999', features: ['5-7 pages', 'Responsive Design', 'Basic SEO'] },
      { plan: 'E-commerce Store', price: 'Starts at ₹29,999', features: ['Full Product Catalog', 'Payment Gateway', 'Inventory Management'] }
    ],
    caseStudyIds: ['case-study-1']
  },
  {
    id: 'seo-optimization',
    title: 'SEO Optimization',
    slug: 'seo-optimization',
    shortDescription: 'Boosting your visibility on search engines to attract more traffic.',
    longDescription: 'Our SEO strategies are designed to increase your organic search rankings, drive targeted traffic, and generate qualified leads. We cover all aspects of SEO, including technical, on-page, and off-page optimization.',
    scope: ['Technical SEO Audits', 'Keyword Research & Strategy', 'On-Page Optimization', 'Content Strategy', 'Link Building'],
    process: [
        { step: 1, title: 'Comprehensive Audit', description: 'We analyze your current SEO performance and identify opportunities for improvement.' },
        { step: 2, title: 'Strategy Development', description: 'Based on the audit, we develop a tailored SEO strategy.' },
        { step: 3, title: 'Implementation', description: 'We execute the strategy, optimizing your site and building authority.' },
        { step: 4, title: 'Reporting & Analysis', description: 'We provide regular reports on your SEO performance and adjust our strategy as needed.' }
    ],
    pricingOptions: [
      { plan: 'SEO Audit', price: '₹7,999', features: ['Comprehensive Report', 'Actionable Recommendations'] },
      { plan: 'Monthly SEO', price: 'Starts at ₹14,999/mo', features: ['Ongoing Optimization', 'Content Creation', 'Reporting'] }
    ],
    caseStudyIds: ['case-study-2']
  },
  {
    id: 'digital-advertising',
    title: 'Digital Advertising',
    slug: 'digital-advertising',
    shortDescription: 'Running targeted ad campaigns that deliver measurable results.',
    longDescription: 'We create and manage data-driven advertising campaigns across platforms like Google, Meta, and LinkedIn. Our goal is to maximize your return on ad spend (ROAS) and achieve your marketing objectives.',
    scope: ['PPC Campaign Management', 'Social Media Ads', 'Ad Copy & Creative', 'Landing Page Optimization', 'Performance Tracking'],
    process: [
      { step: 1, title: 'Audience Research', description: 'We identify and analyze your target audience to ensure ad relevance.' },
      { step: 2, title: 'Campaign Setup', description: 'We set up your campaigns with compelling creative and copy.' },
      { step: 3, title: 'Management & Optimization', description: 'We continuously monitor and optimize campaigns for peak performance.' },
      { step: 4, title: 'Analysis & Reporting', description: 'We deliver clear reports on campaign ROI and key metrics.' }
    ],
    pricingOptions: [
      { plan: 'Campaign Setup', price: 'Starts at ₹4,999', features: ['1 Ad Platform', 'Ad Creative & Copy'] },
      { plan: 'Monthly Management', price: '15% of Ad Spend (min. ₹9,999/mo)', features: ['Ongoing Optimization', 'A/B Testing', 'Reporting'] }
    ],
    caseStudyIds: ['case-study-3']
  },
  {
    id: 'content-marketing',
    title: 'Content Marketing',
    slug: 'content-marketing',
    shortDescription: 'Engaging your audience with valuable content that builds trust.',
    longDescription: 'Our content marketing services help you build authority and connect with your audience through high-quality blog posts, articles, case studies, and more. We focus on creating content that educates, entertains, and inspires action.',
    scope: ['Content Strategy', 'Blog Writing', 'Video Scripts', 'E-books & Whitepapers', 'Social Media Content'],
    process: [
      { step: 1, title: 'Strategy & Planning', description: 'We create a content calendar based on your goals and audience interests.' },
      { step: 2, title: 'Content Creation', description: 'Our team of writers and creators produce high-quality content.' },
      { step: 3, title: 'Distribution & Promotion', description: 'We promote your content across various channels to maximize reach.' },
      { step: 4, title: 'Performance Analysis', description: 'We track content performance and refine our strategy over time.' }
    ],
    pricingOptions: [
      { plan: 'Blog Post Pack', price: 'Starts at ₹12,000', features: ['4 SEO-optimized posts', 'Keyword Research'] },
      { plan: 'Full Content Strategy', price: 'Quote-based', features: ['Content Calendar', 'Multi-format Content', 'Distribution'] }
    ],
    caseStudyIds: ['case-study-4']
  },
];

export const packages: Package[] = [
  {
    id: 'starter',
    title: 'Starter',
    price: '9,999',
    pricePeriod: '/month',
    description: 'Ideal for new businesses looking to establish an online presence.',
    features: ['1 Ad Platform (Meta or Google)', '5-Page Brochure Website', 'Basic Tracking & Analytics', 'Monthly Reporting'],
    ctaText: 'Choose Starter',
  },
  {
    id: 'growth',
    title: 'Growth',
    price: '19,999',
    pricePeriod: '/month',
    description: 'For growing businesses aiming to scale their marketing efforts.',
    features: ['2 Ad Platforms', 'Landing Page Funnel', 'Conversion Rate Optimization Basics', 'Bi-weekly Reporting', 'Basic SEO'],
    isPopular: true,
    ctaText: 'Choose Growth',
  },
  {
    id: 'pro',
    title: 'Pro',
    price: '39,999',
    pricePeriod: '/month',
    description: 'A full-service solution for businesses ready to dominate their market.',
    features: ['3+ Platforms & Full-Funnel Ads', 'Custom React Web App', 'Advanced SEO & Content', 'Advanced Analytics', 'Dedicated Account Manager'],
    ctaText: 'Choose Pro',
  },
  {
    id: 'enterprise',
    title: 'Enterprise',
    price: 'Custom',
    description: 'Tailored solutions for large-scale and complex business needs.',
    features: ['Advanced Integrations', 'Dedicated Team', 'Service Level Agreement (SLA)', 'On-demand Dev Hours', 'SSO & Advanced Security'],
    ctaText: 'Contact Us',
  },
];

export const caseStudies: CaseStudy[] = [
  {
    id: 'case-study-1',
    title: 'E-commerce Platform Launch for a Fashion Brand',
    slug: 'ecommerce-fashion-launch',
    category: 'Web',
    shortDescription: 'Launched a high-performance React-based e-commerce site, increasing sales by 150%.',
    challenge: 'The client, a growing fashion brand, was limited by their old, slow website. They needed a modern, mobile-first platform to handle increasing traffic and showcase their products effectively.',
    solution: 'We built a custom e-commerce solution using Next.js for server-side rendering and performance. The site featured a clean UI, advanced product filtering, and a streamlined checkout process integrated with Stripe.',
    results: [
      { metric: '150%', value: 'Increase in Sales', description: 'Within the first quarter post-launch.' },
      { metric: '60%', value: 'Faster Page Loads', description: 'Average page load time decreased from 4.5s to 1.8s.' },
      { metric: '40%', value: 'Increase in Conversion Rate', description: 'Optimized checkout flow led to higher completion rates.' },
    ],
    imageId: 'portfolio-1'
  },
  {
    id: 'case-study-2',
    title: 'Organic Traffic Growth for a SaaS Company',
    slug: 'saas-organic-growth',
    category: 'SEO',
    shortDescription: 'Achieved a 300% increase in organic traffic through a targeted content and technical SEO strategy.',
    challenge: 'A SaaS startup was struggling to gain visibility in a competitive market. Their organic traffic was stagnant, and they were heavily reliant on paid advertising.',
    solution: 'We conducted a full technical SEO audit, fixing crawlability and indexing issues. We then developed a content strategy around high-intent keywords, creating in-depth blog posts and guides to attract their target audience.',
    results: [
      { metric: '300%', value: 'Increase in Organic Traffic', description: 'Over a six-month period.' },
      { metric: 'Top 3 Rankings', value: 'For 15+ Keywords', description: 'Secured high rankings for core business terms.' },
      { metric: '50%', value: 'Reduction in Ad Spend', description: 'As organic leads increased, reliance on paid ads decreased.' },
    ],
    imageId: 'portfolio-3'
  },
  {
    id: 'case-study-3',
    title: 'ROAS Improvement for a D2C Brand',
    slug: 'd2c-roas-improvement',
    category: 'Ads',
    shortDescription: 'Doubled Return on Ad Spend (ROAS) for a direct-to-consumer brand on Meta platforms.',
    challenge: 'A D2C brand was spending a significant amount on Facebook and Instagram ads with inconsistent and declining returns.',
    solution: 'We restructured their entire ad account, implementing a full-funnel strategy. This involved new creative testing, audience segmentation (prospecting, retargeting, retention), and optimizing for higher-value conversions.',
    results: [
      { metric: '2x', value: 'Return on Ad Spend', description: 'ROAS improved from 1.5x to 3.2x in three months.' },
      { metric: '30%', value: 'Decrease in CPA', description: 'Cost per acquisition was significantly lowered.' },
      { metric: '70%', value: 'Increase in Purchase Volume', description: 'Drove more sales from the same ad budget.' },
    ],
    imageId: 'portfolio-2'
  },
    {
    id: 'case-study-4',
    title: 'Complex WordPress Site for a Corporate Client',
    slug: 'wordpress-corporate-site',
    category: 'WordPress',
    shortDescription: 'Developed a scalable WordPress site with custom post types and third-party integrations.',
    challenge: 'A large corporation needed a flexible and easy-to-manage website for their multiple business units, each requiring a unique content structure and design.',
    solution: 'We built a robust WordPress site using a custom theme and Advanced Custom Fields (ACF). We created custom post types for publications, team members, and events, and integrated their CRM and a third-party API for financial data.',
    results: [
      { metric: '50%', value: 'Faster Content Updates', description: 'Marketing team could update content without developer help.' },
      { metric: 'Seamless Integration', value: 'with CRM and APIs', description: 'Automated data flows saved hours of manual work.' },
      { metric: '100%', value: 'Brand Consistency', description: 'Unified design system across all business unit sections.' },
    ],
    imageId: 'portfolio-4'
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Future of Web Development: Trends to Watch in 2024',
    slug: 'future-of-web-development-2024',
    excerpt: 'From AI-powered tools to the rise of server components, we explore the key trends shaping the future of web development.',
    content: 'The web development landscape is constantly evolving. In this article, we delve into the most impactful trends of 2024, including the proliferation of AI coding assistants, the shift towards edge computing, and the continued dominance of component-based architectures.',
    date: 'July 15, 2024',
    readTime: '7 min read',
    imageId: 'blog-1',
    author: {
      name: 'Jane Doe',
      avatarId: 'avatar-1'
    }
  },
  {
    id: '2',
    title: 'Unlocking Growth: A Small Business Guide to SEO',
    slug: 'small-business-guide-to-seo',
    excerpt: 'SEO can seem daunting, but it doesn\'t have to be. Our guide breaks down the essentials for small businesses to start ranking.',
    content: 'This guide provides actionable steps for small businesses to improve their search engine optimization. We cover keyword research, on-page SEO, local SEO, and how to build a foundation for long-term organic growth.',
    date: 'July 10, 2024',
    readTime: '10 min read',
    imageId: 'blog-2',
    author: {
      name: 'John Smith',
      avatarId: 'avatar-2'
    }
  },
  {
    id: '3',
    title: 'Why Your Brand Needs a Content Marketing Strategy',
    slug: 'why-you-need-content-marketing',
    excerpt: 'Content marketing is more than just blogging. Learn how a cohesive strategy can build your brand, engage your audience, and drive conversions.',
    content: 'In today\'s digital world, content is king. We explain why a strategic approach to content marketing is crucial for building brand authority, fostering customer loyalty, and ultimately, boosting your bottom line.',
    date: 'July 5, 2024',
    readTime: '5 min read',
    imageId: 'blog-3',
    author: {
      name: 'Emily White',
      avatarId: 'avatar-3'
    }
  },
   {
    id: '4',
    title: 'React Server Components vs. Client Components',
    slug: 'react-server-vs-client-components',
    excerpt: 'A deep dive into the new React paradigm. Understand when to use Server Components to optimize performance and improve user experience.',
    content: 'React Server Components are changing the game. This article breaks down the differences between Server and Client components, explains the benefits of shifting work to the server, and provides practical examples of how to use them in your Next.js application.',
    date: 'June 28, 2024',
    readTime: '12 min read',
    imageId: 'blog-4',
    author: {
      name: 'Alex Johnson',
      avatarId: 'avatar-5'
    }
  },
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    title: 'CEO, Fashion Forward',
    quote: 'Synergy Digital transformed our online presence. Their team is professional, creative, and delivered results beyond our expectations. Our sales have skyrocketed since the new website launch!',
    avatarId: 'avatar-1'
  },
  {
    id: '2',
    name: 'Michael Chen',
    title: 'Founder, SaaS Innovations',
    quote: 'Working with Synergy Digital on our SEO was a game-changer. Their expertise drove a 300% increase in organic traffic, putting us on the map in a crowded market.',
    avatarId: 'avatar-2'
  },
  {
    id: '3',
    name: 'Priya Patel',
    title: 'Marketing Director, Healthy Living Co.',
    quote: 'The digital advertising campaigns they manage for us are incredibly effective. Our ROAS has doubled, and we are reaching our target audience more efficiently than ever before.',
    avatarId: 'avatar-4'
  },
];

export const team: TeamMember[] = [
  {
    id: '1',
    name: 'Alex Thompson',
    role: 'Founder & CEO',
    bio: 'With over a decade of experience in digital strategy, Alex leads the team with a passion for innovation and a commitment to client success.',
    avatarId: 'avatar-5'
  },
  {
    id: '2',
    name: 'Brenda Chen',
    role: 'Head of Development',
    bio: 'Brenda is a master of code, leading our development team to build high-performance websites and applications with cutting-edge technology.',
    avatarId: 'avatar-4'
  },
  {
    id: '3',
    name: 'Carlos Rodriguez',
    role: 'Director of Marketing',
    bio: 'Carlos is a data-driven marketer who excels at creating strategies that drive growth and deliver a measurable return on investment.',
    avatarId: 'avatar-2'
  },
  {
    id: '4',
    name: 'Diana Miller',
    role: 'Lead Designer',
    bio: 'Diana has a keen eye for aesthetics and user experience, ensuring every project we deliver is both beautiful and intuitive.',
    avatarId: 'avatar-1'
  },
];

export const clients: Client[] = [
  { id: '1', name: 'TechCorp', imageId: 'client-logo-1' },
  { id: '2', name: 'InnovateX', imageId: 'client-logo-2' },
  { id: '3', name: 'Shopify', imageId: 'client-logo-3' },
  { id: '4', name: 'QuantumFin', imageId: 'client-logo-4' },
  { id: '5', name: 'Wellness+', imageId: 'client-logo-5' },
  { id: '6', name: 'GlobeTrek', imageId: 'client-logo-6' },
  { id: '7', name: 'StartUpCo', imageId: 'client-logo-1' },
  { id: '8', name: 'FutureGadget', imageId: 'client-logo-2' },
];
