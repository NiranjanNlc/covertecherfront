import axios from 'axios' 
const API_URL = 'http://localhost:9001'
const SCHOOL_API_URL = `${API_URL}`
class SchoolService {
    retrieveAllSchool() {
        console.log("i am in reterive School")
        return axios.get(`${SCHOOL_API_URL}`);
    }
    addSchool()
    {
        console.log("i am in reterive School")
        return axios.get(`${SCHOOL_API_URL}`);
    }
}
export default new SchoolService()


