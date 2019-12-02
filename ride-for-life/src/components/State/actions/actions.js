//axios
import { 
    axiosRequest as axios,
    setToken, 
    removeToken } from '../../../utils/api'

//actions


/* ----- LOADING/LOGOUT ----- */

//I'd like to have a spinner set up for as long as our API call is going.

export const LOADING = "LOADING"
export const USER_LOGOUT = "USER_LOGOUT"


/* ----- EDITING ----- */

export const EDITING_USER_START = "EDITING_USER_START"
export const EDITING_USER_STOP = "EDITING_USER_STOP"

/* ----- GET USERS ----- */

//get user
export const GET_USER_START = "GET_USER_START"
export const GET_USER_SUCCESS = "GET_USER_SUCCESS"
export const GET_USER_FAILED = "GET_USER_FAILED"

export const ADD_USER_START = "ADD_USER_START"
export const ADD_USER_SUCCESS = "ADD_USER_SUCCESS"
export const ADD_USER_FAILED = "ADD_USER_FAILED"

//get user list (drivers)
export const GET_DRIVERLIST_START = "GET_DRIVERLIST_START"
export const GET_DRIVERLIST_SUCCESS = "GET_DRIVERLIST_SUCCESS"
export const GET_DRIVERLIST_FAILED = "GET_DRIVERLIST_FAILED"

//get single driver object.
export const GET_DRIVER_START = "GET_DRIVER_START"
export const GET_DRIVER_SUCCESS = "GET_DRIVER_SUCCESS"
export const GET_DRIVER_FAILED = "GET_DRIVER_FAILED"


//get user list (riders)
export const GET_RIDERLIST_START = "GET_RIDERLIST_START"
export const GET_RIDERLIST_SUCCESS = "GET_RIDERLIST_SUCCESS"
export const GET_RIDERLIST_FAILED = "GET_RIDERLIST_FAILED"

//get single rider object.
export const GET_RIDER_START = "GET_RIDER_START"
export const GET_RIDER_SUCCESS = " GET_RIDER_SUCCESS"
export const GET_RIDER_FAILED = "GET_RIDER_FAILED"



/* ----- RIDERS ----- */

//update
export const UPDATE_RIDER_START = "UPDATE_RIDER_START"
export const UPDATE_RIDER_SUCCESS = "UPDATE_RIDER_SUCCESS"
export const UPDATE_RIDER_FAILED = "UPDATE_RIDER_FAILED"

// delete
export const DELETE_RIDER_START = "DELETE_RIDER_START"
export const DELETE_RIDER_SUCCESS = "DELETE_RIDER_SUCCESS"
export const DELETE_RIDER_FAILED = "DELETE_RIDER_FAILED"



/* ----- DRIVERS ----- */

//update
export const UPDATE_DRIVER_START = "UPDATE_DRIVER_START"
export const UPDATE_DRIVER_SUCCESS = "UPDATE_DRIVER_SUCCESS"
export const UPDATE_DRIVER_FAILED = "UPDATE_DRIVER_FAILED"

// delete
export const DELETE_DRIVER_START = "DELETE_DRIVER_START"
export const DELETE_DRIVER_SUCCESS = "DELETE_DRIVER_SUCCESS"
export const DELETE_DRIVER_FAILED = "DELETE_DRIVER_FAILED"


/* ------ REVIEWS ----- */

export const GET_DRIVER_REVIEWS_START = "GET_DRIVER_REVIEWS_START"
export const GET_DRIVER_REVIEWS_SUCCESS = "GET_DRIVER_REVIEWS_SUCCESS"
export const GET_DRIVER_REVIEWS_FAILED = "GET_DRIVER_REVIEWS_FAILED"

export const ADD_DRIVER_REVIEWS_START = "ADD_DRIVER_REVIEWS_START"
export const ADD_DRIVER_REVIEWS_SUCCESS = "ADD_DRIVER_REVIEWS_SUCCESS"
export const ADD_DRIVER_REVIEWS_FAILED = "ADD_DRIVER_REVIEWS_FAILED"

export const UPDATE_DRIVER_REVIEWS_START = "UPDATE_DRIVER_REVIEWS_START"
export const UPDATE_DRIVER_REVIEWS_SUCCESS = "UPDATE_DRIVER_REVIEWS_SUCCESS"
export const UPDATE_DRIVER_REVIEWS_FAILED = "UPDATE_DRIVER_REVIEWS_FAILED"



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


export const EditingUserStart = () => {
    return dispatch => {
        dispatch({ type: EDITING_USER_START })
    }
}

export const EditingUserStop = () => {
    return dispatch => {
        dispatch({ type: EDITING_USER_STOP })
    }
}

export const GetRiderList = () => {
    return dispatch => {
        dispatch({ type: GET_RIDERLIST_START })
        axios()
        .get('/api/riders')
        .then(response => {
            dispatch({ type: GET_RIDERLIST_SUCCESS, payload: response.data })
        })
        .catch(error => {
            dispatch({ type: GET_RIDERLIST_FAILED, payload: error})
            console.log(error.response)
        })
    }
}


export const GetRider = (rider, id) => {
    return dispatch => {
        dispatch({ type: GET_RIDER_START })
        axios()
        .get(`/api/${rider}s/${id}`)
        .then(response => {
            dispatch({ type: GET_RIDER_SUCCESS, payload: response.data })
            console.log('rider object', response.data)
        })
        .catch(error => {
            dispatch({ type: GET_RIDER_FAILED, payload: error})
            console.log(error.response)
        })
    }
}

export const GetDriver = (driver, id) => {
    return dispatch => {
        dispatch({ type: GET_DRIVER_START })
        axios()
        .get(`/api/${driver}s/${id}`)
        .then(response => {
            dispatch({ type: GET_DRIVER_SUCCESS, payload: response.data })
            // console.log('driver object', response.data)
        })
        .catch(error => {
            dispatch({ type: GET_DRIVER_FAILED, payload: error})
            console.log(error.response)
        })
    }
}



export const GetDriverList = () => {
    return dispatch => {
        dispatch({ type: GET_DRIVERLIST_START })
        axios()
        .get('/api/drivers')
        .then(response => {
            dispatch({ type: GET_DRIVERLIST_SUCCESS, payload: response.data })
        })
        .catch(error => {
            dispatch({ type: GET_DRIVERLIST_FAILED, payload: error})
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

export const UpdateRider = (rider, userID) => {
    return dispatch => {
        dispatch({ type: UPDATE_RIDER_START })
        axios()
        .put(`/api/riders/${userID}`, rider)
        .then(response => {
            dispatch({ type: UPDATE_RIDER_SUCCESS, payload: response.data })
            console.log(response.data)

        })
        .catch(error => {
            dispatch({ type: UPDATE_RIDER_FAILED, payload: error})
            console.log(error.response)
        })
    }
}

export const DeleteRider = (userID) => {
    return dispatch => {
        dispatch({ type: DELETE_RIDER_START })
        axios()
        .delete(`/api/riders/${userID}`)
        .then(response => {
            dispatch({ type: DELETE_RIDER_SUCCESS, payload: response.data })
            removeToken()
            console.log(response.data)

        })
        .catch(error => {
            dispatch({ type: DELETE_RIDER_FAILED, payload: error})
            console.log(error.response)
        })
    }
}

/* ----- DRIVERS ----- */

//update a specific driver's profile.
export const UpdateDriver = (driver, userID) => {
    return dispatch => {
        dispatch({ type: UPDATE_DRIVER_START })
        axios()
        .put(`/api/drivers/${userID}`, driver)
        .then(response => {
            dispatch({ type: UPDATE_DRIVER_SUCCESS, payload: response.data })
            console.log(response.data)
        })
        .catch(error => {
            dispatch({ type: UPDATE_DRIVER_FAILED, payload: error})
            console.log(error.response)
        })
    }
}

export const DeleteDriver = (userID) => {
    return dispatch => {
        dispatch({ type: DELETE_DRIVER_START})
        axios()
        .delete(`/api/drivers/${userID}`)
        .then(response => {
            dispatch({ type: DELETE_DRIVER_SUCCESS, payload: response.data })
            removeToken()
            console.log(response.data)
        })
        .catch(error => {
            dispatch({ type: DELETE_DRIVER_FAILED, payload: error})
            console.log(error.response)
        })
    }
}