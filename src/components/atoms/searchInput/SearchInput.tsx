import React from "react";
import { SearchInputProps } from "./SearchInput.types";
import defaultStyles from "./SearchInput.styles";
import { Text, TextInput, View } from "react-native";

const SearchInput: React.FC<SearchInputProps> = ({ viewStyle, searchData }) => {
  const inputRef = React.createRef<TextInput>();

  const clearSearch = () => {
    inputRef.current?.clear();
    searchData("");
  };
  return (
    <View style={[defaultStyles.view, viewStyle]}>
      <TextInput ref={inputRef} placeholder="Search ..." onChangeText={(txt) => searchData(txt)} />
      <Text style={defaultStyles.clear} onPress={clearSearch}>
        X
      </Text>
    </View>
  );
};
export default SearchInput;
