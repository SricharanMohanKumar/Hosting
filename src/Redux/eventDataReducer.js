import eventData from '../Data/EventData';
import myEvents from '../Data/myEvents';
import myPosts from '../Data/myPosts';
import Profile from '../Data/Profile';
import ProfileDetails from '../Data/ProfileDetails';
import PostDetail from '../Data/PostDetail';

const initialState = {
  events: eventData,
  myEvents: myEvents,
  myPosts: myPosts,
  Profile: Profile,
  ProfileDetails: ProfileDetails,
  PostDetail: PostDetail,
 
};

const eventReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_EVENT':
      return { ...state, events: [...state.events, action.eventData], };
    case 'ADD_MY_EVENT':
      return { ...state, myEvents: [...state.myEvents, action.myEventData], };
    case 'ADD_MY_POSTS':
      return { ...state, myPosts: [...state.myPosts, action.myEventData], };
    case 'ADD_PROFILE':
      return { ...state, Profile: [...state.Profile, action.myEventData], };
    case 'ADD_VIEW_PROFILE':
      return { ...state, ProfileDetails: [...state.ProfileDetails, action.myEventData], };
    case 'EDIT_PROFILE':
      return {  ...state,ProfileDetails: [action.myEventData] };
    case 'CANCEL_REGISTRATION':
      return { ...state, myEvents: state.myEvents.filter((item, index) => index !== action.index) }
      case 'DELETE_POST':
        
      return { ...state, myPosts: state.myPosts.filter((item, index) => item.TITLE !== action.index) }
      case 'DELETE_POST_HOME':
      return { ...state, events: state.events.filter((item, index) => item.TITLE !== action.index) }
      case 'EDIT_MY_POST':
        return {  ...state,PostDetail: [action.index] };
    default:
      return state;





  }
};


export default eventReducer;





