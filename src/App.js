import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import LandingPage from './pages/LandingPage';
import SignUp from './pages/SignUp';
import EditProfile from './pages/EditProfile';
import Home from './pages/Home';
import Post from './pages/Post';
import OnClickData from './pages/OnClickData';
import { Provider } from 'react-redux';
import store from './Redux/Store';
import eventData from './Data/EventData';
import MyEvents from './pages/MyEvents';
import MyPosts from './pages/MyPosts';
import MyEventsDisplay from './pages/MyEventsDisplay';
import MyPostsDisplay from './pages/MyPostsDisplay';
import ViewProfile from './pages/ViewProfile';
import EditMyPost from './pages/EditMyPost';
const App = () => {
  return (
    <Provider store={store}>
      {/* <HashRouter basename="/"> */}
        <div className='max-h-full'>
          <Routes>
            <Route exact path='/' element={<LandingPage />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/SignUp' element={<SignUp />} />
            <Route path='/EditProfile' element={<EditProfile />} />
            <Route path='/Home/:sid' element={<Home />} />
            <Route path='/Post' element={<Post />} />
            <Route path='/OnClickData/:id' element={<OnClickData />} />
            <Route path='/MyEvents' element={<MyEvents />} />
            <Route path='/MyEventsDisplay/:id' element={<MyEventsDisplay />} />
            <Route path='/MyPostsDisplay/:id' element={<MyPostsDisplay />} />
            <Route path='/MyPosts' element={<MyPosts />} />
            <Route path='/ViewProfile' element={<ViewProfile />} />
            <Route path='/EditMyPost/:id' element={<EditMyPost />} />
          </Routes>
        </div>
      {/* </HashRouter> */}
    </Provider>
  );
};

export default App;
