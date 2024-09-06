import React, { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
// import { firebaseConfig } from '../FirebaseConfig';
import { firebaseConfig } from '../../firebase/config';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';

function Loginseller() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is already authenticated, navigate to the Home page
        navigation.navigate('Shopseller');
      }
    });

    // Clean up the subscription when the component unmounts
    return () => unsubscribe();
  }, [auth,navigation]);

  const loginviaemailandpassword = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log('Signed in!');
        const user = userCredential.user;
        Alert.alert('Login Successfully');
        navigation.navigate('Shopseller');
      })
      .catch((error) => {
        Alert.alert(error.message);
      });
  };

  const Selectwhoyouare = () => {
    navigation.navigate('Select');
  };

  const Resetpasswordpage = () => {
    navigation.navigate('Reset');
  };

  return (
    
    <View style={{  backgroundColor: 'rgb(238,174,202)',alignItems: 'center', justifyContent: 'center' }}>
      <LinearGradient
    colors={['rgba(238,174,202,1)', 'rgba(148,187,233,1)']}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 1 }}
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    }}/>
      <View style={{ borderColor: '#FFF', borderWidth: 2, padding: 30, marginTop:210,marginBottom:300,borderRadius: 40, justifyContent: 'center' }}>
        <Text style={{ fontFamily:'', flex:1,textAlign: 'center', fontSize: 30, fontWeight: 'bold', marginTop: 10, marginBottom: 10, color: '#000000' }}>Welcome Back</Text>
        <Text style={{ flex:1,textAlign: 'center', fontSize:15, fontWeight: 'bold', marginTop: 10, marginBottom: 10, color: '#000000' }}>Hey! Good to see you again</Text>
        <TextInput  onChangeText={(text) => setEmail(text)} style={{ borderWidth: 2, borderColor: '#FFF', backgroundColor: '#FFF', padding: 15, width: 250, borderRadius: 30, margin: 10 }} placeholder="Enter Email" />
        <TextInput secureTextEntry={true} onChangeText={(text) => setPassword(text)} style={{ borderWidth: 2, borderColor: '#FFF', backgroundColor: '#FFF', padding: 15, width: 250, borderRadius: 30, margin: 10, marginBottom: 20 }} placeholder="Enter Password" />
        <Text onPress={Resetpasswordpage} style={{ fontWeight: 'bold', textAlign: 'center', marginTop:-5,marginBottom:10 }}>Forgot password?</Text>
        <TouchableOpacity onPress={loginviaemailandpassword} style={{backgroundColor:'#000000', display: 'flex', borderWidth: 2, borderColor: '#FFF', padding: 10, width: 200, borderRadius: 30, marginTop: 10, marginRight: 'auto', marginLeft: 'auto' }}>
          <Text style={{ fontSize: 17, fontWeight: 'bold', color: '#FFF', textAlign: 'center', color: '#DDD' }}>Login</Text>
        </TouchableOpacity>
        <Text onPress={Selectwhoyouare} style={{marginTop:15, fontWeight: 'bold', textAlign: 'center' }}>Haven't an account? Signup</Text>
      </View>
    </View>
  );
}

export default Loginseller;
