import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AllVaccine from './component/Vaccine/Mother/MotherAllDetails';
import MotherList from './component/Vaccine/Mother/MotherList';
import MotherDetails from './component/Vaccine/Mother/MotherDetails';
import AddBaby from './component/Vaccine/Mother/AddBaby';
import BabyDetails from './component/Vaccine/Baby/BabyDetails';
import AddVaccine from './component/Vaccine/Mother/AddMotherVaccine';
import AddClinic from './component/Vaccine/Mother/AddMotherClinic';
import BabyAllDetails from './component/Vaccine/Baby/BabyAllDetails';
import AddBabyVaccine from './component/Vaccine/Baby/AddBabyVaccine';
import AddBabyClinic from './component/Vaccine/Baby/AddBabyClinic';
import tipsmoreDetails from './component/Vaccine/Baby/TipMoreDetails';
import tipsmoreMotherDetails from './component/Vaccine/Mother/TipMoreMotherDetails';


import Home from './component/Screens/Home';
import Shop from './component/Screens/Shop';
import Registermid from './component/Screens/Registermid';
import Select from './component/Selection';
import Login from './component/Screens/Login';
import Registerseller from './component/Screens/Registerseller';
import Restpasswprd from './component/Screens/Resetpasssword';
import Loginseller from './component/Screens/Loginseller';
import ShopSeller from './component/Screens/ShopSeller';
import Addclinicdetails from './component/Screens/Addclinicdetails';
import Addmother from './component/Screens/Addmother';
import AddHealthguides from './component/Screens/AddHealthguides';
import MotherProfile from './component/Screens/MotherProfile';
import MotherProDetails from './component/Screens/MotherProDetails';
import sellerprofile from './component/Screens/SellerProfile';
import QRcodeGenarater from './component/Screens/QRcodeGenarater';
import QRcode from './component/Screens/QRcode';
import QRCodeScanner from './component/Screens/QRcodeScanner';

import Pregnant from './component/Screens/Pregnant';
import KidsStore from './component/Screens/KidsStore';
import Payment from './component/Screens/Payment';
import Cart from './component/Screens/Cart';
import Toys from './component/Screens/Toys';
import Cuddles from './component/Screens/Cuddles';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
       <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
        <Stack.Screen name='AllVaccine' component={AllVaccine} />
        <Stack.Screen name='MotherList' component={MotherList} />
        <Stack.Screen name='MotherDetails' component={MotherDetails} />
        <Stack.Screen name='AddBaby' component={AddBaby} />
        <Stack.Screen name='BabyDetails' component={BabyDetails} />
        <Stack.Screen name='AddVaccine' component={AddVaccine} />
        <Stack.Screen name='AddClinic' component={AddClinic} />
        <Stack.Screen name='BabyAllDetails' component={BabyAllDetails} />
        <Stack.Screen name='AddBabyVaccine' component={AddBabyVaccine} />
        <Stack.Screen name='AddBabyClinic' component={AddBabyClinic} />
        <Stack.Screen name='BabyTips' component={tipsmoreDetails} />
        <Stack.Screen name="MotherTips" component={tipsmoreMotherDetails} />

        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Reset" component={Restpasswprd} />
        <Stack.Screen name="ShopSeller" component={ShopSeller} />
        <Stack.Screen name="Loginseller" component={Loginseller} />
        <Stack.Screen name="Select" component={Select} />
        <Stack.Screen name="Shop" component={Shop} />
        <Stack.Screen name="Registermid" component={Registermid} />
        <Stack.Screen name="Registerseller" component={Registerseller} />
        <Stack.Screen name="Add Clinic Details" component={Addclinicdetails} />
        <Stack.Screen name="Add Mother" component={Addmother} />
        <Stack.Screen name="Add Health Guides" component={AddHealthguides} />
        <Stack.Screen name="Mother Profile" component={MotherProfile} />
        <Stack.Screen name="Mother Profile Details" component={MotherProDetails} />
        <Stack.Screen name="Seller Profile" component={sellerprofile} />
        <Stack.Screen name="QR Generator" component={QRcodeGenarater} />
        <Stack.Screen name="QR Code" component={QRcode} />
        <Stack.Screen name="QR Scan" component={QRCodeScanner} />

        {/* <Stack.Screen name="Registerseller" component={Registerseller} /> */}
        <Stack.Screen name="Pregnant" component={Pregnant} />
        <Stack.Screen name="KidsStore" component={KidsStore} />
        <Stack.Screen name="Payment" component={Payment} />
        <Stack.Screen name="Toys" component={Toys} />
        <Stack.Screen name="Cuddles" component={Cuddles} />
        <Stack.Screen name="Cart">
         {props => <Cart {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
};


export default App;