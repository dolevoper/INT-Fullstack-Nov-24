type Todo = {
    id: string,
    status: "Pending" | "Completed",
    createdAt: Date,
    content: string,
};

let todos: Todo[] = [];
let onTodosUpdateCallbacks: (() => void)[] = [];

export function getTodos(): Todo[] {
    return todos
        .toSorted((a, b) => b.createdAt.valueOf() - a.createdAt.valueOf());
}

export function addTodo(todo: Todo) {
    if (todos.some((t) => t.id === todo.id)) {
        throw new Error(`Todo with id ${todo.id} already exists`);
    }

    todos.push(todo);
    onTodosUpdateCallbacks.forEach((callback) => callback());
}

export function toggleTodo(todoId: string) {
    const todo = todos.find(t => t.id === todoId);
    
    if (!todo) {
        throw new Error(`Todo with id ${todoId} not found`);
    }

    todo.status = todo.status === "Pending" ? "Completed" : "Pending";
    
    onTodosUpdateCallbacks.forEach((callback) => callback());
}

export function onTodosUpdate(callback: () => void) {
    onTodosUpdateCallbacks.push(callback);
}
