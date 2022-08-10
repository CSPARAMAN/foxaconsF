import React from 'react'
import "./ProjectCard.css"
import authToken from './../Auth/AuthToken';
import HTTP from '../Axios/Axios';
import { useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function ProjectCard(props) {

  let tokenCredentials = authToken()
  const history = useHistory()
  let deleteProject = async (projectId) => {
    try {
      let response = await HTTP.delete(`deleteProject/${projectId}`)
        props.fetchProjects()
        history.push("/projects")
        toast.success("Project deleted succesfully",{
          position:"top-center"
         });

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
{props.projects.map((data)=>{
  // {console.log(data.projectImg)}
 return(
  <>
  {tokenCredentials &&
  <>
  <div className="col-12 col-md-12 col-lg-4"  key={data.projectId}>
  <div className="card text-light text-center bg-white pb-2">
    <div className="card-body text-dark">
      <div className="img-area mb-4"><img alt="" className="img-fluid" src={data.projectImg} /></div>
      <h3 className="card-title">{data.projectName}</h3>
      <p className="lead">{data.discription}</p><button className="btn  text-light">Learn More</button>
      <button className="btn  text-light" onClick={() => { deleteProject(data.projectId) }}> Delete Project</button>
    </div>
  </div>
</div>
  </>
  }

  {!tokenCredentials &&
  <>
    <div className="col-12 col-md-12 col-lg-4"  key={data.projectId}>
  <div className="card text-light text-center bg-white pb-2">
    <div className="card-body text-dark">
      <div className="img-area mb-4"><img alt="" className="img-fluid" src={data.projectImg} /></div>
      <h3 className="card-title">{data.projectName}</h3>
      <p className="lead">{data.discription}</p><button className="btn  text-light">Learn More</button>
    </div>
  </div>
</div>
  </>
  }
  </>
 )
})}
<ToastContainer />
    </>
  )
}

export default ProjectCard
