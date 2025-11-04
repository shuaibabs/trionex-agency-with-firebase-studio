
import type { Service, Package, CaseStudy, BlogPost, Testimonial, TeamMember, Client, PlaceholderImage } from './types';
import placeholderData from './placeholder-images.json';

export const placeholderImages: PlaceholderImage[] = placeholderData.placeholderImages;

export const services: Service[] = [
  {
    id: 'business-website-development',
    slug: 'business-website-development',
    title: 'Business Website Development',
    shortDescription: 'Professional, responsive websites for startups, companies, and local businesses.',
    longDescription: 'Professional, responsive websites for startups, companies, and local businesses — crafted for branding, performance, and lead generation.',
    priceRange: '₹25,000 – ₹80,000',
    scope: ['Up to 10 pages', 'Contact Forms', 'Blog Setup', 'SEO Tags', 'Analytics Integration', '1 Month Maintenance'],
    process: [
      { step: 1, title: 'Discovery', description: 'Understand your brand, goals, and audience.' },
      { step: 2, title: 'Design', description: 'Create wireframes and mockups for a stunning, user-friendly interface.' },
      { step: 3, title: 'Development', description: 'Build a high-performance, responsive website with clean code.' },
      { step: 4, title: 'Launch', description: 'Deploy the site and ensure everything is running smoothly.' }
    ],
    caseStudyIds: ['1'],
    category: 'Web Development',
    imageId: 'service-image-1'
  },
  {
    id: 'custom-web-application',
    slug: 'custom-web-application',
    title: 'Custom Web Application Development',
    shortDescription: 'End-to-end dynamic web apps with frontend, backend, and database.',
    longDescription: 'End-to-end dynamic web apps with frontend, backend, and database — built for startups, SaaS, dashboards, and automation.',
    priceRange: '₹1,00,000 – ₹5,00,000',
    scope: ['Role-based Login', 'Admin Panels', 'Data Management', 'API Integrations', 'Reporting Features'],
    process: [
        { step: 1, title: 'Requirement Analysis', description: 'Deep dive into your application requirements and technical needs.' },
        { step: 2, title: 'Architecture Design', description: 'Plan the system architecture, database schema, and technology stack.' },
        { step: 3, title: 'Agile Development', description: 'Develop the application in sprints with regular feedback and iterations.' },
        { step: 4, title: 'Deployment & Scaling', description: 'Deploy to the cloud and set up for scalability and performance.' }
    ],
    caseStudyIds: ['2'],
    category: 'Web Development',
    imageId: 'service-image-2'
  },
  {
    id: 'ecommerce-website',
    slug: 'ecommerce-website',
    title: 'E-Commerce Website',
    shortDescription: 'Powerful online stores with inventory, payment, and delivery management.',
    longDescription: 'Powerful online stores with inventory, payment, and delivery management, using platforms like Shopify, WooCommerce, or custom solutions.',
    priceRange: '₹60,000 – ₹3,00,000',
    scope: ['Product Catalog Setup', 'Shopping Cart & Checkout', 'Payment Gateway Integration', 'Admin Dashboard', 'SEO-ready Structure'],
    process: [
        { step: 1, title: 'Platform Selection', description: 'Choose the right e-commerce platform (Shopify, WooCommerce, or custom) for your needs.' },
        { step: 2, title: 'Store Design', description: 'Design a beautiful and intuitive online store that reflects your brand.' },
        { step: 3, title: 'Development & Setup', description: 'Build and configure the store, products, and payment systems.' },
        { step: 4, title: 'Launch & Marketing', description: 'Go live and start driving traffic to your new online store.' }
    ],
    caseStudyIds: ['3'],
    category: 'Web Development',
    imageId: 'service-image-3'
  },
  {
    id: 'startup-mvp-development',
    slug: 'startup-mvp-development',
    title: 'Startup MVP Development',
    shortDescription: 'Fast, scalable Minimum Viable Products (MVPs) for tech startups.',
    longDescription: 'Fast, scalable Minimum Viable Products (MVPs) for tech startups — to validate your idea quickly and efficiently.',
    priceRange: '₹1,00,000 – ₹5,00,000',
    scope: ['User Authentication', 'Core Feature Dashboard', 'Database Setup', 'Cloud Deployment', 'Analytics Integration'],
    process: [
        { step: 1, title: 'Idea Validation', description: 'Work with you to refine the core features and value proposition of your MVP.' },
        { step: 2, title: 'Rapid Prototyping', description: 'Design and prototype the user flow and key screens.' },
        { step: 3, title: 'Lean Development', description: 'Build the essential features required to launch and test your idea with real users.' },
        { step: 4, title: 'Launch & Iterate', description: 'Deploy the MVP, gather user feedback, and plan the next phase of development.' }
    ],
    caseStudyIds: [],
    category: 'Web Development',
    imageId: 'service-image-4'
  },
   {
    id: 'real-estate-website-development',
    slug: 'real-estate-website-development',
    title: 'Real Estate Website Development',
    shortDescription: 'Feature-rich websites for real estate agencies with property listings and search.',
    longDescription: 'Feature-rich websites for real estate agencies with dynamic property listings, advanced search filters, and agent profiles.',
    priceRange: '₹50,000 – ₹1,50,000',
    scope: ['Property Listing Management', 'Advanced Search Filters', 'Agent Profiles', 'Lead Capture Forms', 'Map Integration'],
    process: [
        { step: 1, title: 'Discovery', description: 'Understand your agency’s brand and specific needs for property showcasing.' },
        { step: 2, title: 'Design', description: 'Create an intuitive design that makes property searching easy and visually appealing.' },
        { step: 3, title: 'Development', description: 'Build the website with a robust backend for managing listings and leads.' },
        { step: 4, title: 'Launch', description: 'Deploy the site and provide training for your team to manage it effectively.' }
    ],
    caseStudyIds: [],
    category: 'Web Development',
    imageId: 'service-image-5'
  },
    {
    id: 'college-school-website-development',
    slug: 'college-school-website-development',
    title: 'College & School Website Development',
    shortDescription: 'Informative and accessible websites for educational institutions.',
    longDescription: 'Informative and accessible websites for educational institutions, featuring course details, event calendars, and admission forms.',
    priceRange: '₹40,000 – ₹1,00,000',
    scope: ['Course & Department Pages', 'Event Calendar', 'Admission Forms', 'Faculty Profiles', 'News & Announcements'],
    process: [
        { step: 1, title: 'Consultation', description: 'Gather requirements from stakeholders including administration, faculty, and students.' },
        { step: 2, title: 'Design', description: 'Design a professional and easy-to-navigate website structure.' },
        { step: 3, title: 'Development', description: 'Build the website with a content management system for easy updates.' },
        { step: 4, title: 'Training & Launch', description: 'Train staff on how to manage content and launch the new website.' }
    ],
    caseStudyIds: [],
    category: 'Web Development',
    imageId: 'service-image-6'
  },
  {
    id: 'healthcare-clinic-website-development',
    slug: 'healthcare-clinic-website-development',
    title: 'Healthcare & Clinic Website Development',
    shortDescription: 'HIPAA-compliant websites for doctors and clinics with appointment booking.',
    longDescription: 'Professional, HIPAA-compliant websites for doctors and clinics, featuring appointment booking, service details, and patient resources.',
    priceRange: '₹45,000 – ₹1,20,000',
    scope: ['Appointment Booking System', 'Doctor Profiles', 'Patient Testimonials', 'Secure Contact Forms', 'Health Blog'],
    process: [
        { step: 1, title: 'Requirement Gathering', description: 'Understand the clinic’s specialities and patient communication needs, ensuring HIPAA compliance.' },
        { step: 2, title: 'Design', description: 'Create a reassuring and professional design that builds patient trust.' },
        { step: 3, title: 'Development', description: 'Develop the website with secure features for handling patient information.' },
        { step: 4, title: 'Launch & Support', description: 'Deploy the website and provide ongoing support to ensure security and performance.' }
    ],
    caseStudyIds: [],
    category: 'Web Development',
    imageId: 'service-image-7'
  },
  {
    id: 'portfolio-personal-branding-websites',
    slug: 'portfolio-personal-branding-websites',
    title: 'Portfolio & Personal Branding Websites',
    shortDescription: 'Stunning portfolio websites for creatives and professionals.',
    longDescription: 'Stunning portfolio websites for artists, photographers, designers, and professionals to showcase their work and build a personal brand.',
    priceRange: '₹15,000 – ₹40,000',
    scope: ['Visual Gallery', 'About Me Page', 'Contact Form', 'Blog Integration', 'Responsive Design'],
    process: [
        { step: 1, title: 'Vision', description: 'Understand your personal brand and the story you want to tell with your work.' },
        { step: 2, title: 'Design', description: 'Create a unique design that makes your work the star of the show.' },
        { step: 3, title: 'Development', description: 'Build a pixel-perfect, fast-loading website to house your portfolio.' },
        { step: 4, title: 'Launch', description: 'Go live and help you share your new portfolio with the world.' }
    ],
    caseStudyIds: [],
    category: 'Web Development',
    imageId: 'service-image-8'
  },
   {
    id: 'landing-page-design-development',
    slug: 'landing-page-design-development',
    title: 'Landing Page Design & Development',
    shortDescription: 'High-converting landing pages for marketing campaigns and product launches.',
    longDescription: 'High-converting landing pages for marketing campaigns and product launches, designed to maximize leads and sales.',
    priceRange: '₹10,000 – ₹30,000',
    scope: ['A/B Testing Variants', 'Lead Capture Form', 'Clear Call-to-Action', 'Fast Load Times', 'Analytics Integration'],
    process: [
        { step: 1, title: 'Goal Definition', description: 'Define the single, primary goal of the landing page (e.g., sign-up, purchase).' },
        { step: 2, title: 'Design & Copy', description: 'Craft persuasive copy and a clean design that guides the user towards the goal.' },
        { step: 3, title: 'Development', description: 'Build a lightning-fast, mobile-first landing page.' },
        { step: 4, title: 'Optimize', description: 'Launch the page and use analytics and A/B testing to continuously improve conversion rates.' }
    ],
    caseStudyIds: [],
    category: 'Web Development',
    imageId: 'service-image-9'
  },
  {
    id: 'seo-optimization',
    slug: 'seo-optimization',
    title: 'SEO Optimization',
    shortDescription: 'Improve your website’s visibility on Google with on-page and technical SEO.',
    longDescription: 'Improve your website’s visibility on Google with on-page and technical SEO. We help you rank higher, attract more organic traffic, and grow your business.',
    priceRange: '₹8,000 – ₹75,000/month',
    scope: ['On-page & Off-page SEO', 'Technical SEO Audits', 'Keyword Research', 'Content Strategy', 'Backlink Building'],
    process: [
        { step: 1, title: 'SEO Audit', description: 'We conduct a comprehensive audit to identify technical issues and growth opportunities.' },
        { step: 2, title: 'Strategy', description: 'We develop a customized SEO strategy targeting high-value keywords.' },
        { step: 3, title: 'Implementation', description: 'We execute on-page, off-page, and technical optimizations.' },
        { step: 4, title: 'Reporting', description: 'We provide detailed monthly reports on performance and rankings.' }
    ],
    caseStudyIds: ['4'],
    category: 'Digital Marketing',
    imageId: 'service-image-10'
  },
  {
    id: 'ppc-advertising',
    slug: 'ppc-advertising',
    title: 'PPC Advertising',
    shortDescription: 'Manage paid ad campaigns on Google & Meta to get instant, targeted traffic.',
    longDescription: 'Setup and manage paid ad campaigns on Google, Facebook/Instagram, including ad creation, bidding, tracking and optimization to maximize your return on investment.',
    priceRange: '₹10,000 – ₹1,00,000/month',
    scope: ['Google Ads Management', 'Meta (Facebook & Instagram) Ads', 'Ad Copy & Creative', 'A/B Testing', 'Conversion Tracking'],
    process: [
        { step: 1, title: 'Audience Research', description: 'We identify your ideal customer and where to find them online.' },
        { step: 2, title: 'Campaign Setup', description: 'We create compelling ad copy and visuals, and set up your campaigns for success.' },
        { step: 3, title: 'Optimization', description: 'We constantly monitor and tweak your campaigns to improve performance and lower costs.' },
        { step: 4, title: 'Reporting', description: 'You get clear, concise reports on what matters most: your ROI.' }
    ],
    caseStudyIds: ['5'],
    category: 'Digital Marketing',
    imageId: 'service-image-11'
  },
  {
    id: 'social-media-marketing',
    slug: 'social-media-marketing',
    title: 'Social Media Marketing',
    shortDescription: 'Content creation, posting, and community management for social platforms.',
    longDescription: 'Content creation, posting, community management and paid social campaigns across platforms like Facebook, Instagram, LinkedIn, etc., to build your brand and engage your audience.',
    priceRange: '₹8,000 – ₹40,000/month',
    scope: ['Content Calendar', 'Post Creation & Scheduling', 'Community Engagement', 'Paid Social Campaigns', 'Performance Analytics'],
    process: [
        { step: 1, title: 'Strategy', description: 'We define your brand voice, content pillars, and target platforms.' },
        { step: 2, title: 'Content Creation', description: 'Our team creates engaging visuals and copy tailored to each platform.' },
        { step: 3, title: 'Management', description: 'We schedule posts, engage with your audience, and monitor conversations.' },
        { step: 4, title: 'Growth', description: 'We analyze performance to refine the strategy and grow your following.' }
    ],
    caseStudyIds: ['6'],
    category: 'Digital Marketing',
    imageId: 'service-image-12'
  },
  {
    id: 'content-marketing',
    slug: 'content-marketing',
    title: 'Content Marketing',
    shortDescription: 'Creating valuable content (blogs, videos) to attract and engage your audience.',
    longDescription: 'Creating and distributing valuable content (blogs, videos, infographics) to attract and engage target audiences, supporting SEO, and building your brand authority.',
    priceRange: '₹2,000 – ₹10,000 per piece',
    scope: ['Blog Writing', 'Video Scripts', 'Infographics', 'E-books & Whitepapers', 'Content Distribution'],
    process: [
        { step: 1, title: 'Topic Ideation', description: 'We research topics your target audience is actively searching for.' },
        { step: 2, title: 'Content Creation', description: 'Our expert writers and designers produce high-quality, engaging content.' },
        { step: 3, title: 'SEO Optimization', description: 'Every piece of content is optimized to rank on search engines.' },
        { step: 4, title: 'Promotion', description: 'We help distribute your content across channels to maximize its reach.' }
    ],
    caseStudyIds: [],
    category: 'Digital Marketing',
    imageId: 'service-image-13'
  },
];

export const packages: Package[] = [
  {
    id: 'basic-sites',
    title: 'Basic Sites',
    price: '10K - 30K',
    pricePeriod: 'one-time',
    description: 'Perfect for freelancers and small businesses needing a sharp, professional online identity.',
    features: ['Landing Pages', 'Portfolio Sites', 'Responsive Design', 'Contact Form'],
    ctaText: 'Get Started',
  },
  {
    id: 'business-sites',
    title: 'Business Sites',
    price: '30K - 80K',
    pricePeriod: 'one-time',
    description: 'The complete package for established businesses, clinics, and schools.',
    features: ['5-10 Pages', 'Blog & CMS', 'Basic SEO Setup', 'Analytics Integration'],
    isPopular: true,
    ctaText: 'Choose Business',
  },
  {
    id: 'web-apps',
    title: 'Web Apps',
    price: '1L - 5L+',
    pricePeriod: 'one-time',
    description: 'For startups and enterprises that need powerful, custom-built web applications.',
    features: ['SaaS & MVP Builds', 'E-commerce Platforms', 'Custom CRM/ERP', 'Database & API Development'],
    ctaText: 'Build Your App',
  },
  {
    id: 'monthly-retainers',
    title: 'Monthly Retainers',
    price: '8K - 75K',
    pricePeriod: '/month',
    description: 'Ongoing support for businesses that want continuous growth and peace of mind.',
    features: ['Maintenance & Support', 'SEO & PPC Management', 'Social Media Marketing', 'Content Creation'],
    ctaText: 'Contact Us',
  },
];

export const caseStudies: CaseStudy[] = [
    {
        "id": 1,
        "slug": "json-to-excel-converter",
        "categoryId": "category_utilities",
        "img": "/images/portfolio/jar.png",
        "faIcon": "",
        "faIconColors": {"bg": "", "fill": ""},
        "preview": {
            "links": [
            ],
            "screenshots": [
            ],
            "screenshotsAspectRatio": "",
            "youtubeVideo": ""
        },
        "locales": {
            "en": {
                "title": "JSON to Excel Converter",
                "text": "A <b>Java-based JAR tool</b> that converts JSON data into Excel with <b>default filtering, sorting, and structured formatting</b> for efficient data management and reporting.",
                "tags": ["JAVA", "JAR", "JSON", "Excel"]
            }
        }
    },
    {
        "id": 2,
        "slug": "windows-harvesting-tool",
        "categoryId": "category_utilities",
        "img": "/images/portfolio/windows.png",
        "faIcon": "",
        "faIconColors": {"bg": "", "fill": ""},
        "preview": {
            "links": [],
            "screenshots": [
            ],
            "screenshotsAspectRatio": "",
            "youtubeVideo": ""
        },
        "locales": {
            "en": {
                "title": "Windows Harvesting Tool",
                "text": "A <b>C# .NET Windows harvesting tool</b> that downloads files from specified URLs and servers with <b>configurable scheduling, parallel transfers, and robust error handling.</b> ideal for automated data collection and mass file retrieval.",
                "tags": ["C#", "DotNet", "Windows", "Tool"]
            }
        }
    },
    {
        "id": 3,
        "slug": "alpine-college-of-education",
        "categoryId": "category_web",
        "img": "/images/portfolio/alpine.png",
        "faIcon": "",
        "faIconColors": {"bg": "", "fill": ""},
        "preview": {
            "links": [],
            "screenshots": [],
            "screenshotsAspectRatio": "16:9",
            "youtubeVideo": ""
        },
        "locales": {
            "en": {
                "title": "Alpine College of Education",
                "text": "A responsive <b>college website</b> built with modern web technologies, featuring course details, faculty profiles, admission forms, event management, and a student portal for seamless communication and resource access.",
                "tags": ["Angular", "MySQL", "NodeJS", "ExpressJS"]
            }
        }
    },
    {
        "id": 4,
        "slug": "time-attendance-system",
        "categoryId": "category_utilities",
        "img": "/images/portfolio/tms.png",
        "faIcon": "",
        "faIconColors": {"bg": "", "fill": ""},
        "preview": {
            "links": [],
            "screenshots": [
            ],
            "screenshotsAspectRatio": "",
            "youtubeVideo": ""
        },
        "locales": {
            "en": {
                "title": "Time & Attendance System",
                "text": "A <b>Time & Attendance System</b> to track employee working hours, manage shifts, and generate automated reports with real-time monitoring and secure data management.",
                "tags": ["Angular", "MySQL", "NodeJS", "ExpressJS"]
            }
        }
    },
    {
        "id": 5,
        "slug": "scholar-counter",
        "categoryId": "category_web",
        "img": "/images/portfolio/sc.png",
        "faIcon": "",
        "faIconColors": {"bg": "", "fill": ""},
        "preview": {
            "links": [
                {"href": "https://sc.gindowa.com/", "tooltipString": "open_website", "faIcon": "fa-solid fa-link"}
            ],
            "screenshots": [
                "/images/portfolio/sc/10001.png",
                "/images/portfolio/sc/10002.jpg",
                "/images/portfolio/sc/10003.jpg",
                "/images/portfolio/sc/10004.jpg",
                "/images/portfolio/sc/10005.jpg",
                "/images/portfolio/sc/10006.jpg",
                "/images/portfolio/sc/10007.jpg"
            ],
            "screenshotsAspectRatio": "16:9",
            "youtubeVideo": ""
        },
        "locales": {
            "en": {
                "title": "Scholar Counter",
                "text": "<b>Scholar Counter</b> follows the <b>COUNTER Code of Practice</b> to provide standardized, credible, and comparable usage data for scholarly electronic resources. It ensures libraries, publishers, and vendors have consistent insights into how academic content is accessed and used.",
                "tags": ["Angular", "MySQL", "NodeJS", "ExpressJS", "GraphQL"]
            }
        }
    },
    {
        "id": 6,
        "slug": "maker-checker",
        "categoryId": "category_web",
        "img": "/images/portfolio/maker-checker.png",
        "faIcon": "",
        "faIconColors": {"bg": "", "fill": ""},
        "preview": {
            "links": [
                {"href": "https://github.com", "tooltipString": "see_on_github", "faIcon": "fa-brands fa-github"}
            ],
            "screenshots": [

            ],
            "screenshotsAspectRatio": "",
            "youtubeVideo": ""
        },
        "locales": {
            "en": {
                "title": "Maker Checker",
                "text": "A <b>Maker-Checker</b> system implementing <b>dual-authorization workflow,</b> where one user (Maker) creates or initiates a transaction/request and another user (Checker) reviews and approves it. Ensures <b>accuracy, accountability, and compliance</b> in critical operations.",
                "tags": ["PL/SQL", "Core Java", "Servlet", "JSP", "Spring", "Hibernate" ]
            }
        }
    },
    {
        "id": 7,
        "slug": "tripbookkar",
        "categoryId": "category_web",
        "img": "/images/portfolio/trip.png",
        "faIcon": "",
        "faIconColors": {"bg": "", "fill": ""},
        "preview": {
            "links": [
                {"href": "https://tripbookkar.com/", "tooltipString": "open_website", "faIcon": "fa-solid fa-link"}
            ],
            "screenshots": [
                "/images/portfolio/trip/10001.png",
                "/images/portfolio/trip/10002.png",
                "/images/portfolio/trip/10003.png",
                "/images/portfolio/trip/10004.png"
            ],
            "screenshotsAspectRatio": "16:9",
            "youtubeVideo": ""
        },
        "locales": {
            "en": {
                "title": "TripBookKar",
                "text": "<b>TripBookKar</b> is one-stop travel booking platform for <b>holiday packages, flights, hotels, trains, buses, cabs, and helicopter services.</b> Discover trending destinations, explore budget-friendly deals, and book your perfect trip with ease.",
                "tags": ["React", "ExpressJS", "NodeJS", "MongoDB", "AI Model Integration"]
            }
        }
    },
    {
        "id": 8,
        "slug": "finnone-neo-cas",
        "categoryId": "category_web",
        "img": "/images/portfolio/cas.png",
        "faIcon": "",
        "faIconColors": {"bg": "", "fill": ""},
        "preview": {
            "links": [
                {"href": "https://www.nucleussoftware.com/finnone-neo/loan-origination-system/", "tooltipString": "open_website", "faIcon": "fa-solid fa-link"}
            ],
            "screenshots": [

            ],
            "screenshotsAspectRatio": "",
            "youtubeVideo": "https://www.youtube.com/watch?v=-JbofnRpV0U"
        },
        "locales": {
            "en": {
                "title": "FinnOne Neo CAS",
                "text": "<b>FinnOne Neo CAS (Customer Acquisition System)</b> by Nucleus Software is a digital loan origination platform. It helps <b>banks and NBFCs</b> manage the entire customer onboarding and lending journey from <b>lead capture and eKYC to credit scoring, verification, approval, and disbursement.</b>",
                "tags": ["React", "NodeJS", "Java", "PL/SQL", "Penetration Testing", "Documentation"]
            }
        }
    },
    {
        "id": 9,
        "slug": "finnone-neo-lms",
        "categoryId": "category_web",
        "img": "/images/portfolio/lms.png",
        "faIcon": "",
        "faIconColors": {"bg": "", "fill": ""},
        "preview": {
            "links": [
                {"href": "https://www.nucleussoftware.com/finnone-neo/loan-management-system/", "tooltipString": "open_website", "faIcon": "fa-solid fa-link"}
            ],
            "screenshots": [

            ],
            "screenshotsAspectRatio": "",
            "youtubeVideo": "https://www.youtube.com/watch?v=9NgOjw2ZFBQ"
        },
        "locales": {
            "en": {
                "title": "FinnOne Neo LMS",
                "text": "<b>FinnOne Neo LMS (Loan Management System)</b> by Nucleus Software is a comprehensive loan servicing platform. It helps <b>banks and NBFCs</b> manage the entire loan lifecycle from <b>disbursement and repayment scheduling to interest calculation, accounting, monitoring, and closure</b> ensuring accuracy, compliance, and customer satisfaction.",
                "tags": ["React", "NodeJS", "Java", "PL/SQL", "Penetration Testing", "Documentation"]
            }
        }
    },
     {
        "id": 10,
        "slug": "finnone-neo-collections",
        "categoryId": "category_web",
        "img": "/images/portfolio/coll.png",
        "faIcon": "",
        "faIconColors": {"bg": "", "fill": ""},
        "preview": {
            "links": [
                {"href": "https://www.nucleussoftware.com/finnone-neo/collections/", "tooltipString": "open_website", "faIcon": "fa-solid fa-link"}
            ],
            "screenshots": [

            ],
            "screenshotsAspectRatio": "",
            "youtubeVideo": "https://www.youtube.com/watch?v=OkCsQaTH3G4"
        },
        "locales": {
            "en": {
                "title": "FinnOne Neo Collections",
                "text": "<b>FinnOne Neo Collections</b> by Nucleus Software is a digital debt recovery and management solution. It empowers financial institutions to <b>streamline collections</b> with <b>intelligent strategies, digital reminders, field tracking, and analytics</b> reducing delinquencies, improving recovery rates, and enhancing borrower engagement.",
                "tags": ["React", "NodeJS", "Java", "PL/SQL", "Penetration Testing", "Documentation"]
            }
        }
    },
    {
        "id": 11,
        "slug": "e-commerce-store",
        "categoryId": "category_apps",
        "img": "/images/portfolio/ecom.png",
        "faIcon": "",
        "faIconColors": {"bg": "", "fill": ""},
        "preview": {
            "links": [
            ],
            "screenshots": [

            ],
            "screenshotsAspectRatio": "",
            "youtubeVideo": ""
        },
        "locales": {
            "en": {
                "title": "E-Commerce Store",
                "text": "A modern, full-stack e-commerce Android app built with <b>React (Vite)</b> for a fast and responsive user interface, powered by <b>Node.js with Express as the backend server.</b> The application leverages <b>MongoDB</b> as the primary database for managing products, users, orders, and inventory, while <b>Firebase</b> is integrated for authentication, real-time notifications, and secure backend services.",
               "tags": ["React", "Vite", "NodeJS", "Express", "MongoDB", "Firebase", "Android", "E-Commerce", "Full Stack Development"]
            }
        }
    },
     {
        "id": 12,
        "slug": "finnone-neo-mobile-apps",
        "categoryId": "category_apps",
        "img": "/images/portfolio/mFinnOne.jpg",
        "faIcon": "",
        "faIconColors": {"bg": "", "fill": ""},
        "preview": {
            "links": [
            ],
            "screenshots": [

            ],
            "screenshotsAspectRatio": "",
            "youtubeVideo": ""
        },
        "locales": {
            "en": {
                "title": "FinnOne Neo Mobile Apps (mCAS, Mcollect, mFinn, mServe/mApply)",
                "text": "A suite of mobile apps under <b>Nucleus Software’s FinnOne Neo digital lending platform,</b> built to simplify lending and customer servicing. <b>mCAS</b> – Digital customer onboarding with KYC & application processing. <b>mCollect</b> – Real-time collections & payment tracking. <b>mFinn</b> – Customer loan management & service requests. <b>mServe/mApply</b> – Loan applications & servicing through mobile. Ensures secure, real-time, and seamless integration for banks & NBFCs.",
               "tags": ["mCAS", "mCollect", "mServe", "mApply", "mFinn", "Frida", "Android", "Penetration Testing", "Backend APIs"]
            }
        }
    }
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Why Your Business Needs a Professional Website in 2024 (Not Just a Social Media Page)',
    slug: 'why-you-need-a-professional-website',
    excerpt: 'In the age of social media, many businesses wonder if they still need a traditional website. The answer is a resounding YES. Discover why a professional website is the cornerstone of your digital presence.',
    content: 'While social media platforms are excellent for engagement, they are rented land. Your website is your digital headquarters—an asset you fully own and control. It establishes credibility, allows for deep storytelling, and serves as the central hub for all your marketing efforts, from SEO to email marketing. A professional website allows you to capture leads, showcase your products or services without limitation, and build a brand that stands the test of time.',
    date: 'August 01, 2024',
    readTime: '6 min read',
    imageId: 'blog-5',
    author: {
      name: 'Alex Thompson',
      avatarId: 'avatar-5'
    }
  },
  {
    id: '2',
    title: 'SEO vs. PPC: Which is Right for Your Business?',
    slug: 'seo-vs-ppc',
    excerpt: 'Should you invest in long-term organic growth with SEO, or do you need the immediate traffic from PPC ads? We break down the pros and cons of each to help you decide.',
    content: 'SEO (Search Engine Optimization) is the process of optimizing your website to rank higher in organic search results. It\'s a long-term strategy that builds trust and sustainable traffic. PPC (Pay-Per-Click) advertising, on the other hand, allows you to pay for top positions on search engines instantly. The best strategy often involves a combination of both. Use PPC for quick wins and testing, while building a strong SEO foundation for lasting, cost-effective growth.',
    date: 'July 25, 2024',
    readTime: '8 min read',
    imageId: 'blog-2',
    author: {
      name: 'Carlos Rodriguez',
      avatarId: 'avatar-2'
    }
  },
  {
    id: '3',
    title: '5 Signs Your Website Needs a Redesign',
    slug: 'signs-your-website-needs-redesign',
    excerpt: 'Your website is your 24/7 salesperson. If it\'s slow, outdated, or not mobile-friendly, it could be costing you business. Here are 5 clear signs it\'s time for a revamp.',
    content: '1. It\'s not mobile-friendly: Over half of all web traffic comes from mobile devices. If your site is not responsive, you are alienating a huge portion of your audience. 2. It\'s slow to load: Modern users expect pages to load in under 3 seconds. 3. Your bounce rate is high: If visitors leave your site immediately, it\'s a sign of poor user experience. 4. It doesn\'t reflect your current brand: Your business evolves, and your website should too. 5. You\'re not getting leads: A modern website should be a lead generation machine. If it\'s not, it\'s time for an upgrade.',
    date: 'July 20, 2024',
    readTime: '5 min read',
    imageId: 'blog-6',
    author: {
      name: 'Diana Miller',
      avatarId: 'avatar-1'
    }
  },
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Rohan Sharma',
    title: 'Founder, LegalConnect',
    quote: 'Trionex Digital delivered a website that perfectly captured our firm\'s professional image. The increase in client consultations through the site was immediate and impressive. A truly fantastic team.',
    avatarId: 'avatar-2'
  },
  {
    id: '2',
    name: 'Priya Singh',
    title: 'CEO, FitLife Nutrition',
    quote: 'Our new Shopify store is not only beautiful but also incredibly fast. The team\'s attention to detail and focus on user experience has directly resulted in a higher conversion rate. Highly recommended!',
    avatarId: 'avatar-4'
  },
  {
    id: '3',
    name: 'Ankit Gupta',
    title: 'Owner, City Dental Care',
    quote: 'Thanks to their Local SEO efforts, we are now the top-ranked dental clinic in our area. Our appointment book is fuller than ever. Their digital marketing expertise is unmatched.',
    avatarId: 'avatar-5'
  },
   {
    id: '4',
    name: 'Sameer Khan',
    title: 'CTO, InnovateTech',
    quote: 'The custom dashboard they built for us revolutionized our operations. It\'s intuitive, powerful, and has saved us countless hours of manual work. A game-changer for our business.',
    avatarId: 'avatar-3'
  },
  {
    id: '5',
    name: 'Neha Desai',
    title: 'Marketing Head, Aura Fashion',
    quote: 'Their PPC campaigns are pure magic. We saw a 5X ROAS within the first quarter. They are strategic, transparent, and deliver on their promises.',
    avatarId: 'avatar-1'
  }
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
