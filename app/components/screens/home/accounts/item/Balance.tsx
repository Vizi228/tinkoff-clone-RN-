import { View, Text } from 'react-native';
import React, { FC } from 'react';
import { IAccount } from '../types';
import { useTailwind } from 'tailwind-rn/dist';
import 'intl';
import 'intl/locale-data/jsonp/en';
const Balance: FC<{ account: IAccount }> = ({ account: { balance, currency, name } }) => {
  const tw = useTailwind();
  return (
    <View style={tw('w-2/3 ml-3')}>
      <Text style={{ fontSize: 15 }}>{name}</Text>
      <Text style={{ ...tw('font-bold'), marginTop: 2, fontSize: 15 }}>
        {new Intl.NumberFormat(undefined, {
          currency,
          style: 'currency',
        }).format(balance)}
      </Text>
    </View>
  );
};

export default Balance;
