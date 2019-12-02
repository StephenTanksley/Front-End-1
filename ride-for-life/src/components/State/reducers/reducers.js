import {

    //loading
    LOADING,
    EDITING_USER_START,
    EDITING_USER_STOP,
    USER_LOGOUT,


    //user
    GET_USER_START,
    GET_USER_SUCCESS,
    GET_USER_FAILED,

    ADD_USER_START,
    ADD_USER_SUCCESS,
    ADD_USER_FAILED,

    GET_DRIVER_START,
    GET_DRIVER_SUCCESS,
    GET_DRIVER_FAILED,

    GET_RIDER_START,
    GET_RIDER_SUCCESS,
    GET_RIDER_FAILED,


    //user arrays
    GET_DRIVERLIST_START,
    GET_DRIVERLIST_SUCCESS,
    GET_DRIVERLIST_FAILED,

    GET_RIDERLIST_START,
    GET_RIDERLIST_SUCCESS,
    GET_RIDERLIST_FAILED,
    
    //riders

    UPDATE_RIDER_START,
    UPDATE_RIDER_SUCCESS,
    UPDATE_RIDER_FAILED,

    DELETE_RIDER_START,
    DELETE_RIDER_SUCCESS,
    DELETE_RIDER_FAILED,

    //drivers

    UPDATE_DRIVER_START,
    UPDATE_DRIVER_SUCCESS,
    UPDATE_DRIVER_FAILED,

    DELETE_DRIVER_START,
    DELETE_DRIVER_SUCCESS,
    DELETE_DRIVER_FAILED,

    //reviews

    GET_DRIVER_REVIEWS_START,
    GET_DRIVER_REVIEWS_SUCCESS,
    GET_DRIVER_REVIEWS_FAILED,

    ADD_DRIVER_REVIEWS_START,
    ADD_DRIVER_REVIEWS_SUCCESS,
    ADD_DRIVER_REVIEWS_FAILED,

    UPDATE_DRIVER_REVIEWS_START,
    UPDATE_DRIVER_REVIEWS_SUCCESS,
    UPDATE_DRIVER_REVIEWS_FAILED,

    DELETE_DRIVER_REVIEWS_START,
    DELETE_DRIVER_REVIEWS_SUCCESS,
    DELETE_DRIVER_REVIEWS_FAILED


} from '../actions/actions';


const initialState = {

    //Admin
    user: [],
    currentUser: [],
    loading: false,
    editingUser: false,
    loggedIn: false,
    addingUser: false,
    
    //Rider
    riders: [],
    gettingRider: false,
    updatingRider: false,
    deletingRider: false,
    
    //Driver
    drivers: [],
    gettingDriver: false,
    updatingDriver: false,
    deletingDriver: false,

    //driver reviews
    reviews: [],
    addingReviews: false,
    gettingReviews: false,
    updatingReviews: false,
    deletingReviews: false,

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

        case EDITING_USER_START: {
            return {
                ...state,
                editingUser: true
            }
        }

        case EDITING_USER_STOP: {
            return {
                ...state,
                editingUser: false
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

        //getting a single user
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


        //getting multiple riders
        case GET_RIDERLIST_START: {
            return {
                ...state,
                loading: true,
            }
        }

        case GET_RIDERLIST_SUCCESS: {
                return {
                    ...state,
                    riders: action.payload,
                    loading: false,
                }
            }

        case GET_RIDERLIST_FAILED: {
                return {
                    ...state,
                    loading: false,
                    error: action.payload
                }
            }


        //getting multiple drivers
        case GET_DRIVERLIST_START: {
            return {
                ...state,
                loading: true,
            }
        }

        case GET_DRIVERLIST_SUCCESS: {
                return {
                    ...state,
                    drivers: action.payload,
                    loading: false,
                }
            }

        case GET_DRIVERLIST_FAILED: {
                return {
                    ...state,
                    error: action.payload,
                    loading: false
                }
            }

    /* ---------- RIDERS ---------- */

    //getting an existing rider user
    case GET_RIDER_START: {
        return {
            ...state,
            gettingRider: true
        }
    }

    case GET_RIDER_SUCCESS: {
        return {
            ...state,
            currentUser: action.payload,
            gettingRider: false
        }
    }

    case GET_RIDER_FAILED: {
        return {
            ...state,
            error: action.payload,
            gettingRider: false
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


    case GET_DRIVER_START: {
        return {
            ...state,
            gettingDriver: true
        }
    }

    case GET_DRIVER_SUCCESS: {
        return {
            ...state,
            currentUser: action.payload,
            gettingDriver: false
        }
    }

    case GET_DRIVER_FAILED: {
        return {
            ...state,
            error: action.payload,
            gettingDriver: false
        }
    }


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

// reviews

    //getting reviews
    case GET_DRIVER_REVIEWS_START : {
        return {
            ...state,
            gettingReviews: true,
        }
    }

    case GET_DRIVER_REVIEWS_SUCCESS : {
        return {
            ...state,
            gettingReviews: false,
            reviews: action.payload
        }
    }

    case GET_DRIVER_REVIEWS_FAILED : {
        return {
            ...state,
            gettingReviews: false,
            error: action.payload
        }
    }


    //adding review
    case ADD_DRIVER_REVIEWS_START : {
        return {
            ...state,
            addingReviews: true,
        }
    }

    case ADD_DRIVER_REVIEWS_SUCCESS : {
        return {
            ...state,
            addingReviews: false,
            reviews: action.payload
        }
    }

    case ADD_DRIVER_REVIEWS_FAILED : {
        return {
            ...state,
            addingReviews: false,
            error: action.payload
        }
    }

    
    //updating review
    case UPDATE_DRIVER_REVIEWS_START : {
        return {
            ...state,
            updatingReviews: true,
        }
    }

    case UPDATE_DRIVER_REVIEWS_SUCCESS : {
        return {
            ...state,
            updatingReviews: false,
            reviews: action.payload
        }
    }

    case UPDATE_DRIVER_REVIEWS_FAILED : {
        return {
            ...state,
            updatingReviews: false,
            error: action.payload
        }
    }

    //deleting review
    case DELETE_DRIVER_REVIEWS_START : {
        return {
            ...state,
            deletingReviews: true,
        }
    }

    case DELETE_DRIVER_REVIEWS_SUCCESS : {
        return {
            ...state,
            deletingReviews: false,
            reviews: action.payload
        }
    }

    case DELETE_DRIVER_REVIEWS_FAILED : {
        return {
            ...state,
            deletingReviews: false,
            error: action.payload
        }
    }

    default: 
        return state;
    }
}