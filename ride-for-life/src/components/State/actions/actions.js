//axios
import { axiosRequest as axios, setToken } from '../../../utils/api'
import { Link, Redirect } from 'react-router'

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

export const LOADING = "LOADING"

/* ----- GET USERS ----- */

//get user
export const GET_USER_START = "GET_USER_START"
export const GET_USER_SUCCESS = "GET_USER_SUCCESS"
export const GET_USER_FAILED = "GET_USER_FAILED"


/* ----- RIDERS ----- */

//add new rider
export const ADD_RIDER_START = "ADD_RIDER_START"
export const ADD_RIDER_SUCCESS = "ADD_RIDER_SUCCESS"
export const ADD_RIDER_FAILED = "ADD_RIDER_FAILED"

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
export const ADD_DRIVER_START = "ADD_DRIVER_START"
export const ADD_DRIVER_SUCCESS = "ADD_DRIVER_SUCCESS"
export const ADD_DRIVER_FAILED = "ADD_DRIVER_FAILED"

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
                // <Redirect to="/dashboard" />
            })
            .catch(error => {
                dispatch({ type: GET_USER_FAILED, payload: error})
                console.log(error.response)
            })
    }
}


/* ----- RIDERS ----- */
export const AddRider = (rider) => {
    return dispatch => {
        dispatch({ type: ADD_RIDER_START, rider })
        axios()
            .post('/api/auth/register', rider)
            .then(response => {
                const token = response.data.token
                setToken(token)
                dispatch({ type: ADD_RIDER_SUCCESS, payload: response.data })
            })
            .catch(error => {
                dispatch({ type: ADD_RIDER_FAILED, payload: error})
                console.log(error.response)
            })
    }
}

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

export const AddDriver = (driver) => {
    return dispatch => {
        dispatch({ type: ADD_DRIVER_START })
        axios() //without authorization since I need to add a driver to get a token.
            .post('/api/auth/register', driver)
            .then(response => { //hey we have a new driver, here's your updated state.
                const token = response.data.token
                console.log('Response', response)
                dispatch({ type: ADD_DRIVER_SUCCESS, payload: response })
                setToken(token)
            })
            .catch(error => {
                dispatch({ type: ADD_DRIVER_FAILED, payload: error})
                console.log(error.response)
            })
    }
}

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