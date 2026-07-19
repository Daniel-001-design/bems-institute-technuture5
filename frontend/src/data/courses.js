import { Monitor, Cast, Gift } from 'lucide-react'

export const PROGRAM_NAME = 'Technuture 5.0'
export const PROGRAM_START = '3rd August 2026'
export const PROGRAM_END = '4th September 2026'
export const FORM_FEE = 5000
export const PAYMENT_FEE = 45000

export const courses = [
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    tagline: 'Design Digital Experiences That People Love',
    description:
      "Learn how to create intuitive, visually appealing, and user-friendly websites and mobile applications. This hands-on course covers the complete UI/UX design process-from user research and wireframing to high-fidelity interfaces and interactive prototypes using industry-started tools.",
    cardDescription: 'Design beautiful, user-friendly interfaces and experiences.',
    icon: Monitor,
    image:
      'https://images.unsplash.com/photo-1559028006-448665bd7c7f?w=800&q=80',
    duration: '5 Weeks',
    detailDuration: '1 Month',
    formFee: FORM_FEE,
    programFee: PAYMENT_FEE,
    learn: [
      'User Research & Personas',
      'Design Systems',
      'Wireframing & User Flows',
      'Responsive Web & Mobile Design',
      'UI Design Principles',
      'Portfolio Projects',
      'Prototyping in Figma'
    ],
    perfectFor: ['Beginners with no prior experience', 'Students & Graduates', 'Entrepreneurs & Career Changers']
  },
  {
    id: 'web-development',
    title: 'Web Development',
    tagline: 'Build. Code. Launch.',
    description:
      'Learn to build responsive. modern and high-performance websites and web applications from scratch. This course takes you from the basics of HTML. CSS and Javascript to advanced development using modern framework and best practices.',
    cardDescription: 'Build responsive and modern websites and applications.',
    icon: Cast,
    image:
      'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=800&q=80',
    duration: '5 Weeks',
    detailDuration: '1 Month',
    formFee: FORM_FEE,
    programFee: PAYMENT_FEE,
    learn: [
      'HTML5 Fundamentals',
      'Modern Frameworks (React)',
      'CSS3 & Responsive Design',
      'Version Control with Git',
      'JavaScript Essentials',
      'REST APIs & Fetch',
      'DOM & ES6+ Basics'
    ],
    perfectFor: [
      'Beginners with no coding experience',
      'Students & Graduates',
      'Aspiring Developers',
      'Entrepreneurs & Career Changers'
    ]
  },
  {
    id: 'graphics-design',
    title: 'Graphics Design',
    tagline: 'Create. Communicate. Captivate.',
    description:
      'Learn  how to design stunning visuals that communicate powerful messages and build brands. This course covers everything from logo design and branding to social media graphics, print design and visual storytelling using industry-standard tools.',
    cardDescription: 'Create stunning visuals for brands and digital platforms.',
    icon: Gift,
    image:
      'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80',
    duration: '5 Weeks',
    detailDuration: '1 Month',
    formFee: FORM_FEE,
    programFee: PAYMENT_FEE,
    learn: [
      'Design Principles',
      'Adobe Illustrator Essentials',
      'Typography & Color Theory',
      'Social Media Design',
      'Logo & Brand Identity Design',
      'Print Design Basics',
      'Adobe Photoshop Essentials'
    ],
    perfectFor: [
      'Beginners with no prior experience',
      'Students & Graduates',
      'Content Creators',
      'Entrepreneurs & Career Changers'
    ]
  }
]

export const getCourseById = (id) => courses.find((c) => c.id === id)
