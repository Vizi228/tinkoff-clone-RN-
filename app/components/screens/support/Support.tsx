import React, { FC } from 'react';
import { ScrollView, Text } from 'react-native';
import Layout from '../../layouts/Layout';
import Heading from '../../ui/Heading';
import Padding from '../../ui/Padding';
import Field from './Field';
import Header from './Header';
import Message from './Message';
import { useMessages } from './useMessages';

const Support: FC = () => {
  const { messages } = useMessages();

  return (
    <Layout isScrollView={false}>
      <Padding>
        <Header />

        <ScrollView style={{ height: '64%' }}>
          {messages.map((msg, i) => (
            <Message key={i} message={msg} />
          ))}
        </ScrollView>
        <Field />
      </Padding>
    </Layout>
  );
};

export default Support;
