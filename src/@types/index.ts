export type AuthResponse = {
  _id: string;
  username: string;
  avatarUrl: string;
};

export type AuthFormData = {
  username: string;
  password: string;
};

export type AuthThunkParams = AuthFormData;
