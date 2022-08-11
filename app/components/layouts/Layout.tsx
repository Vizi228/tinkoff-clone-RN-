import React, { FC } from 'react';
import { ScrollView, View } from 'react-native';
import { useTailwind } from 'tailwind-rn/dist';

type ILayout = {
  isScrollView?: boolean;
};

export const styleCenter = 'h-full w-full bg-white pt-16';

const Layout: FC<ILayout> = ({ children, isScrollView = true }) => {
  const tw = useTailwind();

  return (
    <View style={tw(styleCenter)}>
      {isScrollView ? <ScrollView>{children}</ScrollView> : children}
    </View>
  );
};

export default Layout;
