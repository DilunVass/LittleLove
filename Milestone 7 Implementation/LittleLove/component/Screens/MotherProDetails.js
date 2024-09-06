import React from 'react';
import { View, Text, StyleSheet,Image, TouchableOpacity} from 'react-native';
import { useRoute ,useNavigation} from '@react-navigation/native';
import { ref,query, equalTo, get } from 'firebase/database';
// import { db } from '../FirebaseConfig';
import { db } from '../../firebase/config';

const arrow = require('../../assets/left-arrow.png'); 
const profileIcon = require('../../assets/user.png'); 

function MotherProDetails() {
  const route = useRoute();
  const navigation = useNavigation();
  const registeredNo = route.params?.registeredNo;
  console.log('registeredNo:', registeredNo);
  const [motherDetails, setMotherDetails] = React.useState(null);

  const navigateToMotherProfile = () => {
    navigation.navigate('Mother Profile'); // You should define the 'QRScanner' screen
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
    <View style={{ flex: 1 }}>
        {/* Header with Profile and QR Code icons */}
        <View style={{ backgroundColor: '#5BF6DB', padding: 16 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', padding: 16 }}>
          <TouchableOpacity onPress={navigateToMotherProfile}>
            <Image source={ arrow } style={{ width: 30, height: 30,marginTop:30 }} />
          </TouchableOpacity>
          <Text style={{ marginLeft: 90, fontSize: 20,fontWeight: 'bold', color: 'black' ,marginTop:30 }}>My Profile</Text>
         
        </View>
        </View>

        <Image source={profileIcon } style={{ width: 100, height: 100, borderRadius: 50, alignSelf: 'center', marginTop: 20 }} />
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

      <Text style={styles.detailLabel}>PHM Area:</Text>
      <Text style={styles.detailText}>{motherDetails.PHM}</Text>
      {/* Add more content specific to the mother's profile */}
      </React.Fragment>
      )}
    </View>
    </View>
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
});


export default MotherProDetails;