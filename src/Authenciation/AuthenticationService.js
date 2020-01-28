import axios from 'axios'
const API_URL = 'http://localhost:9001'
export const USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser'
export const SCHOOL_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedSchool'
class AuthenticationService {

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
        if (user === null) return false
        return true
    }

    logout() {
        localStorage.removeItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
        localStorage.removeItem(SCHOOL_NAME_SESSION_ATTRIBUTE_NAME);
   
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
export default new AuthenticationService()