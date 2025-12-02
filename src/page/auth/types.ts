export interface LoginT {
    username: string,
    password: string,
    role: string
}


export interface LoginResponse {
    data: {
        token: string
        user: {
            id: string,
            username: string,
            fullName: string,
            role: string,
            createdAt: string,
            updatedAt: string
        }
    },
    message:{
        uz:string,
        ru:string,
        en:string,
    }
}