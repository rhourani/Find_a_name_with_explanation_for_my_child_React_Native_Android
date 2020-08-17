import 'react-native-gesture-handler';
import React, {useState} from 'react';
import { FlatList, StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import { openDatabase } from 'react-native-sqlite-storage';
//Connction to access the pre-populated user_db.db
var db = openDatabase({ name: 'MyChildNameDB.db', createFromLocation : "~MyChildNameDB.db"});

let IsExistsInQuranNavigateParam = "";
let OriginOfTheNameNavigateParam ="";
let BoyOrGirl = "";
let Charachter_1_Param = "";
let Charachter_2_Param = "";



export const NamesList = ({ route, navigation }) => {
    /* 2. Get the param */
    const { isExistsInQuran } = route.params;
    const { originOfTheNameNavigateParam } = route.params;
    const { childsex } = route.params;
    const { charc_1 } = route.params;
    const { charc_2 } = route.params;
    const [FlatListItems , SetFlatListItems] = useState([]);
    
    
    IsExistsInQuranNavigateParam = JSON.stringify(isExistsInQuran);
    OriginOfTheNameNavigateParam = JSON.stringify(originOfTheNameNavigateParam);
    BoyOrGirl = JSON.stringify(childsex);
    Charachter_1_Param = JSON.stringify(charc_1);
    Charachter_2_Param = JSON.stringify(charc_2);


    //slicing the " in the strings
     const sliceQutesFromParams = () =>   
      {
         if (IsExistsInQuranNavigateParam.endsWith('"')) {IsExistsInQuranNavigateParam = IsExistsInQuranNavigateParam.slice(0, -1);}
        if (IsExistsInQuranNavigateParam.startsWith('"')) {IsExistsInQuranNavigateParam = IsExistsInQuranNavigateParam.slice(1);}

        if (OriginOfTheNameNavigateParam.endsWith('"')) {OriginOfTheNameNavigateParam = OriginOfTheNameNavigateParam.slice(0, -1);}
        if (OriginOfTheNameNavigateParam.startsWith('"')) {OriginOfTheNameNavigateParam = OriginOfTheNameNavigateParam.slice(1);}

        if (BoyOrGirl.endsWith('"')) {BoyOrGirl = BoyOrGirl.slice(0, -1);}
        if (BoyOrGirl.startsWith('"')) {BoyOrGirl = BoyOrGirl.slice(1);}

        if (Charachter_1_Param.endsWith('"')) {Charachter_1_Param = Charachter_1_Param.slice(0, -1);}
        if (Charachter_1_Param.startsWith('"')) {Charachter_1_Param = Charachter_1_Param.slice(1);}

        if (Charachter_2_Param.endsWith('"')) {Charachter_2_Param = Charachter_2_Param.slice(0, -1);}
        if (Charachter_2_Param.startsWith('"')) {Charachter_2_Param = Charachter_2_Param.slice(1);}
        
            
      };


        sliceQutesFromParams ();
        const SqlData = () => 
        {    
            db.transaction(tx => 
                {
                        /**
                         * Not important to exists in Quran!
                         */
                         if(IsExistsInQuranNavigateParam == 'غير مهم'){
                        
                            console.log(`daddy is indie bro2`);
                        
                                    //Is it important the origin? Yes!
                                    if(OriginOfTheNameNavigateParam != 'لا يهم'){
                                    tx.executeSql('SELECT ID, Name, CharC_1, CharC_2, Explanation FROM Names WHERE NameSex=? AND NameOrigin=? AND (CharC_1 =? OR CharC_2=? OR CharC_1=? OR CharC_2=?)', [BoyOrGirl, OriginOfTheNameNavigateParam, Charachter_1_Param, Charachter_1_Param, Charachter_2_Param, Charachter_2_Param], (tx, results) => {
                                        console.log(`ınside orgin is important`);
                                    
                                        var temp = [];
                                        for (let i = 0; i < results.rows.length; ++i) {
                                            temp.push(results.rows.item(i));
                                        }
                                        SetFlatListItems(FlatListItems => FlatListItems.concat(temp));
                                        });
                                    }//end of Is it important the origin? Yes!
                        
                        
                                //Is it important the origin? No!
                                else{
                                    tx.executeSql('SELECT ID, Name, CharC_1, CharC_2, Explanation FROM Names WHERE NameSex=? AND (CharC_1 =? OR CharC_2=? OR CharC_1=? OR CharC_2=?)', [BoyOrGirl, Charachter_1_Param, Charachter_1_Param, Charachter_2_Param, Charachter_2_Param], (tx, results) => {
                        
                                        var temp = [];
                                        for (let i = 0; i < results.rows.length; ++i) {
                                        temp.push(results.rows.item(i));
                                        }
                                        SetFlatListItems(FlatListItems => FlatListItems.concat(temp));

            
                                    });
                                } // end of Is it important the origin? No!
                        
                        
                        } // end of Not important to exists in Quran!

                        /**
                         * Its requrired to be or not to be exists in Quran!
                         */
                        else if(IsExistsInQuranNavigateParam != 'غير مهم') {
                            console.log(`daddy is indie bro3`);
                        
                        
                                    //Is it important the origin? Yes!
                                    if(OriginOfTheNameNavigateParam != 'لا يهم'){
                                        tx.executeSql('SELECT ID, Name, CharC_1, CharC_2, Explanation FROM Names WHERE NameSex=? AND ExistsInQuran=? AND NameOrigin=? AND (CharC_1 =? OR CharC_2=? OR CharC_1=? OR CharC_2=?)', [BoyOrGirl, IsExistsInQuranNavigateParam, OriginOfTheNameNavigateParam, Charachter_1_Param, Charachter_1_Param, Charachter_2_Param, Charachter_2_Param], (tx, results) => {
                                    
                                            var temp = [];
                                            for (let i = 0; i < results.rows.length; ++i) {
                                            temp.push(results.rows.item(i));
                                            }
                                            SetFlatListItems(FlatListItems => FlatListItems.concat(temp));

            
                                        });
                                    }//End of Is it important the origin? Yes!
                        
                                        //Is it important the origin? No!
                                    else{
                                        tx.executeSql('SELECT ID, Name, CharC_1, CharC_2, Explanation FROM Names WHERE NameSex=? AND ExistsInQuran=? AND (CharC_1=? OR CharC_2=? OR CharC_1=? OR CharC_2=?)', [BoyOrGirl, IsExistsInQuranNavigateParam, Charachter_1_Param, Charachter_1_Param, Charachter_2_Param, Charachter_2_Param], (tx, results) => {
                        
                                            var temp = [];
                                            for (let i = 0; i < results.rows.length; ++i) {
                                                temp.push(results.rows.item(i));
                                            }
                                            SetFlatListItems(FlatListItems => FlatListItems.concat(temp));

            
                                            });
                                        } // End of Is it important the origin? No!
                        }
                });
        };

        SqlData();
        const Item = ({ title }) => {
            return (
              <View style={styles.item}> 
                  <Text style={styles.title}>{title}</Text>
                <Text style={styles.explain}>اضغط للشرح</Text>
              </View>
            )
          };

          return(
            <View style= {styles.container}>
              <ImageBackground source={require('./bak5.jpg')}  style={styles.backgroundImage}>
              <FlatList
            
                  data={FlatListItems}
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

  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
     // marginTop: 10,
     // marginTop: Constants.statusBarHeight,
     //backgroundColor: '#820061',
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
      fontSize: 21,
      color: '#1e3078',
    },
    explain: {
      alignSelf: 'center',
      color: '#104f5c'
    },
    backgroundImage: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center"
    },
  })