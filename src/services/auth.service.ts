import { authKey } from "@/constants/storageKey"
import { IUserInfo } from "@/types"
import { decodedToken } from "@/utils/jwt"
import { getFromLocalStorage, setToLocalStorage } from "@/utils/local-storage"


export const storeUserInfo = ({accessToken}:{accessToken:string}) => {
   return setToLocalStorage(authKey, accessToken)
}

export const getUserInfo = () => {
    const authToken = getFromLocalStorage(authKey);
    if(authToken) {
        const decodedData = decodedToken(authToken)
        return decodedData as IUserInfo;
    }else{
        return {} as IUserInfo;
    }
}

export const isLoggedIn = () => {
    const  authToken = getFromLocalStorage(authKey);

    return !!authToken
}

export const removeUserInfo = (key:string) => {
    return localStorage.removeItem(key)
}