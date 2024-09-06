import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity, Image, StyleSheet, ImageBackground,ScrollView } from 'react-native';
const backgroundImage = require('../../assets/bg.png');

// Sample data for kids' clothes
const kidsClothes = [
  {
    id: '17',
    name: 'Baby Shirts ',
    description: 'Newborn Printed Baby Shirts - 6p. Made in Sri Lanka',
    price: '$3.50',
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/littlelove-a13cb.appspot.com/o/download%20(10).jpeg?alt=media&token=472e26ca-16e0-4b23-a981-c31d7a26178f',
  },
  {
    id: '52',
    name: 'Kids Full S',
    description: 'Baby trouser and shirt.Colour - Blue and white. Made in Sri Lanka',
    price: '$18.50',
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/littlelove-a13cb.appspot.com/o/download%20(11).jpeg?alt=media&token=4663593a-63ba-4923-a4dd-4fedfccf28bb',
  },
  {
    id: '38',
    name: 'Kids Soft-Hat',
    description: 'For Kids. Made in China. No harmful things.',
    price: '$2.50',
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/littlelove-a13cb.appspot.com/o/Cute-Summertime-Relaxation-Bulk-Fashionable-Cotton-Design-Bucket-Baby-Girl-Cap.webp?alt=media&token=1d2e6048-9566-4bd7-b19e-fdbe5d22dab0',
  },
  {
    id: '48',
    name: 'Baby Gercy',
    description: 'Made in India. Two small size. Comfortable ',
    price: '$14.99',
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/littlelove-a13cb.appspot.com/o/imageeeeeeeeeees.jpeg?alt=media&token=f191f057-a210-44d4-a3d7-6d5da3cfb4c5',
  },
  {
    id: '59',
    name: 'Skirt and blouse',
    description: 'Cool and comfortable  for kids.Small Brown color',
    price: '$13.50',
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/littlelove-a13cb.appspot.com/o/im22ages.jpeg?alt=media&token=c1c39750-86bb-4182-809c-33a1088038db',
  },
  {
    id: '63',
    name: 'Kids Frock S',
    description: 'Another stylish frock for kids. Made in Sri Lanka',
    price: '$15.75',
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/littlelove-a13cb.appspot.com/o/imaggges.jpeg?alt=media&token=64d6e5b3-a96c-4ad1-8960-12c29c0d0d8e',
  },
];

function KidsStore() {
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
      backgroundColor: '#5bf6db',
      padding: 10,
    },
  });

  return (
    <ScrollView>
    {/* <View style={styles.container}> */}
      <ImageBackground source={backgroundImage} style={{ flex: 1 }}>
        <Text style={{ textAlign: 'center', fontSize: 30, marginVertical: 30, fontStyle: 'italic', fontWeight: 'bold' }}>
          Mini Fashion Finds
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

export default KidsStore;
