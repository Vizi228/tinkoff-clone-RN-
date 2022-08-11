import { View, Text, ImageBackground, ImageSourcePropType } from 'react-native';
import React, { FC } from 'react';
import { IAccount } from '../types';
import { useTailwind } from 'tailwind-rn/dist';

const ImageCard: FC<{ account: IAccount }> = ({ account: { name, cardNumber } }) => {
  const tw = useTailwind();
  const blackImage: ImageSourcePropType = require('../../../../../../assets/card-black.png');
  const allAirlinesImage: ImageSourcePropType = require('../../../../../../assets/card-allAirlines.png');
  return (
    <ImageBackground
      source={name === 'Tinkoff All Airlines' ? allAirlinesImage : blackImage}
      resizeMode="contain"
      style={{ ...tw('justify-end w-14 h-10'), padding: 4.5 }}>
      <Text style={{ ...tw('text-white font-medium'), fontSize: 11 }}>{cardNumber.slice(-4)}</Text>
    </ImageBackground>
  );
};

export default ImageCard;
