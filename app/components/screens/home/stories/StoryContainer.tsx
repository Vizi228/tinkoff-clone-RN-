import { View, Text } from 'react-native';
import React from 'react';
import { useData } from '../../../../hooks/useData';
//@ts-ignore
import { StoryContainer as SC } from 'react-native-stories-view';
import { useTailwind } from 'tailwind-rn/dist';

const StoryContainer = () => {
  const { activeStories, setActiveStories } = useData();
  const tw = useTailwind();
  return (
    activeStories && (
      <SC
        visible
        enableProgres
        images={activeStories}
        duration={20}
        onComplete={() => setActiveStories(null)}
        containerStyle={tw('w-full h-full')}
      />
    )
  );
};

export default StoryContainer;
