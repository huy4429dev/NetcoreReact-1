import * as types from  './../constants/user';
const initialState = {
    listUser:[],
    showFormEdit:false,
    showListUser:true,
    src:'',
    item:''
}

const userReducer = (state = initialState, action) => {
    var {data,id,message,src,actItem} =action;
    var  position = -1;
    var newList=[]
    const {listUser} = state;
    switch (action.type) {
        case types.SHOW_LIST_USER_SUCCESS:
            state.listUser = data;
            return {...state}

        case types.SHOW_LIST_USER_ERROR:
            return {...state}       
        
        case types.ADD_USER_SUCCESS:
            alert('Add user success');
            return {
                ...state,
                showFormEdit:false,
                showListUser:true,
                listUser:state.listUser.concat([data])
            }

        case types.DELETE_USER_SUCCESS:
            return {
                ...state,
                listUser:state.listUser.filter(item=> item.id !== id)
            } 
    
        case types.DELETE_USER_ERROR:
            return {
                ...state
            }       

        case types.SHOW_FORM_EDIT:
            return {
                ...state, showFormEdit:!state.showFormEdit,
                showListUser:!state.showListUser
            }      

        case types.SHOW_FORM_ADD_USER:
            return {...state,showFormEdit:!state.showFormEdit,
                showListUser:!state.showListUser
            }   
        
        case types.UPLOAD_IMAGE_USER_SUCCESS:
            alert('Upload image success');
            return {...state,src:src}      
    
        case types.UPLOAD_IMAGE_USER_ERROR:
            alert('Add user faile');
            return {...state}        

        case types.GET_VALUE_EDIT_USER:
            return {
                ...state,item:actItem
            }     

        case types.CLEAR_INPUT_USER:
            return {
                ...state,item:''
            }   
        
        case types.EDIT_USER_SUCCESS:
            alert('Edit user success');
            position = findIndex(listUser,data);
            if(position !== -1){
                newList = [...listUser.slice(0,position),data,...listUser.slice(position+1)];
            }
            return {
                ...state,
                listUser:newList,
                showFormEdit:false,
                showListUser:true
            };
        
        case types.EDIT_USER_ERROR:
            alert('sửa user error');
            return {
                ...state
            }  
    default:
        return state
    }
}

const findIndex = (state,item)=>{
    var result = -1;
    state.forEach((state ,index)=>{
        if( state.email === item.email){
            result = index
        }
    });
    return result;
}


export default userReducer;