/** ****************************************
 *  Disclaimer : This template is created based on
 *  https://eurisko.atlassian.net/wiki/spaces/EKR/pages/914522133/Redux+ToolKit+Atomic+Architecture
 *  and
 *  https://eurisko.atlassian.net/wiki/spaces/EKR/pages/919076875/Project+skeleton+template
 * using VSCode extension: https://marketplace.visualstudio.com/items?itemName=Huuums.vscode-fast-folder-structure
 ****************************************** */

import React from "react";
import { SecondaryButtonProps } from "./SecondaryButton.types";
import defaultStyles from "./SecondaryButton.styles";
import { AppButton } from "eurisko-platform-common-ui-react-native";

const SecondaryButton: React.FC<SecondaryButtonProps> = ({ text, isLoading }) => {
  return <AppButton title={text} buttonColor="red" isLoading={isLoading} style={defaultStyles.button} />;
};
export default SecondaryButton;
