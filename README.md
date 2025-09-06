# Nishan's Portfolio - Terminal-Based ML Engineer Portfolio

A modern, interactive portfolio website for an aspiring ML Engineer, featuring a terminal interface as the main control center with traditional tab navigation as an alternative.

## 🚀 Features

### Terminal Interface
- **Interactive Command System**: Type commands to explore the portfolio
- **ASCII Art Welcome**: Eye-catching terminal-style welcome message
- **Command History**: All interactions are preserved in the terminal
- **Real-time Processing**: Commands are processed instantly with smooth animations

### Available Commands
- `help` - Lists all available commands
- `projects` - Shows project categories
- `show [category]` - Displays projects in a specific category
- `info [project_number]` - Shows detailed project information
- `about` - Lists about topics
- `show [about_topic]` - Displays details of selected topic
- `resume` - Shows resume information
- `contact` - Displays contact information
- `clear` - Clears terminal content

### Project Categories
- **Featured** - Best and most impressive projects
- **ML** - Machine Learning projects
- **AI** - Artificial Intelligence projects
- **Python** - Python development projects
- **JavaScript** - JavaScript/TypeScript projects
- **Java** - Java development projects
- **HTML** - HTML/CSS/Web projects

### Alternative Navigation
- **Tab-based Interface**: Traditional navigation for users who prefer conventional browsing
- **Responsive Design**: Fully responsive across all devices
- **Smooth Animations**: Framer Motion powered transitions

## 🎨 Design

### Theme
- **Dark Theme**: Sleek, modern dark color scheme
- **Terminal Aesthetic**: Monospaced fonts, terminal-style colors
- **Minimalist Design**: Clean, uncluttered interface
- **Consistent Branding**: Unified style across all sections

### Color Palette
- Background: `#0a0a0a` (Terminal Black)
- Primary Green: `#00ff41` (Terminal Green)
- Cyan: `#00ffff` (Terminal Cyan)
- Yellow: `#ffff00` (Terminal Yellow)
- Gray: `#808080` (Terminal Gray)

## 🛠️ Technology Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/nishan/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔧 Configuration

### Personalizing Content

1. **Update Personal Information**
   - Edit `data/about.ts` for bio, skills, interests, and fun facts
   - Modify contact information in `components/Navigation.tsx`

2. **Add Your Projects**
   - Edit `data/projects.ts` to add your own projects
   - Include GitHub links, demo URLs, and tech stacks

3. **Customize Styling**
   - Modify `tailwind.config.js` for custom colors
   - Update `app/globals.css` for additional styles

### Adding New Commands

1. **Extend Command Processor**
   - Add new cases in `utils/commandProcessor.ts`
   - Follow the existing pattern for command handling

2. **Update Help Command**
   - Modify the help text to include new commands

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- **Desktop**: Full terminal experience with all features
- **Tablet**: Adapted layout with touch-friendly interactions
- **Mobile**: Simplified navigation with mobile-optimized terminal

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🎯 Usage Guide

### For Visitors
1. **Terminal Mode**: Start with the terminal interface
   - Type `help` to see available commands
   - Explore projects using `projects` and `show [category]`
   - Learn about the person using `about` and `show [topic]`

2. **Tab Mode**: Use the navigation tabs for traditional browsing
   - Click on tabs to switch between sections
   - Browse projects by category
   - View skills and experience

### For Developers
- The codebase is well-structured and documented
- Components are modular and reusable
- TypeScript provides type safety
- Tailwind CSS ensures consistent styling

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Inspired by terminal-based portfolios
- Built with modern web technologies
- Designed for optimal user experience

---

**Built with ❤️ by Nishan**
