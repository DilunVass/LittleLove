import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity, Image, StyleSheet, ImageBackground,ScrollView } from 'react-native';
const backgroundImage = require('../../assets/bg.png');

function StoreIcon({ imageUri, navigateTo }) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate(navigateTo)}>
      <Image source={{ uri: imageUri }} style={{ width: 40, height: 40, margin: 10 }} />
    </TouchableOpacity>
  );
}

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
    name: 'Kids Small Shampoo Bottle',
    description: '500ml. Made in Sri Lanka',
    price: '$4.99',
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/littlelove-a13cb.appspot.com/o/soap1.jpeg?alt=media&token=a0021fb8-c03c-4d3f-8e40-48bce155b6e0',
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
    name: 'Pregna blouse',
    description: 'Made in Sri Lanka. S/L available',
    price: '$5.99',
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/littlelove-a13cb.appspot.com/o/download%20(5).jpeg?alt=media&token=7f864b9f-2957-4a60-841b-08b07516064c',
  },
  {
    id: '59',
    name: 'Kids Toys Car',
    description: 'Made in Sri Lanka.6 pies in one packet',
    price: '$3.99',
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/littlelove-a13cb.appspot.com/o/download111.jpeg?alt=media&token=621a775a-77b2-4e66-b3e6-dec66159e559',
  },
  {
    id: '63',
    name: 'Pregna pillow',
    description: 'Made in Sri Lanka. Two pillows',
    price: '$5.99',
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/littlelove-a13cb.appspot.com/o/p2.jpeg?alt=media&token=3fb9bb9c-aeda-42bd-ac19-383c83a9965f',
  },
];



function Shop() {
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
    navigation.navigate('Mother Profile');
  };
  const backtotheprofile = () => {
    navigation.navigate('Login');
  };

  const navigateToShop = () => {
    navigation.navigate('Shop');
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
    iconContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      margin: 40,
      borderWidth: 2, // Add a border
      borderColor: 'black', // Border color
      padding: 10, // Padding around the icon container
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
  // Define your icon data here
  const icons = [
    {
      imageUri: 'https://firebasestorage.googleapis.com/v0/b/littlelove-a13cb.appspot.com/o/downloade%20(3).jpeg?alt=media&token=d481fa4c-e756-44bc-a500-9b50caebe1a7',
      navigateTo: 'Toys', // Replace with the name of the page you want to navigate to
    },
    {
      imageUri: 'https://firebasestorage.googleapis.com/v0/b/littlelove-a13cb.appspot.com/o/download%20e(2).jpeg?alt=media&token=f11a8cb8-d664-4186-a150-fa18a09872ce',
      navigateTo: 'KidsStore',
    },
    {
      imageUri: 'https://firebasestorage.googleapis.com/v0/b/littlelove-a13cb.appspot.com/o/images3%20(3).jpeg?alt=media&token=39caf057-e1fc-4351-9ed4-8270c7ba0b46',
      navigateTo: 'Cuddles',
    },
    {
      imageUri: 'https://firebasestorage.googleapis.com/v0/b/littlelove-a13cb.appspot.com/o/images%20e(4).jpeg?alt=media&token=97f2d71a-2ca1-4ff9-a0f9-c36275bfdcdc',
      navigateTo: 'Pregnant',
    },
  ];

  

  return (
    <ScrollView>
    {/* <View style={styles.container}> */}
      <ImageBackground source={backgroundImage} style={{ flex: 1 }}>
        <Text style={{ textAlign: 'center', fontSize: 30, marginVertical: 30, fontStyle: 'italic', fontWeight: 'bold',color:'red' }}>
          Online Store
        </Text>
        <Text style={{ textAlign: 'center', fontSize: 15, fontStyle: 'italic', fontWeight: 'bold' }}>
        "Welcome to our baby item shop! Explore a delightful selection of baby essentials and gear. Start your online shopping journey now for convenience and quality products."
        </Text>
        <View style={styles.iconContainer}>
          {icons.map((icon, index) => (
            <StoreIcon key={index} imageUri={icon.imageUri} navigateTo={icon.navigateTo} />
          ))}
        </View>
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
          <TouchableOpacity onPress={() => navigation.navigate('Mother Profile')}>
            <Image
              source={{ uri: 'https://freesvg.org/img/dynnamitt_home.png' }}
              style={{ width: 30, height: 30 }}
            />
          </TouchableOpacity >
          <TouchableOpacity onPress={(navigateToShop) => navigation.navigate('Shop')}>
          <Image
            source={{ uri: 'https://freesvg.org/img/grocery-15.png' }}
            style={{ width: 30, height: 30 }}
          />
          </TouchableOpacity >
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

export default Shop;