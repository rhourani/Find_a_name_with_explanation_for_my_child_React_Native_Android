/**
 * Radwan Alhourani - Name finder Arabic version
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Alert,
  Text,
  TouchableOpacity,
} from 'react-native';

import {
  Dropdown }
  from 'react-native-material-dropdown'; 


  class MainScreen extends Component {

    constructor(props){
      super(props);
    }




  
    render() {


      let IsExistsInQuranNavigateParam = '';
      let OriginOfTheNameNavigateParam = '';
      let BoyOrGirl = '';
      let Charachter_1_Param = '';
      let Charachter_2_Param = '';



       this.CheckDropDownAndNavigate_0 = ({navigation}) => {
        //const {navigation} = this.props;
  
          //Handler for the Submit onPress
          //Check if the dropdown is selected or left unselected
          console.log("am inside checker daddy");

                    return(
                      this.props.navigation.navigate('NamesList',{
                        isExistsInQuran : IsExistsInQuranNavigateParam,
                        originOfTheNameNavigateParam : OriginOfTheNameNavigateParam,
                        childsex : BoyOrGirl,
                        charc_1 : Charachter_1_Param,
                        charc_2 : Charachter_2_Param,
                      })
                    );
        };




      this.CheckDropDownAndNavigate = ({navigation}) => {
      //const {navigation} = this.props;

        //Handler for the Submit onPress
        //Check if the dropdown is selected or left unselected
        console.log("am inside checker daddy");
  
        if(BoyOrGirl != '') {
          if(IsExistsInQuranNavigateParam != ''){
            if(OriginOfTheNameNavigateParam != ''){
              if(Charachter_1_Param != ''){
                if(Charachter_2_Param != ''){
  
                  return(
                    this.props.navigation.navigate('NamesList',{
                      isExistsInQuran : IsExistsInQuranNavigateParam,
                      originOfTheNameNavigateParam : OriginOfTheNameNavigateParam,
                      childsex : BoyOrGirl,
                      charc_1 : Charachter_1_Param,
                      charc_2 : Charachter_2_Param,
                    })
                  );
                }else {
                  Alert.alert(
                    "تنبيه!",
                    "الرجاء التأكد من اختيار جميع المعلومات المطلوبة!",
                    [     
                      {
                        text: "موافق",
                      }      
                  ],
                  { cancelable: false }
                    );
                }
              }else {
                Alert.alert(
                  "تنبيه!",
                  "الرجاء التأكد من اختيار جميع المعلومات المطلوبة!",
                  [     
                    {
                      text: "موافق",
                    }      
                ],
                { cancelable: false }
                  );
              }
            }else {
              Alert.alert(
                "تنبيه!",
                "الرجاء التأكد من اختيار جميع المعلومات المطلوبة!",
                [     
                  {
                    text: "موافق",
                  }      
              ],
              { cancelable: false }
                );
            }
          }else {
            Alert.alert(
              "تنبيه!",
              "الرجاء التأكد من اختيار جميع المعلومات المطلوبة!",
              [     
                {
                  text: "موافق",
                }      
            ],
            { cancelable: false }
              );
          }
        }
        else {
          Alert.alert(
            "تنبيه!",
            "الرجاء التأكد من اختيار جميع المعلومات المطلوبة!",
            [     
              {
                text: "موافق",
              }      
          ],
          { cancelable: false }
            );
        }
      };

      let sex = [
        {value: 'لـ طفلي'},
        {value: 'لـ طفلتي'},
  
      ];
  
      const SexOptionHandler = (ChildSex) => {
        console.log(`Selected value: ${ChildSex}`);
        BoyOrGirl = ChildSex;
      }

      let IsExistsInQuran = [
        {value: 'نعم'},
        {value: 'لا'},
        {value: 'غير مهم'},
      ];
  
      const IsExistsInQuranOptionHandler = (IsExistsInQuranParam) => {
        console.log(`Selected value: ${IsExistsInQuranParam}`);
        //this.setState({IsExistsInQuranNavigateParam : IsExistsInQuranParam})
        IsExistsInQuranNavigateParam = IsExistsInQuranParam;
      }
  
      let OriginOfTheName = [
        {value: 'عربي'},
        {value: 'فرنسي'},
        {value: 'عبري'},
        {value: 'توراتي'},
        {value: 'فارسي'},
        {value: 'لا يهم'},
      ];
  
      const OriginOfTheNameOptionHandler = (OriginOfTheNameParam) => {
        console.log(`Selected value: ${OriginOfTheNameParam}`);
        OriginOfTheNameNavigateParam = OriginOfTheNameParam;
      }

      let characteristicList_1 = [
        {value: 'صفة القناعة'},
        {value: 'صفة الرضا'},
        {value: 'صفة القبول'},
        {value: 'صفة الحب'},
        {value: 'صفة العبد'},
        {value: 'صفة الخضرة'},
        {value: 'صفة القوة'},
        {value: 'صفة البريق'},
        {value: 'صفة الهدوء'},
        {value: 'صفة العطاء'},
        {value: 'صفة الإشراق'},
        {value: 'صفة المؤانسة'},
        {value: 'صفة الألفة'},
        {value: 'صفة الجمال'},
      ];
  
      const characteristicList_1_Handler = (CharC_1) => {
        console.log(`Selected value: ${CharC_1}`);
        Charachter_1_Param = CharC_1;
      }
  
      let characteristicList_2 = [
        {value: 'صفة القناعة'},
        {value: 'صفة الرضا'},
        {value: 'صفة القبول'},
        {value: 'صفة الحب'},
        {value: 'صفة العبد'},
        {value: 'صفة الخضرة'},
        {value: 'صفة القوة'},
        {value: 'صفة البريق'},
        {value: 'صفة الهدوء'},
        {value: 'صفة العطاء'},
        {value: 'صفة الإشراق'},
        {value: 'صفة المؤانسة'},
        {value: 'صفة الألفة'},
        {value: 'صفة الجمال'},
      ];
  
      const characteristicList_2_Handler = (CharC_2) => {
        console.log(`Selected value: ${CharC_2}`);
        Charachter_2_Param = CharC_2;
  
      }


      return(
        <View  style= {styles.container}>
         <Dropdown
         label= 'أريد اختيار اسم لـ طفلي/طفلتي'
         data={sex}
         onChangeText = {ChildSex => SexOptionHandler(ChildSex)}
      />

        <Dropdown
         label= 'هل ذكر في القرآن؟'
         data={IsExistsInQuran}
         onChangeText = {IsExistsInQuranParam => IsExistsInQuranOptionHandler(IsExistsInQuranParam)}
      />

        <Dropdown
         label= 'أصل الاسم'
         data={OriginOfTheName}
         onChangeText = {OriginOfTheNameParam => OriginOfTheNameOptionHandler(OriginOfTheNameParam)}
      />


        <Dropdown
         style={styles.dropdown}
         label= 'الصفة الأولى'
         data={characteristicList_1}
         onChangeText = {CharC_1 => characteristicList_1_Handler(CharC_1)}
        />

        <Dropdown
        style={styles.dropdown}
         label= 'الصفة الثانية'
         data={characteristicList_2}
         onChangeText = {CharC_2 => characteristicList_2_Handler(CharC_2)}
       />



        <TouchableOpacity 
        style={styles.button}
        onPress =  {this.CheckDropDownAndNavigate}        
        >
          <Text> جد لي اسما</Text>
          
        </TouchableOpacity>
        <Text style = {styles.centerText}>  أو </Text>

        <TouchableOpacity 
        style={styles.button_2}
        onPress = {() => {this.props.navigation.navigate('TabsScreen')}}         
        >
          <Text> تصفح جميع الأسماء من غير فلترة </Text>
          
        </TouchableOpacity>

      </View>
      );
    }
    
  }

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: "center",
    margin: 45,
  },
  dropdown: {},
  button:{
    alignItems: "center",
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginTop : 60,
    marginBottom: 10
  },
  button_2:{
    alignItems: "center",
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginTop : 7,
    marginBottom: 0,
  },
  centerText:{
    textAlign: 'center',
  },
})


export default MainScreen;
