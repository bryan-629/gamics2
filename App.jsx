import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SearchScreen from './Screens/SearchScreen.jsx';
import { NavigationContainer } from '@react-navigation/native';
import ProfileScreen from './Screens/ProfileScreen.jsx';
import ErrorScreen from './Screens/ErrorScreen.jsx';
import React, { useState, useEffect } from 'react';
import * as Font from 'expo-font';
import { UsuarioProvider,useUsuario } from './Context/usuarioContext';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MatchScreen from './Screens/MatchScreen.jsx';
import AsyncStorage from '@react-native-async-storage/async-storage';
import PrivateScreen from './Screens/PrivateScreen.jsx';


export default () => <UsuarioProvider><App/></UsuarioProvider>

function App() {
  const {setFavPlatform,setFavUser } = useUsuario();


  const loadData = async () => {
    const userFavSavedId = await AsyncStorage.getItem('UserId');
    const userFavSavedPlatform = await AsyncStorage.getItem('Platform');

    if(userFavSavedId && userFavSavedPlatform){
      setFavUser(userFavSavedId);
      setFavPlatform(userFavSavedPlatform)
    };

  };
  useEffect(() => {
    loadData();
  })

  const Stack = createNativeStackNavigator();

  
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='SearchScreen' screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Search" component={SearchScreen}/>
          <Stack.Screen name="Error" component={ErrorScreen} />
          <Stack.Screen name="Private" component={PrivateScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen}/>
          <Stack.Screen name="Match" component={MatchScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
   

  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#313638',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
