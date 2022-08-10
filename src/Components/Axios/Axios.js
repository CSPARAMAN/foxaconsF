import axios from "axios";
import authToken from "../Auth/AuthToken";

let token=authToken()
const HTTP=axios.create({
    baseURL:'https://foxacons.herokuapp.com/' ,
    headers:{
        Authorization:`Bearer ${token}`
    }
})



export default HTTP

