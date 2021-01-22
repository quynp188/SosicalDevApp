import { StyleSheet, Dimensions } from 'react-native'
const { height, width } = Dimensions.get("screen");
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
        backgroundColor: '#fff',

    },
    logo: {
        width,
        height: height * 0.2,
        alignItems: "center",
        justifyContent: "center"
    },
    imgLogo: {
        width: 0.8 * width,
        height: 150,
    },
    body: {
        height: 0.2 * height,
        justifyContent: "center",
        alignItems: "center",
    },
    input: {
        height: 40,
        width: width - 5,
        borderWidth: 1,
        borderColor: '#cccccc',
        borderRadius: 5,
        margin: 5,
        padding: 10,

    },
    footer: {
        height: height * 0.1,
        width,
        justifyContent: "center",
        alignItems: "center"
    },
    button: {
        borderColor: "#cccccc",
        width: 100,
        height: 40,
        borderRadius: 10,
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    textButton: {
        fontSize: 18,
        color: "#cccccc"
    },
    signUp: {
        marginTop: 5,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    }, registerText: {
        fontSize: 15,
        fontWeight:'700',
        textDecorationLine: "underline"
    }, imgLogoSignUp: {
        width: 150,
        height:150,
    }
})
export default styles;