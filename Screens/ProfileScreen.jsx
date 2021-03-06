import { Dimensions, ScrollView, StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import React, { useState, useEffect } from 'react';
import HeaderProfile from '../Components/HeaderProfile';
import ScrollingButtonMenu from 'react-native-scroll-menu';
import * as Font from 'expo-font';
import OverviewData from '../Components/OverviewData';
import MatchesData from '../Components/MatchesData';
import StatsData from '../Components/StatsData';
import { windowWidth, windowWidthCol , anchoToltaCols } from '../helpers/calcwWdth';
import { useUsuario } from '../Context/usuarioContext';
import createPerformanceLogger from 'react-native/Libraries/Utilities/createPerformanceLogger';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function ProfileScreen({navigation}) {
  const [menu, setMenu] = useState(1);
  const [fontLoaded, setFontLoaded] = useState(false);
  const [userData, setUserData] = useState(null);
  const [userMatches, setUserMatches] = useState(null);
  const { searchPlatform, setSearchPlatform, searchPlayer, setSearchUser, searchUser, playerStats,getPartidasUser } = useUsuario();
  const [loading, setLoading] = useState(false);


  const loadFonts = async () => {
    await Font.loadAsync({
      'BebasNeue': require('../assets/font/BebasNeue-Regular.ttf'),
      'Mon': require('../assets/font/Montserrat-VariableFont_wght.ttf'),
    });
    setFontLoaded(true);
  };

  useEffect(() => {
    loadFonts();
    if (!userData) {
      playerStats(searchPlatform, searchUser, setUserData);
      getPartidasUser(searchPlatform,searchUser,setUserMatches);
    }
  }, []);


  return (

    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#313638' }}>
      
      

        {fontLoaded ? 
        
        userData != null && userMatches != null? 
        userData.status == "success"? (
          <ScrollView bounces={false}>
          
            <HeaderProfile userData={userData} navigation={navigation}/>
            
            <View style={{ width: windowWidth, justifyContent: 'center' }}>
              <View style={{marginBottom:20}}>
                <ScrollingButtonMenu
                  items={[
                    {
                      id: 1,
                      name: 'Overview',
                    },
                    {
                      id: 2,
                      name: 'Matches',
                    },
                    {
                      id: 3,
                      name: 'Stats',
                    }
                  ]}
                  onPress={(e) => {
                    setMenu(e.id);
                  }}
                  textStyle={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    fontFamily: 'BebasNeue',
                    textAlign: 'center'
                  }}
                  buttonStyle={{
                    backgroundColor: '#313638',
                    borderColor: '#313638',
                    width: anchoToltaCols * 0.33,
                  }}
                  activeBackgroundColor={"#313638"}
                  selected={menu}
                />
              </View>
              {menu == 1 ? (<OverviewData userData={userData}/>) : null}
              {menu == 2 ? (<MatchesData userMatches={userMatches} navigation= {navigation} />) : null}
              {menu == 3 ? (<StatsData userData={userData} />) : null}
            </View>

        </ScrollView>
          ) : (userData.mensaje == "Not permitted: not allowed"? navigation.navigate('Private') : navigation.navigate('Error') )
         : (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', width:100}}>
            <ActivityIndicator size="small" color="white" />
          </View>
          )
        : 
        (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator size="small" color="white" />
        </View>
        )}




      
    </View>

  );
}

const styles = StyleSheet.create({});
