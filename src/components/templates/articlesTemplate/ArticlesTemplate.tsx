/** ****************************************
 *  Disclaimer : This template is created based on
 *  https://eurisko.atlassian.net/wiki/spaces/EKR/pages/914522133/Redux+ToolKit+Atomic+Architecture
 *  and
 *  https://eurisko.atlassian.net/wiki/spaces/EKR/pages/919076875/Project+skeleton+template
 * using VSCode extension: https://marketplace.visualstudio.com/items?itemName=Huuums.vscode-fast-folder-structure
 ****************************************** */

import React from "react";
import { ArticleTemplateProps } from "./ArticlesTemplate.types";
import Articles from "organisms/articleList/ArticleList";
import { StatusBar, SafeAreaView, View } from "react-native";

const ArticleTemplate: React.FC<ArticleTemplateProps> = ({ data, loadMoreData, searchData, status, refetch }) => {
  return (
    <SafeAreaView>
      <View>
        <StatusBar barStyle="dark-content" />
        <Articles data={data} loadMoreData={loadMoreData} searchData={searchData} status={status} refetch={refetch} />
      </View>
    </SafeAreaView>
  );
};
export default ArticleTemplate;
