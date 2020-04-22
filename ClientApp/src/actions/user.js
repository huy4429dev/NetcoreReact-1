import * as types from  './../constants/user';
import callApi from './../apis/ajax';
export const listUser = () =>{
    return {
        url:`${types.API_ENDPOINT}/${types.URL_USER}`,
        method:types.API_METHOD_GET,
        onSuccess:types.SHOW_LIST_USER_SUCCESS,
        onError:types.SHOW_LIST_USER_ERROR
    }
}
// show lists user
export const deleteUser = (id) =>{
    return dispatch =>{
        return callApi(`${types.URL_USER}/${id}`,types.API_METHOD_DELETE,null).then(res=>{
            return res.json().then(body => {
                if (res.status === 200) {
                    dispatch(actHandleDeleteUserSuccess(id,body.dbPath));
                }else{
                    dispatch(actHandleDeleteUserError());
                }
            })
        })
    }
}
export const actHandleDeleteUserSuccess = (id,message)=>{
    return {
        type:types.DELETE_USER_SUCCESS,
        id,
        message
    }
} 
export const actHandleDeleteUserError = ()=>{
    return {
        type:types.DELETE_USER_ERROR,
    }
} 

// delete user
export const showFormEdit = ()=>{
    return {
        type:types.SHOW_FORM_EDIT
    }
} 

export const showFromAddUser = ()=>{
    return {
        type:types.SHOW_FORM_ADD_USER
    }
} 

export const handleAddUser = (user) =>{
    return {
        url:`${types.API_ENDPOINT}/${types.URL_USER}`,
        method:types.API_METHOD_POST,
        data:user,
        onSuccess:types.ADD_USER_SUCCESS,
        onError:types.ADD_USER_ERROR
    }
}
// add user

export const handleUploadImageUser  = (formData) =>{
    return dispatch =>{
        return callApi(types.URL_UPLOAD_IMAGE_USER,types.API_METHOD_POST,formData).then(res=>{
            return res.json().then(body => {
                if (res.status === 200) {
                    dispatch(actHandleUploadImageUserSuccess(body.dbPath));
                }else{
                    dispatch(actHandleUploadImageUserError());
                }
            })
            
        })
    }
}
export const actHandleUploadImageUserSuccess = (src)=>{
    return {
        type:types.UPLOAD_IMAGE_USER_SUCCESS,
        src
    }
} 
export const actHandleUploadImageUserError = (src)=>{
    return {
        type:types.UPLOAD_IMAGE_USER_ERROR,
        src
    }
} 
// upload image user

export const getValueEditUser = (item)=>{
    return {
        type:types.GET_VALUE_EDIT_USER,
        actItem:item
    }
} 

// get value edit

export const clearInputForm = ()=>{
    return {
        type:types.CLEAR_INPUT_USER,
    }
} 

// clear input form user

export const handleEditUser = (id,user) =>{
    return {
        url:`${types.API_ENDPOINT}/${types.URL_USER}/${id}`,
        method:types.API_METHOD_PUT,
        data:user,
        onSuccess:types.EDIT_USER_SUCCESS,
        onError:types.EDIT_USER_ERROR
    }
}

// edit user