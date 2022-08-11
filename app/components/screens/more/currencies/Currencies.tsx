import { View, Text } from 'react-native';
import React, { FC } from 'react';
import { useTailwind } from 'tailwind-rn/dist';
import { useCurrencies } from './useCurrencies';
import { BOX_SHADOW } from '../../../../styles';
import Loader from '../../../ui/Loader';
const Currencies: FC = () => {
  const tw = useTailwind();
  const { currencies, isLoading } = useCurrencies();
  if (isLoading) {
    return <Loader />;
  }
  return (
    <View
      style={{ ...tw('mt-5 flex-row rounded-2xl bg-white py-3 justify-center'), ...BOX_SHADOW }}>
      {currencies.map((cur) => (
        <View
          key={cur.name}
          style={{ ...tw('text-xs w-1/3 flex-row justify-center'), ...BOX_SHADOW }}>
          <Text style={tw('text-gray-400 mr-1')}>{cur.name} </Text>
          <Text style={tw('text-gray-800')}>{cur.value}</Text>
        </View>
      ))}
    </View>
  );
};

export default Currencies;
