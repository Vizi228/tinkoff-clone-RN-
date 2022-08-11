import { View, Text, TouchableHighlight } from 'react-native';
import React, { FC } from 'react';
import { useTailwind } from 'tailwind-rn/dist';

interface IButton {
  onPress: () => void;
  title: string;
  colors?: [string, string];
}

const ButtonComponent: FC<IButton> = ({
  onPress,
  title,
  colors = ['bg-yellow-300', '#FBBF24'],
}) => {
  const tw = useTailwind();
  return (
    <TouchableHighlight
      style={tw(`${colors[0]} text-gray-800 rounded-xl w-full my-4 py-4`)}
      onPress={onPress}
      underlayColor={colors[1]}>
      <Text style={tw('text-center')}>{title}</Text>
    </TouchableHighlight>
  );
};

export default ButtonComponent;
