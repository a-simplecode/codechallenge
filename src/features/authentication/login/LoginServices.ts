/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable no-console */
// Model
import { instance } from "../../../http/HttpRequest";

type errorType = {
  statusCode: number | null;
  message: string;
  error: string;
};

export type LoginResponse = {
  data: { accessToken: string; error?: errorType | null };
};

// Model
export type LoginRequest = {
  email: string | null;
  password: string | null;
};

export class LoginServices {
  async handleLogin(request: LoginRequest): Promise<LoginResponse> {
    return new Promise((resolve) => {
      resolve(
        instance.post("/auth/signin", {
          username: request.email,
          password: request.password,
        }),
      );
    });
  }
}
