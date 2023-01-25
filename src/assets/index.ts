/* eslint-disable no-undef */
import { Platform } from "react-native";
import SearchSVG from "./icons/searchSVG.svg";

const fonts = Platform.select({
  ios: {
    regular: "Arial",
    semiBold: "Arial",
  },
  android: {
    regular: "Arial",
    semiBold: "Arial",
  },
});

const icons = {
  icBackArrowWhite: require("./icons/icBackArrowWhite.png"),
  icUsers: require("./icons/icUsers.png"),
};

export { fonts, icons, SearchSVG };
