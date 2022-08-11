import React, { useState } from 'react';
import { Text } from 'react-native';
import Layout from '../../layouts/Layout';
import Heading from '../../ui/Heading';
import Prompt from '../../ui/Prompt';
import { useAccounts } from '../home/accounts/useAccounts';
import Contacts from './contacts/Contacts';
import { handleTransfer } from './handleTransfer';
import Other from './other/Other';

const Payments = () => {
  const { accounts } = useAccounts();
  const [dialogVisible, setDialogVisible] = useState(false);
  const [sum, setSum] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const showDialog = (cardNumber: string) => {
    setDialogVisible(true);
    setCardNumber(cardNumber);
  };
  const handleTransaction = () => {
    handleTransfer(accounts[0], cardNumber, sum);
    setCardNumber('');
    setSum('');
    setDialogVisible(false);
  };

  return (
    <Layout>
      <Heading text="Payment" />
      <Contacts showDialog={showDialog} />
      <Other showDialog={showDialog} />
      <Prompt
        dialogVisible={dialogVisible}
        setDialogVisible={setDialogVisible}
        value={sum}
        onSubmit={handleTransaction}
        setValue={setSum}
      />
    </Layout>
  );
};

export default Payments;
