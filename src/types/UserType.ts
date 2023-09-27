export interface UserType {
    id: number,
    name: string,
    email: string, 
    type: string,
    phoneNumber: string
}

export const InitValue:UserType = {
    id: 0,
    name: "",
    email: "", 
    type: "",
    phoneNumber: ""
}