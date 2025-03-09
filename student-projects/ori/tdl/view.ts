import * as controller from "./controller.js";
import { getTodos, onTodosUpdate } from "./model.js";

export function init(addTodoForm: HTMLFormElement, todoList: HTMLUListElement) {
    addTodoForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const formData = new FormData(addTodoForm, e.submitter);

        try {
            controller.onAddTodoSubmit(formData);
            addTodoForm.reset();
        } catch (error) {
            console.error(error);
        }
    });

    todoList.addEventListener("click", function (e) {
        const todoId = (e.target as HTMLElement).dataset.id;

        if (!todoId) {
            return;
        }

        try {
            controller.onToggleTodo(todoId);
        } catch (error) {
            console.error(error);
        }
    });
    
    controller.init();
    renderTodos();

    onTodosUpdate(renderTodos);
    onTodosUpdate(controller.save);

    function renderTodos() {
        const todos = getTodos()
            .toSorted((a, b) => b.createdAt.valueOf() - a.createdAt.valueOf());

        todoList.innerHTML = "";

        for (const todo of todos) {
            const li = document.createElement("li");

            li.textContent = todo.content;
            li.dataset.id = todo.id;

            const createdAt = new Date(todo.createdAt);
            li.title = `${createdAt.toLocaleDateString("he")} - ${createdAt.toLocaleTimeString("he")}`;
            
            if (todo.status === "Completed") {
                li.classList.add("completed");
            }

            todoList.append(li);
        }
    }
}
