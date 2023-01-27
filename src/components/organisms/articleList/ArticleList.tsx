/** ****************************************
 *  Disclaimer : This template is created based on
 *  https://eurisko.atlassian.net/wiki/spaces/EKR/pages/914522133/Redux+ToolKit+Atomic+Architecture
 *  and
 *  https://eurisko.atlassian.net/wiki/spaces/EKR/pages/919076875/Project+skeleton+template
 * using VSCode extension: https://marketplace.visualstudio.com/items?itemName=Huuums.vscode-fast-folder-structure
 ****************************************** */

import React from "react";
import { ActivityIndicator, TextInput, View } from "react-native";
import { ArticlesProps } from "./ArticleList.types";
import defaultStyles from "./ArticleList.styles";
import { FlatList, RefreshControl } from "react-native-gesture-handler";
import ArticlesItems from "molecules/articlesItems/ArticlesItems";
import { ArticleModel } from "./ArticleList.types";
import NoDataCard from "atoms/noDataCard/NoDataCard";

const Articles: React.FC<ArticlesProps> = ({ text, viewStyle, data, loadMoreData, status, refetch }) => {
  function renderItem(item: ArticleModel) {
    return <ArticlesItems item={item} />;
  }

  return (
    <View style={[defaultStyles.view, viewStyle]}>
      {status === "loading" && data.length === 0 ? <ActivityIndicator size="large" /> : <></>}
      <View style={defaultStyles.flatlistStyle}>
        <View style={defaultStyles.viewInput}>
          <TextInput
            placeholder="Search ..."
            onChangeText={() => {}}
            defaultValue={text}
          />
        </View>
        {data.length > 0 ? (
          <FlatList
            data={data}
            renderItem={({ item }) => renderItem(item)}
            onEndReached={() => loadMoreData()}
            refreshControl={<RefreshControl refreshing={status === "loading"} onRefresh={() => refetch()} />}
            ListFooterComponent={status === "loading" && data.length !== 0 ? <ActivityIndicator size="large" /> : null}
          />
        ) : (
          <NoDataCard />
        )}
      </View>
    </View>
  );
};
export default Articles;
