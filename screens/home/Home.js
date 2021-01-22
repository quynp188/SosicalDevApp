import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actiondevCreater from '../../redux-learn/actions/ActionDevInfo';
const HomeScreen = ({ devInfoAction, navigation, devInfo }) => {
    //console.log('DuLieu',devInfo)
    useEffect(() => {
        getProfileInfo();
    }, [])
    const getProfileInfo = async () => {
        return devInfoAction.devInfoRequest();
    }

    const onLogout = () => {
        AsyncStorage.removeItem('@token');
        navigation.navigate('SignIn');
    }
    return (
        <View style={styles.container}>
            {devInfo.msg !== '' ? (<Text>{devInfo.msg}</Text>) : null}

            <Text onPress={onLogout}>Đăng xuất</Text>
        </View>
    )
}
const mapStateToProps = (state) => ({
    devInfo: state.devReducer
});
const mapDispatchToProps = (dispatch) => ({
    devInfoAction: bindActionCreators(actiondevCreater, dispatch)
});
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);