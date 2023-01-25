/** ****************************************
 *  Author : Fouad Bakkour
 *  Created On : Wed Dec 07 2022
 *  File : LoginScreen.ts
 ****************************************** */

import React from "react";
import { StatusBar, View } from "react-native";
import { LoginTemplateProps } from "./LoginTemplate.types";
import styles from "./LoginTemplate.styles";
import AuthorizationInteractions from "organisms/authorizationInteractions/AuthorizationInteractions";

const LoginTemplate: React.FC<LoginTemplateProps> = ({
  isLoading,
  loginPressed,
  createAccountPressed,
  extractValues,
  emailPasswordInputRef,
}) => {
  return (
    <View style={styles.window}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.screen}>
        <AuthorizationInteractions
          isLoading={isLoading}
          emailPasswordInputRef={emailPasswordInputRef}
          createAccountPressed={createAccountPressed}
          loginPressed={loginPressed}
          extractValues={extractValues}
        />
      </View>
    </View>
  );
};
export default LoginTemplate;
