/** ****************************************
 *  Disclaimer : This template is created based on
 *  https://eurisko.atlassian.net/wiki/spaces/EKR/pages/914522133/Redux+ToolKit+Atomic+Architecture
 *  and
 *  https://eurisko.atlassian.net/wiki/spaces/EKR/pages/919076875/Project+skeleton+template
 * using VSCode extension: https://marketplace.visualstudio.com/items?itemName=Huuums.vscode-fast-folder-structure
 ****************************************** */

import { StyleSheet } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";

export default StyleSheet.create({
  text: {
    color: "white",
    textAlign: "center",
  },
  view: {
    backgroundColor: "white",
    flex: 0,
  },
  parentView: {
    marginHorizontal: scale(10),
    marginVertical: verticalScale(10),
    backgroundColor: "white",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: verticalScale(100),
    borderRadius: 10,
    overflow: "hidden",
  },
  imageView: {
    flex: 0.35,
    height: "100%",
  },
  image: { width: "100%", height: "100%" },
  descriptionViewParent: {
    flex: 0.62,
    display: "flex",
    flexDirection: "column",
    height: "100%",
    justifyContent: "space-around",
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
  },
  description: {
    fontSize: 13,
    color: "#9da19e",
  },
  dateView: {
    display: "flex",
    flexDirection: "column",
  },
});
