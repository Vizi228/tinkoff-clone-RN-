import React from 'react';
import { Text } from 'react-native';
import { useTailwind } from 'tailwind-rn/dist';
import { useAuth } from '../../../hooks/useAuth';
import Layout from '../../layouts/Layout';
import ButtonComponent from '../../ui/Button';
import Padding from '../../ui/Padding';
import Accounts from './accounts/Accounts';
import ApplyNewProducts from './accounts/apply-new-products/ApplyNewProducts';
import Header from './Header';
import Stories from './stories/Stories';

type Props = {};

const Home = (props: Props) => {
  const tw = useTailwind();
  return (
    <Layout>
      <Header />
      <Stories />
      <Accounts />
      <ApplyNewProducts />
    </Layout>
  );
};

export default Home;
