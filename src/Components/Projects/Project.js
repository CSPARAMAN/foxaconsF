import React, { useState } from 'react'
import ProjectCard from './ProjectCard'

function Project(props) {

  const [project, setProject] = useState([]); 

  console.log(props.projects);
  
const filterProject = (status) => {
 
  const updatedProjects = props.projects.filter((curElem) => {
      return curElem.projectStatus === status;
  });
console.log(updatedProjects);
 setProject(updatedProjects);
}
  
  return (
    <>
    
      <section className="portfolio section-padding" id="portfolio">
        <div className="container">
       
          <div className="row">
            <div className="col-md-12">
              <div className="section-header text-center pb-2">
                <h2>OUR PROJECTS</h2>
                <p>WE ARE A TEAM OF HIGHLY SKILLED PROFESSIONALS</p>
                <hr></hr>
                
              </div>
             
 <div className="menu-tab ">
                    <button className="btn btn-dark" onClick={() => filterProject('completed')}>Completed Projects</button>
                    <button className="btn btn-dark" onClick={() => filterProject('running')}>Running Projects</button>                  
                </div>
                
            </div>
          </div>
          <div className="row">
            
            <ProjectCard projects={project.length < 1 ? props.projects : project} 
            fetchProjects={props.fetchProjects}
            />

          

          </div>
        </div>
      </section>
    </>
  )
}

export default Project
