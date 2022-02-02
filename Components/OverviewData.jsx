import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import * as Font from 'expo-font';
import { windowWidth, windowWidthCol, anchoToltaCols } from '../helpers/calcwWdth';
import Chart from './Chart';
import ChartPie from './ChartPie';



export default function OverviewData({userData}) {
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
        <View >
            {fontLoaded ? (
                <View style={{ alignItems: 'center' }}>
                    <View style={{ marginTop: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <View style={{ backgroundColor: '#00B4D8', height: 20, width: 20, borderRadius: 5, marginLeft: 5 }}></View>
                        <Text style={{ color: 'white', fontFamily: 'BebasNeue', fontSize: 30, textAlign: 'center', marginLeft: 10, marginRight: 20 }}>{userData.data.userDataBrCal.userLeague}</Text>
                    </View>
                    <View style={{ width: anchoToltaCols, marginTop: 20, justifyContent: 'space-between', flexDirection: 'row' }}>
                        <View style={{ width: windowWidthCol, justifyContent: 'center' }}>
                            <Text style={{ color: 'white', fontFamily: 'BebasNeue', fontSize: 20, textAlign: 'center' }}>{userData.data.userDataBrCal.kd}</Text>
                            <Text style={{ color: 'white', fontFamily: 'Mon', fontSize: 12, textAlign: 'center' }}>KD</Text>
                        </View>
                        <View style={{ width: windowWidthCol, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: 'white', fontFamily: 'BebasNeue', fontSize: 20, textAlign: 'center' }}>{userData.data.userDataBr.wins}</Text>
                            <Text style={{ color: 'white', fontFamily: 'Mon', fontSize: 12, textAlign: 'center' }}>Points/Min</Text>
                        </View>
                        <View style={{ width: windowWidthCol, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: 'white', fontFamily: 'BebasNeue', fontSize: 20, textAlign: 'center' }}>{userData.data.userDataBrCal.winsGame}</Text>
                            <Text style={{ color: 'white', fontFamily: 'Mon', fontSize: 12, textAlign: 'center' }}>%wins</Text>
                        </View>
                        <View style={{ width: windowWidthCol, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: 'white', fontFamily: 'BebasNeue', fontSize: 20, textAlign: 'center' }}>{userData.data.userDataBrCal.killsPerGame}</Text>
                            <Text style={{ color: 'white', fontFamily: 'Mon', fontSize: 12, textAlign: 'center' }}>Kills/Game</Text>
                        </View>
                    </View>
                    <View style={{ width: anchoToltaCols, justifyContent: 'flex-start', marginTop: 30, marginBottom:10 }}>
                        <View style={{ width: windowWidthCol }}>
                            <Text style={{ color: 'grey', fontFamily: 'BebasNeue', fontSize: 17 }}>WEEK CHART</Text>
                        </View>
                    </View>
                    <Chart userData={userData.data.periods}></Chart>
                    <View style={{ width: anchoToltaCols, justifyContent: 'flex-start'}}>
                        <View style={{ width: windowWidthCol }}>
                            <Text style={{ color: 'grey', fontFamily: 'BebasNeue', fontSize: 17 }}>WEEK KD</Text>
                        </View>
                    </View>
                    <View style={{ width: anchoToltaCols, marginTop: 20, justifyContent: 'space-between', flexDirection: 'row' }}>
                        <View style={{ width: windowWidthCol, justifyContent: 'center' }}>
                            <Text style={{ color: 'white', fontFamily: 'BebasNeue', fontSize: 20, textAlign: 'center' }}>1.50</Text>
                            <Text style={{ color: 'white', fontFamily: 'Mon', fontSize: 12, textAlign: 'center' }}>KD</Text>
                        </View>
                        <View style={{ width: windowWidthCol, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: 'white', fontFamily: 'BebasNeue', fontSize: 20, textAlign: 'center' }}>1200</Text>
                            <Text style={{ color: 'white', fontFamily: 'Mon', fontSize: 12, textAlign: 'center' }}>Kills</Text>
                        </View>
                        <View style={{ width: windowWidthCol, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: 'white', fontFamily: 'BebasNeue', fontSize: 20, textAlign: 'center' }}>1000</Text>
                            <Text style={{ color: 'white', fontFamily: 'Mon', fontSize: 12, textAlign: 'center' }}>Deaths</Text>
                        </View>
                        
                    </View>
                    <ChartPie />
                    <TouchableOpacity style={{padding:10,width:anchoToltaCols/2, backgroundColor:'#00B4D8',marginTop:25,justifyContent:'center',alignItems:'center',marginBottom:35, borderRadius:10}}>
                        <View style={{justifyContent:'center', alignItems:'center'}}>
                            <Text style={{fontFamily: 'BebasNeue', fontSize:17, color:'#44484A'}}>Ver todas las estadisticas</Text>
                        </View>
                    </TouchableOpacity>
                </View>



            )
                :
                (
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#313638' }}>
                        <Text style={{ color: 'white' }}>Loading...</Text>
                    </View>)}
        </View>
    );
}

const styles = StyleSheet.create({});
