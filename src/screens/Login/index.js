import React, { useEffect, useState } from 'react';
import { Button, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { Picker } from '@react-native-picker/picker';
import PropTypes from 'prop-types';
import { useTailwind } from 'tailwind-rn';
import { Input, Text } from 'app/components/basic';
import { useAuth, getBusinessInfo } from 'app/store/auth';

const LoginScreen = ({ navigation }) => {
  const tailwind = useTailwind();
  const dispatch = useDispatch();
  const auth = useAuth();

  const [email, setEmail] = useState(auth.email || 'christianto@goapp.co.id');
  const [password, setPassword] = useState('pas1234!');
  const [authStep, setAuthStep] = useState(1)
  const [lastAuthAction, setLastAuthAction] = useState(null)
  const [selectedBusinessInfo, setSelectedBusinessInfo] = useState(null)

  const step2Condition = auth.businessInfo && !selectedBusinessInfo && lastAuthAction === 'getBusinessInfo' && authStep === 1;

  useEffect(() => {
    if (step2Condition) { setAuthStep(2) }
  }, [auth.businessInfo])

  const onEnterPressed = () => {
    if (authStep === 1) {
      dispatch(getBusinessInfo(email));
      setLastAuthAction('getBusinessInfo')
    }
  };

  return (
    <View style={tailwind('h-full justify-center bg-stone-300')}>
      <View style={tailwind('w-3/5 self-center')}>

        <Text style={tailwind('text-xl font-bold')}>Enter your email</Text>
        <Input value={email} autoComplete="email" keyboardType="email-address"
          onChangeText={setEmail} placeholder="email" editable={authStep === 1} />

        {authStep > 1 &&
          <View style={tailwind('mt-2')}>
            <Picker style={tailwind('border-b-2 border-b-neutral-400 py-2 px-0 text-base')}
              selectedValue={selectedBusinessInfo} onValueChange={(item) => setSelectedBusinessInfo(item)}>
              {auth.businessInfo.map(info => (<Picker.Item key={info.uid} label={info.name} value={info} />))}
            </Picker>
          </View>
        }

        <View style={tailwind('mt-2')}>
          <Button title="Enter" onPress={onEnterPressed} />
        </View>
      </View>
    </View>
  );
};

LoginScreen.propTypes = {
  navigation: PropTypes.shape({}),
};

export default LoginScreen;
