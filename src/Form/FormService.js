import axios from 'axios' 
const API_URL = 'http://localhost:9001'
const SCHOOL_API_URL = `${API_URL}/listTeacher`

const FORM_API_URL = `${API_URL}/admin/save`
class FormService {

    // retrieveAllSchool() {
    //     console.log("i am in reterive School")
    //     return axios.get(`${SCHOOL_API_URL}`);
    // }
    // addSchool()
    // {
    //     console.log("i am in reterive School")
    //     return axios.get(`${SCHOOL_API_URL}`);
    // }
    addRequest($school,$subjet,$time,$loc)
    {
        console.log("add requested")
        console.log($school+$subjet+$time)
        axios.post(FORM_API_URL, {
            school: $school,
            subject: $subjet,
            location:$loc,
            time:$time
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
}
export default new FormService()


