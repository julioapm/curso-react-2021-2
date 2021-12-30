import TodoDto from "./TodoDto";

const URI = 'https://jsonplaceholder.typicode.com/todos';

export function getAll(): Promise<TodoDto[]> {
    return fetch(URI).then(response => {
        if (!response.ok) {
            throw new Error(`Failed with status ${response.status}`);
        }
        return response.json();
    });
}

export function deleteById(id: number) {
    return fetch(`${URI}/${id}`, { method: 'DELETE' }).then(response => {
        if (!response.ok) {
            throw new Error(`Failed with status ${response.status}`);
        }
    });
}