  

  class Authenciate 
      {
               sucessLogin(user,pass)
               {
                   console.log("i am in sucess login of the authenciate")
                   sessionStorage.setItem('authenciated user',user)
                }
                logOut()
                {
                    sessionStorage.removeItem('authenciated user')
                }
                isUserLoggedIn()
                {
                    let user = sessionStorage.getItem('authenciated user')
                    if(user===null)return false
                    return true
                }
            }
    export default new Authenciate()