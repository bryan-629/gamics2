import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { windowWidth, windowWidthCol, anchoToltaCols } from '../helpers/calcwWdth';
import { FontAwesome5 } from '@expo/vector-icons';
import Unodk from '../assets/unodk.png'
import { UsuarioProvider,useUsuario } from '../Context/usuarioContext';
export default function PlatformBtn({setPlatform, platform}) {
    const { searchPlatform, setSearchPlatform } = useUsuario();
    return (
        <View style={{width:anchoToltaCols, flexDirection:'row', justifyContent:'space-between', }}>
                <TouchableOpacity onPress={() => setPlatform('psn')} >
                    <View style={{ backgroundColor: platform == 'psn'? '#00B4D8' : '#44484A' , width: windowWidthCol,padding:10, alignItems:'center',borderRadius:3}}>
                        <FontAwesome5 name="playstation" size={24} color="black" />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setPlatform('xbl')} >
                    <View style={{ backgroundColor: platform == 'xbl'? '#00B4D8' : '#44484A', width: windowWidthCol,padding:10, alignItems:'center',borderRadius:3}}>
                        <FontAwesome5 name="xbox" size={24} color="black" />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setPlatform('uno')}>
                    <View style={{ backgroundColor: platform == 'uno'? '#00B4D8' : '#44484A', width: windowWidthCol,paddingHorizontal:10, paddingVertical:7,alignItems:'center',borderRadius:3}}>
                        <Image style={{width:30,height:30}} source={Unodk}></Image>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setPlatform('battle')}>
                    <View style={{ backgroundColor: platform == 'battle'? '#00B4D8' : '#44484A', width: windowWidthCol,padding:10,alignItems:'center',paddingHorizontal:10, paddingVertical:7,borderRadius:3 }}>
                        <FontAwesome5 name="battle-net" size={30} color="black" />
                    </View>
                </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({});
