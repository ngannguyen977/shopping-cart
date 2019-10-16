import * as Types from './../contants/ActionTypes';
import * as Message from './../contants/Messages';

var initialState = Message.MSG_WELCOME;

const message = (state = initialState, action) =>{
    switch(action.type){
        default: return [...state]
    }
}
export default message;