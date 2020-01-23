import axios from 'axios'
const API_URL = 'http://localhost:9001'
const SCHOOL_API_URL = `${API_URL}/school/list`
const ADD_SCHOOL_API_URL = `${API_URL}/school/save`
class SchoolService {
  retrieveAllSchool() {
    console.log("i am in reterive School")
    return axios.get(`${SCHOOL_API_URL}`);
  }
  addSchool() {
    console.log("i am in reterive School")
    return axios.get(`${SCHOOL_API_URL}`);
  }
  addSchoolRequest($school, $loc, $rid) {
    console.log("add requested")
    //  console.log($school+$subjet+$time)
    axios.post(ADD_SCHOOL_API_URL, {
      name: $school,
      location: $loc,
      rid: $rid
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}
export default new SchoolService()


