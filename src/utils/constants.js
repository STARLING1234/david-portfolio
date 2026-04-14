// Constants for the portfolio website

export const PERSONAL_INFO = {
  name: 'David Sam',
  title: 'Sales Manager',
  email: 'amz.davidsam@gmail.com',
  phone: '+916364543615',
  location: 'Bangalore, IN',
  linkedin: 'https://www.linkedin.com/in/david-sam-he-him-82769b52/'
};

export const NAVIGATION_ITEMS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' }
];

export const THEME_COLORS = {
  primary: {
    50: '#eff6ff',
    100: '#dbeafe',
    500: '#3b82f6',
    600: '#2563eb',
    700: '#1d4ed8',
    800: '#1e40af',
    900: '#1e3a8a',
  },
  secondary: {
    50: '#f0fdf4',
    100: '#dcfce7',
    500: '#22c55e',
    600: '#16a34a',
    700: '#15803d',
  }
};

export const ANIMATION_DURATION = {
  fast: 0.3,
  normal: 0.6,
  slow: 0.8,
  extraSlow: 1.2
};

export const BREAKPOINTS = {
  mobile: '640px',
  tablet: '768px',
  desktop: '1024px',
  wide: '1280px'
};

export const SOCIAL_LINKS = [
  {
    name: 'LinkedIn',
    icon: 'FaLinkedin',
    href: 'https://www.linkedin.com/in/david-sam-he-him-82769b52/',
    color: 'primary'
  },
  {
    name: 'Email',
    icon: 'FaEnvelope',
    href: 'mailto:amz.davidsam@gmail.com',
    color: 'primary'
  },
  {
    name: 'Phone',
    icon: 'Phone',
    href: 'tel:+916364543615',
    color: 'secondary'
  }
];
