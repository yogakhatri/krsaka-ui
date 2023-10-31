export interface LoginDetails {
  username: string;
  password: string;
}

export interface BearerToken {
  accessToken: string;
  tokenType: string;
}
