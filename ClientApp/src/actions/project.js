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

export const showFormAddListTask = ()=>{
    return {
        type:types.SHOW_FORM_ADD_LISTASK
    }
}

// show form add

export const handleAddListTask = (listtask) =>{
    return {
        url:`${types.API_ENDPOINT}/${types.URL_LIST_TASK}`,
        data:listtask,
        method:types.API_METHOD_POST,
        onSuccess:types.ADD_LIST_TASK_SUCCESS,
        onError:types.ADD_LIST_TASK_ERROR
    }
}

// add list task



export const getListTask = (idproject) =>{
    return {
        url:`${types.API_ENDPOINT}/${types.URL_LIST_TASK}${idproject}`,
        method:types.API_METHOD_GET,
        onSuccess:types.GET_LIST_TASK_SUCCESS,
        onError:types.GET_LIST_TASK_ERROR
    }
}

// get list task


export const hadleAddTask = (task) =>{
    return {
        url:`${types.API_ENDPOINT}/${types.URL_TASK}`,
        data:task,
        method:types.API_METHOD_POST,
        onSuccess:types.ADD_TASK_SUCCESS,
        onError:types.ADD_TASK_ERROR
    }
}

// add task

export const hadleGetTask = () =>{
    return {
        url:`${types.API_ENDPOINT}/${types.URL_TASK}`,
        method:types.API_METHOD_GET,
        onSuccess:types.GET_TASK_SUCCESS,
        onError:types.GET_TASK_ERROR
    }
}

// get task with list task id