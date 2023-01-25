import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthenticationStackNavigatorParamList } from "./AuthenticationStack.types";
import Login from "features/authentication/login/Login";
import ForgotPassword from "features/authentication/forgotPassword/ForgotPassword";

const AuthenticationStack = createNativeStackNavigator<AuthenticationStackNavigatorParamList>();

const AuthenticationStackNavigator: React.FC = () => {
  return (
    <AuthenticationStack.Navigator>
      <AuthenticationStack.Screen name="login" component={Login} options={{ headerTitle: "Screen title" }} />
      <AuthenticationStack.Screen
        name="forgotPassword"
        component={ForgotPassword}
        options={{ headerTitle: "forgot password" }}
      />
    </AuthenticationStack.Navigator>
  );
};

export default AuthenticationStackNavigator;
