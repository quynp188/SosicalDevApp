import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect } from 'react';
import { Text, View, ActivityIndicator, StyleSheet } from 'react-native';
const AuthLoadingScreen = ({ navigation }) => {
    useEffect(() => {
        checkToken();
    }, []);
    const checkToken = async()=>{       
        const token = await AsyncStorage.getItem('@token');
        if (token) {
            setTimeout(() => {
                navigation.navigate('Home');
            }, 2000)
        } else {
            navigation.navigate('SignIn');
        }
    }
    return (
        <View style={styles.container}>
            <ActivityIndicator color="red" size="large" />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});
export default AuthLoadingScreen;