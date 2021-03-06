import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image, TextInput, Keyboard, KeyboardAvoidingView, ActivityIndicator, TouchableWithoutFeedback, Platform } from 'react-native';
import React, { useState, useEffect } from 'react';
import * as Font from 'expo-font';
import { Feather } from '@expo/vector-icons'
import Logo from '../assets/Logo.png'
import PlatformBtn from '../Components/PlatformBtn';
import { windowWidth, windowWidthCol, anchoToltaCols } from '../helpers/calcwWdth';
import { useUsuario } from '../Context/usuarioContext';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function SearchScreen({ navigation, route }) {

  const { searchPlatform, setSearchPlatform, searchPlayer, setSearchUser, searchUser,favUser,favPlatform } = useUsuario();
  const [fontLoaded, setFontLoaded] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState({});
  const [platform, setPlatform] = useState('psn')

  const loadFonts = async () => 
  {
    await Font.loadAsync({
      'BebasNeue': require('../assets/font/BebasNeue-Regular.ttf'),
      'Mon': require('../assets/font/Montserrat-VariableFont_wght.ttf'),
    });
    const userFavSavedId = await AsyncStorage.getItem('UserId');
    const userFavSavedPlatform = await AsyncStorage.getItem('Platform');
    console.log('user fav :' +userFavSavedId)
    console.log('user fav :' +userFavSavedPlatform)
    if (userFavSavedId && userFavSavedPlatform ) {
      setSearchPlatform(userFavSavedPlatform);
      setSearchUser(userFavSavedId);
      navigation.navigate('Profile');
    };
    setTimeout(() =>{
      setFontLoaded(true);
    },500)
  };


  const userPressed = (user) => {
    setSearchUser(user);
    setSearchPlatform(platform)
    navigation.navigate('Profile');
    setResult('');
    setInputValue('');
  };


  useEffect(() => { //controlamos el feedback de carga.
    if (inputValue != '') { //si hay valor en el input, se manda la peticiion, con lo cual, cargamos
      if (!result.status) { // si no hay status, no hemos recibido respuesta, por lo que mostramos el spinner
        setLoading(true);
      }else{
        setLoading(false);
      };
    };

  }, [result]);


  const handleSubmit = (user) => {
    setSearchUser(user);
    setSearchPlatform(platform);
    navigation.navigate('Profile');
    setResult('');
    setInputValue('');
  };


  useEffect(() => {
    if (inputValue != '') {
      searchPlayer(platform, inputValue, setResult);
      setLoading(false);
    };
  }, [platform]);

  useEffect(() => {
    if (inputValue != '') {
      setLoading(true);
      setResult({});
      searchPlayer(platform, inputValue, setResult);
      setLoading(false);
    }else{
      setResult({});
    };
  }, [inputValue]);

  useEffect(() => {
    loadFonts();
  }, []);

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'height' : 'height'}
      style={{ flex: 1 }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#313638' }}>
          {fontLoaded ? (
            <>
              <View style={{ flex: 1 }}>
                <SafeAreaView>
                  <View style={{ alignItems: "center", marginTop: 85 }}>
                    <View style={styles.logo}>
                      <Image style={{ height: 80, width: 100, resizeMode: 'stretch', marginBottom: 20 }} source={Logo}></Image>
                    </View>
                  </View>
                  <View style={{ alignItems: 'center', marginTop: 75 }}>
                    <Text style={{ color: '#DDDDDD', fontSize: 20, marginBottom: 15, fontFamily: 'BebasNeue' }}>
                      Introduce el usuario y su plataforma
                    </Text>
                    <View style={{ width: windowWidth, alignItems: 'center' }}>
                      <PlatformBtn platform={platform} setPlatform={setPlatform} ></PlatformBtn>
                    </View>
                    <TextInput
                      onChangeText={(val) => setInputValue(val)}
                      value={inputValue}
                      style={{
                        padding: 10,
                        borderColor: 'white',
                        backgroundColor: 'white',
                        width: anchoToltaCols,
                        borderRadius: 3,
                        borderWidth: 1,
                        textAlign: 'center',
                        fontSize: 20,
                        marginTop: 10,
                        fontFamily: 'BebasNeue'
                      }}
                      placeholder="Ej: Cap Price"
                    />


                    <TouchableOpacity >
                      <View
                        style={{ padding: 10, width: anchoToltaCols, backgroundColor: '#00B4D8', borderRadius: 3, marginTop: 10 }}>
                        <Text style={{ textAlign: 'center', color: "#2D2D2A", fontSize: 25, fontFamily: 'BebasNeue' }}>SEARCH</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                  {loading ? (
                    <View style={{ alignItems: 'center', marginTop: 75 }}>
                      <ActivityIndicator size="small" color="#fff" />
                    </View>) 
                      : result.status == "success" ? 
                         result.data.length > 0 ?
                      (
                      <View style={{ alignItems: 'center', marginTop: 20 }}>
                        <Text style={{ color: '#DDDDDD', fontSize: 20, marginBottom: 15, fontFamily: 'BebasNeue' }}>Resultados:</Text>

                        <View style={{ width: anchoToltaCols, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', borderRadius: 10 }}>
                          {result.data.map((item, index) => {
                            return (
                              <TouchableOpacity key={item.accountId} onPress={() => { userPressed(item.username) }}>
                                <View style={{ padding: 10, alignItems: 'center' }}>
                                  <View style={{ alignItems: 'center' }}>
                                    <Text style={{ color: '#2D2D2A', fontSize: 20, fontFamily: 'BebasNeue' }}>{item.username}</Text>
                                  </View>
                                </View>
                              </TouchableOpacity>
                            )
                          })}
                        </View>
                      </View>

                    ):(
                      <View style={{ alignItems: 'center', marginTop: 20 }}>
                        <Text style={{ color: '#DDDDDD', fontSize: 20, marginBottom: 15, fontFamily: 'BebasNeue' }}>No se han encontrado resultados.</Text>
                      </View>
                    )
                    
                    : null}

                </SafeAreaView>

              </View>
            </>) : (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#313638' }}>
              <ActivityIndicator size="small" color="white" />
            </View>)}
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({});
