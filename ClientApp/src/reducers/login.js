import * as types from './../constants/login';
const initialState = {
    login:false
}

const loginReducer = (state = initialState, action) => {
    const {data} = action;
    switch (action.type) {
        case types.LOGIN_USER_SUCCESS:
            alert('login success');
            localStorage.setItem('login',JSON.stringify({
                login:true,
                store:data
            }))
            return {...state,login:true}

        case types.LOGIN_USER_ERROR:
            alert('login error');
            return {...state}
    default:
        return state
    }
}

export default loginReducer;