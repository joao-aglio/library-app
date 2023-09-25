export interface BookType {
    name: string,
    category: string,
    description: string,
    author: string,
    cover: string
}

export const initValue:BookType = {
    name: "",
    category: "",
    description: "",
    author: "",
    cover: ""
};