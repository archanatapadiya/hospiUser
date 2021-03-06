/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
//  import type {Node} from 'react';
import { View,StyleSheet, Text, TouchableOpacity, TextInput, Alert, Image, SafeAreaView, ScrollView, KeyboardAvoidingView} from 'react-native'
import { Formik } from 'formik'
import { Button, Snackbar } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'

import {
  Colors,
  DebugInstructions,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Styles from './login/styles'

import Header from '../header';
import HospitalHeader from '../hospitalHeader';
import {navigate, push} from '../../navigator/NavigationService';
import {ScreenNames} from '../../navigator/constants';
import {getUserBills, getUserId} from '../../utils/api';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { editProfile } from './../../utils/api'

interface BillingData {
  amount: string;
  bill_file_name: string;
  file_url: string;
  billing_time: string;
}

const Billing = ({route}) => {
  const {userData} = route.params;
  const navigation = useNavigation()


  const onLogin = async(values: any, navigation: any) => {

    let params = {
      ...values,
      user_id: userData.user_id
    }
    const res = await editProfile(params)
    console.log('userData in edit', res)

    if(res?.is_success){
      navigation.navigate(ScreenNames.AccountScreen)
    }
   }

  return (
    <SafeAreaView>
    <KeyboardAvoidingView>
     <ScrollView>
    <Formik
      initialValues={{
        first_name: userData?.first_name || '',
        last_name: userData?.last_name || '',
        email:userData?.email || '',
        address:userData?.address || '',
        zip_code:userData?.zip_code || '',
        phone_number: userData?.phone_number || ''
      }}
      onSubmit={values => {
       onLogin(values, navigation);
      }}
    >
      {formikProps => (
        <React.Fragment>
          <View style={Styles.mainContainer} >
           
            <View style={Styles.container}>
              <View style={Styles.loginContainer}>
                <Text style={{marginLeft: 10, fontSize: 14}}>First Name</Text>
                <TextInput
                  defaultValue={formikProps.values.first_name}
                  // placeholder="Username"
                  style={[Styles.inputLabel, Styles.textStyle]}
                  // keyboardType="email-address"
                  onChangeText={formikProps.handleChange('first_name')}
                  onBlur={formikProps.handleBlur('first_name')}
                />
               

                <Text style={{marginLeft: 10, fontSize: 14}}>Last Name</Text>
                <TextInput
                 
                  // placeholder="Password"
                  value={formikProps.values.last_name}
                  style={[Styles.inputLabel, Styles.textStyle]}
                  onChangeText={formikProps.handleChange('last_name')}
                  maxLength={120}
                  onBlur={formikProps.handleBlur('last_name')}
                />

<Text style={{marginLeft: 10, fontSize: 14}}>Phone Number</Text>
                <TextInput
                 
                  // placeholder="Password"
                  editable={false}
                  value={formikProps.values.phone_number}
                  style={[Styles.inputLabel, Styles.textStyle]}
                  onChangeText={formikProps.handleChange('phone_number')}
                  maxLength={120}
                  onBlur={formikProps.handleBlur('phone_number')}
                />

<Text style={{marginLeft: 10, fontSize: 14}}>Email</Text>
                <TextInput
                  // secureTextEntry={true}
                  // placeholder="Password"
                  value={formikProps.values.email}
                  style={[Styles.inputLabel, Styles.textStyle]}
                  onChangeText={formikProps.handleChange('email')}
                  maxLength={120}
                  onBlur={formikProps.handleBlur('email')}
                />
              

              <Text style={{marginLeft: 10, fontSize: 14}}>Address</Text>
                <TextInput
                  // secureTextEntry={true}
                  // placeholder="Password"
                  value={formikProps.values.address}
                  style={[Styles.inputLabel, Styles.textStyle]}
                  onChangeText={formikProps.handleChange('address')}
                  maxLength={120}
                  onBlur={formikProps.handleBlur('address')}
                />
              

              <Text style={{marginLeft: 10, fontSize: 14}}>Zip Code</Text>
                <TextInput
                  // secureTextEntry={true}
                  // placeholder="Password"
                  value={formikProps.values.zip_code}
                  style={[Styles.inputLabel, Styles.textStyle]}
                  onChangeText={formikProps.handleChange('zip_code')}
                  maxLength={120}
                  onBlur={formikProps.handleBlur('zip_code')}
                />
              
              
              
            
                <Button
                  color="#fff"
                  onPress={formikProps.handleSubmit}
                  mode="contained"
                  labelStyle={Styles.nextButtonText}
                  style={Styles.nextButtonContainer}
                >
                 {'  '}Submit{'  '}
                </Button>
                
              </View>
            </View>
            <View style={Styles.bottomView}>
              <View>
                <Text style={Styles.privacyTextStyle}>
                  By logging in you agree to our privacy policy and terms of use
                </Text>
              </View>
              <View style={Styles.signupView}>
               
                {/* <Text style={Styles.signupTextStyle}>Don't have an account? </Text>
                <TouchableOpacity>
                  <Text style={Styles.signupStyle} 
                  onPress={() => signUp()}
                  >
                    Sign Up
                  </Text>
                </TouchableOpacity> */}
              </View>
            </View>
          </View>
        </React.Fragment>
      )}
    </Formik>

</ScrollView>
</KeyboardAvoidingView>

  </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  buttonView: {
    // padding: 10,
    width: 150,
    alignSelf: 'center',
  },
  logoStyle: {
    alignSelf: 'center',
    borderWidth: 1,

    borderRadius: 10,
    width: 60,
    height: 60,
  },
});

export default Billing;
