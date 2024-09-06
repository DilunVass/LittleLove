import React from 'react';
import { RNCamera } from 'react-native-camera';
import { Platform } from 'react-native';

let PermissionsAndroidModule = null;

if (Platform.OS === 'android') {
  PermissionsAndroidModule = require('react-native').PermissionsAndroid;
}

function QRCodeScanner({ navigation }) {
  const handleBarCodeScanned = ({ data }) => {
    // Handle the scanned QR code data, e.g., navigate based on the data
    navigation.navigate('NavigateToPage', { qrData: data });
  };

  return (
    <RNCamera
      style={{ flex: 1 }}
      onBarCodeRead={handleBarCodeScanned}
    />
  );
}

export default QRCodeScanner;