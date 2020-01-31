import axios from 'axios'
const API_URL = 'http://localhost:9001'
const TEACHER_API_URL = `${API_URL}/listTeacher`

const SAVE_API_URL = `${API_URL}/api/auth/signup`

class TeacherService {
  retrieveAllTeacher() {
    console.log("i am in reterive teacher")
    return axios.get(`${TEACHER_API_URL}`);
  }

  saveTeacher(signup) {


    axios.post(SAVE_API_URL,signup)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}

export default new TeacherService()