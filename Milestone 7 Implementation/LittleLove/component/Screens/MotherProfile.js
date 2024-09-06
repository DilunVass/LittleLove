import React from 'react';
import { View, Text, Image,StyleSheet, TouchableOpacity ,ImageBackground} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import MotherQRCode from './QRcodeGenarater';
import { ref,query, equalTo, get } from 'firebase/database';
// import { db } from '../FirebaseConfig';
import { db } from '../../firebase/config';
const backgroundImage = require('../../assets/bg.png');

// Import icons (you may need to add the icon image URLs)
const motherIcon = require('../../assets/mother.png'); // Replace with the URL of the profile icon image
const qrCodeIcon = require('../../assets/qr-code.png') // Replace with the URL of the QR code icon image
const profileIcon = require('../../assets/user.png'); 
function MotherProfile() {
    const navigation = useNavigation();
    const route = useRoute();
    const registeredNo = route.params?.registeredNo;
    console.log('registeredNo:', registeredNo);
    const [motherDetails, setMotherDetails] = React.useState(null);
  
    // Define a function to navigate to the QR code scanning screen
    const navigateToQRcode= () => {
      if (route.params && route.params.registeredNo) {
        navigation.navigate('QR Code', {
          registeredNo: route.params.registeredNo,
        });
      } else {
        // Handle the case when registeredNo is not available
      }
    };

     // Define a function to navigate to the MotherProfileDetails screen
  const navigateToMotherProfileDetails = () => {
    if (route.params && route.params.registeredNo) {
      navigation.navigate('Mother Profile Details', {
        registeredNo: route.params.registeredNo,
      });
    } else {
      // Handle the case when registeredNo is not available
    }
  };

  const navigateToShop = () => {
    navigation.navigate('Shop');
  };

  const fetchMotherDetails = async () => {
    const mothersRef = ref(db, '/mother');
    const mothersSnapshot = await get(mothersRef);
  
    if (mothersSnapshot.exists()) {
      const mothersData = mothersSnapshot.val();
      
      // Iterate through the unique keys to find the matching "mother" record
      for (const key in mothersData) {
        if (mothersData[key].registeredNo === registeredNo) {
          const matchedMother = mothersData[key];
          setMotherDetails(matchedMother);
          return; // Exit the loop once a match is found
        }
      }
  
      // Handle the case where the mother's details are not found
      console.error('Mother details not found for registeredNo: ', registeredNo);
    } else {
      // Handle the case where the "mother" node does not exist
      console.error('Mother node does not exist');
    }
  };
  
    // Fetch the mother's details when the component mounts
    React.useEffect(() => {
      fetchMotherDetails();
    }, [registeredNo]);


    return (
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <View style={{ flex: 1 }}>
       
        <View style={{ backgroundColor: '#5BF6DB', padding: 16 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 16 }}>
          <TouchableOpacity onPress={navigateToMotherProfileDetails}>
            <Image source={ profileIcon } style={{ width: 30, height: 30 ,marginTop:30}} />
          </TouchableOpacity>
          <TouchableOpacity onPress={navigateToQRcode}>
            <Image source={ qrCodeIcon } style={{ width: 30, height: 30,marginTop:30 }} />
          </TouchableOpacity>
          {/* <MotherQRCode registeredNo={registeredNo} /> */}
          {/* <MotherQRCode registeredNo={route.params.registeredNo} /> */}
        </View>
        </View>
  
        {/* Mother profile content */}
        {/* <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Mother Profile</Text> */}
          {/* Add more content specific to the mother's profile */}
        {/* </View> */}

        <Image source={motherIcon } style={{ width: 100, height: 100, borderRadius: 50, alignSelf: 'center', marginTop: 20 }} />
    <View>
      
       {motherDetails && (
        <React.Fragment>
      <Text style={styles.detailLabel}>Name:</Text>
      <Text style={styles.detailText}>{motherDetails.name}</Text>

      <Text style={styles.detailLabel}>Email:</Text>
      <Text style={styles.detailText}>{motherDetails.email}</Text>

      <Text style={styles.detailLabel}>Address:</Text>
      <Text style={styles.detailText}>{motherDetails.address}</Text>

      <Text style={styles.detailLabel}>Occupation:</Text>
      <Text style={styles.detailText}>{motherDetails.occupation}</Text>

      <Text style={styles.detailLabel}>Registered No:</Text>
      <Text style={styles.detailText}>{motherDetails.registeredNo}</Text>

      <Text style={styles.detailLabel}>DDSH Division:</Text>
      <Text style={styles.detailText}>{motherDetails.DDSH}</Text>

      {/* <Text style={styles.detailLabel}>PHM Area:</Text>
      <Text style={styles.detailText}>{motherDetails.PHM}</Text> */}
      {/* Add more content specific to the mother's profile */}
      </React.Fragment>
      )}
    </View>
    <View style={{background: 'rgb(238,174,202)',position:'absolute',bottom:0,backgroundColor:'#5BF6DB',flexDirection: 'row',justifyContent: 'space-between'}} >
   
   <TouchableOpacity >
    <Image
source={{uri: 'https://freesvg.org/img/dynnamitt_home.png'}}
style={{width: 40, height: 40,marginLeft:45,marginTop:30,marginRight:55,marginBottom:40}}/>
</TouchableOpacity>
<TouchableOpacity onPress={navigateToShop} >
<Image
source={{uri: 'https://freesvg.org/img/grocery-15.png'}}
style={{width: 40, height: 40,marginLeft:45,marginTop:30,marginRight:50,marginBottom:40}}/>
</TouchableOpacity>
<TouchableOpacity>
<Image
source={{uri: 'https://freesvg.org/img/1506603007.png'}}
style={{width: 50, height: 40,marginLeft:45,marginTop:30,marginRight:50,marginBottom:40}}/>
</TouchableOpacity>

  </View>
      </View>
      </ImageBackground>
    );
  }

  const styles = StyleSheet.create({
    detailLabel: {
      fontWeight: 'bold',
      marginVertical: 5, 
      margin: 20,
      marginLeft: 20,
      
    },
    detailText: {
      width: '90%',
      fontSize: 16,
      padding: 12,
      borderColor: 'gray',
      borderWidth: 0.5,
      borderRadius: 10,
      margin: 2,
      marginLeft: 20,
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
    },
    backgroundImage: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
    }
  });
  
  export default MotherProfile;
  