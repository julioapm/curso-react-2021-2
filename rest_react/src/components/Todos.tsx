import React, { useState, useEffect } from "react";
import TodoDto from "./TodoDto";

interface TodosError {
    message: string,
    status: number
}

function Todos() {
    const [data, setData] = useState<TodoDto[]>();
    const [error, setError] = useState<TodosError>();

    useEffect(() => {
        console.log('effect');
        fetchTodos()
            .then((todos) => {
                console.log('fetched');
                setData(todos);
            });
    },[]);

    return (
        <ul>
            {data &&
                data.map( (todo) => (
                    <li key={todo.id}>
                        {todo.title} - {todo.completed}
                    </li>
                ))
            }
        </ul>
    );
}

function fetchTodos(): Promise<TodoDto[]> {
    const URI = 'https://jsonplaceholder.typicode.com/todo';
    return fetch(URI)
        .then(response => response.json());
}

export default Todos;