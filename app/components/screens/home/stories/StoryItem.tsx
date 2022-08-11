import { View, Text, Pressable, ImageBackground } from 'react-native';
import React, { FC } from 'react';
import { IStory } from './types';
import { useTailwind } from 'tailwind-rn/dist';
import { useData } from '../../../../hooks/useData';

const StoryItem: FC<{ story: IStory }> = ({ story }) => {
  const tw = useTailwind();
  const { setActiveStories } = useData();
  return (
    <Pressable onPress={() => setActiveStories(story.images)}>
      <View
        style={{
          ...tw('w-24 h-24 rounded-2xl ml-4 border-solid border-blue-400'),
          padding: 2,
          borderWidth: 1,
        }}>
        <ImageBackground
          imageStyle={tw('rounded-xl')}
          style={tw('w-full h-full justify-end')}
          source={{ uri: story.images[0] }}
          resizeMode="cover">
          <Text style={{ ...tw('text-white'), fontSize: 12, margin: 8 }}>{story.heading}</Text>
        </ImageBackground>
      </View>
    </Pressable>
  );
};

export default StoryItem;
