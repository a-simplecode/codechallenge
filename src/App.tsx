import React from "react";
import { LogBox } from "react-native";
import { Provider } from "react-redux";
import { store } from "app/store";
import Config from "react-native-config";
import AppNavigation from "navigation/AppNavigation";
LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

const App: React.FC = () => {
  const logCurrentEnvironment = (): void => {
    /**
     * LEAVE THIS FUNCTION AS IS
     * [iOS] if the env values didn't change, open XCode, hit command+k and command+shift+k
     *  once the clean completed, try again
     */
    // eslint-disable-next-line no-console
    console.log("====== Current environment ====== : ", Config.ENV_TYPE);
  };
  return (
    <>
      {logCurrentEnvironment()}
      <Provider store={store}>
        <AppNavigation />
      </Provider>
    </>
  );
};

export default App;
