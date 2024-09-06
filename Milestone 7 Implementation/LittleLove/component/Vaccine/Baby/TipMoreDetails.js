import { get } from 'firebase/database';
import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, ImageBackground, Image, TouchableOpacity, ScrollView } from 'react-native';

const backgroundImage = require('../../../assets/bg.png');
const localImage = require('../../../assets/girl.png');

const tipsmoreDetails = ({ route, navigation }) => {
    const { tips } = route.params;

    console.log(tips);
    const calculateBMI = (weight, height) => {
        const heightInMeters = height / 100;
        return (weight / (heightInMeters * heightInMeters)).toFixed(2);
      };

    const getTips1 = (bmi) => {
        if (bmi < 18.5) {
          return { status: 'Breast milk is the best source of nutrition for infants under 6 months. It provides essential nutrients, antibodies, and is easily digestible. Exclusive breastfeeding is recommended for the first six months of life.', color: 'red', backgroundColor: "#FF3F3F" };
        } else if (bmi >= 18.5 && bmi <= 24.9) {
          return { status: "Initially, start with one meal a day and gradually increase to two or three meals. Feeding your baby solids should complement, not replace, breast milk or formula.", color: 'green', backgroundColor: "#1DFE24" };
        } else {
          return { status: "Stay consistent with your feeding schedule and meal offerings to establish a routine that helps your baby learn healthy eating habits.", color: 'orange', backgroundColor: "orange" };
        }
        
    };

    const getTips2 = (bmi) => {
        if (bmi < 18.5) {
            return { status: "Infants in this age group typically need to be fed every 2-3 hours, or on-demand. Pay attention to your baby's hunger cues, such as rooting, sucking on their hands, or crying.", color: 'red', backgroundColor: "#FF3F3F" };
          } else if (bmi >= 18.5 && bmi <= 24.9) {
            return { status: "Babies at this age need iron-rich foods, as their iron stores from birth start to deplete. Offer iron-fortified cereals and pureed meats or legumes.", color: 'green', backgroundColor: "#1DFE24" };
          } else {
            return { status: "Discuss with your pediatrician whether your baby needs any specific supplements, such as vitamin D or iron, as their needs may change.", color: 'orange', backgroundColor: "orange" };
          }
    };

    const getTips3 = (bmi) => {
        if (bmi < 18.5) {
            return { status: "Around the age of 6 months, you can begin introducing solid foods, one at a time. Start with single-grain cereals, pureed fruits, or vegetables. Introduce one new food every 3-5 days to monitor for allergies.", color: 'red', backgroundColor: "#FF3F3F" };
            } else if (bmi >= 18.5 && bmi <= 24.9) {
            return { status: "Before starting solids, it's a good idea to check with your pediatrician to ensure your baby is developmentally ready and to get specific recommendations for your child.", color: 'green', backgroundColor: "#1DFE24" };
            } else {
            return { status: "Choose healthy snack options like cut-up fruits, vegetables, yogurt, or whole-grain crackers. Avoid giving snacks that are high in empty calories.", color: 'orange', backgroundColor: "orange" };
            }
    }
      
       

    
    const Tips1 = getTips1(calculateBMI(tips.weight, tips.height));
    const Tips2 = getTips2(calculateBMI(tips.weight, tips.height));
    const Tips3 = getTips3(calculateBMI(tips.weight, tips.height));
    return (
        <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
            <ScrollView style={styles.container}>
                <View style={styles.card}>
                    {/* <Text style={styles.cardText}>
                    In the first {tips.age} months baby’s weight is around {tips.weight}kg and height is {tips.height}cm. and that’s means the baby’s BMI rate {calculateBMI(tips.weight, tips.height)} kg/m^2.
                    </Text> */}

                    <Text style={styles.cardText}>
                        1. {Tips1.status}
                    </Text>
                    <Text style={styles.cardText}>

                    </Text>

                </View>

                <View style={styles.card}>

                    <Text style={styles.cardText}>
                        2. {Tips2.status}
                    </Text>
                    <Text style={styles.cardText}>

                    </Text>

                </View>


                <View style={styles.card}>

                    <Text style={styles.cardText}>
                        3. {Tips3.status}
                    </Text>
                    <Text style={styles.cardText}>

                    </Text>

                </View>
            
            </ScrollView>
        </ImageBackground>
        
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 40,
      },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    card: {
        backgroundColor: 'white',
        marginVertical: 5,
        padding: 15,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3.84,
        elevation: 1.5,
      },
      card2: {
        marginVertical: 5,
        padding: 6,
        borderRadius: 50,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3.84,
        elevation: 1.5,
      },
      cardText: {
        fontSize: 16,
      },
      cardStatus: {
        fontSize: 16,
        textAlign: 'center',
        color: 'black'
      },
      cardHeader: {
        fontWeight: 'bold',
      },
});

export default tipsmoreDetails;