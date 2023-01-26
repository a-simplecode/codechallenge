/** ****************************************
 *  Disclaimer : This template is created based on
 *  https://eurisko.atlassian.net/wiki/spaces/EKR/pages/914522133/Redux+ToolKit+Atomic+Architecture
 *  and
 *  https://eurisko.atlassian.net/wiki/spaces/EKR/pages/919076875/Project+skeleton+template
 * using VSCode extension: https://marketplace.visualstudio.com/items?itemName=Huuums.vscode-fast-folder-structure
 ****************************************** */

import React, { useRef, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "app/hooks";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { NavigationProp } from "navigation/stacks/authentication/AuthenticationStack.types"; // TODO: - Fix this or remove it
import { decrement, increment, incrementAsync, incrementByAmount, selectCount, selectStatus } from "./<FTName | pascalcase>Slice";

const <FTName | pascalcase >: React.FC = () => {
  /**
   * Hooks
   */
  const count = useAppSelector(selectCount);
  const status = useAppSelector(selectStatus);
  const dispatch = useAppDispatch();
  // TODO: - Fix this or remove it
  const navigation = useNavigation<NavigationProp>();

  /**
   * References
   */
  const componentIsMounted = useRef(false);

  /**
   * Hooks/State listeners
   */
  useEffect(() => {
    // eslint-disable-next-line no-console
    // console.log("---- CURRENT SCREEN NAVIGATION ----", navigation);
  }, [navigation]);

  /**
   * View did mount / View did un-mount
   */
  useFocusEffect(
    React.useCallback(() => {
      // View did mount
      componentIsMounted.current = true;
      return () => {
        // View did un-mount
        componentIsMounted.current = false;
      };
    }, []),
  );

  /**
   * Increment Async pressed
   */
  const incrementAsyncPressed = (): void => {
    dispatch(incrementAsync(1));
  };

  /**
   * Decrement pressed
   */
  const decrementPressed = (): void => {
    dispatch(decrement());
  };

  /**
   * Increment pressed
   */
  const incrementPressed = (): void => {
    dispatch(increment());
  };

  /**
   * Increment by amount pressed
   */
  const incrementByAmountPressed = (): void => {
    dispatch(incrementByAmount(10));
  };

  /**
   * Render UI
   */
  return (
    <YouComponentHere></YouComponentHere> // TODO: - Fix this or remove it
  );
};

export default <FTName | pascalcase >;
