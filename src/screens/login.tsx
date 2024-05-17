/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, StyleSheet, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Input from '../../components/Input/input';
import Button from '../../components/Button/button';
import Header from '../../components/Header/header';

import globalStyle from '../../assets/styles/globalStyle';


const Login: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigation = useNavigation();

  const handleLogin = () => {
    // Add your login logic here
    console.log('Username:', username);
    console.log('Password:', password);
    if(username === "susan" || username === "khizer" || username === "shoaib"){
          navigation.navigate('Home', { username: username });
        }
  };

  return (
    <SafeAreaView style={styles.container}>
    <View style={globalStyle.marginBottom24}>
      <Header title={'Welcome Back!'} type={1}/>
      </View>
      <View style={globalStyle.marginBottom24}>
      <Input
           label="Username"
           placeholder="Enter your username"
           onChangeText={(value)=>{setUsername(value)}}
           keyboardType="email-address"
           />
           </View>
            <View style={globalStyle.marginBottom24}>
    <Input
           label="Password"
           placeholder="*******"
           onChangeText={(value)=>{setPassword(value)}}
           secureTextEntry = {true}
               />
               </View>
    <View style={globalStyle.marginBottom24}>
      <Button
      isDisabled = {username.length <3 || password.length <5}
      handlePress={handleLogin}
      title={'Login'}/>

      </View>

        <Pressable style={styles.registrationButton} onPress={()=>navigation.navigate('Registration')}>
        <Text>Don't have an account? Sign Up!</Text>
        </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    alignItems:'center',
    justifyContent: 'center',
    color:''
  },

  container: {
      flex: 1,
      marginHorizontal: 24,
      justifyContent: 'center',
      //alignItems: 'center',
      backgroundColor: '#ffffff',
    },
    registrationButton:{
    alignItems: 'center',
    }
    });
 
export default Login;
