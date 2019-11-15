import { 
    //riders
    GET_RIDER_START,
    GET_RIDER_SUCCESS,
    GET_RIDER_FAILED,

    ADD_RIDER_START,
    ADD_RIDER_SUCCESS,
    ADD_RIDER_FAILED,

    UPDATE_RIDER_START,
    UPDATE_RIDER_SUCCESS,
    UPDATE_RIDER_FAILED,

    DELETE_RIDER_START,
    DELETE_RIDER_SUCCESS,
    DELETE_RIDER_FAILED,

    //drivers
    GET_DRIVER_START,
    GET_DRIVER_SUCCESS,
    GET_DRIVER_FAILED,

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
    user: [],
    //Rider
    gettingRider: false,
    addingRider: false,
    updatingRider: false,
    deletingRider: false,
    
    //Driver
    gettingRider: false,
    addingRider: false,
    updatingRider: false,
    deletingRider: false,

    //errors
    error: null
}

export function reducer(state = initialState, action) {

    switch(action.type) {

    /* ---------- RIDERS ---------- */

    //getting a rider 
    case GET_RIDER_START: {
            return {
                ...state,
                gettingRider: true
            }
        }

    case GET_RIDER_SUCCESS: {
            return {
                ...state,
                user: action.payload,
                gettingRider: false,
            }
        }

    case GET_RIDER_FAILED: {
            return {
                ...state,
                gettingRider: false,
                error: action.payload
            }
        }


    //adding a new rider
    case ADD_RIDER_START: {
            return {
                ...state,
                addingRider: true
            }
        }

    case ADD_RIDER_SUCCESS: {
            return {
                ...state,
                user: action.payload,
                addingRider: false
            }
        }

    case ADD_RIDER_FAILED: {
            return {
                ...state,
                addingRider: false,
                error: action.payload
            }
        }


    //updating a rider
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

    //getting a driver
    case GET_DRIVER_START: {
            return {
                ...state,
                gettingDriver: true
            }
        }

    case GET_DRIVER_SUCCESS: {
            return {
                ...state,
                user: action.payload,
                gettingDriver: false,
            }
        }

    case GET_DRIVER_FAILED: {
            return {
                ...state,
                gettingDriver: false,
                error: action.payload
            }
        }


    //adding a new driver
    case ADD_DRIVER_START: {
            return {
                ...state,
                addingDriver: true
            }
        }

    case ADD_DRIVER_SUCCESS: {
            return {
                ...state,
                user: action.payload,
                addingDriver: false
            }
        }

    case ADD_DRIVER_FAILED: {
            return {
                ...state,
                addingDriver: false,
                error: action.payload
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

    default: 
        return state;

    }
}