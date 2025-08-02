/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const projects = [
    { id: 1, title: 'SSLC',                url:'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhqb_IMCgZXlIaLpLQqjdaPda234rEpSf9lA6RWTlpchrn8AyXAZjTdadtugppqpNyE7t_6FtyyGTvDD7IVqPa9r1268jDJEUjjQIYNFZZL_VOzNrKmBFwbrL4sRCI6_4B_fp0WSUIt1FamdFLojOMqwQ_3DF1EfJ9qm0FEigJldOJIqydrGk-jwa6Y2Wo/s9216/SSLC.jpg' ,                 type: 'web' },
    { id: 2, title: 'HSC',                 url:'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgl7Vs0Djp18lrvYgGZfV39rK3DHOvaLDWo-IMcxLyT2xn-iNwQ1rTj6zFvpGpgzF5Msdw2V9ksy75d-dCZ7OrAynbDnVkyBvwmMBEJP-sBYrjwEbiUmX-ZFVnqqaOwDFDBKl7q_YIZaUIke-r3ODltHCeuAGhrtBep5bAhP7K2nGuMaC0J_O-DckbbOpQ/s8941/HSC.jpg',                   type: 'web' },
    { id: 3, title: 'DIPLOMA_EEE',         url:'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi5jHNX_3Yhka3__0f19BUlb8Y52F8lKEawcJ-X69Yplx8r53K9clBTgZq2bi-gxQ81QrkNmoQFcMQhoQER3RMR_oi7oELKlo6QJVftle5ZvmhqeCXh4xHbJp97dncfJwc4_k-HQPxTpJlD5qRwjB9y5DDufyRQ-MvbjUB1QAuHeM1KBRmi9Hs_eOmZ2R4/s4080/Diploma%20Certificate.jpg', type: 'web' },
    { id: 4, title: 'DIPLOMA_CONSOLIDATE', url:'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhQ_XCS1o21jhGLrpJKzutV2dWkSfhwnGtSvLwKAPkQBAQUOngB9vD6NK4A4XKg04hHmpx4yIioo0rKnfNM2tSpNrGeRV5MlQ_RCMNVChzo3HPvj5zLoVXE0NgmyET-6s5reYRyWLK2DXP_UWWqS078ee0-A35Fa1z8DDcF0jaNnW1v8JtIX0v39HLl_ZI/s3894/DIPLOMA.jpg',               type: 'web' },
]

const Education = () => {
 const [activeFilter, setActiveFilter] = useState(null);
 
   const handleFilterClick = (type) => {
     if (activeFilter === type) {
       setActiveFilter(null);
     } else {
       setActiveFilter(type);
     }
   };
 
   const filteredProjects =
     activeFilter === null || activeFilter === 'web'
       ? projects
       : projects.filter(project => project.type === activeFilter);


  return (<>
    <section id="education">
        <h2>Education</h2>

      <div>
        <button
          onClick={() => handleFilterClick('web')}
          style={{ fontWeight: activeFilter === 'web' ? 'bold' : 'normal' }}>Open</button>
        </div>

        {activeFilter === null ? (
          <p>Click a button to show Education</p>
        ) : (
              <ul id="education-list" style={{ listStyleType: 'none', padding: 0 }}>
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
                         <li>No Education found for this category !</li>
                       )}
                          </ul>
                      )}
    </section>
</>)
} 

export default Education;