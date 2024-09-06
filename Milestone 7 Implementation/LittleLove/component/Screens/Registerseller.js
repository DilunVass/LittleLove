import React from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { useNavigation } from '@react-navigation/native';
// import { firebaseConfig } from '../FirebaseConfig';
import { firebaseConfig } from '../../firebase/config';
import { ref, set } from 'firebase/database';
// import { db } from '../FirebaseConfig';
import { db } from '../../firebase/config';
import { View, Text,TextInput,TouchableOpacity, Alert,StyleSheet,ImageBackground } from 'react-native';
import backgroundImage from '../../assets/bg.png';

function Registerseller() {
    const navigation = useNavigation();
    const [email,setEmail]=React.useState('');
  const [password,setPassword]=React.useState('');
  const [name,setName]=React.useState('');
  const [sellerid,setidnumber]=React.useState('');
  const [phone,setphone]=React.useState('');
    const app = initializeApp(firebaseConfig);
    const auth=getAuth(app);
    const createuserforseller = () => {
      createUserWithEmailAndPassword(auth, email, password)
      .then ((userCredential) => {
        set(ref(db,sellerid ),{
            name:name,
            sellerid:sellerid,
            email:email,
            phone:phone,
            password:password,
          });
          setName('')
          setidnumber('')
          setEmail('')
          setphone('')
          setPassword('')
        
        Alert.alert('Account Created');
        navigation.navigate('Login');
      const user = userCredential.user;
      console. log (user)
      })
      .catch(error =>{
        Alert.alert(error.message);
      })
    }
      const handleSignIn = () => {
        signInWithEmailAndPassword(auth,email, password) 
        .then((userCredential)=>{
        console. log ('Signed in!')
        const user = userCredential. user;
        Alert.alert('Login Successfully');
      })
        .catch(error => {
          Alert.alert(error.message);
  
      })
      }
   
      const backtothelogin = () => {
          navigation.navigate('Login');
        };
    return(
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <View>
          
            <Text style={{textAlign:'center',fontSize:30,fontWeight:'bold',marginTop:70,marginBottom:40,color:'#000000'}}>Little Love</Text>
            <TextInput onChangeText={(text) => setName(text)} style={{borderWidth:2,borderColor:'#D0FEF5',backgroundColor:'#D0FEF5',padding:15,width:'90%',borderRadius:30,margin:10,marginBottom:20}}  placeholder= "Enter Name"/>
            <TextInput onChangeText={(text) => setEmail(text)} style={{borderWidth:2,borderColor:'#D0FEF5',backgroundColor:'#D0FEF5',padding:15,width:'90%',borderRadius:30,margin:10,marginBottom:20,}}  placeholder= "Enter Email"/>
            <TextInput secureTextEntry={true} onChangeText={(text) => setPassword(text)} style={{borderWidth:2,borderColor:'#D0FEF5',backgroundColor:'#D0FEF5',padding:15,width:'90%',borderRadius:30,margin:10,marginBottom:20,}}  placeholder= "Enter Password"/>
            <TextInput onChangeText={(text) => setidnumber(text)} style={{borderWidth:2,borderColor:'#D0FEF5',backgroundColor:'#D0FEF5',padding:15,width:'90%',borderRadius:30,margin:10,marginBottom:20,}}  placeholder= "Enter ID No"/>
            <TextInput onChangeText={(text) => setphone(text)} style={{borderWidth:2,borderColor:'#D0FEF5',backgroundColor:'#D0FEF5',padding:15,width:'90%',borderRadius:30,margin:10,marginBottom:20,}}  placeholder= "Enter phone"/>
            <Text onPress={backtothelogin} style={{fontWeight:'bold',textAlign:'center'}}>Haven an acoount? Login</Text>
            <TouchableOpacity onPress={createuserforseller} style={{display:'flex',borderWidth:2,borderColor:'#5bf6db',padding:10,width:'90%',borderRadius:30,marginTop:10,marginRight:'auto',marginLeft:'auto',backgroundColor:'#5bf6db'}}>
            <Text style={{fontSize: 17, fontWeight:'bold', color: '#000000',textAlign:'center',color:'#000000'}}>Register</Text>
            </TouchableOpacity>
            
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

export default Registerseller;
