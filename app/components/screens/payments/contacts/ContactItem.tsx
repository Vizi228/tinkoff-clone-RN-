import { View, Text, Pressable, Alert } from 'react-native';
import React, { FC, useEffect } from 'react';
import { IContact } from './types';
import { useTailwind } from 'tailwind-rn/dist';
import Avatar from '../../../ui/Avatar';
import { handleTransfer } from '../handleTransfer';

interface IContactItem {
  contact: IContact;
  showDialog: (cardNumber: string) => void;
}

const ContactItem: FC<IContactItem> = ({ contact, showDialog }) => {
  const tw = useTailwind();
  return (
    <Pressable onPress={() => showDialog(contact.cardNumber)} style={tw('ml-4 mr-1 items-center')}>
      <Avatar size="large" name={contact.displayName} />
      <Text>{contact.displayName}</Text>
    </Pressable>
  );
};

export default ContactItem;
