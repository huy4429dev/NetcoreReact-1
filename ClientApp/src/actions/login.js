import * as types from  './../constants/login';
export const handleLogin = (account) =>{
    return {
        url:`${types.API_ENDPOINT}/${types.URL_LOGIN}`,
        method:types.API_METHOD_POST,
        data:account,
        onSuccess:types.LOGIN_USER_SUCCESS,
        onError:types.LOGIN_USER_ERROR
    }
}