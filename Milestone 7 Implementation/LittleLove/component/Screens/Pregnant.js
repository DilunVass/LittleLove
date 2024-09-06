import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity, Image, StyleSheet, ImageBackground ,ScrollView} from 'react-native';
const backgroundImage = require('../../assets/bg.png');

// Sample data for kids' clothes
const kidsClothes = [
  {
    id: '17',
    name: 'Bed Sheets ',
    description: 'Double bedsheet,good quality product.Made in Sri Lanka',
    price: '$3.50',
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/littlelove-a13cb.appspot.com/o/p1.jpeg?alt=media&token=37174022-5a48-4d56-bd2e-8a36d312b371',
  },
  {
    id: '52',
    name: 'Two Pillows',
    description: 'Comfortable two pillows with white. Made in Sri Lanka',
    price: '$18.50',
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/littlelove-a13cb.appspot.com/o/p2.jpeg?alt=media&token=3fb9bb9c-aeda-42bd-ac19-383c83a9965f',
  },
  {
    id: '38',
    name: 'Pregna-Bathik Frock',
    description: 'Bathik white frock.Made in Sri Lanka.',
    price: '$2.50',
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/littlelove-a13cb.appspot.com/o/p3.jpeg?alt=media&token=6b703931-3159-4506-969d-4d19c402d773',
  },
  {
    id: '48',
    name: 'Pregna- blouse',
    description: 'Made in Sri Lanka.S,M,L are available ',
    price: '$14.99',
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/littlelove-a13cb.appspot.com/o/download%20(5).jpeg?alt=media&token=7f864b9f-2957-4a60-841b-08b07516064c',
  },
  {
    id: '59',
    name: 'White frock',
    description: 'Pregna white frock,M/L available',
    price: '$13.50',
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/littlelove-a13cb.appspot.com/o/p4.jpeg?alt=media&token=02c37918-0157-46fe-9307-17fa4ea24516',
  },
  {
    id: '63',
    name: 'Full Kit ',
    description: 'L and S are available.Made in Sri Lanka',
    price: '$15.75',
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/littlelove-a13cb.appspot.com/o/istockphoto-105932225-612x612.jpg?alt=media&token=6ead8a51-421a-4849-985a-0176a98d9053',
  },
];

function Pregnant() {
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
          PregnaStyle Treasures
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

export default Pregnant;
