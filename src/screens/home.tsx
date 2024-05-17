/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
import Header from '../../components/Header/header';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 20,
        color: 'white',
    },
});

const Home = () => {
    const route = useRoute();
    const { username } = route.params;
    const title = `Hello, ${username}.`;
    return (
        <View style={styles.container}>
            <Header title={title}/>
            <Text>Welcome to Next Digital Wave</Text>
        </View>
    );
};


export default Home;