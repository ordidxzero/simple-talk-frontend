import io from 'socket.io-client';
import { MessageData } from '../../@types';
import { addMessage } from '../store/chat';

let socket: SocketIOClient.Socket | undefined;

export const connectSocket = (dispatch: any) => {
  socket = io('http://localhost:4000');
  socket.emit('check');
  socket.on('bye', () => console.log('Please visit Simple Talk Service again!'));
  socket.on('receiveMessage', ({ room, ...data }: MessageData & { room: string }) =>
    dispatch(addMessage({ room, data })),
  );
};

export const sendMessage = (dispatch: any) => (data: MessageData & { room: string }) => {
  const { room, ...rest } = data;
  dispatch(addMessage({ room, data: rest }));
  socket?.emit('sendMessage', data);
};

export const joinRoom = (data: { room: string; opponent: string }) => socket?.emit('joinRoom', data);

export const leaveRoom = (data: { room: string; opponent: string }) => socket?.emit('leaveRoom', data);

export const logoutEvent = () => socket?.close();
