import { View, Text, TextInput, Pressable, Alert } from 'react-native';
import React, { useState } from 'react';
import { useAuth } from '../../../hooks/useAuth';
import { useTailwind } from 'tailwind-rn/dist';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../../../firebase';

const Field = () => {
  const { user } = useAuth();
  const [message, setMessage] = useState('');
  const tw = useTailwind();
  const handleSendMessage = async () => {
    try {
      await addDoc(collection(db, 'messages'), {
        timestamp: serverTimestamp(),
        userId: user?.uid,
        text: message,
      });
    } catch (error: any) {
      Alert.alert('Err add new msg: ', error.message);
    } finally {
      setMessage('');
    }
  };

  return (
    <View style={tw('mt-3 flex-row items-center justify-between py-1')}>
      <TextInput
        placeholder="Enter your message"
        onChangeText={setMessage}
        value={message}
        autoCapitalize="none"
        style={tw('rounded-xl bg-gray-100 p-3 w-5/6 h-10 rounded-2xl')}
      />
      <Pressable onPress={handleSendMessage}>
        <MaterialCommunityIcons name="send-circle-outline" size={42} style={tw('text-blue-300')} />
      </Pressable>
    </View>
  );
};

export default Field;
