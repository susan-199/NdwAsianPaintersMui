import React from 'react';
import { Pressable, Text, View } from 'react-native';
import style from './style';
const Button = ({handlePress,title,isDisabled}) =>{
    return (
        <Pressable onPress={handlePress} disabled={isDisabled} style={[style.button,isDisabled && style.disabled]}>
        <Text style={style.title}>{title}</Text>
      </Pressable>
    );
};

export default Button;