import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import { windowWidth, windowWidthCol, anchoToltaCols } from '../helpers/calcwWdth';
import MatchScreen from '../Screens/MatchScreen';


export default function MatchesData({navigation,userMatches}) {

  

  return (
    <View style={{ justifyContent: 'center', width: windowWidth, alignItems: 'center' }}>
      {
        userMatches.userMatch.data.matches.map((item, index) => {
          return(
            <TouchableOpacity key={item.matchID} style={{marginBottom:10}} onPress={() => navigation.navigate('Match',{'matchId': item.matchID })}>
            <View style={{ width: anchoToltaCols, backgroundColor: '#44484A', borderRadius: 5, padding: 10, paddingBottom:12}}>
              <View style={{flexDirection:'row', alignItems:'center', marginBottom:5}}>
                <Text style={{ fontFamily: 'Mon', color: 'white', textAlign:'left',fontSize:12}}>{item.mode}</Text>
                <Text style={{ fontFamily: 'Mon', color: 'white', textAlign:'left', fontSize:10}}> - {item.utcEndSeconds}</Text>
              </View>
              <View style={{flexDirection:'row', alignItems:'center'}}>
                <View style={{width:windowWidthCol}}>
                  <Text style={{ fontFamily: 'BebasNeue', color: 'white', textAlign:'center', fontSize:30}}>{item.playerStats.teamPlacement}º</Text>
                </View>
                <View style={{width:windowWidthCol, alignItems:'center',justifyContent:'center'}}>
                  <Text style={{ fontFamily: 'BebasNeue', color: 'white', textAlign:'center', fontSize:20}}>{Math.round(item.playerStats.kdRatio * 100) / 100}</Text>
                  <Text style={{ fontFamily: 'Mon', color: 'white', textAlign:'center', fontSize:10}}>KD</Text>
                </View>
                <View style={{width:windowWidthCol, alignItems:'center',justifyContent:'center'}}>
                  <Text style={{ fontFamily: 'BebasNeue', color: 'white', textAlign:'center', fontSize:20}}>{item.playerStats.kills}</Text>
                  <Text style={{ fontFamily: 'Mon', color: 'white', textAlign:'center', fontSize:10}}>Kills</Text>
                </View>
                <View style={{width:windowWidthCol, alignItems:'center',justifyContent:'center'}}>
                  <Text style={{ fontFamily: 'BebasNeue', color: 'white', textAlign:'center', fontSize:20}}>{item.playerStats.deaths}</Text>
                  <Text style={{ fontFamily: 'Mon', color: 'white', textAlign:'center', fontSize:10}}>Deaths</Text>
                </View>
              </View>
            </View>
            
          </TouchableOpacity>
          )
        })
      }
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: '#2D2D2A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    width: 300,
    borderRadius: 10,
    height: 45,
    justifyContent: 'center',
    backgroundColor: '#05B2DC',
    marginTop: 15,
    borderColor: "#05B2DC",

    shadowColor: "#05B2DC",
    shadowOffset: {
      width: 8.4,
      height: 8.4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 30,

    elevation: 10,

  },
  image: {
    flex: 1,

  },

});
