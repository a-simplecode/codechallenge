import { GestureResponderEvent } from "react-native";

/** ****************************************
 *  Disclaimer : This template is created based on
 *  https://eurisko.atlassian.net/wiki/spaces/EKR/pages/914522133/Redux+ToolKit+Atomic+Architecture
 *  and
 *  https://eurisko.atlassian.net/wiki/spaces/EKR/pages/919076875/Project+skeleton+template
 * using VSCode extension: https://marketplace.visualstudio.com/items?itemName=Huuums.vscode-fast-folder-structure
 ****************************************** */
interface PrimaryButtonProps {
  text: string;
  isLoading?: boolean;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
}

export type { PrimaryButtonProps };
