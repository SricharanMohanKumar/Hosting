export const AddEvent=(eventData)=>{
    return{
        type:'ADD_EVENT',
        eventData: eventData
    };
};

export const AddMyEvent=(myEventData)=>{
    return{
        type:'ADD_MY_EVENT',
        myEventData: myEventData
    };
};

export const AddMyPosts=(myEventData)=>{
    return{
        type:'ADD_MY_POSTS',
        myEventData: myEventData
    };
};

export const AddProfile=(myEventData)=>{
    return{
        type:'ADD_PROFILE',
        myEventData: myEventData
    };
};

export const AddViewProfile=(myEventData)=>{
    return{
        type:'ADD_VIEW_PROFILE',
        myEventData: myEventData
    };
};

export const EditProfileData=(myEventData)=>{
 
    return{
        type:'EDIT_PROFILE',
        myEventData: myEventData
    };
};

export const cancelRegistration=(index)=>{
 
    return{
        type:'CANCEL_REGISTRATION',
        index: index
    };
};

export const deletePost=(index)=>{
 
    return{
        type:'DELETE_POST',
        index: index
    };
};

export const deletePostHome=(index)=>{
 
    return{
        type:'DELETE_POST_HOME',
        index: index
    };
};

