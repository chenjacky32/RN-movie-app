import { icons } from "@/constants/icons";
import React from "react";
import { Image, TextInput, View } from "react-native";

interface SearchBarProps {
  placeholder: string;
  onPress?: () => void;
}

const SearchBar = ({ placeholder, onPress }: SearchBarProps) => {
  return (
    <View className="flex-row items-center px-5 py-4 rounded-full bg-dark-200">
      <Image source={icons.search} className="size-5" resizeMode="contain" tintColor="#ab8bff" />
      <TextInput className="flex-1 ml-2 text-white" onPress={onPress} placeholder={placeholder} value="" onChangeText={() => {}} placeholderTextColor="#a8b5db" />
    </View>
  );
};

export default SearchBar;
