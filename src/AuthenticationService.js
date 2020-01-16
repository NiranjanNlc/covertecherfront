import axios from 'axios' 
const API_URL = 'http://localhost:9001'
export const USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser'
class AuthenticationService
{

    executeBasicAuthenticationService(username, password) {
        console.log(this.createBasicAuthToken(username, password))
        return axios.get(`${API_URL}`);
        // ,
        //     { headers:[{ authorization: this.createBasicAuthToken(username, password) },{Origin: 'http://127.0.0.1:3000'}] })
   
        }
    createBasicAuthToken(username, password) {
        return 'Basic ' + window.btoa(username + ":" + password)
    }

    registerSuccessfulLogin(username, password)
     {
      sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME, username)
    //  this.setupAxiosInterceptors(this.createBasicAuthToken(username, password))

     }


    logout() {
        sessionStorage.removeItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
    }
    isUserLoggedIn() {
        let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME)
        if (user === null) return false
        return true
    }

    getLoggedInUserName() {
        let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME)
        if (user === null) return ''
        return user
    }

    setupAxiosInterceptors(token) {
        axios.interceptors.request.use(
            (config) => {
                if (this.isUserLoggedIn()) {
                    config.headers.authorization = token
                }
                return config
            }
        )
    }
}
 export default new  AuthenticationService()