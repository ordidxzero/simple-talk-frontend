export type AuthResponse = {
  _id: string;
  username: string;
  avatarUrl: string;
};

export type AuthFormData = {
  username: string;
  password: string;
};

export type UserResponse = {
  _id: string;
  username: string;
  avatarUrl: string;
};

export type AuthThunkParams = AuthFormData;

export type MessageData = {
  user: string;
  text: string;
  createdAt: number;
};
