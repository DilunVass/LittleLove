// HomeScreen.js

import React, { useState } from 'react';
// import { firebaseConfig } from '../FirebaseConfig';
import { firebaseConfig } from '../../firebase/config';
import { useNavigation } from '@react-navigation/native';
import { initializeApp } from 'firebase/app';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';

function ResetPassword() {
  const [email, setEmail] = useState('');
  const navigation = useNavigation();
  const changePassword = () => {
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    sendPasswordResetEmail(auth, email)
      .then(() => {
        Alert.alert('Password Reset Email Sent');
        navigation.navigate('Login');
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  const backtologin = () => {
    navigation.navigate('Login');
  };
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <View style={{ borderColor: '#000000', borderWidth: 2, backgroundColor: '#F1DEDE', padding: 30, borderRadius: 40, justifyContent: 'center' }}>
        <Text style={{ textAlign: 'center', fontSize: 30, fontWeight: 'bold', marginTop: 10, marginBottom: 40, color: '#000000' }}>LittleLove</Text>
        <TextInput onChangeText={(text) => setEmail(text)} style={{ borderWidth: 2, borderColor: '#000000', backgroundColor: '#FFF', padding: 15, width: 250, borderRadius: 30, margin: 10 }} placeholder="Enter Email" />
        <TouchableOpacity onPress={changePassword} style={{ display: 'flex', borderWidth: 2, borderColor: '#000000', padding: 10, width: 200, borderRadius: 30, marginTop: 10, marginRight: 'auto', marginLeft: 'auto' }}>
          <Text style={{ fontSize: 17, fontWeight: 'bold', color: '#000000', textAlign: 'center', color: '#000000' }}>Reset Password</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={backtologin}>
          <Text style={{fontWeight:'bold',textAlign:'center',marginTop:10}}>
            Remember Password? Login
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default ResetPassword;
