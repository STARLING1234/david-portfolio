# David Sam - Sales Manager Portfolio

A professional, modern, and responsive portfolio website built for David Sam, an experienced Sales Manager. This website showcases expertise, achievements, and professional background in an engaging and interactive format.

## Features

### Core Features
- **Responsive Design**: Optimized for all devices - desktop, tablet, and mobile
- **Smooth Scrolling**: Seamless navigation between sections with smooth scroll behavior
- **Interactive Elements**: Hover effects, animations, and micro-interactions
- **Modern UI**: Clean, professional design with Tailwind CSS
- **Performance Optimized**: Fast loading and smooth animations

### Sections
1. **Hero Section**: Eye-catching introduction with call-to-action
2. **About Section**: Professional background and core expertise
3. **Experience Section**: Detailed work history with timeline
4. **Skills Section**: Technical and soft skills with visual progress bars
5. **Contact Section**: Interactive contact form and contact information

## Technologies Used

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Deployment**: Ready for Vercel, Netlify, or similar platforms

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository or extract the project files
2. Navigate to the project directory
3. Install dependencies:

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Building for Production

Create an optimized production build:

```bash
npm run build
```

The build files will be in the `dist` directory.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

## Project Structure

```
david-portfolio/
|-- public/
|-- src/
|   |-- components/
|   |   |-- About.jsx
|   |   |-- Contact.jsx
|   |   |-- Experience.jsx
|   |   |-- Footer.jsx
|   |   |-- Hero.jsx
|   |   |-- Navbar.jsx
|   |   |-- Skills.jsx
|   |   |-- App.jsx
|   |   |-- main.jsx
|   |   |-- index.css
|   |-- utils/
|   |   |-- animations.js
|   |   |-- constants.js
|-- index.html
|-- package.json
|-- tailwind.config.js
|-- vite.config.js
|-- postcss.config.js
```

## Customization

### Personal Information
Update personal details in `src/utils/constants.js`:

```javascript
export const PERSONAL_INFO = {
  name: 'Your Name',
  title: 'Your Title',
  email: 'your.email@example.com',
  phone: '+1 (555) 123-4567',
  location: 'Your Location',
  linkedin: 'https://linkedin.com/in/yourprofile'
};
```

### Colors and Theme
Modify the color scheme in `tailwind.config.js` and `src/utils/constants.js`.

### Content
Update content in individual component files:
- `Hero.jsx`: Introduction text and hero content
- `About.jsx`: Professional background and expertise
- `Experience.jsx`: Work history and achievements
- `Skills.jsx`: Skills and competencies
- `Contact.jsx`: Contact information and form

## Deployment

### Vercel
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Or connect your Git repository for automatic deployment

### Other Platforms
The project is compatible with any static hosting service that supports React applications.

## Performance Features

- **Lazy Loading**: Components load as needed
- **Optimized Animations**: Hardware-accelerated animations
- **Efficient Bundle**: Tree-shaking and code splitting
- **Responsive Images**: Optimized for different screen sizes

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the MIT License.

## Support

For questions or support regarding this portfolio template, please contact the development team or create an issue in the repository.

---

**Built with passion for showcasing sales excellence and professional achievements**
