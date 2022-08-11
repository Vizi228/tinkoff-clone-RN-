import React, { FC } from 'react';
import { Text, View } from 'react-native';
import { useTailwind } from 'tailwind-rn/dist';
import Layout from '../../layouts/Layout';
import { services } from './data';
import ServiceItem from './item/ServiceItem';

const Services: FC = () => {
  const tw = useTailwind();
  return (
    <Layout>
      <Text style={tw('text-center text-lg mb-6')}>Lviv</Text>
      <View style={tw('flex-row flex-wrap justify-center')}>
        {services &&
          services.map((service) => <ServiceItem key={service.title} service={service} />)}
      </View>
    </Layout>
  );
};

export default Services;
