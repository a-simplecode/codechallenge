import { ViewStyle } from "react-native";

interface SearchInputProps {
  viewStyle?: ViewStyle | ViewStyle[];
  searchData: (s: string) => void;
}

export type { SearchInputProps };
