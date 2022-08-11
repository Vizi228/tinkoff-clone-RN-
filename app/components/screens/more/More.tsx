import React, { FC } from 'react';
import { Text } from 'react-native';
import { useTailwind } from 'tailwind-rn/dist';
import Layout from '../../layouts/Layout';
import Heading from '../../ui/Heading';
import Padding from '../../ui/Padding';
import Currencies from './currencies/Currencies';
import Menu from './menu/Menu';

const More: FC = () => {
  const tw = useTailwind();
  return (
    <Layout>
      <Heading text="More" />
      <Padding>
        <Currencies />
        <Menu />
        <Text style={tw('text-center text-gray-500 opacity-50 my-4')}>Version 1.0.1</Text>
      </Padding>
    </Layout>
  );
};

export default More;
