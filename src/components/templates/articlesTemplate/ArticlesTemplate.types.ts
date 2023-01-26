/* eslint-disable @typescript-eslint/no-explicit-any */
/** ****************************************
 *  Disclaimer : This template is created based on
 *  https://eurisko.atlassian.net/wiki/spaces/EKR/pages/914522133/Redux+ToolKit+Atomic+Architecture
 *  and
 *  https://eurisko.atlassian.net/wiki/spaces/EKR/pages/919076875/Project+skeleton+template
 * using VSCode extension: https://marketplace.visualstudio.com/items?itemName=Huuums.vscode-fast-folder-structure
 ****************************************** */

import { ArticleModel } from "features/authenticated/articles/ArticleServices";
import { TextStyle, ViewStyle } from "react-native";

type statusEnum = "loading" | "error" | "success" | "idle";

interface ArticleTemplateProps {
  text?: string | string[] | undefined;
  viewStyle?: ViewStyle | ViewStyle[];
  textStyle?: TextStyle | TextStyle[];
  data: ArticleModel[];

  loadMoreData: () => void;

  status: statusEnum;

  // eslint-disable-next-line @typescript-eslint/ban-types
  refetch: () => {};
}

export type { ArticleTemplateProps };
