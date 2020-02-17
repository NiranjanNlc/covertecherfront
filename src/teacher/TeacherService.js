import axios from 'axios'
const API_URL = ''
const TEACHER_API_URL = `${API_URL}/listTeacher`

export const TOKEN="token"

const SAVE_API_URL = `${API_URL}/api/auth/signup`
export const headers = { 
  'Authorization': 'Bearer '+localStorage.getItem(TOKEN)
}
class TeacherService {
  retrieveAllTeacher() {
    console.log("i am in reterive teacher")
    return axios.get(`${TEACHER_API_URL}`,{headers:headers});
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