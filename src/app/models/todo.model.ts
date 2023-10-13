export interface ToDo{
    id: number,
    title: string,
}

export interface Column{
    title: string,
    todos: ToDo[]
}