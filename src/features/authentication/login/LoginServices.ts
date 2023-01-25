// Model
export type LoginResponse = {
  accessToken?: string | undefined;
};
// Model
export type LoginRequest = {
  email: string;
  password: string;
};

export class LoginServices {
  async fakeLogin(request: LoginRequest): Promise<LoginResponse> {
    return new Promise((resolve) =>
      setTimeout(() => {
        return resolve({ accessToken: `AccessToken for ${request.email}` });
      }, 500),
    );
  }
}
