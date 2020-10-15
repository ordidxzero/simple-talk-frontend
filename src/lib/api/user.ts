import client from './client';
import routes from './routes';

const {
  user,
  loadFriendsRoute,
  findRoute,
  addFriendRoute,
  acceptFriendRoute,
  removeFriendRoute,
  loadRoomsRoute,
} = routes;

const urlAdder = (url: string) => `${user}${url}`;

export const loadFriends = () => client.get(urlAdder(loadFriendsRoute));

export const loadRooms = () => client.get(urlAdder(loadRoomsRoute));

export const find = (query: string) => client.get(urlAdder(`${findRoute}?query=${query}`));

export const addFriend = (id: string) => client.post(urlAdder(addFriendRoute(id)));

export const acceptFriend = (id: string) => client.post(urlAdder(acceptFriendRoute(id)));

export const removeFriend = (id: string) => client.post(urlAdder(removeFriendRoute(id)));
