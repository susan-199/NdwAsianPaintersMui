    /* eslint-disable prettier/prettier */
    import React, { useState } from 'react';
    import { SafeAreaView, View, Text, TextInput, TouchableOpacity, StyleSheet, Pressable, ScrollView } from 'react-native';
    import { useNavigation } from '@react-navigation/native';
    import Input from '../../components/Input/input';
    import Button from '../../components/Button/button';
    import Header from '../../components/Header/header';
    import BackButton from '../../components/BackButton/backbutton';


    import globalStyle from '../../assets/styles/globalStyle';


    const Registration: React.FC = () => {
      const [firstname, setFirstname] = useState<string>('');
      const [lastname, setLastname] = useState<string>('');
      const [username, setUsername] = useState<string>('');
      const [password, setPassword] = useState<string>('');
      const [confirmPassword, setConfirmPassword] = useState<string>('');

      const navigation = useNavigation();

      const handleRegistration = () => {
        // Add your login logic here
        console.log('Username:', username);
        console.log('Password:', password);
       // if(username === "susan" || username === "khizer" || username === "shoaib"){
              navigation.navigate('Login');

          //  }
      };

      const handleBack = () =>{
      //navigation.navigate('Login');
      navigation.goBack();
      }

      return (
        <SafeAreaView style={[globalStyle.whiteBackground, globalStyle.flex]}>
        <View style={styles.backButton}>
        <BackButton handlePress={handleBack}/>
        </View>
        <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}>
        <View style={globalStyle.marginBottom24}>
          <Header title={'Sign Up!'} type={1}/>
          </View>
          <View style={globalStyle.marginBottom24}>
                <Input
                     label="First Name"
                     placeholder="Enter your First Name"
                     onChangeText={(value)=>{setFirstname(value)}}
                     />
                     </View>
          <View style={globalStyle.marginBottom24}>
                      <Input
                           label="Last Name"
                           placeholder="Enter your First Name"
                           onChangeText={(value)=>{setLastname(value)}}
                           />
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
            <Input
                   label="Confirm Password"
                   placeholder="*******"
                   onChangeText={(value)=>{setConfirmPassword(value)}}
                   secureTextEntry = {true}
                       />
                       </View>
        <View style={globalStyle.marginBottom24}>
          <Button
          isDisabled = {lastname.length <3 || password.length <5 || confirmPassword.length <5}
          handlePress={handleRegistration}
          title={'Register'}/>
          </View>
          </ScrollView>
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
        },
        registrationButton:{
        alignItems: 'center',
        },
        backButton:{
        marginLeft: 14,
        marginTop: 7
        }
        });
     /* input: {
        width: '80%',
        height: 40,
        borderWidth: 1,
        borderColor: '#cccccc',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 20,
      },
      button: {
        width: '80%',
        height: 40,
        backgroundColor: '#007bff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
      },
      buttonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
      },
    });*/

    export default Registration;
