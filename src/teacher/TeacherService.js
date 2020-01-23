import axios from 'axios'
const API_URL = 'http://localhost:9001'
const TEACHER_API_URL = `${API_URL}/listTeacher`

const SAVE_API_URL = `${API_URL}/saveteacher`

class TeacherService {
  retrieveAllTeacher() {
    console.log("i am in reterive teacher")
    return axios.get(`${TEACHER_API_URL}`);
  }

  saveTeacher($name, $sub, $time, $loc, $ph) {


    axios.post(SAVE_API_URL, {
      name: $name,
      location: $loc,
      time: $time,
      subject:
        [{ sub: $sub }]
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}

export default new TeacherService()