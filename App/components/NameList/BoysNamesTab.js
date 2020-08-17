import 'react-native-gesture-handler';
import React from 'react';
import { FlatList, StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import { openDatabase } from 'react-native-sqlite-storage';
import { NavigationContainer } from '@react-navigation/native';
//import { createStackNavigator } from 'react-navigation-stack';
//import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
//import NameMeaning from '../Name Meaning/NameMeaning';

//Connction to access the pre-populated user_db.db
var db = openDatabase({ name: 'MyChildNameDB.db', createFromLocation : "~MyChildNameDB.db"});





class BoysNamesTab extends React.Component {
    constructor(props) {
        super(props);
      }
    render() {
        let FlatListNames =  [];
        FlatListNames = boysNames();
        const {navigation} = this.props;

        function Item({ title }) { 
            return (
                <View style = {{ borderBottomColor : "#edf9f9",  borderBottomWidth  : 1, padding: 7, marginVertical: 8, marginHorizontal: 16}}>
                    <Text style = {{ fontSize: 21, color: '#1e3078'}}> {title} </Text>
                    <Text style = {{ fontSize: 14, alignSelf: 'center', color: '#104f5c',fontWeight: "bold" }}>اضغط للشرح</Text>
                </View>
            )
        }


        function boysNames() {
            var boysNamesList = [];
            db.transaction(tx => {
                // boys names
              tx.executeSql('SELECT ID, Name, CharC_1, CharC_2, Explanation FROM Names WHERE NameSex=?', ["لـ طفلي"], (tx, results) => {
                  for (let i = 0; i < results.rows.length; ++i) {
                    boysNamesList.push(results.rows.item(i));
                  }
                });
          }); // DB transaction    
          return boysNamesList;
        };



        return(
                <View style= {styles.container}>
                  <ImageBackground source={require('./bakBoy.jpg')}  style={styles.backgroundImage}>
                    <FlatList
                        data={FlatListNames}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => 
                                            <TouchableOpacity
                                            onPress = {() => {               
                                              navigation.navigate('NameMeaning',{
                                              nameTitle : item.Name,  
                                              nameId : item.ID,
                                              explaination : item.Explanation,
                                              charc_1 : item.CharC_1, 
                                              charc_2 : item.CharC_2,               
                                            });
                                            
                                          }}
                                                    >
                                                            <Item title = {item.Name}/>
                                            
                                            </TouchableOpacity>
                                    }
                    />
              </ImageBackground>
                </View>
            
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
     // marginTop: 10,
     // marginTop: Constants.statusBarHeight, 
     backgroundColor: '#820061',
    },
    item: {
      //backgroundColor: '#5ef268',
      borderBottomColor : "#edf9f9",
      borderBottomWidth  : 1,
      padding: 7,
      marginVertical: 8,
      marginHorizontal: 16,
      
    },
    title: {
      fontSize: 25,
      color: '#08fa00'
    },
    explain: {
      alignSelf: 'center',
      color: '#faed00'
    },
    backgroundImage: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center",
      
    },
  })
  
  export default BoysNamesTab;