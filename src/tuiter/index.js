import { Routes, Route } from "react-router";
import Nav from "../nav";
import NavigationSidebar from "./navigation-sidebar";
import HomeScreen from './home-screen/index';
import ExploreScreen from './explore-screen/index';
import BookmarksScreen from './navigation-sidebar/bookmarks-screen';
import ProfileScreen from './navigation-sidebar/profile-screen';
import WhoToFollowListItem
  from "./who-to-follow-list/who-to-follow-list-item";
import WhoToFollowList from "./who-to-follow-list";
import NotificationsScreen from "./navigation-sidebar/Notifications";
import MessageScreen from "./navigation-sidebar/messages";
import ListScreen from "./navigation-sidebar/lists";
import {Provider} from "react-redux";
import { configureStore } from '@reduxjs/toolkit';
import whoReducer from "./reducers/who-reducer";
import tuitsReducer from "./reducers/tuits-reducer";

const store = configureStore({reducer: {who: whoReducer, tuits: tuitsReducer}});

function Tuiter() {
  return (
    <Provider store={store}>
      <div>
        <Nav />
        <div className="row">
          <div className="col-2">
            <NavigationSidebar />
          </div>
          <div className="col-10 col-sm-10 col-md-10 col-lg-7">
            <Routes>
              <Route path="/home" element={<HomeScreen />} />
              <Route path="/explore" element={<ExploreScreen />} />
              <Route path="/bookmarks" element={<BookmarksScreen />} />
              <Route path="/profile" element={<ProfileScreen />} />
              <Route path="/notifications" element={<NotificationsScreen/>} />
              <Route path="/messages" element={<MessageScreen/>} />
              <Route path="/lists" element={<ListScreen/>} />
              <Route path="/more" element={<h1>More</h1>} />
            </Routes>
          </div>
          <div className="col-3 d-none d-lg-block">
            <WhoToFollowList/>
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default Tuiter;
