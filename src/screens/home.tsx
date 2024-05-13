import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';

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
    return (
        <View style={styles.container}>
            <Text>Welcome {username} to Next Digital Wave</Text>
        </View>
    );
};


export default Home;