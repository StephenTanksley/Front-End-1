import axios from 'axios'

//set token initially
export const setToken = token => {
    localStorage.setItem('token', token)
}

//get it once we've set it.
export const getToken = () => {
    return localStorage.getItem('token')
}

//delete it once we no longer want it.
export const removeToken = () => {
    return localStorage.removeItem('token')
}


//this is the reusable function we'll use to make requests. 
//If a token exists, it'll use the token. Otherwise it won't.

export const axiosRequest = () => {    
    return(
        
        getToken()
        
        ? axios
            .create({
            baseURL: 'https://rideforlife-backend.herokuapp.com',
            headers: {
                "Content-Type" : 'application/json',
                "Authorization" : getToken(),
            }
        })

        : axios
            .create({
            baseURL: 'https://rideforlife-backend.herokuapp.com',
        })
    )
}