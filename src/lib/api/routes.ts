// Global
const GLOBAL = '/';
const REGISTER = 'register';
const LOGIN = 'login';
const LOGOUT = 'logout';
const CHECK = 'check';

// User
const USER = '/user';
const FIND = '/find';
const LOAD_FRIENDS = '/friends';
const LOAD_ROOMS = '/rooms';
const ADD_FRIEND = (id: string): string => `/add/${id}`;
const ACCEPT_FRIEND = (id: string): string => `/accept/${id}`;
const REMOVE_FRIEND = (id: string): string => `/remove/${id}`;

// Chat
const CHAT = '/chat';
const START_CHAT = (id: string): string => `/start/${id}`;
const LEAVE_CHAT = (room: string): string => `/leave/${room}`;

const routes = {
  global: GLOBAL,
  registerRoute: REGISTER,
  loginRoute: LOGIN,
  logoutRoute: LOGOUT,
  checkRoute: CHECK,
  user: USER,
  loadFriendsRoute: LOAD_FRIENDS,
  loadRoomsRoute: LOAD_ROOMS,
  findRoute: FIND,
  addFriendRoute: ADD_FRIEND,
  acceptFriendRoute: ACCEPT_FRIEND,
  removeFriendRoute: REMOVE_FRIEND,
  chat: CHAT,
  startChatRoute: START_CHAT,
  leaveChatRoute: LEAVE_CHAT,
};

export default routes;
