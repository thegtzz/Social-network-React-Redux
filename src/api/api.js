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
    }
}

export const profileAPI = {
    getUserProfile(userId) {
        return instance.get(`profile/${userId}`)
            .then(response => response.data)
    }
}