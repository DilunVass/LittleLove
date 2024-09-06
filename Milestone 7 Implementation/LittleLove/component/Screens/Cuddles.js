import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity, Image, StyleSheet, ImageBackground,ScrollView } from 'react-native';
const backgroundImage = require('../../assets/bg.png');

// Sample data for kids' clothes
const kidsClothes = [
  
  {
    id: '52',
    name: 'Kids Naps Full ',
    description: 'Made in Sri Lanka. 20 pcs.Small Size Pack',
    price: '$8.50',
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/littlelove-a13cb.appspot.com/o/download%20(8).jpeg?alt=media&token=99467386-f580-460e-8aab-dda6c641a1a0',
  },
  {
    id: '38',
    name: 'Kids Soap',
    description: 'Baby Soap 100g.Made in Sri Lanka. No harmful things.',
    price: '$2.50',
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/littlelove-a13cb.appspot.com/o/download%20(6).jpeg?alt=media&token=86aed772-b75f-4386-b1e2-4b735df2a797',
  },
  {
    id: '48',
    name: 'Baby Shampoo',
    description: 'Made in Sri Lanka. 450ml.No chemical ',
    price: '$10.99',
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/littlelove-a13cb.appspot.com/o/soap2.jpeg?alt=media&token=179ae59d-5be4-4b37-845d-45135c5b8bd2',
  },
  {
    id: '59',
    name: 'Kids Small Shampoo Bottle',
    description: '500ml. Made in Sri Lanka',
    price: '$9.50',
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/littlelove-a13cb.appspot.com/o/soap1.jpeg?alt=media&token=a0021fb8-c03c-4d3f-8e40-48bce155b6e0',
  },
  {
    id: '63',
    name: 'Kids Naps Full -S',
    description: 'Made in Sri Lanka. 10 pcs.Small Size Pack',
    price: '$5.75',
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/littlelove-a13cb.appspot.com/o/doapers.jpeg?alt=media&token=f1b73aba-bd4d-4c42-bd66-b05221745b10',
  },
  {
    id: '523',
    name: 'Kids Soap',
    description: 'Baby Soap 140g.Made in Sri Lanka. No harmful things.',
    price: '$2.50',
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/littlelove-a13cb.appspot.com/o/soap3.png?alt=media&token=64486319-7ea9-48be-bc74-10ca0d068041',
  },
];

function Cuddles() {
  // Function to split an array into chunks
  function chunkArray(arr, chunkSize) {
    const chunks = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      chunks.push(arr.slice(i, i + chunkSize));
    }
    return chunks;
  }
  const navigation = useNavigation();
  const backththehome = () => {
    navigation.navigate('Home');
  };
  const backtotheprofile = () => {
    navigation.navigate('Profile');
  };

  const rows = chunkArray(kidsClothes, 2); // Split into rows of 2 items per row

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
    },
    itemRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 5,
    },
    itemContainer: {
      width: '50%',
      padding: 10,
      borderWidth: 1,
      borderColor: '#ddd',
      marginTop: 20,
      marginBottom: 2,
    },
    image: {
      width: '100%',
      aspectRatio: 1,
    },
    buttonRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 5,
    },
    buttonContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    buttonImage: {
      width: 20,
      height: 20,
      marginRight: 5,
    },
    buttonText: {
      fontSize: 16,
      color: 'green',
    },
    itemName: {
      fontWeight: 'bold',
    },
    itemPrice: {
      color: 'red',
    },
    // Add styles for the navigation bar/footer
    navBarFooter: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: 'lightgreen',
      padding: 10,
    },
  });

  return (
    <ScrollView>
     {/* <View style={styles.container}> */}
      <ImageBackground source={backgroundImage} style={{ flex: 1 }}>
        <Text style={{ textAlign: 'center', fontSize: 30, marginVertical: 30, fontStyle: 'italic', fontWeight: 'bold' }}>
          Cuddle Cleans
        </Text>
        {rows.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.itemRow}>
            {row.map((item) => (
              <View key={item.id} style={styles.itemContainer}>
                <Image source={{ uri: item.imageUrl }} style={styles.image} />
                <Text style={styles.itemName}>{item.name}</Text>
                <Text>{item.description}</Text>
                <Text style={styles.itemPrice}>{item.price}</Text>
                <View style={styles.buttonRow}>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('Cart', { item });
                    }}
                  >
                    <View style={styles.buttonContainer}>
                      <Text style={styles.buttonText}>Add Cart</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('Payment', { item });
                    }}
                  >
                    <View style={styles.buttonContainer}>
                      <Text style={styles.buttonText}>Buy</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>
        ))}

        {/* Navigation bar/footer */}
        <View style={styles.navBarFooter}>
          <TouchableOpacity onPress={backththehome}>
            <Image
              source={{ uri: 'https://freesvg.org/img/dynnamitt_home.png' }}
              style={{ width: 30, height: 30 }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Shop')}>
          <Image
            source={{ uri: 'https://freesvg.org/img/grocery-15.png' }}
            style={{ width: 30, height: 30 }}
          />
          </TouchableOpacity>
          <TouchableOpacity onPress={backtotheprofile}>
            <Image
              source={{ uri: 'https://freesvg.org/img/1506603007.png' }}
              style={{ width: 30, height: 30 }}
            />
          </TouchableOpacity>
        </View>
      </ImageBackground>
      
     {/* </View> */}
    </ScrollView>
  );
}

export default Cuddles;

  