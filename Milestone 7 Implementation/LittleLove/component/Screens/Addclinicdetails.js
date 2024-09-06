import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, ScrollView, TextInput, TouchableOpacity,ImageBackground } from 'react-native';
import { ref, push, set } from 'firebase/database';
// import { db } from '../FirebaseConfig';
import { db } from '../../firebase/config';
import backgroundImage from '../../assets/bg.png';

const Add = ({ navigation }) => {
  const [date, setdate] = useState('');
  const [clinicDetails, setclinicDetails] = useState('');
  const [vaccDetails, setvaccDetails] = useState('');
  const [nutDetails, setnutDetails] = useState('');

  function createclinicdetails() {
    const detailsRef = ref(db, 'clinicdetails');
    const newDetailsRef = push(detailsRef);

    set(newDetailsRef, {
      date: date,
      clinicDetails: clinicDetails,
      vaccDetails: vaccDetails,
      nutDetails: nutDetails,
    })
      .then(() => {
        alert('Create clinic details Successfully');
        setdate('');
        setclinicDetails('');
        setvaccDetails('');
        setnutDetails('');
      })
      .catch((error) => {
        alert(error.message);
      });
  }

  useEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: '#5bf6db',
      },
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerShown: true,
      title: "",
    });
  }, []);

  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.container}>
        <Text style={styles.header}>Add clinic Details</Text>
        <Text style={styles.inputDetails}>Clinic Date</Text>
        <TextInput
          value={date}
          onChangeText={setdate}
          style={styles.textBoxes}
        />
        <Text style={styles.inputDetails}>Clinic Program Details</Text>
        <TextInput
          multiline={true}
          numberOfLines={4}
          value={clinicDetails}
          onChangeText={setclinicDetails}
          style={styles.textArea}
        />
        <Text style={styles.inputDetails}>Vaccination Program Details</Text>
        <TextInput
          multiline={true}
          numberOfLines={4}
          value={vaccDetails}
          onChangeText={setvaccDetails}
          style={styles.textArea}
        />
        <Text style={styles.inputDetails}>Nutrition Supplements Details</Text>
        <TextInput
          multiline={true}
          numberOfLines={4}
          value={nutDetails}
          onChangeText={setnutDetails}
          style={styles.textArea}
        />
        <TouchableOpacity style={styles.buttonStyle} onPress={createclinicdetails}>
          <Text style={styles.buttonText}>Add Details</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    padding: 20,
  },
  inputDetails: {
    fontSize: 17,
    marginTop: '3%',
    marginBottom: '-3%',
  },
  textBoxes: {
    width: '100%',
    fontSize: 16,
    padding: 12,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 10,
    marginVertical: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  textArea: {
    width: '100%',
    height: 80,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 10,
    padding: 12,
    marginVertical: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    fontSize: 16,
  },
  buttonStyle: {
    backgroundColor: '#5bf6db',
    padding: 13,
    borderRadius: 10,
    width: '100%',
    marginVertical: 20,
    borderColor: 'gray',
    borderWidth: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'black',
    fontSize: 17,
    fontWeight: 'bold',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: '10%',
    marginBottom: '8%',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  }
});

export default Add;
