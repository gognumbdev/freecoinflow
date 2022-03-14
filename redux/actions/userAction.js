import {LOGIN,LOGOUT} from '../actionTypes.js'
import { InitailUserState } from '../reducers/userReducer.js';

// LOGIN: Set User Data we get from wallets
export const logIn = (userData) => async (dispatch) =>{
    try {
        dispatch({
            type: LOGIN,
            payload: {
                username: userData.username,
                publicAddress: userData.publicAddress,
                balance:userData.balance,
                network:userData.network,
                promptpayID:userData.promptpayID || "",
                image: userData.image ,
                description:userData.description,
                bankName:userData.bankName,
                bankAccount:userData.bankAccount,
            }
        })    
    } catch (error) {
        console.log(error);
    }    
}


// LOGOUT: clear User Data we get from wallets
export const logOut = () => (dispatch) =>
  dispatch({
    type:LOGOUT,
    payload: {
        ...InitailUserState
    },
})

