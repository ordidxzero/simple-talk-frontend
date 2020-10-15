import { StartChatResponse } from '../store/chat';
import client from './client';
import routes from './routes';

const { chat, startChatRoute, leaveChatRoute } = routes;

const urlAdder = (url: string) => `${chat}${url}`;

export const startChat = (id: string): Promise<StartChatResponse> => client.post(urlAdder(startChatRoute(id)));

export const leaveChat = (room: string) => client.post(urlAdder(leaveChatRoute(room)));
