import axios from 'axios'
const API_URL = 'http://dev3.pareva.umelimited.com:8081'
const REQUEST_API_URL = `${API_URL}/admin/list`
export const TOKEN="token"
 export const headers = { 
  'Authorization': 'Bearer '+localStorage.getItem(TOKEN)
}
class RequestService {
    retrieveAllREQUEST() {
        console.log("i am in reterive REQUEST")
        
        return axios.get(`${REQUEST_API_URL}`);
    }
    //     return axios.get(`${REQUEST_API_URL}`,{headers:headers});
    // }
    }

export default new RequestService()