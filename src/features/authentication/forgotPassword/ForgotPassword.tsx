/** ****************************************
 *  Author : Fouad Bakkour
 *  Created On : Wed Dec 07 2022
 *  File : Login.tsx
 ****************************************** */

import React, { useRef, useEffect } from "react";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { LoginNavigationProp } from "navigation/stacks/authentication/AuthenticationStack.types";
import { Text, View } from "react-native";

interface Props {
  route: { params: { email: string } };
}

const ForgotPassword: React.FC<Props> = ({ route }) => {
  const { email } = route.params;
  /**
   * Hooks
   */
  const navigation = useNavigation<LoginNavigationProp>();

  /**
   * References
   */
  const viewDidAppear = useRef(false);

  /**
   * Hooks/State listeners
   */
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log("---- CURRENT SCREEN NAVIGATION ----", navigation);
  }, [navigation]);

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
    <View>
      <Text>{email}</Text>
    </View>
  );
};

export default ForgotPassword;
