// authApi.ts

import { publicApi } from "./axiosInstance";

interface LoginRequest {
  loginId: string;
  password: string;
}

interface SignInResponse {
  username: string;
  accessToken: string;
}

export const signIn = async (data: LoginRequest): Promise<SignInResponse> => {
  const res = await publicApi.post("/auth/sign-in", data);

  if (!res.data.success) throw new Error("login failed");
  return res.data.data;

}