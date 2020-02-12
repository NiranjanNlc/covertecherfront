import axios from 'axios'
import { BrowserRouter as Router, Route, history, Redirect ,Link} from 'react-router-dom'
const API_URL = ''
export const USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser'
export const SCHOOL_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedSchool'
export const TOKEN="token"
export const headers = { 
    'Authorization': 'Bearer '+localStorage.getItem(TOKEN)
  }
 
class AuthenticationService {
    //Added function for the jwt  
    executeJwtAuthenticationService($signin)
     {
        return axios.post(`${API_URL}/api/auth/signin`,$signin)
    }

    registerSuccessfulLoginForJwt(username, token,role) {
        console.log(token)
        console.log(role)
        console.log(username)
        if(role==="teacher")
        {
        localStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME, username)
        localStorage.setItem(TOKEN,token)

        }
        if(role==="school")
        {
        localStorage.setItem(SCHOOL_NAME_SESSION_ATTRIBUTE_NAME, username)
        localStorage.setItem(TOKEN,token)
         }
        this.setupAxiosInterceptors(this.createJWTToken(token))
    }
    executeBasicAuthenticationService(username, password) {
        console.log(this.createBasicAuthToken(username, password))
        return axios.get(`${API_URL}/basicauth`,
            { headers: { authorization: this.createBasicAuthToken(username, password) } })
    }
    createBasicAuthToken(username, password) {
        return 'Basic ' + window.btoa(username + ":" + password)
    }

    registerSuccessfulLogin(username, password) {
        console.log("heeloo set " + username)
        localStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME, username)
        //  this.setupAxiosInterceptors(this.createBasicAuthToken(username, password))

    }
    registerSchoolLogin(username, password) {
        console.log("heeloo set " + username)
       localStorage.setItem(SCHOOL_NAME_SESSION_ATTRIBUTE_NAME, username)
        //  this.setupAxiosInterceptors(this.createBasicAuthToken(username, password))

    }
    isSchoolLoggedIn() {
        let user = localStorage.getItem(SCHOOL_NAME_SESSION_ATTRIBUTE_NAME)
        if (user === null) 
        {return false}
        console.log("school loogged in ")
        return true
    }

    logout() {
        localStorage.removeItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
        localStorage.removeItem(SCHOOL_NAME_SESSION_ATTRIBUTE_NAME); 
        localStorage.removeItem(TOKEN);
        this.props.history.push(`/login`)
    }
    isUserLoggedIn() {
        let user = localStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME)
        if (user === null) return false
        return true
    }

    getLoggedInUserName() {
        let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME)
        if (user === null) return ''
        return user
    }

    setupAxiosInterceptors(token) {
        console.log(token)
        axios.interceptors.request.use(
            (config) => {
                if (token) {
                    config.headers.authorization = token
                }
                return config
            }
        )
    }
}
export default new AuthenticationService()