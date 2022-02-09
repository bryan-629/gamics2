import { StyleSheet, Text, View,TouchableOpacity,ActivityIndicator, ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { windowWidth, windowWidthCol , anchoToltaCols } from '../helpers/calcwWdth';
import { useUsuario } from '../Context/usuarioContext';
import {getName} from '../helpers/namesGestion.js'
export default function MatchScreen({navigation, route}) {

  const { searchPlatform, setSearchPlatform, setSearchUser, searchUser,getMatchDetails } = useUsuario();

  const [user,setUser] = useState(null);
  const [matchData,setMatchData] = useState({})
  const [loading, setLoading] = useState(false)

  useEffect(() =>{
  if (matchData.yourTeam) {
    if (matchData.yourTeam.teamUsers[0].matchID != route.params.matchId || user != searchUser) {
      setLoading(true);
      setMatchData({});
      setUser(searchUser);
      console.log(route.params.matchId)
      
      getMatchDetails(route.params.matchId,getName(searchUser),setMatchData);
      setLoading(false)
    }
    }else{
      setLoading(true);
      setMatchData({});
      setUser(searchUser);
      console.log(route.params.matchId)
      getMatchDetails(route.params.matchId,getName(searchUser),setMatchData);
      setLoading(false) }
  },[])


  return (
    <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', backgroundColor: '#313638' }}>
      <ScrollView>
      <SafeAreaView>
      
            <View style={{width:anchoToltaCols, paddingVertical:10}}>
                <TouchableOpacity onPress={() => navigation.navigate('Profile')}> 
                    <Ionicons name="chevron-back" size={24} color="white" />
                </TouchableOpacity>    
            </View>
            {matchData.yourTeam? (
              <View>
                <Text style={{ fontFamily: 'BebasNeue', color: 'white', textAlign:'center', fontSize:20}}>{matchData.yourTeam.teamUsers[0].mode}</Text>
                <Text style={{ color: 'white', fontFamily: 'Mon', fontSize: 12, textAlign: 'center' }}>{matchData.yourTeam.teamUsers[0].utcEndSeconds}</Text>
                <View style={{width:anchoToltaCols, marginTop:30, marginBottom:10}}>
                    <Text style={{ fontFamily: 'BebasNeue', color: 'grey', fontSize:20}}>Team de {getName(searchUser)}</Text>
                </View>
                <View style={{width:anchoToltaCols, backgroundColor:'#44484A', borderRadius:10,padding:10, flexDirection:'row'}}>
                        <View style={{ width: windowWidthCol, justifyContent: 'center' }}>
                            <Text style={{ color: 'white', fontFamily: 'BebasNeue', fontSize: 20, textAlign: 'center' }}>{matchData.yourTeam.teamPosition}º</Text>
                        </View>
                        <View style={{ width: windowWidthCol, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: 'white', fontFamily: 'BebasNeue', fontSize: 20, textAlign: 'center' }}>{Math.round(matchData.yourTeam.teamKd * 100) /100}</Text>
                            <Text style={{ color: 'white', fontFamily: 'Mon', fontSize: 12, textAlign: 'center' }}>KD</Text>
                        </View>
                        <View style={{ width: windowWidthCol, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: 'white', fontFamily: 'BebasNeue', fontSize: 20, textAlign: 'center' }}>{matchData.yourTeam.teamKills}</Text>
                            <Text style={{ color: 'white', fontFamily: 'Mon', fontSize: 12, textAlign: 'center' }}>Kills</Text>
                        </View>
                </View>



                <View  style={{ width:anchoToltaCols}}>
                 <View style={{flexDirection:'row',padding:10}}>
                          <View style={{ width: windowWidthCol, justifyContent: 'center', alignItems: 'center', }}>
  
                          </View>
                        <View style={{ width: windowWidthCol, justifyContent: 'center', alignItems: 'center' }}>
                          
                            <Text style={{ color: 'white', fontFamily: 'Mon', fontSize: 12, textAlign: 'center' }}>KD</Text>
                        </View>
                        <View style={{ width: windowWidthCol, justifyContent: 'center', alignItems: 'center' }}>
                          
                            <Text style={{ color: 'white', fontFamily: 'Mon', fontSize: 12, textAlign: 'center' }}>Kills</Text>
                        </View>
                        <View style={{ width: windowWidthCol, justifyContent: 'center', alignItems: 'center' }}>
                          
                            <Text style={{ color: 'white', fontFamily: 'Mon', fontSize: 12, textAlign: 'center' }}>Head Shot</Text>
                        </View>
                      </View>
                  {matchData.yourTeam.teamUsers.map((item,index) => {
                    return(
                      <View style={{flexDirection:'row',padding:10}}>
                          <View style={{ width: windowWidthCol, justifyContent: 'center', alignItems: 'center' }}>
                            <Text numberOfLines={1} style={{ color: 'white', fontFamily: 'BebasNeue', fontSize: 17, textAlign: 'center' }}>{item.player.username}</Text>
                          </View>
                        <View style={{ width: windowWidthCol, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: 'white', fontFamily: 'BebasNeue', fontSize: 17, textAlign: 'center' }}>{Math.round(item.playerStats.kdRatio * 100)/100}</Text>
                            
                        </View>
                        <View style={{ width: windowWidthCol, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: 'white', fontFamily: 'BebasNeue', fontSize: 17, textAlign: 'center' }}>{item.playerStats.kills}</Text>
                            
                        </View>
                        <View style={{ width: windowWidthCol, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: 'white', fontFamily: 'BebasNeue', fontSize: 17, textAlign: 'center' }}>{item.playerStats.headshots}</Text>
                            
                        </View>
                      </View>)
                    
                  })}
                  <View style={{width:anchoToltaCols, marginTop:40,marginBottom:10}}>
                    <Text style={{ fontFamily: 'BebasNeue', color: 'grey', fontSize:20}}>Todos los teams</Text>
                  </View>
                  {matchData.teams.map((team,index) => { return(
                    <View style={{width:windowWidth,marginBottom:40}}>
                      <View style={{width:anchoToltaCols, backgroundColor:'#44484A', borderRadius:10,padding:10, flexDirection:'row'}}>
                        <View style={{ width: windowWidthCol, justifyContent: 'center' }}>
                            <Text style={{ color: 'white', fontFamily: 'BebasNeue', fontSize: 20, textAlign: 'center' }}>{team.teamPosition}º</Text>
                        </View>
                        <View style={{ width: windowWidthCol, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: 'white', fontFamily: 'BebasNeue', fontSize: 20, textAlign: 'center' }}>{Math.round(team.teamKd * 100) /100}</Text>
                            <Text style={{ color: 'white', fontFamily: 'Mon', fontSize: 12, textAlign: 'center' }}>KD</Text>
                        </View>
                        <View style={{ width: windowWidthCol, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: 'white', fontFamily: 'BebasNeue', fontSize: 20, textAlign: 'center' }}>{team.teamKills}</Text>
                            <Text style={{ color: 'white', fontFamily: 'Mon', fontSize: 12, textAlign: 'center' }}>Kills</Text>
                        </View>
                      </View>
                      <View style={{flexDirection:'row',padding:10}}>
                          <View style={{ width: windowWidthCol, justifyContent: 'center', alignItems: 'center', }}>
                          </View>
                        <View style={{ width: windowWidthCol, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: 'white', fontFamily: 'Mon', fontSize: 12, textAlign: 'center' }}>KD</Text>
                        </View>
                        <View style={{ width: windowWidthCol, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: 'white', fontFamily: 'Mon', fontSize: 12, textAlign: 'center' }}>Kills</Text>
                        </View>
                        <View style={{ width: windowWidthCol, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: 'white', fontFamily: 'Mon', fontSize: 12, textAlign: 'center' }}>Head Shot</Text>
                        </View>
                      </View>
                      {team.teamUsers.map((player,index)=>{
                          return(
                            <View style={{flexDirection:'row',padding:10}}>
                                <View style={{ width: windowWidthCol, justifyContent: 'center', alignItems: 'center' }}>
                                  <Text numberOfLines={1} style={{ color: 'white', fontFamily: 'BebasNeue', fontSize: 17, textAlign: 'center' }}>{player.player.username}</Text>
                                </View>
                              <View style={{ width: windowWidthCol, justifyContent: 'center', alignItems: 'center' }}>
                                  <Text style={{ color: 'white', fontFamily: 'BebasNeue', fontSize: 17, textAlign: 'center' }}>{Math.round(player.playerStats.kdRatio * 100)/100}</Text>
                                  
                              </View>
                              <View style={{ width: windowWidthCol, justifyContent: 'center', alignItems: 'center' }}>
                                  <Text style={{ color: 'white', fontFamily: 'BebasNeue', fontSize: 17, textAlign: 'center' }}>{player.playerStats.kills}</Text>
                                  
                              </View>
                              <View style={{ width: windowWidthCol, justifyContent: 'center', alignItems: 'center' }}>
                                  <Text style={{ color: 'white', fontFamily: 'BebasNeue', fontSize: 17, textAlign: 'center' }}>{player.playerStats.headshots}</Text>
                                  
                              </View>
                            </View>)
                      })}
                    </View>)
                  })}

                </View>

              </View>

            ):(
              <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
                  <ActivityIndicator size="small" color="white" />
              </View>
              
            )} 
            
        </SafeAreaView>
        </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
