import {
    INPUTTING_NAMES,
    REQUEST_ROBOT_FAILED,
    REQUEST_ROBOT_SUCCESS,
    REQUEST_ROBOT_PENDING
} from './constants'

export const setSearchField = (text)=> ({
    type: INPUTTING_NAMES,
    payload: text
})

export const requestRobot = ()=> (dispatch)=> {
    dispatch({type: REQUEST_ROBOT_PENDING })
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=> response.json())
      .then(data=> dispatch({type: REQUEST_ROBOT_SUCCESS, payload: data}))
      .catch(error => dispatch({type: REQUEST_ROBOT_FAILED, payload: error}))

}






























