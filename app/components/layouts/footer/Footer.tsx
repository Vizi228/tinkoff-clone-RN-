import { View, Text } from 'react-native';
import React, { FC } from 'react';
import Padding from '../../ui/Padding';
import { useTailwind } from 'tailwind-rn/dist';
import NavItem from './NavItem';
import { menu } from './menu';
import { TypeRootStackParamList } from '../../../navigation/types';

interface IFooter {
  navigate: (screenName: keyof TypeRootStackParamList) => void;
  currentRoute: string;
}

const Footer: FC<IFooter> = ({ navigate, currentRoute }) => {
  const tw = useTailwind();
  return (
    <Padding
      style={{
        ...tw('flex-row justify-between items-center w-full bg-gray-50 px-0 pb-5 pt-2'),
        borderTopColor: '#E1E1E1',
        borderTopWidth: 1,
      }}>
      {menu.map((nav) => (
        <NavItem currentRoute={currentRoute} key={nav.title} navigate={navigate} item={nav} />
      ))}
    </Padding>
  );
};

export default Footer;
