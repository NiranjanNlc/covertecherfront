import axios from 'axios' 
const API_URL = 'http://localhost:9001'
const TEACHER_API_URL = `${API_URL}`
class TeacherService {
    retrieveAllTeacher() {
        console.log("i am in reterive teacher")
        return axios.get(`${TEACHER_API_URL}`);
    }
}
export default new TeacherService()