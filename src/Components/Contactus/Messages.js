
import React from 'react'

function Messages(props) {



    return (
        <>
            <table className="table">
                <thead className="thead-dark">
                    <tr>

                        <th scope="col">Name</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Email</th>
                        <th scope="col">Message</th>
                    </tr>
                </thead>
                <tbody>
                    {props.messages.map((data) => {
                        return (
                            <tr>
                                
                                <td>{data.name}</td>
                                <td>{data.phone}</td>
                                <td>{data.email}</td>
                                <td>{data.message}</td>
                            </tr>

                        )
                    })}



                </tbody>
            </table>
        </>
    )
}

export default Messages
