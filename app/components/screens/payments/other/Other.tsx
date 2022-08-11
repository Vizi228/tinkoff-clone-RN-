import { View, Text, ScrollView } from 'react-native';
import React, { FC } from 'react';
import { useTailwind } from 'tailwind-rn/dist';
import SubHeading from '../../../ui/SubHeading';
import Loader from '../../../ui/Loader';
import { otherItems } from './data';
import OtherItem from './item/OtherItem';

interface IOther {
  showDialog: (cardNumber: string) => void;
}

const Other: FC<IOther> = ({ showDialog }) => {
  const tw = useTailwind();
  return (
    <View>
      <SubHeading text="Other transfers" />
      <ScrollView horizontal style={tw('py-5')} showsHorizontalScrollIndicator={false}>
        {otherItems.map((item) => (
          <OtherItem showDialog={showDialog} key={item.title} item={item} />
        ))}
      </ScrollView>
    </View>
  );
};

export default Other;
