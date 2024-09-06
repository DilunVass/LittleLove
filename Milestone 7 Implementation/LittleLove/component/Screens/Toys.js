import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity, Image, StyleSheet, ImageBackground,ScrollView } from 'react-native';
const backgroundImage = require('../../assets/bg.png');

// Sample data for kids' clothes
const kidsClothes = [
  {
    id: '17',
    name: 'Kids Toy Lion ',
    description: 'Made in China. Baby Care product.',
    price: '$12.99',
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/littlelove-a13cb.appspot.com/o/download%20(9).jpeg?alt=media&token=f8eff281-1469-4218-b469-7c474c8cd88c',
  },
  {
    id: '52',
    name: 'Kids Small Size Cart',
    description: 'Only 1y- 3y babys. Made in Sri Lanka',
    price: '$14.99',
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/littlelove-a13cb.appspot.com/o/images%20(1).jpeg?alt=media&token=b1582c34-10f0-4da8-a9e1-4c2ac424d725',
  },
  {
    id: '38',
    name: 'Kids Soft-Toy Pink',
    description: 'For Kids. Made in China. No harmful things.',
    price: '$12.99',
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/littlelove-a13cb.appspot.com/o/images.jpeg?alt=media&token=ae29e0d2-754b-4064-b066-e4d8ca2ff903',
  },
  {
    id: '48',
    name: 'Animal Toy',
    description: 'Made in India. One or group of toys are available',
    price: '$14.99',
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/littlelove-a13cb.appspot.com/o/downloadddd.jpeg?alt=media&token=c50ace82-51db-41e5-a271-be03a75ee49f',
  },
  {
    id: '59',
    name: 'Kids Toys Car',
    description: 'Made in Sri Lanka.6 pies in one packet',
    price: '$12.99',
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/littlelove-a13cb.appspot.com/o/download111.jpeg?alt=media&token=621a775a-77b2-4e66-b3e6-dec66159e559',
  },
  {
    id: '63',
    name: 'Kids Car Red',
    description: 'Remote Control Car - Red color',
    price: '$10.99',
    imageUrl:'https://firebasestorage.googleapis.com/v0/b/littlelove-a13cb.appspot.com/o/imagessss.jpeg?alt=media&token=4c0acbf5-1aaa-4a2b-a2f1-f795cb00b8c0',
  },
];

function Toys() {
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
          TinyPlay Essentials
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

export default Toys;
