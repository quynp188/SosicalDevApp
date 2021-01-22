import React, { useEffect, useState } from 'react';
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';
import API from '../../config';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionAuthCreate from '../../redux-learn/actions/ActionAuth';
import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
  } from '@react-native-community/google-signin';
const SignInScreen = ({ actionAuth, navigation }) => {
    useEffect(() => {
        GoogleSignin.configure({
            scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
            webClientId: '1047494539898-2rjicahqlor1thkkpqcbo09htpj2hkmk.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
            offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
            //hostedDomain: '', // specifies a hosted domain restriction
            // loginHint: '', // [iOS] The user's ID, or email address, to be prefilled in the authentication UI if possible. [See docs here](https://developers.google.com/identity/sign-in/ios/api/interface_g_i_d_sign_in.html#a0a68c7504c31ab0b728432565f6e33fd)
            //forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
            //accountName: '', // [Android] specifies an account name on the device that should be used
            //iosClientId: '<FROM DEVELOPER CONSOLE>', // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
        });
    }, [])
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onLoginApp = async () => {
        try {
            return actionAuth.signInRequest(email, password, navigation)
        } catch (error) {
            console.log(error);
        }
    }
    const signIn = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            console.log(userInfo)
            //this.setState({ userInfo });
        } catch (error) {
            console.log(error)
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                // user cancelled the login flow
            } else if (error.code === statusCodes.IN_PROGRESS) {
                // operation (e.g. sign in) is in progress already
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                // play services not available or outdated
            } else {
                // some other error happened
            }
        }
    };
    return (
        <View style={styles.container}>
            <View style={styles.logo}>
                <Image source={{ uri: "https://www.ryl2u.com/images/login1.png" }} resizeMode={"cover"} style={styles.imgLogo} />
            </View>
            <View style={styles.body}>
                <TextInput style={styles.input} value={email} onChangeText={(text) => setEmail(text)} placeholder="please enter email" />
                <TextInput style={styles.input} value={password} onChangeText={(text) => setPassword(text)} placeholder="please enter password" secureTextEntry={true} />
            </View>
            <View style={styles.footer}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.textButton} onPress={onLoginApp}>Sign In</Text>
                </TouchableOpacity>
                <GoogleSigninButton
                    style={{ width: 192, height: 48 }}
                    size={GoogleSigninButton.Size.Wide}
                    color={GoogleSigninButton.Color.Dark}
                    onPress={signIn}
                    />
                <View style={styles.signUp}>
                    <Text>Bạn chưa có tài khoản? </Text>
                    <Text style={styles.registerText} onPress={() => navigation.navigate("SignUp")} >Đăng ký</Text>
                </View>

            </View>
        </View>
    )
}
const mapStateToProps = (state) => ({

});
const mapDispatchToProps = (dispatch) => ({
    actionAuth: bindActionCreators(actionAuthCreate, dispatch)
});
export default connect(mapStateToProps, mapDispatchToProps)(SignInScreen);