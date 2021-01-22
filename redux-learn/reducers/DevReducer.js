import * as actionType from "../type";
const init =  { data: [], msg: '' }
export const devReducer = (initialState = init, action) => {

    switch (action.type) {
        case actionType.DEV_INFO_SUCCESS: {
            return {...initialState, msg: action.payload.data.msg}
        }
        default:
            return {...initialState};
    }
}