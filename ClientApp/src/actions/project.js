import * as types from  './../constants/project';
import callApi from './../apis/ajax';

export const handleUploadImageProject  = (formData) =>{
    return dispatch =>{
        return callApi(types.URL_UPLOAD_IMAGE_PROJECT,types.API_METHOD_POST,formData).then(res=>{
            return res.json().then(body => {
                if (res.status === 200) {
                    dispatch(actHandleUploadImageProjectSuccess(body.dbPath));
                }else{
                    dispatch(actHandleUploadImageProjectError());
                }
            })
            
        })
    }
}
export const actHandleUploadImageProjectSuccess = (src)=>{
    return {
        type:types.UPLOAD_IMAGE_PROJECT_SUCCESS,
        src
    }
} 
export const actHandleUploadImageProjectError = ()=>{
    return {
        type:types.UPLOAD_IMAGE_PROJECT_ERROR
    }
} 

// uploads imgage project

export const handleAddProject = (project) =>{
    return {
        url:`${types.API_ENDPOINT}/${types.URL_PROJECT}`,
        data:project,
        method:types.API_METHOD_POST,
        onSuccess:types.ADD_PROJECT_SUCCESS,
        onError:types.ADD_PROJECT_ERROR
    }
}

//  add project

export const showFormAdd = ()=>{
    return {
        type:types.SHOW_FORM_ADD
    }
}

// show form add


export const fetchListsProject = () =>{
    return {
        url:`${types.API_ENDPOINT}/${types.URL_PROJECT}`,
        method:types.API_METHOD_GET,
        onSuccess:types.FETCH_PROJECT_SUCCESS,
        onError:types.FETCH_PROJECT_ERROR
    }
}
