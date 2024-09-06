import { useNavigation } from "@react-navigation/native";
import React, {useState, useEffect} from "react";
import { View ,Image,StyleSheet,ScrollView,TouchableOpacity,Text,TextInput,ImageBackground} from "react-native";
import { useRoute } from '@react-navigation/native';
import { useFocusEffect } from '@react-navigation/native';
import { ref, get, child ,remove} from 'firebase/database'; // Import necessary Firebase database functions
// import { db } from '../FirebaseConfig'; // Import your Firebase configuration
import { db } from '../../firebase/config';
import backgroundImage from '../../assets/bg.png';

const scanIcon = require('../../assets/qr-scan.png');

const deleteIcon = require('../../assets/trash.png');
function Home(){
  const route = useRoute();
  const [clinicDetails, setClinicDetails] = useState([]);
  const passedText = route.params?.passedText || "MW****";
  // const { passedText, clinicDetails } = route.params || { passedText: 'MW****', clinicDetails: [] };

  const navigation = useNavigation();

  const backtoprofile = () => {
    navigation.navigate('Profile');
  };
  const backtotheshop = () => {
    navigation.navigate('Shop');
  };

  const navigateToAddClinicDetails = () => {
    navigation.navigate('Add Clinic Details');
  };

  const navigateToAddMother = () => {
    navigation.navigate('Add Mother');
  };
  const navigateToAddHealthGuides = () => {
    navigation.navigate('Add Health Guides');
  };
  const navigateToQRscan = () => {
    navigation.navigate('QR Scan');
  };
  const navigateToMotherList = () => {
    navigation.navigate('MotherList');
  };
  
  const fetchClinicDetails = () => {
    const detailsRef = ref(db, '/clinicdetails');
    get(child(detailsRef, '/')).then((snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        if (data) {
          const detailsArray = Object.entries(data).map(([key, value]) => ({ key, ...value }));
          setClinicDetails(detailsArray);
        }
      }
    });
  };
  
  // Fetch clinic details from Firebase when the component mounts
  useEffect(() => {
   
    fetchClinicDetails();
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      fetchClinicDetails();
    }, [])
  );

  const deleteClinicDetails = (key) => {
    // Remove the clinic details from Firebase
    const detailsRef = ref(db, `/clinicdetails/${key}`);
    remove(detailsRef).then(() => {
      // Update the state to remove the deleted item
      setClinicDetails((prevDetails) => prevDetails.filter((item) => item.key !== key));
    });
  };
  
  return(
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
    <View style={{flex:1,}}>
          <View style={{ backgroundColor: '#5BF6DB', padding: 16 }}>
        <View style={{ flexDirection: 'row',justifyContent: 'space-between', padding: 16 }}>
        <Text style={{ fontSize: 23,fontWeight: 'bold', color: 'black' ,left:100,top:25}}>Little Love</Text>

          <TouchableOpacity onPress={navigateToQRscan}>
            <Image source={ scanIcon } style={{ width: 30, height: 30,marginTop:30,marginLeft:5}} />
          </TouchableOpacity>
          
        </View>
        </View>

    <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={navigateToAddClinicDetails}>
          <View style={{ borderRadius: 10, borderWidth: 1, borderColor: '#000000', padding: 9, margin: 6, backgroundColor: '#5BF6DB' ,height: 60, width: 120}}>
            <Text style={{ fontWeight: 'bold', fontSize: 15, color: '#000000',textAlign: 'center' }}>Add Clinic Details</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={navigateToAddMother}>
          <View style={{ borderRadius: 10, borderWidth: 1, borderColor: '#000000', padding: 10, margin: 6, backgroundColor: '#5BF6DB', height: 60, width: 120 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 15, color: '#000000',textAlign: 'center' }}>Add Mother</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={navigateToAddHealthGuides}>
          <View style={{ borderRadius: 10, borderWidth: 1, borderColor: '#000000', padding: 10, margin: 6, backgroundColor: '#5BF6DB', height: 60, width: 120 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 15, color: '#000000',textAlign: 'center' }}>Add Health Guides</Text>
          </View>
        </TouchableOpacity>
      </View> 
      <TouchableOpacity onPress={navigateToMotherList} >
        <View style={{ borderRadius: 10, borderWidth: 1, borderColor: '#000000', padding: 8, margin: 6, backgroundColor: '#5BF6DB', height: 40, width: 385 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 15, color: '#000000', textAlign: 'center' }}>Mother List</Text>
        </View>
      </TouchableOpacity>

    <ScrollView>
        {/* Display the added clinic details in cards */}
        {clinicDetails.map((details, index) => (
          <View key={index} style={{ borderColor: 'black', borderWidth: 1, borderRadius: 10, padding: 10, margin: 10 }}>
            <TouchableOpacity onPress={() => deleteClinicDetails(details.key)}>
            <View style={{ position: 'absolute', top: 2, right: 10, width: 20, height: 20 }}>
               <Image source={deleteIcon} style={{ position: 'absolute', top: 2, right: 10,width: 20, height: 20 }} />
               </View>
            </TouchableOpacity>
            <Text> {details.date}</Text>
            <View style={{ height: 1, backgroundColor: 'gray', marginVertical: 5 }} /> 
            <View style={{ flexDirection: 'coloum', justifyContent: 'space-between' }}>
            <Text>Clinic Program :  {details.clinicDetails}</Text>
            <Text>Vaccination :   {details.vaccDetails}</Text>
            <Text>Nutrition Supplements : {details.nutDetails}</Text>
            </View>
            
          </View>
        ))}
      </ScrollView>
   

  <View style={{background: 'rgb(238,174,202)',position:'absolute',bottom:0,backgroundColor:'#5BF6DB',flexDirection: 'row',justifyContent: 'space-between'}} >
   
   <TouchableOpacity >
    <Image
source={{uri: 'https://freesvg.org/img/dynnamitt_home.png'}}
style={{width: 40, height: 40,marginLeft:45,marginTop:30,marginRight:55,marginBottom:40}}/>
</TouchableOpacity>
<Image
source={{uri: 'https://freesvg.org/img/grocery-15.png'}}
style={{width: 40, height: 40,marginLeft:45,marginTop:30,marginRight:50,marginBottom:40}}/>
<TouchableOpacity>
<Image
source={{uri: 'https://freesvg.org/img/1506603007.png'}}
style={{width: 50, height: 40,marginLeft:45,marginTop:30,marginRight:50,marginBottom:40}}/>
</TouchableOpacity>

  </View>
  </View>
  </ImageBackground>
  )
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  }
  });

export default Home;