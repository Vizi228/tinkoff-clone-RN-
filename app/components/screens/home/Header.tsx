import { Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useTailwind } from 'tailwind-rn/dist';
import Padding from '../../ui/Padding';
import Avatar from '../../ui/Avatar';
import { useNavigation } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons';
import { useProfile } from '../profile/useProfile';
import Loader from '../../ui/Loader';

const Header = () => {
  const { isLoading, name } = useProfile();
  const tw = useTailwind();
  const { navigate } = useNavigation();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Padding style={tw('flex-row items-center')}>
      <Avatar name={name} />
      <TouchableOpacity onPress={() => navigate('Profile')} style={tw('flex-row items-end')}>
        <Text style={tw('text-2xl text-gray-800 font-bold')}>{name}</Text>
        <Entypo name="chevron-small-right" size={28} style={tw('text-gray-800')} />
      </TouchableOpacity>
    </Padding>
  );
};

export default Header;
