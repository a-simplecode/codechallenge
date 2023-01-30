/** ****************************************
 *  Disclaimer : This template is created based on
 *  https://eurisko.atlassian.net/wiki/spaces/EKR/pages/914522133/Redux+ToolKit+Atomic+Architecture
 *  and
 *  https://eurisko.atlassian.net/wiki/spaces/EKR/pages/919076875/Project+skeleton+template
 * using VSCode extension: https://marketplace.visualstudio.com/items?itemName=Huuums.vscode-fast-folder-structure
 ****************************************** */

import { TextStyle, ViewStyle } from "react-native";
export interface ArticleModel {
  abstract: string;
  source: string;
  multimedia: { url: string }[];
  pub_date: string;
}

type statusEnum = "loading" | "error" | "success" | "idle";
interface ArticlesProps {
  text?: string | string[] | undefined;
  viewStyle?: ViewStyle | ViewStyle[];
  textStyle?: TextStyle | TextStyle[];

  data: ArticleModel[];

  loadMoreData: () => void;
  searchData: (s: string) => void;

  status: statusEnum;

  // eslint-disable-next-line @typescript-eslint/ban-types, @typescript-eslint/no-explicit-any
  refetch: () => {};
}

export type { ArticlesProps };
