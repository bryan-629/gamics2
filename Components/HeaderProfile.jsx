import { StyleSheet, Text, View, SafeAreaView,TouchableOpacity} from 'react-native';
import React, { useState, useEffect } from 'react';
import * as Font from 'expo-font';
import {windowWidth,windowWidthCol,anchoToltaCols} from '../helpers/calcwWdth';
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';



export default function HeaderProfile({userData}) {


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
        <View style={styles.container}>
            {fontLoaded ? (
                <SafeAreaView style={{ alignItems: 'center',flex:1 }}>
                    <View style={styles.imgRadius}>

                    </View>
                    <View style={{}}>
                        <View style={{justifyContent:'center', flexDirection:'row', alignItems:'center'}}>
                            <Text style={{ fontFamily: 'BebasNeue', color: 'white', fontSize: 20, justifyContent: 'center', alignItems: 'center', marginTop: 5 }}>{userData.data.userName}</Text>
                            <View style={{backgroundColor:'#00B4D8', height:20,width:20, borderRadius:5, marginLeft:5}}></View>
                        </View>
                        <View>
                            <Text style={{ fontFamily: 'Mon', color: 'white', fontSize: 13, textAlign:'center'}}>#3927000</Text>
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
                    <TouchableOpacity style={{padding:10,width:anchoToltaCols/2, backgroundColor:'#00B4D8',marginTop:25,justifyContent:'center',alignItems:'center', borderRadius:10, shadowColor: "#000",shadowOffset: {width: 0,height: 5,},shadowOpacity: 0.34,shadowRadius: 6.27,elevation: 10}}>
                        <View style={{justifyContent:'center', alignItems:'center'}}>
                            <Text style={{fontFamily: 'BebasNeue', fontSize:17, color:'#44484A'}}>Set as your profile</Text>
                        </View>
                    </TouchableOpacity>
                </SafeAreaView>) : (<Text>Loading...</Text>)
            }

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 355,
        borderRadius: 5,
        width: windowWidth,
        backgroundColor: '#44484A',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        
        elevation: 10,
    },
    imgRadius: {
        backgroundColor: '#ADB8B9',
        borderRadius: 50,
        height: 80,
        width: 80,
        marginTop: 20,
        marginBottom:10
    },
});
