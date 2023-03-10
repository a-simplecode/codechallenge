/** ****************************************
 *  Disclaimer : This template is created based on
 *  https://eurisko.atlassian.net/wiki/spaces/EKR/pages/914522133/Redux+ToolKit+Atomic+Architecture
 *  and
 *  https://eurisko.atlassian.net/wiki/spaces/EKR/pages/919076875/Project+skeleton+template
 * using VSCode extension: https://marketplace.visualstudio.com/items?itemName=Huuums.vscode-fast-folder-structure
 ****************************************** */

import React from "react";
import { Image, Text, View } from "react-native";
import { ArticlesItemsProps } from "./ArticlesItems.types";
import defaultStyles from "./ArticlesItems.styles";
import moment from "moment";

const ArticlesItems: React.FC<ArticlesItemsProps> = ({ item }) => {
  const imageUrl = "https://static01.nyt.com/" + item.multimedia[0]?.url;

  return (
    <View style={defaultStyles.parentView}>
      <View style={defaultStyles.imageView}>
        {item.multimedia[0]?.url !== undefined ? (
          <Image
            source={{
              uri: imageUrl,
            }}
            style={defaultStyles.image}
          />
        ) : (
          <Image
            source={{
              uri: "https://picsum.photos/200/300",
            }}
            style={defaultStyles.image}
          />
        )}
      </View>
      <View style={defaultStyles.descriptionViewParent}>
        <View>
          <Text numberOfLines={2} style={defaultStyles.title}>
            {item.headline.main}
          </Text>
          <Text numberOfLines={2} style={defaultStyles.description}>
            {item.abstract}
          </Text>
        </View>
        <View style={defaultStyles.dateView}>
          <Text>{moment(item.pub_date).format("DD/MM/YYYY hh:mm a")}</Text>
        </View>
      </View>
    </View>
  );
};
export default ArticlesItems;
