import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './app/navigation/Navigation';
import { AuthProvider } from './app/providers/AuthProvider';
import { TailwindProvider } from 'tailwind-rn/dist';
import utilities from './tailwind.json';
import { DataProvider } from './app/providers/DataProvider';
import StoryContainer from './app/components/screens/home/stories/StoryContainer';

export default function App() {
  return (
    <AuthProvider>
      <DataProvider>
        <TailwindProvider utilities={utilities}>
          <StoryContainer />
          <Navigation />
        </TailwindProvider>
      </DataProvider>
    </AuthProvider>
  );
}
