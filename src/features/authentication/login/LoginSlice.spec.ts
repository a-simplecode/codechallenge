import { configureStore } from "@reduxjs/toolkit";
import { LoginServices } from "./LoginServices";
import { loginSlice, loginWithEmailAndPassword } from "./LoginSlice";

describe("Test Login integration", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });
  test("should login data fulfilled", async () => {
    jest.spyOn(LoginServices.prototype, "fakeLogin").mockResolvedValueOnce({ accessToken: "123" });
    const store = configureStore({ reducer: loginSlice.reducer });
    await store.dispatch(loginWithEmailAndPassword({ email: "sdf@sdf.sdf", password: "123" }));
    expect(store.getState()).toEqual({
      status: "idle",
      value: {
        accessToken: "123",
      },
    });
  });
});
