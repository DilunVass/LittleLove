import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { useNavigation } from '@react-navigation/native';
// import { firebaseConfig } from '../FirebaseConfig';
import { firebaseConfig } from '../../firebase/config';
import { View, Text,StyleSheet, TextInput, TouchableOpacity, Alert,Image ,ImageBackground} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import backgroundImage from '../../assets/bg.png';

const emailicon = require('../../assets/email.png');
const regicon = require('../../assets/registration.png');
const passicon = require('../../assets/padlock.png');

function Login() {
  const [email, setEmail] = useState('');
  const [registeredNo, setregisteredNo] = useState(''); // Initialize with an empty string
  const [password, setPassword] = useState('');
  const [userRole, setUserRole] = useState('Mother'); // Default to Midwife
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const navigation = useNavigation();
  

  const login = () => {
    if (userRole === 'Mother') {

      if ((!email || !registeredNo)) {
        Alert.alert('Please enter the Registered No.');
        return; // Don't proceed with login if the registeredNo is empty
      }
      // For Mothers, use the "Registered No" as both email and password
      signInWithEmailAndPassword(auth, email, registeredNo)
        .then((userCredential) => {
          const user = userCredential.user;
          Alert.alert('Login Successfully');
          // Navigate to the Mother home screen
          console.log('Logged in as a Mother:', user);
          // navigation.navigate('Mother Profile');
          console.log('Before navigation, registeredNo:', registeredNo);

          navigation.navigate('Mother Profile', {
            registeredNo: registeredNo, // Pass the registeredNo to the Mother Profile screen
            
          });
          console.log('After navigation, registeredNo:', registeredNo);
        })
        .catch((error) => {
          if (error.code === 'auth/invalid-login-credentials') {
            Alert.alert('Invalid login credentials. Please double-check your email and registered number.');
          } else {
            console.error(error);
            Alert.alert(error.message);
          }
        });
    } else if (userRole === 'Midwife'){
      // For Midwives, use the provided email and password
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          Alert.alert('Login Successfully');
          // Navigate to the Midwife home screen
          navigation.navigate('Home');
        })
        .catch((error) => {
          console.error(error);
          Alert.alert(error.message);
        });
    } else if (userRole === 'Seller') {
      // Handle login for "Seller" role here
      // Use the provided email and password for sellers
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          Alert.alert('Login Successfully as a Seller');
          // Navigate to the Seller home screen or the appropriate screen for sellers
          navigation.navigate('Seller Profile'); // You can adjust this navigation route
        })
        .catch((error) => {
          console.error(error);
          Alert.alert(error.message);
        });
    }
  };

  const handleRoleChange = (selectedRole) => {
    setUserRole(selectedRole);
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
    <View style={{  alignItems: 'center', justifyContent: 'center' }}>
     
      <View style={{  padding: 30, marginTop: 150, marginBottom: 200, borderRadius: 40, justifyContent: 'center' }}>
        <Text style={{ flex: 1, textAlign: 'center', fontSize: 20, fontWeight: 'bold', marginBottom: 5, color: '#000000',alignSelf: 'flex-start',left:'25px',bottom:50 }}>Welcome Back</Text>
        <Text style={{ flex: 1, textAlign: 'center', fontSize: 15, fontWeight: 'bold', marginTop: 5, marginBottom: 10, color: '#000000',alignSelf: 'flex-start',left:'25px',bottom:50 }}>Hey! Good to see you again</Text>
        <Picker
          selectedValue={userRole}
          onValueChange={(itemValue) => handleRoleChange(itemValue)}
          style={{
            borderWidth: 2,
            borderColor: '#D0FEF5',
            backgroundColor: '#D0FEF5',
            padding: 15,
            width: 300,
            borderRadius: 30,
            margin: 10,
          }}
        >
          <Picker.Item label="Mother" value="Mother" />
          <Picker.Item label="Midwife" value="Midwife" />
          <Picker.Item label="Seller" value="Seller" />
        </Picker>
        <View style={{ flexDirection: 'row', alignItems: 'center', borderWidth: 2, borderColor: '#D0FEF5', backgroundColor: '#D0FEF5', padding: 15, width: 300, borderRadius: 30, margin: 10 }}>
      <Image source={emailicon} style={{ width: 24, height: 24, marginRight: 10 }} />
      <TextInput onChangeText={(text) => setEmail(text)} style={{ flex: 1 }} placeholder="Enter Email" />
    </View>
        {/* <TextInput onChangeText={(text) => setEmail(text)} style={{ borderWidth: 2, borderColor: '#D0FEF5', backgroundColor: '#D0FEF5', padding: 15, width: 300, borderRadius: 30, margin: 10 }} placeholder="Enter Email" /> */}
        {userRole === 'Mother' && (
          // <TextInput onChangeText={(text) => setregisteredNo(text)} style={{ borderWidth: 2, borderColor: '#D0FEF5', backgroundColor: '#D0FEF5', padding: 15, width: 300, borderRadius: 30, margin: 10 }} placeholder="Enter Registered No" />
          <View style={{ flexDirection: 'row', alignItems: 'center', borderWidth: 2, borderColor: '#D0FEF5', backgroundColor: '#D0FEF5', padding: 15, width: 300, borderRadius: 30, margin: 10, marginBottom: 20 }}>
          <Image source={regicon} style={{ width: 24, height: 24, marginRight: 10 }} />
          <TextInput secureTextEntry={true} onChangeText={(text) => setregisteredNo(text)} style={{ flex: 1 }} placeholder="Enter Registered No" />
        </View>
        )}
        {userRole === 'Midwife' && (
          // <TextInput onChangeText={(text) => setPassword(text)} style={{ borderWidth: 2, borderColor: '#D0FEF5', backgroundColor: '#D0FEF5', padding: 15, width: 300, borderRadius: 30, margin: 10, marginBottom: 20 }} placeholder="Enter Password" />
          <View style={{ flexDirection: 'row', alignItems: 'center', borderWidth: 2, borderColor: '#D0FEF5', backgroundColor: '#D0FEF5', padding: 15, width: 300, borderRadius: 30, margin: 10, marginBottom: 20 }}>
    <Image source={passicon} style={{ width: 24, height: 24, marginRight: 10 }} />
    <TextInput secureTextEntry={true} onChangeText={(text) => setPassword(text)} style={{ flex: 1 }} placeholder="Enter Password" />
  </View>
        )}
        {userRole === 'Seller' && (
          // <TextInput onChangeText={(text) => setPassword(text)} style={{ borderWidth: 2, borderColor: '#D0FEF5', backgroundColor: '#D0FEF5', padding: 15, width: 300, borderRadius: 30, margin: 10, marginBottom: 20 }} placeholder="Enter Password" />
          <View style={{ flexDirection: 'row', alignItems: 'center', borderWidth: 2, borderColor: '#D0FEF5', backgroundColor: '#D0FEF5', padding: 15, width: 300, borderRadius: 30, margin: 10, marginBottom: 20 }}>
    <Image source={passicon} style={{ width: 24, height: 24, marginRight: 10 }} />
    <TextInput secureTextEntry={true} onChangeText={(text) => setPassword(text)} style={{ flex: 1 }} placeholder="Enter Password" />
  </View>
        )}
        <Text onPress={() => navigation.navigate('Reset')} style={{ fontWeight: 'bold', textAlign: 'center', marginTop: -5, marginBottom: 10 }}>Forgot password?</Text>
        <TouchableOpacity onPress={login} style={{ backgroundColor: '#5bf6db', display: 'flex', borderWidth: 2, borderColor: '#5bf6db', padding: 10, width: 300, borderRadius: 30, marginTop: 10, marginRight: 'auto', marginLeft: 'auto' }}>
          <Text style={{ fontSize: 17, fontWeight: 'bold', color: '#000000', textAlign: 'center', color: '#000000' }}>Login</Text>
        </TouchableOpacity>
        <Text onPress={() => navigation.navigate('Select')} style={{ marginTop: 15, fontWeight: 'bold', textAlign: 'center' }}>Haven't an account? Signup</Text>
      </View>
    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  }
  });
export default Login;
