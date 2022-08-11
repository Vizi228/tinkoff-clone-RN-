import { View, Text, Pressable, Alert } from 'react-native';
import React, { FC } from 'react';
import { IOtherItem } from '../types';
import Icon from './Icon';
import { useTailwind } from 'tailwind-rn/dist';
import { BOX_SHADOW } from '../../../../../styles';
import { handleTransfer } from '../../handleTransfer';
import { useAccounts } from '../../../home/accounts/useAccounts';

interface IOtherItemComponent {
  item: IOtherItem;
  showDialog: (cardNumber: string) => void;
}

const OtherItem: FC<IOtherItemComponent> = ({ item, showDialog }) => {
  const tw = useTailwind();
  const { accounts } = useAccounts();
  return (
    <Pressable
      style={{
        ...tw('ml-4 my-3 items-center justify-center rounded-xl p-2 w-24 h-24 bg-white'),
        ...BOX_SHADOW,
      }}
      onPress={() => console.log('1')}>
      <Icon iconName={item.iconName} />
      <Text>{item.title}</Text>
    </Pressable>
  );
};

export default OtherItem;
