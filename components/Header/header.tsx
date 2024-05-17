import React from 'react';
import {View, Text} from 'react-native';
import style from './style';

const Header = ({title,type}) => {
const styleToApply = () =>{
switch(type){
case 1:
return style.title1;
case 2:
return style.title2;
case 3:
return style.title3;
default:
return style.title1;
}
}
    return (
        <View>
            <Text style={styleToApply()}>{title}</Text>
        </View>
    );
};

export default Header;