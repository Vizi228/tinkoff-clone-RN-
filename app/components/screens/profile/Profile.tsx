import React from 'react';
import { Text, View } from 'react-native';
import { useTailwind } from 'tailwind-rn/dist';
import { useAuth } from '../../../hooks/useAuth';
import Layout from '../../layouts/Layout';
import ButtonComponent from '../../ui/Button';
import Field from '../../ui/Field';
import Heading from '../../ui/Heading';
import Loader from '../../ui/Loader';
import Padding from '../../ui/Padding';
import { useProfile } from './useProfile';
import { useUpdateProfile } from './useUpdateProfile';

const Profile = () => {
  const tw = useTailwind();
  const { isLoading: isProfileLoading, profile, name, setName } = useProfile();
  const { isLoading, isSuccess, updateProfile } = useUpdateProfile(
    name,
    profile.docId,
    profile.displayName,
  );
  const { logout } = useAuth();
  if (isProfileLoading || isLoading) {
    return <Loader />;
  }
  return (
    <Layout>
      <Heading text={'Profile'} isCenter />
      <Padding>
        {isSuccess && (
          <View style={tw('bg-green-500 p-3 py-2 rounded-lg')}>
            <Text style={tw('text-white text-center')}>Profile updated successfully</Text>
          </View>
        )}
        <Field value={name} onChange={setName} placeholder="Enter name" />
        <ButtonComponent onPress={updateProfile} title="Update profile" />
        <ButtonComponent onPress={logout} title="Log out" />
      </Padding>
    </Layout>
  );
};

export default Profile;
