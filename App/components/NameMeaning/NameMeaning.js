import 'react-native-gesture-handler';

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Text,
} from 'react-native';




export default function NameMeaning ({route}){
  const { nameTitle } = route.params;
  const { explaination } = route.params;
  const { charc_1 } = route.params;
  const { charc_2 } = route.params;
  let temp = JSON.stringify(charc_2);
  console.log("here is charc 2 : ", temp);
  if(  (temp == "null") ){temp = ''}
  else {}

  return(
    
    <SafeAreaView style= {styles.container}>
      <Text style={styles.Title}> الاسم يحمل الصفة/ات التالية:</Text>
      <Text> ـــــــــــــــــــــــــــــــــــــــــــ </Text>

      <Text style={styles.CharC}> {JSON.stringify(charc_1)}</Text>
      <Text style={styles.CharC}> {temp}</Text>

      <Text style={styles.CharC}></Text>
      
      <Text style={styles.Title}>معنى اسم {JSON.stringify(nameTitle)}</Text>
      <Text> ـــــــــــــــــــــــــــــــــــــــــــ </Text>


      <ScrollView style={styles.scrollView}>
        <Text style={styles.text}>
        {JSON.stringify(explaination)}

        </Text>
      </ScrollView>
    </SafeAreaView>

  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 1,
    padding: 5,
    paddingTop:15,
    backgroundColor: '#f5e9e9',
    marginBottom: 1,

  },
  scrollView: {
    paddingTop:15, 
  },
  text: {
    fontSize: 17,
    fontWeight: "bold",

  },
  Title: {
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom: 10,
    color: "#7d0202"

  },
  CharC: {
    fontSize: 18,
    paddingBottom: 10,
    color: "#f022ec"

  },
  NameTitle: {
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom: 10,
    color: "#127a00"

  },

})


















