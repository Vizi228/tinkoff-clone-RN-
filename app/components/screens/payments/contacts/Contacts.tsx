import { View, Text, ScrollView } from 'react-native';
import React, { FC } from 'react';
import { useContacts } from './useContacts';
import { useTailwind } from 'tailwind-rn/dist';
import SubHeading from '../../../ui/SubHeading';
import Loader from '../../../ui/Loader';
import ContactItem from './ContactItem';
interface IContacts {
  showDialog: (cardNumber: string) => void;
}
const Contacts: FC<IContacts> = ({ showDialog }) => {
  const { contacts, isLoading } = useContacts();
  const tw = useTailwind();
  if (isLoading) {
    return <Loader />;
  }
  return (
    <View style={tw('my-8')}>
      <SubHeading text="Phone transfers" />
      <ScrollView horizontal style={tw('mt-5')} showsHorizontalScrollIndicator={false}>
        {contacts.map((c) => (
          <ContactItem showDialog={showDialog} key={c._id} contact={c} />
        ))}
      </ScrollView>
    </View>
  );
};

export default Contacts;
