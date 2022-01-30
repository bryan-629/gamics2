import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { windowWidth, windowWidthCol, anchoToltaCols } from '../helpers/calcwWdth';
import { FontAwesome5 } from '@expo/vector-icons';
import Unodk from '../assets/unodk.png'
import { UsuarioProvider,useUsuario } from '../Context/usuarioContext';
export default function PlatformBtn() {
    const { searchPlatform, setSearchPlatform } = useUsuario();
    return (
        <View style={{width:anchoToltaCols, flexDirection:'row', justifyContent:'space-between', }}>
                <TouchableOpacity onPress={() => setSearchPlatform('psn')} >
                    <View style={{ backgroundColor: searchPlatform == 'psn'? '#00B4D8' : '#44484A' , width: windowWidthCol,padding:10, alignItems:'center',borderRadius:3}}>
                        <FontAwesome5 name="playstation" size={24} color="black" />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setSearchPlatform('xbl')} >
                    <View style={{ backgroundColor: searchPlatform == 'xbl'? '#00B4D8' : '#44484A', width: windowWidthCol,padding:10, alignItems:'center',borderRadius:3}}>
                        <FontAwesome5 name="xbox" size={24} color="black" />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setSearchPlatform('uno')}>
                    <View style={{ backgroundColor: searchPlatform == 'uno'? '#00B4D8' : '#44484A', width: windowWidthCol,paddingHorizontal:10, paddingVertical:7,alignItems:'center',borderRadius:3}}>
                        <Image style={{width:30,height:30}} source={Unodk}></Image>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setSearchPlatform('battle')}>
                    <View style={{ backgroundColor: searchPlatform == 'battle'? '#00B4D8' : '#44484A', width: windowWidthCol,padding:10,alignItems:'center',paddingHorizontal:10, paddingVertical:7,borderRadius:3 }}>
                        <FontAwesome5 name="battle-net" size={30} color="black" />
                    </View>
                </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({});
