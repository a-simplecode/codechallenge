import React from "react";
import { NoDataCardProps } from "./NoDataCard.types";
import defaultStyles from "./NoDataCard.styles";
import { Text, View } from "react-native";

const NoDataCard: React.FC<NoDataCardProps> = ({ text = "No Data Found", viewStyle, textStyle }) => {
  return (
    <View style={[defaultStyles.view, viewStyle]}>
      <Text style={[defaultStyles.text, textStyle]}>{text}</Text>
    </View>
  );
};
export default NoDataCard;
