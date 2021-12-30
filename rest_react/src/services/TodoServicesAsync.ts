import TodoDto from "./TodoDto";

const URI = 'https://jsonplaceholder.typicode.com/todos';

export async function getAll(): Promise<TodoDto[]> {
    const response = await fetch(URI);
    if (!response.ok) {
        throw new Error(`Failed with status ${response.status}`);
    }
    return response.json();
}

export async function deleteById(id: number) {
    const response = await fetch(`${URI}/${id}`, { method: 'DELETE' });
    if (!response.ok) {
        throw new Error(`Failed with status ${response.status}`);
    }
}