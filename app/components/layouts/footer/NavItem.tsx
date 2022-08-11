import { View, Text, Pressable } from 'react-native';
import React, { FC, useState } from 'react';
import { IFooterItem } from './types';
import { useTailwind } from 'tailwind-rn/dist';
import { AntDesign } from '@expo/vector-icons';
import { TypeRootStackParamList } from '../../../navigation/types';

interface INavItem {
  item: IFooterItem;
  navigate: (screenName: keyof TypeRootStackParamList) => void;
  currentRoute: string;
}

const NavItem: FC<INavItem> = ({ item, navigate, currentRoute }) => {
  const tw = useTailwind();
  const isActive = item.title === currentRoute;
  return (
    <Pressable onPress={() => navigate(item.title)} style={{ ...tw('items-center'), width: '20%' }}>
      <AntDesign
        name={item.iconName}
        style={tw(`text-xl ${isActive ? 'text-blue-500' : 'text-gray-500'}`)}
      />
      <Text
        style={{ ...tw(`text-xs ${isActive ? 'text-blue-500' : 'text-gray-500'}`), marginTop: 1 }}>
        {item.title}
      </Text>
    </Pressable>
  );
};

export default NavItem;
