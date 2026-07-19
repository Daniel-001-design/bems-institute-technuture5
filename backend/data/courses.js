export const PROGRAM_NAME = 'Technuture 5.0'
export const PROGRAM_START = '2026-08-03'
export const PROGRAM_END = '2026-09-04'
export const FORM_FEE = 5000
export const PAYMENT_FEE = 45000

export const courses = [
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    tagline: 'Design Digital Experiences That People Love',
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
