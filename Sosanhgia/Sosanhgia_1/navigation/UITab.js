import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Navigator } from 'react-native-deprecated-custom-components';


import Welcome from '../Screens (view)/Welcome';
import ViewProducts from '../Screens (view)/ViewProducts_v2';
import test from '../Screens (view)/test';
import IphoneProducts from '../Screens (view)/IphoneProducts';
import Profile from '../Screens (view)/Profiles';
import TestWelcome from '../Screens (view)/TestWelcome';
import SamsungProducts from '../Screens (view)/SamsungProducts';
import XiaomiProducts from '../Screens (view)/XiaomiProducts';
import OppoProducts from '../Screens (view)/OppoProducts';
import VivoProducts from '../Screens (view)/VivoProducts';
import NokiaProducts from '../Screens (view)/NokiaProducts';
import RealmeProducts from '../Screens (view)/RealmeProducts';
import VsmartProducts from '../Screens (view)/VsmartProducts';
import LgProducts from '../Screens (view)/LgProducts';
import SonyProducts from '../Screens (view)/SonyProducts';


const Stack = createNativeStackNavigator();
export default function Root() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Welcome'>
                <Stack.Screen name='Welcome' component={Welcome}/>
                <Stack.Screen name='Test' component={test}/>
                <Stack.Screen name='ViewProducts' component={ViewProducts}/>
                <Stack.Screen name='IphoneProducts' component={IphoneProducts}/>
                <Stack.Screen name='TestWelcome' component={TestWelcome}/>
                <Stack.Screen name='SamsungProducts' component={SamsungProducts}/>
                <Stack.Screen name='XiaomiProducts' component={XiaomiProducts}/>
                <Stack.Screen name='OppoProducts' component={OppoProducts}/>
                <Stack.Screen name='NokiaProducts' component={NokiaProducts}/>
                <Stack.Screen name='VivoProducts' component={VivoProducts}/>
                <Stack.Screen name='RealmeProducts' component={RealmeProducts}/>
                <Stack.Screen name='VsmartProducts' component={VsmartProducts}/>
                <Stack.Screen name='LgProducts' component={LgProducts}/>
                <Stack.Screen name='SonyProducts' component={SonyProducts}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}