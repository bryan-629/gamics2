import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { windowWidth, windowWidthCol , anchoToltaCols } from '../helpers/calcwWdth';

export default function MatchScreen({navigation}) {
  return (
    <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', backgroundColor: '#313638' }}>
        <SafeAreaView>
            <View style={{width:anchoToltaCols, paddingVertical:10}}>
                <TouchableOpacity onPress={() => navigation.navigate('Profile')}> 
                    <Ionicons name="chevron-back" size={24} color="white" />
                </TouchableOpacity>    
            </View>
        </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({});
