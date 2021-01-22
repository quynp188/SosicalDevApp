import { useHeaderHeight } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get("screen");

const EditUserInfo = ({ params }) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.mainTitle}>Edit your profile</Text>
                <Text style={styles.title}>Add some change to your profile</Text>
            </View>
        </View>
    )
};
const styles = StyleSheet.create({
    container: {
        flex: 1,       
    },
    header: {
        height: height * 0.2,
        width: width,
        padding: 10,
        justifyContent: 'flex-start'
    },
    mainTitle: {
        color: 'blue',
        fontSize: 20,
        fontWeight: '700',
        paddingTop: 10,
        paddingBottom: 10,
    },
    title: {
        color: '#333333',
        fontSize: 15,
        fontWeight: '700',
        paddingTop: 10,
        paddingBottom: 10,
    }
});
export default EditUserInfo;
