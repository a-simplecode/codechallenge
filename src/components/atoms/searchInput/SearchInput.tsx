import React from "react";
import { SearchInputProps } from "./SearchInput.types";
import defaultStyles from "./SearchInput.styles";
import { TextInput, View } from "react-native";

const SearchInput: React.FC<SearchInputProps> = ({ viewStyle, searchData }) => {
  return (
    <View style={[defaultStyles.view, viewStyle]}>
      <TextInput placeholder="Search ..." onChangeText={(txt) => searchData(txt)} />
    </View>
  );
};
export default SearchInput;
