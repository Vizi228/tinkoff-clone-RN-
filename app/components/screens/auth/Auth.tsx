import React, { useState } from 'react';
import { Alert, Pressable, Text, View } from 'react-native';
import { useTailwind } from 'tailwind-rn/dist';
import { useAuth } from '../../../hooks/useAuth';
import { styleCenter } from '../../layouts/Layout';
import ButtonComponent from '../../ui/Button';
import Field from '../../ui/Field';
import Loader from '../../ui/Loader';

interface IData {
  email: string;
  password: string;
}

const Auth = () => {
  const tw = useTailwind();

  const [data, setData] = useState<IData>({} as IData);
  const [isReg, setIsReg] = useState(false);
  const { isLoading, login, register } = useAuth();
  
  const authHandler = async () => {
    const { email, password } = data;
    if (!!email && !!password) {
      if (isReg) await register(email, password);
      else await login(email, password);

      setData({} as IData);
    } else {
      Alert.alert('Fill the field', 'Fill the field, for succesfully authentication, please');
    }
  };

  return (
    <View style={tw(styleCenter)}>
      <View style={tw('mx-5 justify-center items-center h-full')}>
        <View style={tw('w-3/4')}>
          <Text style={tw('text-center text-gray-800 text-2xl font-bold mb-2')}>
            {isReg ? 'Sign up' : 'Sign in'}
          </Text>

          {isLoading ? (
            <Loader />
          ) : (
            <>
              <Field
                value={data.email}
                onChange={(value) => setData({ ...data, email: value })}
                placeholder="Email"
              />
              <Field
                value={data.password}
                onChange={(value) => setData({ ...data, password: value })}
                placeholder="Password"
                isSecure
              />
              <ButtonComponent onPress={authHandler} title={'Let`s go'} />

              <Pressable onPress={() => setIsReg(!isReg)}>
                <Text style={tw('text-gray-800 opacity-30 text-right text-sm')}>
                  {isReg ? 'Login' : 'Register'}
                </Text>
              </Pressable>
            </>
          )}
        </View>
      </View>
    </View>
  );
};

export default Auth;
