/** ****************************************
 *  Disclaimer : This template is created based on
 *  https://eurisko.atlassian.net/wiki/spaces/EKR/pages/914522133/Redux+ToolKit+Atomic+Architecture
 *  and
 *  https://eurisko.atlassian.net/wiki/spaces/EKR/pages/919076875/Project+skeleton+template
 * using VSCode extension: https://marketplace.visualstudio.com/items?itemName=Huuums.vscode-fast-folder-structure
 ****************************************** */

import React from "react";
import { Text, View } from "react-native";
import { <FTName | pascalcase>Props } from "./<FTName | pascalcase>.types";
import defaultStyles from "./<FTName | pascalcase>.styles";

const <FTName | pascalcase>: React.FC<<FTName | pascalcase>Props> = ({ text, textStyle, viewStyle }) => {
  return (
    <View style={[defaultStyles.view, viewStyle]}>
      <Text style={[defaultStyles.text, textStyle]}>{text}</Text>
    </View>
  );
};
export default <FTName | pascalcase>;
