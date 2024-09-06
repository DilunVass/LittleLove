import React from 'react'
import  'firebase/app';
import { useNavigation } from '@react-navigation/native';
import firebase from 'firebase/storage';
import { View, Text,TouchableOpacity ,Image,TextInput} from 'react-native';
function Shopseller() {
  const navigation = useNavigation();
  const backththehome = () => {
    navigation.navigate('Home');
  };
  const backtotheprofile = () => {
    navigation.navigate('Profile');
  };
const uploadImage = async (imageUri) => {
  const storageRef = firebase.storage().ref();
  const imageExt = imageUri.split('.').pop(); // Get the file extension from the image URI
  const uniqueFileName = `${uuid.v4()}.${imageExt}`; // Generate a unique file name

  try {
    const response = await fetch(imageUri);
    const blob = await response.blob();

    const imageRef = storageRef.child(`images/${uniqueFileName}`);
    await imageRef.put(blob);

    const downloadURL = await imageRef.getDownloadURL();
    return downloadURL;
  } catch (error) {
    console.error('Error uploading image: ', error);
    return null;
  }
};

  
  return (
    <View style={{flex:1,}}>
      <Text style={{textAlign:'center',padding:60,fontSize:30,backgroundColor:'lightblue',fontWeight:'bold'}}>LittleLove</Text>
      <TextInput placeholder='Search Here' style={{padding:12,borderWidth:1.4,marginLeft:20,marginRight:20,marginTop:-50,borderRadius:15,color:'black'}} />
      <Image
  source={{uri: 'https://freesvg.org/img/magnifying-glass.png'}}
  style={{width: 76, height: 40,position:'absolute',right:10,marginTop:106}}/>
    <View style={{background: 'rgb(238,174,202)',position:'absolute',bottom:10,backgroundColor:'lightblue',flexDirection: 'row',justifyContent: 'flex-end', alignItems: 'flex-end'}} >
      <TouchableOpacity onPress={uploadImage}>
        <Text>Upload Image</Text>
      </TouchableOpacity>
    </View>
    </View>
  );
}
export default Shopseller;
