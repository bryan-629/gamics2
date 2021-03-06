import { StyleSheet, Text, View,SafeAreaView,TouchableOpacity,Image } from 'react-native'
import React, {useState,useEffect} from 'react'
import * as Font from 'expo-font';
import Logo from '../assets/Logo.png';

export default function PrivateScreen({navigation}) {

    const [fontLoaded, setFontLoaded] = useState(false);

    const loadFonts = async () => {
        await Font.loadAsync({
            'BebasNeue': require('../assets/font/BebasNeue-Regular.ttf'),
            'Mon': require('../assets/font/Montserrat-VariableFont_wght.ttf'),
        });
        setFontLoaded(true);
    };

    useEffect(() => {
        loadFonts();
    }, []);
  return (
    <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#313638' }}>
            <SafeAreaView>
                {fontLoaded ? (
                    <>
                        <View style={{ alignItems: 'center', marginTop: 170, marginBottom: 30 }}>
                            <Image source={Logo} style={{ width: 64, height: 52 }} />
                        </View>
                        <Text style={{ color: 'white', fontFamily: 'BebasNeue', textAlign: 'center', fontSize: 40, marginBottom: 10 }}>Oh no!</Text>
                        <Text style={{ color: 'white', fontFamily: 'BebasNeue', textAlign: 'center', fontSize: 20 }}>Este perfil es privado</Text>
                        <View>
                            <TouchableOpacity onPress={() => { navigation.navigate('Search')}} >
                                <View style={{ width: 270, justifyContent: 'center', alignItems: 'center', backgroundColor: '#ADB8B9', borderRadius: 3, marginTop: 10, padding: 10 }}>
                                    <Text style={{ color: '#313638', fontFamily: 'BebasNeue', textAlign: 'center', fontSize: 20 }}>Volver</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </>
                ) : (
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#313638' }}>
                        <Text style={{ color: 'white' }}>Loading...</Text>
                    </View>
                )
                }
            </SafeAreaView>
        </View>
  )
}

const styles = StyleSheet.create({})