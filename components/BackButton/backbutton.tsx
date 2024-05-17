import React from 'react';
import {Text, Pressable} from 'react-native';

import style from './style';

const BackButton = ({handlePress}) => {
return (
<Pressable onPress={handlePress}>
<Text>{'Back'}</Text>
</Pressable>
)
}

export default BackButton;