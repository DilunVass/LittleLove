import React from 'react';
import QRCode from 'react-native-qrcode-svg';

function MotherQRCode({ registeredNo }) {
  // Generate a unique URL or data for the QR code, including the user ID
  const qrData = `https://example.com/user/${registeredNo}`;
  
  return (
    <QRCode value={qrData} size={200} />
  );
}

export default MotherQRCode;