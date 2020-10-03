import { AuthFormData } from '../../@types';
import client from './client';
import routes from './routes';

const { global, registerRoute, loginRoute, logoutRoute, checkRoute } = routes;

const urlAdder = (url: string) => `${global}${url}`;

export const register = (data: AuthFormData) => client.post(urlAdder(registerRoute), data);

export const login = (data: AuthFormData) => client.post(urlAdder(loginRoute), data);

export const logout = () => client.post(urlAdder(logoutRoute));

export const check = () => client.post(urlAdder(checkRoute));
