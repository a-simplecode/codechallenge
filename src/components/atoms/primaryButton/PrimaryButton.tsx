/** ****************************************
 *  Disclaimer : This template is created based on
 *  https://eurisko.atlassian.net/wiki/spaces/EKR/pages/914522133/Redux+ToolKit+Atomic+Architecture
 *  and
 *  https://eurisko.atlassian.net/wiki/spaces/EKR/pages/919076875/Project+skeleton+template
 * using VSCode extension: https://marketplace.visualstudio.com/items?itemName=Huuums.vscode-fast-folder-structure
 ****************************************** */

import React from "react";
import { PrimaryButtonProps } from "./PrimaryButton.types";
import defaultStyles from "./PrimaryButton.styles";
import { AppButton } from "eurisko-platform-common-ui-react-native";

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ text, isLoading = false, onPress }) => {
  return (
    <AppButton
      title={text}
      buttonColor="#4A90E2"
      isLoading={isLoading}
      style={defaultStyles.button}
      onPress={onPress}
      titleLineHeight={20}
    />
  );
};
export default PrimaryButton;
