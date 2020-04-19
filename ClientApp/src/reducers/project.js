import * as types from './../constants/project';
const initialState = {
    src:'',
    showFormAdd:false,
    projects:null
}
const projectReducer =  (state = initialState, action) => {
    const {src} = action;
    switch (action.type) {

        case types.UPLOAD_IMAGE_PROJECT_SUCCESS:
            alert('upload image success');
            return {...state,src:src}

        case types.UPLOAD_IMAGE_PROJECT_ERROR:
            alert('upload image error');
            return {...state}    
            
        case types.ADD_PROJECT_SUCCESS:
            alert('Add project success');
            return {...state}

        case types.ADD_PROJECT_ERROR:
            alert('Add project error');
            return {...state}    
        
        case types.SHOW_FORM_ADD:
            return {...state,showFormAdd:!state.showFormAdd}

        case types.FETCH_PROJECT_SUCCESS:
            const projects = action.data;
            return {...state,projects:projects}

        case types.FETCH_PROJECT_ERROR:
            return {...state}
    default:
        return state
    }
}

export default projectReducer;