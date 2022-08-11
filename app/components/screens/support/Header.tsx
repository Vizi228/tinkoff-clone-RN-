import { View, Text, Image } from 'react-native';
import React from 'react';
import { useTailwind } from 'tailwind-rn/dist';

const Header = () => {
  const tw = useTailwind();
  const logo = require('../../../../assets/logo.png');
  return (
    <View style={tw('flex-row items-center py-1 mb-2 mt-4')}>
      <Image source={logo} style={tw('mr-2 w-32 h-32')} />
      <View>
        <Text style={tw('text-sm text-gray-800 font-medium')}>Support</Text>
        <Text style={tw('text-xs text-gray-500 font-medium')}>We are there 24/7</Text>
      </View>
    </View>
  );
};

export default Header;
