import React, { useEffect, useState } from 'react';
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionAuthCreate from '../../redux-learn/actions/ActionAuth';
const SignUpScreen = ({ auth ,actionAuth,navigation}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const onRegisterAccount = async () => {
        actionAuth.signUpRequest(name,email,password,navigation);
    }
    return (
        <View style={styles.container}>           
            <View style={styles.logo}>
                <Image source={{ uri: "https://www.signupsoftware.com/en/assets/Signup-logotype-V1.png" }} resizeMode={"contain"} style={styles.imgLogoSignUp} />
            </View>
            <View style={styles.body}>
                <TextInput style={styles.input} value={name} onChangeText={(text) => setName(text)} placeholder="please enter name" />
                <TextInput style={styles.input} value={email} onChangeText={(text) => setEmail(text)} placeholder="please enter email" />
                <TextInput style={styles.input} value={password} onChangeText={(text) => setPassword(text)} placeholder="please enter password" secureTextEntry={true} />
            </View>
            <View style={styles.footer}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.textButton} onPress={onRegisterAccount}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const mapStateToProps = (state) => ({
   
});
const mapDispatchToProps = (dispatch) => ({
    actionAuth: bindActionCreators(actionAuthCreate, dispatch)
});
export default connect(mapStateToProps, mapDispatchToProps)(SignUpScreen);