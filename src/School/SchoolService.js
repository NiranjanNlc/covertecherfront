import axios from 'axios'
import AuthenticationService from '../Authenciation/AuthenticationService'
const API_URL = ''
const SCHOOL_API_URL = `${API_URL}/school/list`
const ADD_SCHOOL_API_URL = `${API_URL}/api/auth/signup`
export const TOKEN="token"
 export const headers = { 
  'Authorization': 'Bearer '+localStorage.getItem(TOKEN)
}
class SchoolService {
  retrieveAllSchool() {
    console.log("i am in reterive School")
    return axios.get(`${SCHOOL_API_URL}`,{headers:headers});
  }
  addSchool() {
    console.log("i am in reterive School")
    return axios.get(`${SCHOOL_API_URL}`);
  }
  addSchoolRequest($signupschool) {
   // console.log(JSON.parse($signupschool))
    //  console.log($school+$subjet+$time)
    axios.post(ADD_SCHOOL_API_URL,$signupschool)
      .then(function (response) {
      
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}
export default new SchoolService()


