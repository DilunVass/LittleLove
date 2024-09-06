import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import { useNavigation } from '@react-navigation/native';

const backgroundImage = require('../../assets/bg.png');

const Payment = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [isSuccessModalVisible, setIsSuccessModalVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const navigation = useNavigation();

  const handlePayment = () => {
    // Validate cardNumber, cvv, and expirationDate here
    if (cardNumber.length !== 12) {
      setErrorMessage('Card number should have 12 digits');
    } else if (cvv.length !== 3) {
      setErrorMessage('CVV should have 3 digits');
    } else if (!isValidExpirationDate(expirationDate)) {
      setErrorMessage('Invalid expiration date. Please use the format MM/YYYY.');
    } else {
      // Perform payment processing logic here
      setIsSuccessModalVisible(true);
    }
  };

  const isValidExpirationDate = (date) => {
    // Regular expression to match "MM/YYYY" format with exactly 4 digits
    const regex = /^(0[1-9]|1[0-2])\/\d{4}$/;
    return regex.test(date);
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImage} style={styles.background}>
        <Text style={styles.header}>Payment Information</Text>
        <TextInput
          style={styles.input}
          placeholder="Card Number"
          value={cardNumber}
          onChangeText={(text) => setCardNumber(text)}
          keyboardType="numeric"
          required 
        />
        <TextInput
          style={styles.input}
          placeholder="Cardholder Name"
          value={cardHolder}
          onChangeText={(text) => setCardHolder(text)}
          required 
        />
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Expiration Date (MM/YYYY)"
            value={expirationDate}
            onChangeText={(text) => setExpirationDate(text)}
            required 
          />
          <TextInput
            style={styles.input}
            placeholder="CVV"
            value={cvv}
            onChangeText={(text) => setCvv(text)}
            keyboardType="numeric"
            required 
          />
        </View>
        <Button title="Make Payment" onPress={handlePayment} />
      </ImageBackground>
      
      <Modal isVisible={isSuccessModalVisible}>
        <View style={styles.modalContent}>
          <Text style={styles.successText}>Payment Successful</Text>
          <Button
            title="Close"
            onPress={() => {
              setIsSuccessModalVisible(false);
              setErrorMessage(''); 
            }}
          />
        </View>
      </Modal>

      {/* "Go Back" button in the page footer */}
      <TouchableOpacity onPress={() => navigation.navigate('Shop')} style={styles.footerButton}>
        <Text style={styles.goBackButton}>Go Back to Shop</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
    color: 'black',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
  successText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  goBackButton: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black', // Corrected typo here
  },
  footerButton: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
  },
});

export default Payment;
