import { get } from 'firebase/database';
import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, ImageBackground, Image, TouchableOpacity, ScrollView } from 'react-native';

const backgroundImage = require('../../../assets/bg.png');
const localImage = require('../../../assets/girl.png');

const tipsmoreMotherDetails = ({ route, navigation }) => {
    const { tips } = route.params;

    console.log(tips);  
    
    const getTips1 = (blodPressure) => {
      if(blodPressure < 120 && blodPressure > 60){
        return { status: `A normal blood pressure reading is usually around 120/80 mmHg. This means the systolic pressure is around 120, and the diastolic pressure is around 80`, color: 'green', backgroundColor: "#1DFE24" };
      }else if(blodPressure > 120 && blodPressure < 130){
        return { status: `Elevated blood pressure is when the systolic pressure is consistently between 120-129 mmHg, and the diastolic pressure is less than 80 mmHg. This may be an early sign of hypertension (high blood pressure).`, color: 'orange', backgroundColor: "orange" };
      }else if(blodPressure > 130 && blodPressure < 140){
        return { status: `Hypertension stage 1 is when the systolic pressure is consistently between 130-139 mmHg, or the diastolic pressure is consistently between 80-89 mmHg.`, color: 'red', backgroundColor: "#FF3F3F" };
      }else if(blodPressure > 140 && blodPressure < 180){
        return { status: `Hypertension stage 2 is when the systolic pressure is consistently 140 mmHg or higher, or the diastolic pressure is consistently 90 mmHg or higher.`, color: 'red', backgroundColor: "#FF3F3F" };
      }else if(blodPressure < 60){
        return { status: `Low blood pressure is when the systolic pressure is consistently below 90 mmHg, or the diastolic pressure is consistently below 60 mmHg.`, color: 'red', backgroundColor: "#FF3F3F" };
      }
    }

    const getTips2 = (week) => {
      if(week < 12){
        return { status: `At ${week} weeks of gestation, a pregnancy is still in its early stages, marked by rapid development and crucial milestones for the growing fetus.`, color: 'green', backgroundColor: "#1DFE24" };
      }else if(week >= 12 && week < 28){
        return { status: `A pregnancy at ${week} weeks signifies the midpoint of the second trimester, a time when fetal development is rapidly advancing.`, color: 'orange', backgroundColor: "orange" };
      }else if(week >= 28 && week < 40){
        return { status: `A pregnancy of ${week} weeks corresponds to the beginning of the third trimester, a critical stage in fetal development.`, color: 'red', backgroundColor: "#FF3F3F" };
      }
    }

    const getTips3 = (F_height,week) => {
      if(F_height < 20 && week > 20){
        return { status: `Fundal height is consistently measuring smaller than expected for the gestational age, it may suggest that the fetus is not growing as it should. This could be due to factors such as poor nutrition or placental problems.`, color: 'green', backgroundColor: "#1DFE24" };
      }
      else if(F_height > 20 && week > 20 && F_height < 30){
        return { status: `Your fundal height is in healthy size. `, color: 'red', backgroundColor: "#FF3F3F" };
      }
      else if(F_height > 30 && week > 20){
        return { status: `Fundal height is consistently measuring larger than expected for the gestational age, it may suggest that the fetus is not growing as it should. This could be due to factors such as poor nutrition or placental problems.`, color: 'red', backgroundColor: "#FF3F3F" };
      }
    }



    const Tips1 = getTips1(tips.bp);
    const Tips2 = getTips2(tips.week);
    const Tips3 = getTips3(tips.F_height,tips.week);


    return (
        <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
           <ScrollView style={styles.container}>
                <View style={styles.card}>
                    <Text style={styles.cardText}>
                      1. {Tips1.status}
                    </Text>
                    
                </View>

                <View style={styles.card}>
                    <Text style={styles.cardText}>
                      2. {Tips2.status}
                    </Text>
                    
                </View>

                <View style={styles.card}>
                    <Text style={styles.cardText}>
                      3. {Tips3.status}
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

export default tipsmoreMotherDetails;