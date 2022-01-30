import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import { windowWidth, windowWidthCol, anchoToltaCols } from '../helpers/calcwWdth';


export default function MatchesData() {

  return (
    <View style={{ justifyContent: 'center', width: windowWidth, alignItems: 'center' }}>
      <Text style={{ fontFamily: 'BebasNeue', color: 'white', textAlign: 'center', marginTop: 10, marginBottom: 20 }}> 22 de diciembre 2022</Text>
      <TouchableOpacity>
        <View style={{ width: anchoToltaCols, backgroundColor: '#44484A', borderRadius: 5, shadowColor: "#000", shadowOffset: { width: 0, height: 5, }, shadowOpacity: 0.34, shadowRadius: 6.27, elevation: 10, padding: 10 }}>
          <View style={{flexDirection:'row', alignItems:'center', marginBottom:5}}>
            <Text style={{ fontFamily: 'Mon', color: 'white', textAlign:'left',fontSize:12}}>BR DUOS </Text>
            <Text style={{ fontFamily: 'Mon', color: 'white', textAlign:'left', fontSize:10}}>- 22 de diciembre 2022</Text>
          </View>
          <View style={{flexDirection:'row', alignItems:'center'}}>
            <View style={{width:windowWidthCol}}>
              <Text style={{ fontFamily: 'BebasNeue', color: 'white', textAlign:'center', fontSize:30}}>27º</Text>
            </View>
            <View style={{width:windowWidthCol, alignItems:'center',justifyContent:'center'}}>
              <Text style={{ fontFamily: 'BebasNeue', color: 'white', textAlign:'center', fontSize:20}}>1.30</Text>
              <Text style={{ fontFamily: 'Mon', color: 'white', textAlign:'center', fontSize:10}}>KD</Text>
            </View>
            <View style={{width:windowWidthCol, alignItems:'center',justifyContent:'center'}}>
              <Text style={{ fontFamily: 'BebasNeue', color: 'white', textAlign:'center', fontSize:20}}>1.30</Text>
              <Text style={{ fontFamily: 'Mon', color: 'white', textAlign:'center', fontSize:10}}>KD</Text>
            </View>
            <View style={{width:windowWidthCol, alignItems:'center',justifyContent:'center'}}>
              <Text style={{ fontFamily: 'BebasNeue', color: 'white', textAlign:'center', fontSize:20}}>1.30</Text>
              <Text style={{ fontFamily: 'Mon', color: 'white', textAlign:'center', fontSize:10}}>KD</Text>
            </View>
          </View>
        </View>
        
      </TouchableOpacity>
      <TouchableOpacity style={{marginTop:20}}>
        <View style={{ width: anchoToltaCols, backgroundColor: '#44484A', borderRadius: 5, shadowColor: "#000", shadowOffset: { width: 0, height: 5, }, shadowOpacity: 0.34, shadowRadius: 6.27, elevation: 10, padding: 10 }}>
          <View style={{flexDirection:'row', alignItems:'center', marginBottom:5}}>
            <Text style={{ fontFamily: 'Mon', color: 'white', textAlign:'left',fontSize:12}}>BR DUOS </Text>
            <Text style={{ fontFamily: 'Mon', color: 'white', textAlign:'left', fontSize:10}}>- 22 de diciembre 2022</Text>
          </View>
          <View style={{flexDirection:'row', alignItems:'center'}}>
            <View style={{width:windowWidthCol}}>
              <Text style={{ fontFamily: 'BebasNeue', color: 'white', textAlign:'center', fontSize:30}}>27º</Text>
            </View>
            <View style={{width:windowWidthCol, alignItems:'center',justifyContent:'center'}}>
              <Text style={{ fontFamily: 'BebasNeue', color: 'white', textAlign:'center', fontSize:20}}>1.30</Text>
              <Text style={{ fontFamily: 'Mon', color: 'white', textAlign:'center', fontSize:10}}>KD</Text>
            </View>
            <View style={{width:windowWidthCol, alignItems:'center',justifyContent:'center'}}>
              <Text style={{ fontFamily: 'BebasNeue', color: 'white', textAlign:'center', fontSize:20}}>1.30</Text>
              <Text style={{ fontFamily: 'Mon', color: 'white', textAlign:'center', fontSize:10}}>KD</Text>
            </View>
            <View style={{width:windowWidthCol, alignItems:'center',justifyContent:'center'}}>
              <Text style={{ fontFamily: 'BebasNeue', color: 'white', textAlign:'center', fontSize:20}}>1.30</Text>
              <Text style={{ fontFamily: 'Mon', color: 'white', textAlign:'center', fontSize:10}}>KD</Text>
            </View>
          </View>
        </View>
        
      </TouchableOpacity>
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
