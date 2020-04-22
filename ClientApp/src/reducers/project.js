import * as types from './../constants/project';
const initialState = {
    src:'',
    showFormAdd:false,
    projects:null,
    showFormAddListTask:false,
    showButtonAddTasks:true,
    item:null,
    task:'',
    showFormAddTask: false,
    showBtnAddTask:true
}
const projectReducer =  (state = initialState, action) => {
    const {src} = action;
    const item = action.data;
    switch (action.type) {

        case types.UPLOAD_IMAGE_PROJECT_SUCCESS:
            alert('upload image success');
            return {...state,src:src}

        case types.UPLOAD_IMAGE_PROJECT_ERROR:
            alert('upload image error');
            return {...state}    
            
        case types.ADD_PROJECT_SUCCESS:
            alert('Add project success');
            return {...state,showFormAdd:!state.showFormAdd}

        case types.ADD_PROJECT_ERROR:
            alert('Add project error');
            return {...state,showFormAdd:!state.showFormAdd}    
        
        case types.SHOW_FORM_ADD:
            return {
                ...state,showFormAdd:!state.showFormAdd
            }

        case types.FETCH_PROJECT_SUCCESS:
            const projects = action.data;
            return {
                ...state,projects:projects
            }

        case types.FETCH_PROJECT_ERROR:
            return {...state}

        case types.SHOW_FORM_ADD_LISTASK:
            return {
                ...state,
                showFormAddListTask:!state.showFormAddListTask,
                showButtonAddTasks:false    
            }

        case types.ADD_LIST_TASK_SUCCESS:
            alert('add list task success');
            return {
                ...state,   
                showFormAddListTask:!state.showFormAddListTask,
                showButtonAddTasks:true    
            }     
        case types.ADD_LIST_TASK_ERROR:
            alert('add list task error');
            return {
                ...state, 
                showFormAddListTask:!state.showFormAddListTask,
                showButtonAddTasks:true      
            }    
            
        case types.GET_LIST_TASK_SUCCESS:
            return {
                ...state,   
                item:item
            }     
        case types.GET_LIST_TASK_ERROR:
            return {
                ...state,   
            }    

        case types.ADD_TASK_SUCCESS:
            alert('add task succes');
            return {
                ...state,   
                item:item
            }     
        case types.ADD_TASK_ERROR:
            alert('add task error');
            return {
                ...state,   
            }  

        case types.GET_TASK_SUCCESS:
            const task = action.data;
            console.log(task); 
            return {
                ...state,task:task
            }     
        case types.GET_TASK_ERROR:
            return {
                ...state,   
            } 

        case types.HIDE_FORM_ADD_LISTASK:
            return {
                ...state,
                showFormAddListTask:false,
                showButtonAddTasks:true   
            } 

        case types.ACT_SHOW_FORM_ADD_TASK:
            alert('bam vao');
            return {
                ...state,
            } 
    default:
        return state
    }
}

export default projectReducer;