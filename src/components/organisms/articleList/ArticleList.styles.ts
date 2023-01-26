/** ****************************************
 *  Disclaimer : This template is created based on
 *  https://eurisko.atlassian.net/wiki/spaces/EKR/pages/914522133/Redux+ToolKit+Atomic+Architecture
 *  and
 *  https://eurisko.atlassian.net/wiki/spaces/EKR/pages/919076875/Project+skeleton+template
 * using VSCode extension: https://marketplace.visualstudio.com/items?itemName=Huuums.vscode-fast-folder-structure
 ****************************************** */

import { StyleSheet } from "react-native";
import { verticalScale } from "react-native-size-matters";

export default StyleSheet.create({
  text: {
    color: "white",
    textAlign: "center",
  },
  view: {
    backgroundColor: "grey",
    flex: 0,
  },
  flatlistStyle: {
    marginBottom: verticalScale(45),
  },
});
