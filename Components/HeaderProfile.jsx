import { StyleSheet, Text, View, SafeAreaView,TouchableOpacity, Image} from 'react-native';
import React, { useState, useEffect } from 'react';
import * as Font from 'expo-font';
import {windowWidth,windowWidthCol,anchoToltaCols} from '../helpers/calcwWdth';
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import {getName, getNameId} from '../helpers/namesGestion';
import Logo from '../assets/Logo.png'
import { Ionicons } from '@expo/vector-icons';
import { useUsuario } from '../Context/usuarioContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function HeaderProfile({navigation, userData}) {


    const [fontLoaded, setFontLoaded] = useState(false);
    const {searchPlatform, setSearchPlatform, searchPlayer, setSearchUser, searchUser,favUser,favPlatform,setFavPlatform,setFavUser } = useUsuario();
    const [thisProfileIsFav, setThisProfileIsFav] = useState(true)
    const [favExist, setFavExist] = useState(true)//control para mostrar el boton de go back o delete profile

    useEffect(() => {
        console.log('onmount')
        console.log(favUser)
        if (favUser) {
            setFavExist(true)
            
        }else{
            setFavExist(false)
        }
        if (searchUser == favUser) {
            setThisProfileIsFav(true)
        }else{
            setThisProfileIsFav(false);
        }
      },[]);

  
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
    
    const saveProfileAsFav = async () =>{
      setFavExist(true);
      setThisProfileIsFav(true);
      const userFavSavedId = await AsyncStorage.setItem('UserId', searchUser );
      const userFavSavedPlatform =  await AsyncStorage.setItem('Platform', searchPlatform );
      setFavPlatform(userFavSavedPlatform);
      setFavUser(userFavSavedId);
      console.log('saved');
    };
    const deleteSavedProfile = async () => {
        setFavExist(false);
        setThisProfileIsFav(false);
        await AsyncStorage.removeItem('UserId' );
        await AsyncStorage.removeItem('Platform' );
        setFavPlatform('');
        setFavUser('');
        console.log('removed');
    };

    return (
        <View style={styles.container}>
            <SafeAreaView style={{ alignItems: 'center'}}>
            {fontLoaded ? (
                <>
                    <View style={{width:anchoToltaCols, alignItems:'flex-end', marginTop:3}}>
                        <TouchableOpacity onPress={() => navigation.navigate('Search')}>
                            <Ionicons name="md-search" size={24} color="white" />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.imgRadius}>
                        <Image source={Logo} style={{width:43, height:35}}></Image>
                    </View>
                    <View style={{}}>
                        <View style={{justifyContent:'center', flexDirection:'row', alignItems:'center'}}>
                            <Text style={{ fontFamily: 'BebasNeue', color: 'white', fontSize: 20, justifyContent: 'center', alignItems: 'center', marginTop: 5 }}>{getName(userData.data.userName)}</Text>
                            <View style={{backgroundColor:'#00B4D8', height:20,width:20, borderRadius:5, marginLeft:5}}></View>
                        </View>
                        <View>
                            <Text style={{ fontFamily: 'Mon', color: 'white', fontSize: 13, textAlign:'center'}}>{getNameId(userData.data.userName)}</Text>
                        </View>    
                    </View>
                    <View style={{height:40, width:anchoToltaCols/2,flexDirection:'row', marginTop:20,justifyContent:'space-between' }}>
                        <View style={{width:windowWidthCol,justifyContent:'center',alignItems:'center',marginRight:5 }}>
                            <Text style={{ fontFamily: 'BebasNeue', color: 'white', fontSize: 30, justifyContent: 'center', alignItems: 'center', marginTop: 5 }}>{userData.data.level}</Text>
                            <Text style={{ fontFamily: 'Mon', color: 'white', fontSize: 13, textAlign:'center'}}>Level</Text>
                        </View>
                        <View style={{width:windowWidthCol,justifyContent:'center',alignItems:'center',marginLeft:5}}>
                            <Text style={{ fontFamily: 'BebasNeue', color: 'white', fontSize: 30, justifyContent: 'center', alignItems: 'center', marginTop: 5 }}>{userData.data.prestige}</Text>
                            <Text style={{ fontFamily: 'Mon', color: 'white', fontSize: 13, textAlign:'center'}}>Prestige</Text>
                        </View>
                    </View>
                    {favExist?
                        thisProfileIsFav?(
                            <TouchableOpacity onPress={() => deleteSavedProfile()} style={{padding:10,width:anchoToltaCols/2, backgroundColor:'#00B4D8',marginTop:25,justifyContent:'center',alignItems:'center', borderRadius:10, shadowColor: "#000",shadowOffset: {width: 0,height: 5,},shadowOpacity: 0.34,shadowRadius: 6.27,elevation: 10}}>
                                <View style={{justifyContent:'center', alignItems:'center'}}>
                                    <Text style={{fontFamily: 'BebasNeue', fontSize:17, color:'#44484A'}}>Delete</Text>
                                </View>
                            </TouchableOpacity>
                        )
                        :
                        (   <TouchableOpacity style={{padding:10,width:anchoToltaCols/2, backgroundColor:'#00B4D8',marginTop:25,justifyContent:'center',alignItems:'center', borderRadius:10, shadowColor: "#000",shadowOffset: {width: 0,height: 5,},shadowOpacity: 0.34,shadowRadius: 6.27,elevation: 10}}>
                                <View style={{justifyContent:'center', alignItems:'center'}}>
                                    <Text style={{fontFamily: 'BebasNeue', fontSize:17, color:'#44484A'}}>Go back</Text>
                                </View>
                            </TouchableOpacity>)
                    : 
                    (
                     <TouchableOpacity onPress={() => saveProfileAsFav() } style={{padding:10,width:anchoToltaCols/2, backgroundColor:'#00B4D8',marginTop:25,justifyContent:'center',alignItems:'center', borderRadius:10, shadowColor: "#000",shadowOffset: {width: 0,height: 5,},shadowOpacity: 0.34,shadowRadius: 6.27,elevation: 10}}>
                        <View style={{justifyContent:'center', alignItems:'center'}}>
                            <Text style={{fontFamily: 'BebasNeue', fontSize:17, color:'#44484A'}}>Set as your profile</Text>
                        </View>
                     </TouchableOpacity>
                    )
                        
                    }
                    
                </>
                ) : (<Text>Loading...</Text>)
            }
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        
        borderRadius: 5,
        width: windowWidth,
        backgroundColor: '#44484A',
        alignItems: 'center',
        shadowColor: "#000",
        paddingVertical:30,
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        
        elevation: 10,
    },
    imgRadius: {
        backgroundColor:'#313638',
        borderColor: 'transparent',
        borderWidth: 1,
        borderRadius: 50,
        height: 80,
        width: 80,
        
        marginBottom:10,
        shadowColor: "#000",
        shadowOffset: {width: 0,height: 5},
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
        justifyContent:'center',
        alignItems:'center'
    },
});
