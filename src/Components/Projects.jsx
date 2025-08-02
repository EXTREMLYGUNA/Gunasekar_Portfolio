/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

// Example project data with type/category
const projects = [
  { id: 1, title: 'Resume', url: 'https://gunasekar-resume.netlify.app/', type: 'web' },
  { id: 2, title: 'Shopping Card', url: 'https://shopping-card-projects.netlify.app/', type: 'web' },
  { id: 3, title: 'Calculator', url: 'https://calculator-guvi-task.netlify.app/', type: 'web' },
  { id: 4, title: 'Redux', url: 'https://redux-project1.netlify.app/', type: 'web' },
  { id: 5, title: 'Axios', url: 'https://axios-projects.netlify.app/', type: 'web' },
  { id: 6, title: 'Survey Form', url: 'https://survey-form-projects.netlify.app/', type: 'web' },
  { id: 7, title: 'Price Card', url: 'https://price-card-reactguvi.netlify.app/', type: 'web' },
  { id: 8, title: 'GitHub Creation', url: 'https://github-creation.netlify.app/', type: 'web' },
  { id: 9, title: 'React Router Dom', url: 'https://react-router-dom-projects.netlify.app/', type: 'web' },
  { id: 10, title: 'Callback', url: 'https://guna-callback.netlify.app/', type: 'web' },
  { id: 11, title: 'Website Creation', url: 'https://website-create-progress.netlify.app/', type: 'web' },
  { id: 12, title: 'Todo', url: 'https://todo-taskk.netlify.app/', type: 'web' },
  { id: 13, title: 'React useContext', url: 'https://react-usecontextt.netlify.app/', type: 'web' },
  { id: 14, title: 'Landing Page', url: 'https://landing-page-guvi.netlify.app/', type: 'web' },
  { id: 15, title: 'Html Manipulation', url: 'https://html-manipulation-form.netlify.app/', type: 'web' },
  { id: 16, title: 'Promise Task_1', url: 'https://promise-task-api-1.netlify.app/', type: 'web' },
  { id: 17, title: 'Promise Task_2', url: 'https://promise-task-api-3.netlify.app/', type: 'web' },
  { id: 18, title: 'College Placement System', url: 'https://college-placement-recruitment.netlify.app/login', type: 'app' },
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState(null);

  // Handle button click: toggle filter on/off
  const handleFilterClick = (type) => {
    if (activeFilter === type) {
      setActiveFilter(null);
    } else {
      setActiveFilter(type);
    }
  };

  const filteredProjects =
    activeFilter === null || activeFilter === 'all'
      ? projects
      : projects.filter(project => project.type === activeFilter);

  return (
    <section id="projects">
      <h2>Projects</h2>

      <div style={{ marginBottom: '1rem' }}>
        <button
          onClick={() => handleFilterClick('all')}
          style={{ fontWeight: activeFilter === 'all' ? 'bold' : 'normal' }}>
          All
        </button>
        <button
          onClick={() => handleFilterClick('web')}
          style={{ fontWeight: activeFilter === 'web' ? 'bold' : 'normal' }}>
          Tasks
        </button>
        <button
          onClick={() => handleFilterClick('app')}
          style={{ fontWeight: activeFilter === 'app' ? 'bold' : 'normal' }}>
          Capstone Project
        </button>
      </div>

      {/* If filter is null (closed), show no projects */}
      {activeFilter === null ? (
        <p>Click a button to show projects</p>
      ) : (
        <ul id="project-list" style={{ listStyle: 'none', padding: 0 }}>
          {filteredProjects.length > 0 ? (
            filteredProjects.map(({ id, title, url }) => (
              <li key={id} style={{ margin: '8px 0' }}>
                <a href={url}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="college"
                   title={title}>{title}</a>
              </li>
            ))
          ) : (
            <li>No projects found for this category !</li>
          )}
        </ul>
      )}
    </section>
  );
};


export default Projects;
