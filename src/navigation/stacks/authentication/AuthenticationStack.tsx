import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthenticationStackNavigatorParamList } from "./AuthenticationStack.types";
import Login from "features/authentication/login/Login";

const AuthenticationStack = createNativeStackNavigator<AuthenticationStackNavigatorParamList>();

const AuthenticationStackNavigator: React.FC = () => {
  return (
    <AuthenticationStack.Navigator>
      <AuthenticationStack.Screen name="login" component={Login} options={{ headerTitle: "Screen title" }} />
    </AuthenticationStack.Navigator>
  );
};

export default AuthenticationStackNavigator;
