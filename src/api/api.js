import * as axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": '026e3091-bf2e-480b-a762-84e0bb53c807'
    }
})

export const userAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },

    unfollowUser(id) {
        return instance.delete(`follow/${id}`).then(response => response.data)
    },

    followUser(id) {
        return instance.post(`follow/${id}`).then(response => response.data)
    }
}

export const authAPI = {
    authMe() {
        return instance.get(`auth/me`)
            .then(response => response.data)
    },
    login(email, password, rememberMe = false, captcha = null) {
        return instance.post(`auth/login`, {email, password, rememberMe, captcha})
            .then(response => response.data)
    },
    loginOut() {
        return instance.delete(`auth/login`)
            .then(response => response.data)
    }
}

export const profileAPI = {
    getUserProfile(userId) {
        return instance.get(`profile/${userId}`)
            .then(response => response.data)
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status) {
        return instance.put(`profile/status`, { status: status })
    },
    savePhoto(photoFile) {
        const formData = new FormData()
        formData.append('image', photoFile)
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/formData'
            }
        })
    },
    saveProfile(profile) {
        return instance.put(`profile`, profile)
    }
}

export const securityAPI = {
    getCaptchaUrl() {
        return instance.get(`security/get-captcha-url`)
    }
}