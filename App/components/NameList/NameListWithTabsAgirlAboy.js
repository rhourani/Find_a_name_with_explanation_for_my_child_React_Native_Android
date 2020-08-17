import 'react-native-gesture-handler';
import React from 'react';
import { FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { openDatabase } from 'react-native-sqlite-storage';
import { NavigationContainer } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/stack';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import BoysNamesTab from '../NameList/BoysNamesTab';
import GirlsNamesTab from '../NameList/GirlsNamesTab';


export default createMaterialTopTabNavigator ({
    
            BoysNamesTab: {
                screen: BoysNamesTab,
            },  
            GirlsNamesTab: {
                screen: GirlsNamesTab,
            },
    });
