import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
function Select(){
    const navigation = useNavigation();
    const openmidwiferegform = () => {
        navigation.navigate('Registermid');
      };
      const openregstersellerform = () => {
        navigation.navigate('Registerseller'); 
      };
    return (
        <View
          style={{  flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 26, color: '#000000',alignSelf: 'flex-start',left:30,bottom:100 }}>Sign up As,</Text>
            <Text style={{ fontSize: 18, color: '#000000' ,alignSelf: 'flex-start',left:30,bottom:93}}>Choose your account</Text>

   
    
          <TouchableOpacity onPress={openmidwiferegform} style={{borderRadius:30,borderWidth:2,borderColor:'#5bf6db',padding:15,margin:20,backgroundColor:'#5bf6db', width: '90%' , alignItems:'center'}}>
            <Text  style={{fontWeight:'bold',fontSize:20,color:'#000000'}}>MidWife</Text>
          </TouchableOpacity>
          <TouchableOpacity  onPress={openregstersellerform} style={{borderRadius:30,borderWidth:2,borderColor:'#5bf6db',padding:15,margin:20,backgroundColor:'#5bf6db', width: '90%' , alignItems:'center'}}>
            <Text style={{fontWeight:'bold',fontSize:20,color:'#000000'}}>  Seller  </Text>
          </TouchableOpacity>
        </View>
      );
}

export default Select;