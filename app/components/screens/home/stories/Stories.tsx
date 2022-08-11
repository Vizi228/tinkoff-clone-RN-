import { View, Text, ScrollView } from 'react-native';
import React, { FC } from 'react';
import { useStories } from './useStories';
import Loader from '../../../ui/Loader';
import { useTailwind } from 'tailwind-rn/dist';
import StoryItem from './StoryItem';

const Stories: FC = () => {
  const tw = useTailwind();
  const { stories, isLoading } = useStories();
  if (isLoading) {
    return <Loader />;
  }
  return (
    <View style={tw('my-7')}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {stories && stories.map((story) => <StoryItem key={story._id} story={story} />)}
      </ScrollView>
    </View>
  );
};

export default Stories;
