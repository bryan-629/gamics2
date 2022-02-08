import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { windowWidth, windowWidthCol , anchoToltaCols } from '../helpers/calcwWdth';
export default function StatsData({userData}) {
  return (
    <View style={{flex:1, justifyContent: 'center', alignItems:'center'}}>
  
      <View style={{ flexDirection: 'row', alignItems: 'center',width:anchoToltaCols }}>
            <Text style={{ color: 'grey', fontFamily: 'BebasNeue', fontSize: 17, marginLeft: 10, marginRight: 20 }}>Lifetime</Text>
        </View>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>

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
                            <Text style={{ color: 'white', fontFamily: 'Mon', fontSize: 12, textAlign: 'center' }}>Wins</Text>
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
                    <View style={{ width: anchoToltaCols, marginTop: 20, justifyContent: 'space-between', flexDirection: 'row' }}>
                        <View style={{ width: windowWidthCol, justifyContent: 'center' }}>
                            <Text style={{ color: 'white', fontFamily: 'BebasNeue', fontSize: 20, textAlign: 'center' }}>{userData.data.userDataBr.kills}</Text>
                            <Text style={{ color: 'white', fontFamily: 'Mon', fontSize: 12, textAlign: 'center' }}>Kills</Text>
                        </View>
                        <View style={{ width: windowWidthCol, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: 'white', fontFamily: 'BebasNeue', fontSize: 20, textAlign: 'center' }}>{userData.data.userDataBr.deaths}</Text>
                            <Text style={{ color: 'white', fontFamily: 'Mon', fontSize: 12, textAlign: 'center' }}>Muertes</Text>
                        </View>
                        <View style={{ width: windowWidthCol, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: 'white', fontFamily: 'BebasNeue', fontSize: 20, textAlign: 'center' }}>{userData.data.userDataBr.topFive}</Text>
                            <Text style={{ color: 'white', fontFamily: 'Mon', fontSize: 12, textAlign: 'center' }}>Top 5</Text>
                        </View>
                        <View style={{ width: windowWidthCol, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: 'white', fontFamily: 'BebasNeue', fontSize: 20, textAlign: 'center' }}>{userData.data.userDataBr.topTen}</Text>
                            <Text style={{ color: 'white', fontFamily: 'Mon', fontSize: 12, textAlign: 'center' }}>Top 10</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center',width:anchoToltaCols,marginTop: 30 }}>
                        <Text style={{ color: 'grey', fontFamily: 'BebasNeue', fontSize: 17, marginLeft: 10, marginRight: 20 }}>Week stats</Text>
                    </View>
                    <View style={{ width: anchoToltaCols, marginTop: 10, justifyContent: 'space-between', flexDirection: 'row' }}>
                        <View style={{ width: windowWidthCol, justifyContent: 'center' }}>
                            <Text style={{ color: 'white', fontFamily: 'BebasNeue', fontSize: 20, textAlign: 'center' }}>{Math.round(userData.data.userDataBrWeek.kdRatio *100 ) / 100}</Text>
                            <Text style={{ color: 'white', fontFamily: 'Mon', fontSize: 12, textAlign: 'center' }}>KD</Text>
                        </View>
                        <View style={{ width: windowWidthCol, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: 'white', fontFamily: 'BebasNeue', fontSize: 20, textAlign: 'center' }}>{Math.round(userData.data.userDataBrWeek.headshotPercentage * 100)/100}</Text>
                            <Text style={{ color: 'white', fontFamily: 'Mon', fontSize: 12, textAlign: 'center' }}>%headshot</Text>
                        </View>
                        <View style={{ width: windowWidthCol, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: 'white', fontFamily: 'BebasNeue', fontSize: 20, textAlign: 'center' }}>{userData.data.userDataBrWeek.headshots}</Text>
                            <Text style={{ color: 'white', fontFamily: 'Mon', fontSize: 12, textAlign: 'center' }}>Headshot</Text>
                        </View>
                        <View style={{ width: windowWidthCol, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: 'white', fontFamily: 'BebasNeue', fontSize: 20, textAlign: 'center' }}>{Math.round(userData.data.userDataBrWeek.killsPerGame *100)/100}</Text>
                            <Text style={{ color: 'white', fontFamily: 'Mon', fontSize: 12, textAlign: 'center' }}>Kills/Game</Text>
                        </View>
                    </View>
                    <View style={{ width: anchoToltaCols, marginTop: 20, justifyContent: 'space-between', flexDirection: 'row' }}>
                        <View style={{ width: windowWidthCol, justifyContent: 'center' }}>
                            <Text style={{ color: 'white', fontFamily: 'BebasNeue', fontSize: 20, textAlign: 'center' }}>{userData.data.userDataBrWeek.kills}</Text>
                            <Text style={{ color: 'white', fontFamily: 'Mon', fontSize: 12, textAlign: 'center' }}>Kills</Text>
                        </View>
                        <View style={{ width: windowWidthCol, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: 'white', fontFamily: 'BebasNeue', fontSize: 20, textAlign: 'center' }}>{userData.data.userDataBrWeek.deaths}</Text>
                            <Text style={{ color: 'white', fontFamily: 'Mon', fontSize: 12, textAlign: 'center' }}>Muertes</Text>
                        </View>
                        <View style={{ width: windowWidthCol, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: 'white', fontFamily: 'BebasNeue', fontSize: 20, textAlign: 'center' }}>{userData.data.userDataBrWeek.damageDone}</Text>
                            <Text style={{ color: 'white', fontFamily: 'Mon', fontSize: 12, textAlign: 'center' }}>Damage Done</Text>
                        </View>
                        <View style={{ width: windowWidthCol, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: 'white', fontFamily: 'BebasNeue', fontSize: 20, textAlign: 'center' }}>{userData.data.userDataBrWeek.damageTaken}</Text>
                            <Text style={{ color: 'white', fontFamily: 'Mon', fontSize: 12, textAlign: 'center' }}>damage Taken</Text>
                        </View>
                    </View>
    </View>
  );
}

const styles = StyleSheet.create({});
