import {
    INPUTTING_NAMES,
    REQUEST_ROBOT_FAILED,
    REQUEST_ROBOT_SUCCESS,
    REQUEST_ROBOT_PENDING
} from './constants'

const initialState1 = {
    searchField: ''
}

export const robotReducer = (state=initialState1, action={})=> {
    switch(action.type) {
        case INPUTTING_NAMES:
            return Object.assign({}, state, {searchField: action.payload})    
         default:
            return state;         

    }
  
}
const initialState2 = {
    isPending: false,
    robots: [],
    error: ''
}

export const requestRobot = (state=initialState2, action={}) => {
    switch(action.type) {
        case REQUEST_ROBOT_PENDING:
            return Object.assign({}, state, {isPending: true})
        case REQUEST_ROBOT_SUCCESS: 
            return Object.assign({}, state, {robots: action.payload, isPending:false})
        case REQUEST_ROBOT_FAILED:
            return Object.assign({}, state, {error: action.payload, isPending: false})  
        default:
            return state   
    }
}























