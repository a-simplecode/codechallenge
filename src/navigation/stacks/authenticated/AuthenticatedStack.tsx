import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Article from "features/authenticated/articles/Article";
import { Button } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAppDispatch } from "app/hooks";
import { loginSlice } from "features/authentication/login/LoginSlice";
import { showPopup } from "eurisko-platform-common-ui-react-native";

const AuthenticatedStack = createNativeStackNavigator();

const AuthenticatedStackNavigator: React.FC = () => {
  const dispatch = useAppDispatch();
  return (
    <AuthenticatedStack.Navigator>
      <AuthenticatedStack.Screen
        name="article"
        component={Article}
        options={{
          headerTitle: "article amine",
          headerRight: () => (
            <Button
              title="Logout"
              onPress={() => {
                showPopup({
                  title: "Logout",
                  message: "Are you sure you want to logout?",
                  button: [
                    {
                      text: "Cancel",
                      // eslint-disable-next-line no-console
                      onPress: () => console.log("Cancel Pressed"),
                      style: "cancel",
                    },
                    {
                      text: "OK",
                      onPress: () => {
                        AsyncStorage.clear();
                        dispatch(loginSlice.actions.logout());
                      },
                    },
                  ],
                });
              }}
            />
          ),
        }}
      />
    </AuthenticatedStack.Navigator>
  );
};

export default AuthenticatedStackNavigator;
