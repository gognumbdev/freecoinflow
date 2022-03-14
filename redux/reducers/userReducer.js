import {LOGIN,LOGOUT} from "../actionTypes"

// Initial user state
export const InitailUserState = {
    username: "",
    publicAddress: "",
    image: "",
    description: "",
    promptpayID: "",
}

const userReducer = (state = InitailUserState,{type,payload}) => {
    switch(type) {
        case LOGIN : 
            return {
                username: payload.username,
                publicAddress: payload.publicAddress,
                image: payload.profileImage ,
                description: payload.description,
                promptpayID: payload.promptpayID,
                balance:payload.balance,
                network:payload.network,
                bankName:payload.bankName,
                bankAccount:payload.bankAccount,
            }
        case LOGOUT : 
            return {...InitailUserState}
        default :
            return state
    }
}

export default userReducer;

// {
//     username: payload.username,
//     walletAddress: payload.walletAddress,
//     balance:payload.balance,
//     network:payload.network,
//     profileImage: payload.profileImage,
//     description: payload.description,
//     socialNetworks: payload.socialNetworks,
// }