import * as React from 'react';
import { useEffect, useState } from 'react';
import { Text, View, ImageBackground, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ScanQR from './myNavigation/ScanQR';
import PaymentForm from './myNavigation/PaymentForm';
import Machines from './myNavigation/Machines';
import Ionicons from '@expo/vector-icons/Ionicons';

const Tab = createBottomTabNavigator();


export default function App() {

  return (

    <ImageBackground source={ require('./assets/image/background.png') } style={ styles.header }>
      <NavigationContainer>

        <Tab.Navigator
          screenOptions={ ({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === 'Scan QR') {
                iconName = 'qr-code-outline';
              }
              else if (route.name === 'Payment') {
                iconName = 'navigate-outline';
              }
              else if (route.name === 'Machines') {
                iconName = 'radio-outline'
              } else if (route.name === 'Formik2') {
                iconName = 'radio-outline'
              }
              return <Ionicons name={ iconName } size={ size } color={ color } />;
            }, tabBarActiveTintColor: 'tomato', tabBarInactiveTintColor: 'gray',
          }) }
        >
          <Tab.Screen name="Scan QR" component={ ScanQR } />
          <Tab.Screen name="Payment" component={ PaymentForm } />
          <Tab.Screen name="Machines" component={ Machines } />
        </Tab.Navigator>
      </NavigationContainer>
    </ImageBackground>
  )

}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: "100%",
  }
})

// https://dev.api.vending.averato.com/api/info/machine/123654 респонса с каква валута може да се разплаща дали има метод за плащане
// ако върне валута значи машината е готова ако не върне съответно не е готова

//креате пеимънт
