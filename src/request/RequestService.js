import axios from 'axios'
const API_URL = 'http://localhost:9001'
const REQUEST_API_URL = `${API_URL}/admin/list`
class RequestService {
    retrieveAllREQUEST() {
        console.log("i am in reterive REQUEST")
        return axios.get(`${REQUEST_API_URL}`);
    }
}
export default new RequestService()