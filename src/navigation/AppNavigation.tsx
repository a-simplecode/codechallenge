import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import styles from "./AppNavigation.styles";
import AuthenticationStack from "./stacks/authentication/AuthenticationStack";
import AuthenticatedStack from "./stacks/authenticated/AuthenticatedStack";
import { useAppSelector } from "app/hooks";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ENCRYPTION_ENUM from "utilities/encryption/encryptionEnum";

// App Stacks
const AppNavigation: React.FC = () => {
  const isLogin = useAppSelector((state) => state.login.status);

  const [token, setToken] = useState("");
  const [isReady, setIsReady] = useState(false);

  const getData = async () => {
    const data = (await AsyncStorage.getItem(ENCRYPTION_ENUM.access_token)) || "";
    setToken(data);
    setIsReady(true);
  };
  const RenderNavigation: React.FC = () => {
    if (!isReady) return null;
    if (token) return <AuthenticatedStack />;
    return <AuthenticationStack />;
  };

  useEffect(() => {
    getData();
  }, [isLogin]);

  return (
    <View style={styles.window}>
      <NavigationContainer>
        <RenderNavigation />
      </NavigationContainer>
    </View>
  );
};
export default AppNavigation;
