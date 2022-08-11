import { View, Text } from 'react-native';
import React, { FC } from 'react';
import { IFooterItem } from '../../../../layouts/footer/types';
import { AntDesign } from '@expo/vector-icons';
import { useTailwind } from 'tailwind-rn/dist';

interface IICon extends Pick<IFooterItem, 'iconName'> {}

const Icon: FC<IICon> = ({ iconName }) => {
  const tw = useTailwind();
  return (
    <View style={tw('rounded-full bg-blue-500 w-8 h-8 items-center justify-center')}>
      <AntDesign size={19} color="#EDF4FE" name={iconName} />
    </View>
  );
};

export default Icon;
