let todos = [];
let onTodosUpdateCallbacks = [];
export function getTodos() {
    return todos
        .toSorted((a, b) => b.createdAt.valueOf() - a.createdAt.valueOf());
}
export function addTodo(todo) {
    if (todos.some((t) => t.id === todo.id)) {
        throw new Error(`Todo with id ${todo.id} already exists`);
    }
    todos.push(todo);
    onTodosUpdateCallbacks.forEach((callback) => callback());
}
export function toggleTodo(todoId) {
    const todo = todos.find(t => t.id === todoId);
    if (!todo) {
        throw new Error(`Todo with id ${todoId} not found`);
    }
    todo.status = todo.status === "Pending" ? "Completed" : "Pending";
    onTodosUpdateCallbacks.forEach((callback) => callback());
}
export function onTodosUpdate(callback) {
    onTodosUpdateCallbacks.push(callback);
}
