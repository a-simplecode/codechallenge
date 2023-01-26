/** ****************************************
 *  Author : Fouad Bakkour
 *  Created On : Wed Dec 07 2022
 *  File : Login.tsx
 ****************************************** */

import React, { useRef, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "app/hooks";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { LoginNavigationProp } from "navigation/stacks/authentication/AuthenticationStack.types";

import LoginTemplate from "templates/loginTemplate/LoginTemplate";
import { EmailPasswordInputProps } from "molecules/emailPasswordInput/EmailPasswordInput.types";
import { loginWithEmailAndPassword, selectAccessToken, selectStatus } from "./LoginSlice";

const Login: React.FC = () => {
  /**
   * Hooks
   */
  const accessToken = useAppSelector(selectAccessToken);
  const status = useAppSelector(selectStatus);
  const dispatch = useAppDispatch();
  const navigation = useNavigation<LoginNavigationProp>();

  /**
   * References
   */
  const viewDidAppear = useRef(false);
  const emailPasswordInputRef = useRef<EmailPasswordInputProps | null>(null);
  const email = useRef<string | null>(null);
  const password = useRef<string | null>(null);

  /**
   * Hooks/State listeners
   */
  useEffect(() => {
    // eslint-disable-next-line no-console
    // console.log("---- CURRENT SCREEN NAVIGATION ----", navigation);
  }, [navigation]);

  useEffect(() => {
    if (accessToken != null) {
      // eslint-disable-next-line no-console
      // console.log("accessToken?", accessToken);
    }
  }, [accessToken]);

  /**
   * View did mount / View did un-mount
   */
  useFocusEffect(
    React.useCallback(() => {
      // View did mount
      viewDidAppear.current = true;
      return () => {
        // View did un-mount
        viewDidAppear.current = false;
      };
    }, []),
  );

  /**
   * Render UI
   */
  return (
    <LoginTemplate
      emailPasswordInputRef={emailPasswordInputRef}
      extractValues={(output) => {
        email.current = output.email;
        password.current = output.password;
      }}
      createAccountPressed={() => {
        // eslint-disable-next-line no-console
        console.log("createAccountPressed");
      }}
      loginPressed={() => {
        // Guard null-check first!
        if (emailPasswordInputRef.current?.inputValuesAreValid) {
          // Evaluate the value
          if (emailPasswordInputRef.current.inputValuesAreValid()) {
            dispatch(
              loginWithEmailAndPassword({
                email: email.current ?? "",
                password: password.current ?? "",
              }),
            );
          } else {
            // eslint-disable-next-line no-console
            console.log("loginPressed with errors in the fields");
          }
        }
      }}
      isLoading={status == "loading"}
    ></LoginTemplate>
  );
};

export default Login;
