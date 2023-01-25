import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
export type AuthenticationStackNavigatorParamList = {
  login: undefined;
  forgotPassword: {
    email: string;
  };
};

export type LoginNavigationProp = NativeStackNavigationProp<AuthenticationStackNavigatorParamList>;
