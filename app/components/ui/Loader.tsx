import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { useTailwind } from 'tailwind-rn/dist';

const Loader = () => {
  const tw = useTailwind();
  return (
    <View style={tw('flex-row h-full justify-center items-center')}>
      <ActivityIndicator size="large" color="yellow" />
    </View>
  );
};

export default Loader;
