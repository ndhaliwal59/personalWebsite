import React from 'react';
import { projects, getProjectsByCategory, getProjectById } from '../data/projects';
import { aboutData } from '../data/about';

export const processCommand = async (command: string): Promise<string | React.ReactNode> => {
  const args = command.trim().toLowerCase().split(' ');
  const cmd = args[0];

  switch (cmd) {
    case 'help':
      return `Available commands:
      
  help                   - Show this help message
  projects               - List all project categories
  show [category]        - Show projects in a specific category
  info [project_number]  - Show detailed info about a project
  about                  - List about topics
  show [about_topic]     - Show details of an about topic
  resume                 - Show resume information
  contact                - Show contact information
  clear                  - Clear terminal content

Categories: Featured, Learning Projects, Early Works
About topics: bio, interests, skills
Other: contact

Example: show featured, show learning, info 1, show bio`;

    case 'projects':
      return `Project Categories:
      
  Featured         - My best and most impressive projects
  Learning Projects - Projects where I explored new technologies
  Early Works      - Foundation projects from my learning journey

Use "show [category]" to view projects in a specific category.`;

    case 'show':
      if (args.length < 2) {
        return 'Usage: show [category] or show [about_topic]';
      }
      
      const target = args[1];
      
      // Handle project categories
      if (['featured', 'learning', 'early'].includes(target)) {
        // Map lowercase to proper case
        const categoryMap: { [key: string]: string } = {
          'featured': 'Featured',
          'learning': 'Learning Projects',
          'early': 'Early Works'
        };
        const category = categoryMap[target];
        const categoryProjects = getProjectsByCategory(category);
        
        if (categoryProjects.length === 0) {
          return `No projects found in category: ${category}`;
        }
        
        return (
          <div>
            <div className="text-terminal-cyan font-bold mb-2">{category} Projects:</div>
            {categoryProjects.map((project, index) => (
              <div key={project.id} className="mb-3 p-3 border border-terminal-gray rounded">
                <div className="text-terminal-yellow font-bold">
                  {project.id}. {project.name}
                </div>
                <div className="text-terminal-white mt-1">{project.description}</div>
                <div className="text-terminal-gray mt-1">
                  Tech: {project.techStack.join(', ')}
                </div>
                <div className="text-terminal-cyan mt-1">
                  Use "info {project.id}" for more details
                </div>
              </div>
            ))}
          </div>
        );
      }
      
      // Handle contact command
      if (target === 'contact') {
        return `Contact Information:
      
  Email:     ndhaliwal0659@gmail.com
  GitHub:    https://github.com/ndhaliwal59
  LinkedIn:  https://www.linkedin.com/in/nishan-dhaliwal-034922238/

Feel free to reach out for collaborations, opportunities, or just to say hello!`;
      }
      
      // Handle about topics
      if (['bio', 'interests', 'skills'].includes(target)) {
        switch (target) {
          case 'bio':
            return (
              <div>
                <div className="text-terminal-cyan font-bold mb-2">Bio:</div>
                <div className="text-terminal-white leading-relaxed">{aboutData.bio}</div>
              </div>
            );
          
          case 'interests':
            return (
              <div>
                <div className="text-terminal-cyan font-bold mb-2">Interests:</div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {aboutData.interests.map((interest, index) => (
                    <div key={index} className="text-terminal-white">• {interest}</div>
                  ))}
                </div>
              </div>
            );
          
          case 'skills':
            return (
              <div>
                <div className="text-terminal-cyan font-bold mb-2">Skills:</div>
                
                <div className="mb-4">
                  <div className="text-terminal-yellow font-bold mb-2">Technical Skills:</div>
                  
                  <div className="mb-3">
                    <div className="text-terminal-green font-bold">Languages:</div>
                    <div className="text-terminal-white">{aboutData.technicalSkills.languages.join(', ')}</div>
                  </div>
                  
                  <div className="mb-3">
                    <div className="text-terminal-green font-bold">Frameworks & Libraries:</div>
                    <div className="text-terminal-white">{aboutData.technicalSkills.frameworks.join(', ')}</div>
                  </div>
                  
                  <div className="mb-3">
                    <div className="text-terminal-green font-bold">ML & AI Libraries:</div>
                    <div className="text-terminal-white">{aboutData.technicalSkills.mlLibraries.join(', ')}</div>
                  </div>
                  
                  <div className="mb-3">
                    <div className="text-terminal-green font-bold">Tools & Platforms:</div>
                    <div className="text-terminal-white">{aboutData.technicalSkills.tools.join(', ')}</div>
                  </div>
                  
                  <div className="mb-3">
                    <div className="text-terminal-green font-bold">Databases:</div>
                    <div className="text-terminal-white">{aboutData.technicalSkills.databases.join(', ')}</div>
                  </div>
                </div>
                
                <div>
                  <div className="text-terminal-yellow font-bold mb-2">Soft Skills:</div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {aboutData.softSkills.map((skill, index) => (
                      <div key={index} className="text-terminal-white">• {skill}</div>
                    ))}
                  </div>
                </div>
              </div>
            );
          
          default:
            return 'Unknown about topic. Available topics: bio, interests, skills';
        }
      }
      
      return 'Unknown category or topic. Use "help" for available commands.';

    case 'info':
      if (args.length < 2) {
        return 'Usage: info [project_number]';
      }
      
      const projectId = parseInt(args[1]);
      if (isNaN(projectId)) {
        return 'Invalid project number. Please provide a valid number.';
      }
      
      const project = getProjectById(projectId);
      if (!project) {
        return `Project with ID ${projectId} not found. Use "projects" to see available projects.`;
      }
      
      return (
        <div>
          <div className="text-terminal-cyan font-bold text-lg mb-3">{project.name}</div>
          
          <div className="mb-3">
            <div className="text-terminal-yellow font-bold">Description:</div>
            <div className="text-terminal-white">{project.description}</div>
          </div>
          
          <div className="mb-3">
            <div className="text-terminal-yellow font-bold">Tech Stack:</div>
            <div className="text-terminal-white">{project.techStack.join(', ')}</div>
          </div>
          
          
          <div className="flex flex-wrap gap-2">
            {project.githubUrl && (
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-terminal-green hover:text-terminal-cyan underline"
              >
                GitHub-Link
              </a>
            )}
            {project.demoUrl && (
              <a 
                href={project.demoUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-terminal-green hover:text-terminal-cyan underline"
              >
                Live Demo
              </a>
            )}
          </div>
        </div>
      );

    case 'about':
      return `About Topics:
      
  bio        - I'm a 2nd-year Computer Science student driven by curiosity and a passion for Machine Learning and AI. I love turning ideas into real-world projects and constantly push myself to learn and grow. When I'm not coding, you'll probably find me lifting at the gym, deep in a chess game, or enjoying some good food.
  interests  - Machine Learning & AI Applications, Data Science & Predictive Analytics, Natural Language Processing & RAG Systems
  skills     - Python, Java, JavaScript, TypeScript, HTML/CSS, React, FastAPI, Flask, Django, 

Use "show [topic]" to view details.`;

    case 'resume':
      return `Resume Information:
      
Full formatted resume coming soon!

In the meantime, you can explore my:
• Projects: Use "projects" command
• Skills: Use "show skills" command
• Experience: Check out my GitHub and LinkedIn

Contact me for a detailed resume.`;

    case 'contact':
      return `Contact Information:
      
  Email:     ndhaliwal0659@gmail.com
  GitHub:    https://github.com/ndhaliwal59
  LinkedIn:  https://www.linkedin.com/in/nishan-dhaliwal-034922238/

Feel free to reach out for collaborations, opportunities, or just to say hello!`;

    case 'clear':
      // This will be handled by the parent component
      return '';

    default:
      return `Command not found: ${cmd}
      
Type "help" to see available commands.`;
  }
};
