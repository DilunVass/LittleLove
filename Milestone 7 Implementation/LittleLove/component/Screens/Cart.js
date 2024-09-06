import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ImageBackground, ScrollView, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const backgroundImage = require('../../assets/bg.png');



function Cart({ route }) {
  const { item } = route.params; // Access the item passed from the Pregnant page
  const navigation = useNavigation();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white', // Set a background color to prevent transparency
    },
    background: {
      flex: 1,
      resizeMode: 'cover',
    },
    content: {
      flex: 1,
      padding: 20,
    },
    title: {
      fontSize: 30,
      fontStyle: 'italic',
      fontWeight: 'bold',
      marginBottom: 20,
      textAlign: 'center',
    },
    itemCard: {
      marginBottom: 20,
      borderWidth: 1,
      borderColor: '#ddd',
      borderRadius: 5,
      padding: 10,
    },
    imageContainer: {
      justifyContent: 'center', // Center content vertically
      alignItems: 'center', // Center content horizontally
    },
    image: {
      width: 200,
      height: 200,
      resizeMode: 'cover',
      marginBottom: 10,
    },
    itemName: {
      fontWeight: 'bold',
      fontSize: 20,
      textAlign: 'center',
      marginBottom: 5,
    },
    itemDescription: {
      textAlign: 'center',
      marginBottom: 10,
    },
    itemPrice: {
      color: 'red',
      textAlign: 'center',
      fontSize: 18,
      marginBottom: 20,
    },
    buttonRow: {
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    deleteButton: {
      backgroundColor: 'red',
      padding: 10,
      borderRadius: 5,
    },
    buyNowButton: {
      backgroundColor: 'green',
      padding: 10,
      borderRadius: 5,
    },
    buttonText: {
      color: 'white',
      fontSize: 16,
    },
    goBackButton: {
      fontSize: 16,
      fontWeight: 'bold',
      textAlign: 'center',
      color: 'black',
    },
  });

  // State to store items in the cart
  const [cartItems, setCartItems] = useState([item]); // Initialize with the selected item

  const handleDelete = (itemToDelete) => {
    // Display a confirmation dialog
    Alert.alert(
      'Confirm Delete',
      'Do you want to delete this item?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          onPress: () => {
            // Remove the item from the cartItems state
            setCartItems((prevItems) => prevItems.filter((cartItem) => cartItem.id !== itemToDelete.id));
          },
        },
      ],
      { cancelable: false }
    );
  };

  return (
    // <View style={styles.container}>
      <ImageBackground source={backgroundImage} style={styles.background}>
        <ScrollView contentContainerStyle={styles.content}>
          <Text style={styles.title}>Shopping Cart</Text>
          {cartItems.map((cartItem) => (
            <View key={cartItem.id} style={styles.itemCard}>
              <View style={styles.imageContainer}>
                <Image source={{ uri: cartItem.imageUrl }} style={styles.image} />
              </View>
              <Text style={styles.itemName}>{cartItem.name}</Text>
              <Text style={styles.itemDescription}>{cartItem.description}</Text>
              <Text style={styles.itemPrice}>{cartItem.price}</Text>
              <View style={styles.buttonRow}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('Payment', { item: cartItem });
                  }}
                >
                  <View style={styles.buyNowButton}>
                    <Text style={styles.buttonText}>Buy Now</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          ))}
          
        </ScrollView>
          {/* "Go Back" button in the page footer */}
          <TouchableOpacity onPress={() => navigation.navigate('Shop')} style={styles.footerButton}>
          <Text style={styles.goBackButton}>Go Back to Shop</Text>
        </TouchableOpacity>
        
      </ImageBackground>
    // </View>
  );
}

export default Cart;
