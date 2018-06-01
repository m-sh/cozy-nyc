import { routerActions } from 'react-router-redux';
import { connectedReduxRedirect } from 'redux-auth-wrapper/history4/redirect';
import { App, NotFound } from 'containers';
import About from 'containers/about/about';
import Chat from 'containers/Chat/Loadable';
import ChatFeathers from 'containers/ChatFeathers/Loadable';
import Login from 'containers/Login/Loadable';
import LoginSuccess from 'containers/LoginSuccess/Loadable';
import Register from 'containers/Register/Loadable';
import Survey from 'containers/Survey/Loadable';
import Widgets from 'containers/Widgets/Loadable';

import Home from './containers/home/home';

// Shop
import Shop from './containers/shop/index';
import Item from './containers/shop/itemdetail';

// Radio
import RadioHome from './containers/radio/index';
import Stream from './containers/radio/stream';

// Boards
import BoardsHome from './containers/boards/index';
import Board from './containers/boards/board';
import Thread from './containers/boards/thread';

// Discovery
import DiscoveryHome from './containers/discovery/index';

const isAuthenticated = connectedReduxRedirect({
  redirectPath: '/login',
  authenticatedSelector: state => state.auth.user !== null,
  redirectAction: routerActions.replace,
  wrapperDisplayName: 'UserIsAuthenticated'
});

const isNotAuthenticated = connectedReduxRedirect({
  redirectPath: '/',
  authenticatedSelector: state => state.auth.user === null,
  redirectAction: routerActions.replace,
  wrapperDisplayName: 'UserIsAuthenticated',
  allowRedirectBack: false
});

const routes = [
  {
    component: App,
    routes: [
      { path: '/', exact: true, component: Home },
      { path: '/about', component: About },
      { path: '/chat', component: Chat },
      { path: '/shop', component: Shop },
      { path: '/shop/:itemid', component: Item },
      { path: '/radio', component: RadioHome },
      { path: '/radio/:channelname', component: Stream },
      { path: '/boards', component: BoardsHome },
      { path: '/boards/:boardtag', component: Board },
      { path: '/boards/:boardtag/:threadid', component: Thread },
      { path: '/discovery', component: DiscoveryHome },
      { path: '/chat-feathers', component: isAuthenticated(ChatFeathers) },
      { path: '/login', component: Login },
      { path: '/login-success', component: isAuthenticated(LoginSuccess) },
      { path: '/register', component: isNotAuthenticated(Register) },
      { path: '/survey', component: Survey },
      { path: '/widgets', component: Widgets },
      { component: NotFound }
    ]
  }
];

export default routes;
