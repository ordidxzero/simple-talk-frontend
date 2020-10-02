export type AuthFormData = {
  username: string;
  password: string;
};

export type AuthThunkParams = AuthFormData & {
  type: 'login' | 'register';
};
