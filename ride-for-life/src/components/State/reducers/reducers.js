import {

    //loading
    LOADING,
    USER_LOGOUT,

    //user
    GET_USER_START,
    GET_USER_SUCCESS,
    GET_USER_FAILED,

    //riders
    // ADD_RIDER_START,
    // ADD_RIDER_SUCCESS,
    // ADD_RIDER_FAILED,

    ADD_USER_START,
    ADD_USER_SUCCESS,
    ADD_USER_FAILED,

    UPDATE_RIDER_START,
    UPDATE_RIDER_SUCCESS,
    UPDATE_RIDER_FAILED,

    DELETE_RIDER_START,
    DELETE_RIDER_SUCCESS,
    DELETE_RIDER_FAILED,

    //drivers

    ADD_DRIVER_START,
    ADD_DRIVER_SUCCESS,
    ADD_DRIVER_FAILED,

    UPDATE_DRIVER_START,
    UPDATE_DRIVER_SUCCESS,
    UPDATE_DRIVER_FAILED,

    DELETE_DRIVER_START,
    DELETE_DRIVER_SUCCESS,
    DELETE_DRIVER_FAILED,

} from '../actions/actions';


const initialState = {

    //Admin
    user: [],
    loading: false,
    loggedIn: false,
    addingUser: false,
    
    //Rider
    riders: [],
    updatingRider: false,
    deletingRider: false,
    
    //Driver
    drivers: [],
    // addingDriver: false,
    updatingDriver: false,
    deletingDriver: false,

    //driver reviews
    reviews: [],

    //errors
    error: []
}

export function reducer(state = initialState, action) {
    switch(action.type) {

        case LOADING: {
            return {
                ...state,
                loading: true,
                loggedIn: false
            }
        }

        case USER_LOGOUT: {
            return {
                ...state,
                user: [],
                loggedIn: false
            }
        }


    /* ---------- USERS ---------- */

        //getting a user
        case GET_USER_START: {
                return {
                    ...state,
                    loading: true,
                    loggedIn: false
                }
            }
    
        case GET_USER_SUCCESS: {
                return {
                    ...state,
                    user: action.payload,
                    loading: false,
                    loggedIn: true
                }
            }
    
        case GET_USER_FAILED: {
                return {
                    ...state,
                    loading: false,
                    loggedIn: false,
                    error: action.payload
                }
            }

    /* ---------- RIDERS ---------- */



    //adding a new rider user
    case ADD_USER_START: {
            return {
                ...state,
                addingUser: true
            }
        }

    case ADD_USER_SUCCESS: {
            return {
                ...state,
                user: action.payload,
                addingUser: false
            }
        }

    case ADD_USER_FAILED: {
            return {
                ...state,
                addingUser: false,
                error: action.payload
            }
        }


    //updating a rider user
    case UPDATE_RIDER_START: {
            return {
                ...state,
                updatingRider: true
            }
        }

    case UPDATE_RIDER_SUCCESS: {
            return {
                ...state,
                user: action.payload,
                updatingRider: false
            }
        }

    case UPDATE_RIDER_FAILED: {
            return {
                ...state,
                updatingRider: false,
                error: action.payload
            }
        }


    //deleting a rider
    case DELETE_RIDER_START: {
            return {
                ...state,
                deletingRider: true
            }
        }

    case DELETE_RIDER_SUCCESS: {
            return {
                ...state,
                user: action.payload,
                deletingRider: false
            }
        }

    case DELETE_RIDER_FAILED: {
            return {
                ...state,
                deletingRider: false,
                error: action.payload
            }
        }


/* ---------- DRIVERS ---------- */

    // //getting a driver
    // case GET_DRIVER_START: {
    //         return {
    //             ...state,
    //             gettingDriver: true
    //         }
    //     }

    // case GET_DRIVER_SUCCESS: {
    //         return {
    //             ...state,
    //             driver: action.payload,
    //             gettingDriver: false,
    //         }
    //     }

    // case GET_DRIVER_FAILED: {
    //         return {
    //             ...state,
    //             gettingDriver: false,
    //             error: action.payload
    //         }
    //     }


    //adding a new driver
    // case ADD_DRIVER_START: {
    //         return {
    //             ...state,
    //             addingDriver: true
    //         }
    //     }

    // case ADD_DRIVER_SUCCESS: {
    //         return {
    //             ...state,
    //             user: action.payload,
    //             addingDriver: false
    //         }
    //     }

    // case ADD_DRIVER_FAILED: {
    //         return {
    //             ...state,
    //             addingDriver: false,
    //             error: action.payload
    //         }
    //     }


    //updating a driver
    case UPDATE_DRIVER_START: {
            return {
                ...state,
                updatingDriver: true
            }
        }

    case UPDATE_DRIVER_SUCCESS: {
            return {
                ...state,
                user: action.payload,
                updatingDriver: false
            }
        }

    case UPDATE_DRIVER_FAILED: {
            return {
                ...state,
                updatingDriver: false,
                error: action.payload
            }
        }


    //deleting a driver
    case DELETE_DRIVER_START: {
            return {
                ...state,
                deletingDriver: true
            }
        }

    case DELETE_DRIVER_SUCCESS: {
            return {
                ...state,
                user: action.payload,
                deletingDriver: false
            }
        }

    case DELETE_DRIVER_FAILED: {
            return {
                ...state,
                deletingDriver: false,
                error: action.payload
            }
        }

    default: 
        return state;
    }
}