import React, { useRef } from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import styles from "./AppNavigation.styles";
import AuthenticationStack from "./stacks/authentication/AuthenticationStack";

// App Stacks
const AppNavigation: React.FC = () => {
  const isLoggedIn = useRef(false).current;
  return (
    <View style={styles.window}>
      <NavigationContainer>{isLoggedIn ? <AuthenticationStack /> : <AuthenticationStack />}</NavigationContainer>
    </View>
  );
};
export default AppNavigation;
