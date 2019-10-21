import * as Types from './../contants/ActionTypes';
import * as Message from './../contants/Messages';

var initialState = Message.MSG_WELCOME;

const message = (state = initialState, action) =>{
    switch(action.type){
        case Types.CHANGE_MESSAGE:
            return action.message
        default: return [...state]
    }
}
export default message;
//sau khi xu ly  ở reducer
// -> tiến hành dispatch action chuyển thành props cho component