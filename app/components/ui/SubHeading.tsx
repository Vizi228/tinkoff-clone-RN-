import { Text } from 'react-native';
import React, { FC } from 'react';
import { useTailwind } from 'tailwind-rn/dist';
import Padding from './Padding';

const SubHeading: FC<{ text: string }> = ({ text }) => {
  const tw = useTailwind();
  return (
    <Padding>
      <Text style={tw(`text-xl font-bold text-gray-800`)}>{text}</Text>
    </Padding>
  );
};

export default SubHeading;
