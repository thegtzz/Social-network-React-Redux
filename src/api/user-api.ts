import {GetItemsType, instance} from "./api";

export const userAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get<GetItemsType>(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },

    followUser(id: number) {
        return instance.post<ResponseType>(`follow/${id}`).then(response => response.data)
    },

    unfollowUser(id: number) {
        return instance.delete(`follow/${id}`).then(response => response.data) as Promise<ResponseType>
    }
}