//axios
import { axiosRequest as axios, setToken, removeToken } from '../../../utils/api'

//actions

/* ----- ADMIN ----- */

// //add admin
// export const ADD_ADMIN_START = "ADD_ADMIN_START"
// export const ADD_ADMIN_SUCCESS = "ADD_ADMIN_SUCCESS"
// export const ADD_ADMIN_FAILED = "ADD_ADMIN_FAILED"

// //update
// export const UPDATE_ADMIN_START = "UPDATE_ADMIN_START"
// export const UPDATE_ADMIN_SUCCESS = "UPDATE_ADMIN_SUCCESS"
// export const UPDATE_ADMIN_FAILED = "UPDATE_ADMIN_FAILED"

// // delete
// export const DELETE_ADMIN_START = "DELETE_ADMIN_START"
// export const DELETE_ADMIN_SUCCESS = "DELETE_ADMIN_SUCCESS"
// export const DELETE_ADMIN_FAILED = "DELETE_ADMIN_FAILED"


/* ----- LOADING ----- */

//I'd like to have a spinner set up for as long as our API call is going.

export const LOADING = "LOADING"

/* ----- GET USERS ----- */

//get user
export const GET_USER_START = "GET_USER_START"
export const GET_USER_SUCCESS = "GET_USER_SUCCESS"
export const GET_USER_FAILED = "GET_USER_FAILED"


export const ADD_USER_START = "ADD_USER_START"
export const ADD_USER_SUCCESS = "ADD_USER_SUCCESS"
export const ADD_USER_FAILED = "ADD_USER_FAILED"


export const USER_LOGOUT = "USER_LOGOUT"


/* ----- RIDERS ----- */

//add new rider
// export const ADD_RIDER_START = "ADD_RIDER_START"
// export const ADD_RIDER_SUCCESS = "ADD_RIDER_SUCCESS"
// export const ADD_RIDER_FAILED = "ADD_RIDER_FAILED"

//update
export const UPDATE_RIDER_START = "UPDATE_RIDER_START"
export const UPDATE_RIDER_SUCCESS = "UPDATE_RIDER_SUCCESS"
export const UPDATE_RIDER_FAILED = "UPDATE_RIDER_FAILED"

// delete
export const DELETE_RIDER_START = "DELETE_RIDER_START"
export const DELETE_RIDER_SUCCESS = "DELETE_RIDER_SUCCESS"
export const DELETE_RIDER_FAILED = "DELETE_RIDER_FAILED"



/* ----- DRIVERS ----- */

//add new driver
// export const ADD_DRIVER_START = "ADD_DRIVER_START"
// export const ADD_DRIVER_SUCCESS = "ADD_DRIVER_SUCCESS"
// export const ADD_DRIVER_FAILED = "ADD_DRIVER_FAILED"

//update
export const UPDATE_DRIVER_START = "UPDATE_DRIVER_START"
export const UPDATE_DRIVER_SUCCESS = "UPDATE_DRIVER_SUCCESS"
export const UPDATE_DRIVER_FAILED = "UPDATE_DRIVER_FAILED"

// delete
export const DELETE_DRIVER_START = "DELETE_DRIVER_START"
export const DELETE_DRIVER_SUCCESS = "DELETE_DRIVER_SUCCESS"
export const DELETE_DRIVER_FAILED = "DELETE_DRIVER_FAILED"

//actions

/* ----- ALL USERS ----- */
export const LoginUser = (credentials) => {
    return dispatch => {
        dispatch({ type: GET_USER_START })
        axios()
            .post('/api/auth/login', credentials)
            .then(response => {
                const token = response.data.token
                setToken(token)
                dispatch({ type: GET_USER_SUCCESS, payload: response.data })
                // history.push('/dashboard')
            })
            .catch(error => {
                dispatch({ type: GET_USER_FAILED, payload: error})
                console.log(error.response)
            })
    }
}

export const LogoutUser = () => {
    return dispatch => {
        dispatch({ type: USER_LOGOUT })
        removeToken()
    }
}

                
export const AddUser = (user) => {
    return dispatch => {
        dispatch({ type: ADD_USER_START })
        axios() 
        .post('/api/auth/register', user)
        .then(response => {
            const token = response.data.token
            console.log('Response', response)
            dispatch({ type: ADD_USER_SUCCESS, payload: response })
            setToken(token)
        })
        .catch(error => {
            dispatch({ type: ADD_USER_FAILED, payload: error})
            console.log(error.response)
        })
    }
}


/* ----- RIDERS ----- */
export const UpdateRider = (rider) => {
    return dispatch => {
        dispatch({ type: UPDATE_RIDER_START, rider })
        axios()
            .put(`/api/riders/:id`, rider)
            .then(response => {
                const token = response.data.token
                dispatch({ type: UPDATE_RIDER_SUCCESS, payload: response.data })
            })
            .catch(error => {
                dispatch({ type: UPDATE_RIDER_FAILED, payload: error})
                console.log(error.response)
            })
    }
}

export const DeleteRider = () => {
    return dispatch => {
        dispatch({ type: DELETE_RIDER_START })
        axios()
            .delete(`/api/riders/:id`)
            .then(response => {
                const token = response.data.token
                dispatch({ type: DELETE_RIDER_SUCCESS, payload: response.data })
            })
            .catch(error => {
                dispatch({ type: DELETE_RIDER_FAILED, payload: error})
                console.log(error.response)
            })
    }
}

/* ----- DRIVERS ----- */

//update a specific driver's profile.
export const UpdateDriver = (driver) => {
    return dispatch => {
        dispatch({ type: UPDATE_DRIVER_START, driver })
        axios()
            .put(`/api/drivers/:id`, driver)
            .then(response => {
                const token = response.data.token
                dispatch({ type: UPDATE_DRIVER_SUCCESS, payload: response.data })
            })
            .catch(error => {
                dispatch({ type: UPDATE_DRIVER_FAILED, payload: error})
                console.log(error.response)
            })
    }
}

export const DeleteDriver = () => {
    return dispatch => {
        dispatch({ type: DELETE_DRIVER_START})
        axios()
            .delete(`/api/drivers/:id`)
            .then(response => {
                const token = response.data.token
                dispatch({ type: DELETE_DRIVER_SUCCESS, payload: response.data })
            })
            .catch(error => {
                dispatch({ type: DELETE_DRIVER_FAILED, payload: error})
                console.log(error.response)
            })
    }
}