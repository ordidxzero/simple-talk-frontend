// Global
const GLOBAL = '/';
const REGISTER = 'register';
const LOGIN = 'login';
const LOGOUT = 'logout';

// User
const USER = '/user';
const FIND = '/find';
const LOAD_FRIENDS = '/friends';
const ADD_FRIEND = (id: string): string => `/add/${id}`;
const ACCEPT_FRIEND = (id: string): string => `/accept/${id}`;
const REMOVE_FRIEND = (id: string): string => `/remove/${id}`;

const routes = {
  global: GLOBAL,
  registerRoute: REGISTER,
  loginRoute: LOGIN,
  logoutRoute: LOGOUT,
  user: USER,
  loadFriendsRoute: LOAD_FRIENDS,
  findRoute: FIND,
  addFriendRoute: ADD_FRIEND,
  acceptFriendRoute: ACCEPT_FRIEND,
  removeFriendRoute: REMOVE_FRIEND,
};

export default routes;
