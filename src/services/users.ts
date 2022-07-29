export interface User {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

export const getUsers = () => fetch('https://jsonplaceholder.typicode.com/todos/')
