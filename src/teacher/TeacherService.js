import axios from 'axios' 
const API_URL = 'http://localhost:9001'
const TEACHER_API_URL = `${API_URL}`
class TeacherService {
    retrieveAllTeacher() {
<<<<<<< HEAD
        console.log("i am in reterive teacher")
=======
>>>>>>> 98bab5c85754a0704030b23b0ea6e44189d2f358
        return axios.get(`${TEACHER_API_URL}`);
    }
}
export default new TeacherService()