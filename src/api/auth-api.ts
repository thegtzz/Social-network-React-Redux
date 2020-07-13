import {instance, APIResponseType, ResultCodeForCaptcha, ResultCodesEnum} from "./api";

export const authAPI = {
    authMe() {
        return instance.get<APIResponseType<MeResponseDataType>>(`auth/me`)
            .then(response => response.data)
    },
    login(email: string, password: string, rememberMe = false, captcha: null | string = null) {
        return instance.post<APIResponseType<LoginResponseDataType, ResultCodesEnum | ResultCodeForCaptcha>>(`auth/login`, {email, password, rememberMe, captcha})
            .then(response => response.data)
    },
    loginOut() {
        return instance.delete(`auth/login`)
            .then(response => response.data)
    }
}


type MeResponseDataType = {
    id: number
    email: string
    login: string
}
type LoginResponseDataType = {
    userId: number
}