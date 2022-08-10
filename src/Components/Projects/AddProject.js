import { Modal } from 'react-bootstrap';
import React, { useState } from 'react'
import { useHistory, withRouter } from 'react-router-dom';
import HTTP from '../Axios/Axios';
// import './AddProject.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AddProject(props) {

    const [projectInput, setprojectInput] = useState({

        projectName: "",
        projectImg: "",
        discription: "",
        projectStatus: ""
    })

    const handleOnChange = (event) => {
        console.log(event.target.value);
        const projectInputCopy = { ...projectInput }
        projectInputCopy[event.target.name] = event.target.value
        setprojectInput(projectInputCopy)
        console.log(projectInputCopy);

    }

    const history = useHistory()

    let saveProject = async () => {
        try {
           
            
           
            if(projectInput){
                let response = await HTTP.post("addProject", projectInput)
                toast.success("Project added succesfully",{
                  position:"top-center"
                 });
                
                 history.push("/projects")
                 props.fetchProjects()
                 props.hideAddProjectModal()
            
              }else{
                toast.error("Something went wrong",{
                  position:"top-center"
                 });
              }

        } catch (error) {
            console.log(error);
        }
    }
    
  const submit = (e) => {
    e.preventDefault();
  }
    return (
        <>
            <Modal
                size="lg"
                show={props.showAddProjectModal}
                onHide={props.hideAddProjectModal}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Add Project
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <form onSubmit={submit}>
                            <table className='addCar-table'>
                                <tbody>
                                    <tr>
                                        <td><div class="form-outline">
                                            <input type="text" id="form12"
                                                name='projectName'
                                                class="form-control"
                                                placeholder='Project Name'
                                                value={projectInput.projectName}
                                                onChange={handleOnChange}
                                            />
                                        </div></td>

                                        <td><div class="form-outline">
                                            <input type="text" id="form12"
                                                name='discription'
                                                class="form-control"
                                                placeholder='Project Discription'
                                                value={projectInput.discription}
                                                onChange={handleOnChange} />
                                        </div></td>

                                        <td><div class="form-outline">
                                            <input type="text" id="form12"
                                                name='projectImg'
                                                class="form-control"
                                                placeholder='Project Image url'
                                                value={projectInput.projectImg}
                                                onChange={handleOnChange} />
                                        </div></td>

                                        <td>
                                            {/* <div class="form-outline">
                                            <input type="text" id="form12"
                                                name='projectStatus'
                                                class="form-control"
                                                placeholder='Project Status'
                                                value={projectInput.projectStatus}
                                                onChange={handleOnChange} />
                                        </div> */}

                                            <div className="input-group">
                                                <select className="form-select"
                                                    id="inputGroupSelect04"
                                                    name='projectStatus'
                                                    placeholder='Status'
                                                    value={projectInput.projectStatus}
                                                       onChange={handleOnChange}
                                                    >
                                                    <option selected
                                                      
                                                    >Status</option>
                                                    <option >completed</option>
                                                    <option >running</option>

                                                </select>

                                            </div>
                                        </td>

                                    </tr>

                                </tbody>
                            </table>
                            <br></br>
                            <button type="submit" className="buton btn btn-lg btn-block  bg-primary " onClick={saveProject}>ADD PROJECT</button>
                        </form>
                    </div>
                </Modal.Body>
            </Modal>
            <ToastContainer />
        </>
    )
}

export default withRouter(AddProject)
