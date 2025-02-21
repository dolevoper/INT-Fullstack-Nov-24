let _todos = [];
let onTodosUpdateCallbacks = [];
export function initTodos(todos) {
    _todos = todos;
    callOnTodosUpdateCallbacks();
}
export function getTodos() {
    return _todos.slice();
}
export function addTodo(todo) {
    if (_todos.some((t) => t.id === todo.id)) {
        throw new Error(`Todo with id ${todo.id} already exists`);
    }
    _todos.push(todo);
    callOnTodosUpdateCallbacks();
}
export function toggleTodo(todoId) {
    const todo = _todos.find((t) => t.id === todoId);
    if (!todo) {
        throw new Error(`Todo with id ${todoId} not found`);
    }
    todo.status = todo.status === "Completed" ? "Pending" : "Completed";
    callOnTodosUpdateCallbacks();
}
export function onTodosUpdate(callback) {
    onTodosUpdateCallbacks.push(callback);
}
function callOnTodosUpdateCallbacks() {
    onTodosUpdateCallbacks.forEach((callback) => callback());
}
