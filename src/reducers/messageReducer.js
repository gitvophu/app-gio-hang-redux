
import * as actionTypes from './../data/actionTypes';


const initialState = {
    msg:''
};
 
 const messageReducer = (state = initialState, action) => {
     
    if(action.type === actionTypes.SET_MESSAGE){
        state.msg = action.msg;
        return state;
    }
    return state;
 }

 export default messageReducer;