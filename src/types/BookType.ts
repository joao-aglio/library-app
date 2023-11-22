export interface BookType {
    name: string,
    category: string,
    description: string,
    author: string,
    cover: string,
    reserveUntil?: Date
}

export const initValue:BookType = {
    name: "",
    category: "",
    description: "",
    author: "",
    cover: ""
};