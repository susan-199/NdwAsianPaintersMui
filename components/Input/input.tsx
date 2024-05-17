import React,{useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import style from './style';
import PropTypes from "prop-types";
import { useNavigation } from '@react-navigation/native';

const Input = (props) =>{
const [value,setValue] = useState('');
const navigation = useNavigation();
/*if(value === "susan" || value === "khizer" || value === "shoaib"){
      navigation.navigate('Home', { username: value });
    }*/
 return (
 <View>
    <Text style={style.label}>{props.label}</Text>
    <TextInput
    placeholder={props.placeholder? props.placeholder:''}
    keyboardType = {props.keyboardType? props.keyboardType:'default'}
    secureTextEntry = {props.secureTextEntry? props.secureTextEntry: false}
    style={style.input}
    value={value}
    onChangeText={
    (val)=>{
    setValue(val);
    props.onChangeText(val);
    }
    }/>
 </View>
 )
};
Input.propTypes = {
label: PropTypes.string.isRequired,
placeholder: PropTypes.string,
keyboardType: PropTypes.string,
secureTextEntry: PropTypes.bool,
}
export default Input;