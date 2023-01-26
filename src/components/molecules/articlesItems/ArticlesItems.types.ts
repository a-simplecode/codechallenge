/** ****************************************
 *  Disclaimer : This template is created based on
 *  https://eurisko.atlassian.net/wiki/spaces/EKR/pages/914522133/Redux+ToolKit+Atomic+Architecture
 *  and
 *  https://eurisko.atlassian.net/wiki/spaces/EKR/pages/919076875/Project+skeleton+template
 * using VSCode extension: https://marketplace.visualstudio.com/items?itemName=Huuums.vscode-fast-folder-structure
 ****************************************** */

import { ItemProps } from "features/authenticated/articles/ArticleServices";
import { TextStyle, ViewStyle } from "react-native";

interface ArticlesItemsProps {
  text?: string | string[] | undefined;
  viewStyle?: ViewStyle | ViewStyle[];
  textStyle?: TextStyle | TextStyle[];
  item: ItemProps;
}

export type { ArticlesItemsProps };
