import React from 'react';
import { View, Text, TouchableOpacity,Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MotherQRCode from './QRcodeGenarater'; // Import the QR code generator component

const arrow = require('../../assets/left-arrow.png'); 

function QRCodeScreen({ route }) {
    const { registeredNo } = route.params;
    const navigation = useNavigation();
  
    return (
        <View style={{ flex: 1 }}>
        {/* Custom header with back button and title */}
        <View style={{ flexDirection: 'row', alignItems: 'center', padding: 16, backgroundColor: '#5BF6DB' }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            {/* <Text>Back</Text> */}
            <Image source={ arrow } style={{ width: 30, height: 30,marginTop:30 }} />
          </TouchableOpacity>
          <Text style={{ marginLeft: 90, fontSize: 20,fontWeight: 'bold', color: 'black' ,marginTop:30 }}>My QR Code</Text>
        </View>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <MotherQRCode registeredNo={registeredNo} />
      </View>
      </View>
    );
  }
  
  export default QRCodeScreen;