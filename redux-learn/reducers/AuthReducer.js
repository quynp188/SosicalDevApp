import AsyncStorage from "@react-native-async-storage/async-storage";
import * as actionType from "../type";


export const authReducer = (initialState = [], action) => {

    switch (action.type) {
        case actionType.SIGNUP_SUCCESS: {
            const { navigation, token } = action.payload;
            AsyncStorage.setItem('@token', token);
            if (navigation) {               
                navigation.navigate('Home');
            }
            return [...initialState, token]
        }
        case actionType.LOGIN_SUCCESS :{
            const {navigation,token} = action.payload;           
            AsyncStorage.setItem('@token', token);
            if (navigation) {               
                navigation.navigate('Home');
            }
            return [...initialState, token]
        }
        default:
            return [...initialState];
    }
}
