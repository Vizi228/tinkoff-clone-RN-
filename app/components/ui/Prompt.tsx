import React, { Dispatch, FC, SetStateAction, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Dialog from 'react-native-dialog';

interface IPrompt {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  dialogVisible: boolean;
  setDialogVisible: Dispatch<SetStateAction<boolean>>;
  onSubmit: () => void;
}

const Prompt: FC<IPrompt> = ({ value, setValue, dialogVisible, setDialogVisible, onSubmit }) => {
  const handleCancel = () => {
    setDialogVisible(false);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Dialog.Container visible={dialogVisible}>
        <Dialog.Title>Transfer</Dialog.Title>
        <Dialog.Input value={value} onChangeText={setValue} />
        <Dialog.Description>Put the sum which you want to transfer</Dialog.Description>
        <Dialog.Button label="Cancel" onPress={handleCancel} />
        <Dialog.Button label="Transfer" onPress={onSubmit} />
      </Dialog.Container>
    </View>
  );
};
export default Prompt;
