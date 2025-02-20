type Todo = {
    id: string,
    status: "Pending" | "Completed",
    createdAt: number,
    content: string,
};

let _todos: Todo[] = [];
let onTodosUpdateCallbacks: (() => void)[] = [];

export function initTodos(todos: Todo[]) {
    _todos = todos;
    callOnTodosUpdateCallbacks();
}

export function getTodos(): Todo[] {
    return _todos.slice();
}

export function addTodo(todo: Todo) {
    if (_todos.some((t) => t.id === todo.id)) {
        throw new Error(`Todo with id ${todo.id} already exists`);
    }

    _todos.push(todo);
    callOnTodosUpdateCallbacks();
}

export function toggleTodo(todoId: string) {
    const todo = _todos.find((t) => t.id === todoId);

    if (!todo) {
        throw new Error(`Todo with id ${todoId} not found`);
    }

    todo.status = todo.status === "Completed" ? "Pending" : "Completed";
    callOnTodosUpdateCallbacks();
}

export function onTodosUpdate(callback: () => void) {
    onTodosUpdateCallbacks.push(callback);
}

function callOnTodosUpdateCallbacks() {
    onTodosUpdateCallbacks.forEach((callback) => callback());
}
