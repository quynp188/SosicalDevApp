import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get("screen");
const styles = StyleSheet.create({
    container: {
        width: width,
        marginTop: 50,
        flex: 1,
        backgroundColor: "#ffffff"
    }
});
export default styles;