import { StyleSheet, Text, View } from 'react-native';
import React, { FC } from 'react';
import { useTailwind } from 'tailwind-rn/dist';
import { menu } from './list';
import MenuItem from './MenuItem';

const Menu: FC = () => {
  const tw = useTailwind();
  return (
    <View>
      {menu.map((item, i) => (
        <MenuItem key={i} item={item} />
      ))}
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({});
