import React, { useState, useEffect } from "react";
import TodoDto from "../services/TodoDto";
import * as TodosService from "../services/TodosService";

function Todos() {
    const [data, setData] = useState<TodoDto[]>([]);
    const [error, setError] = useState('');
    const [status, setStatus] = useState('idle');

    useEffect(() => {
        setStatus('pending');
        TodosService.getAll().then(
            (todoData) => {
                setStatus('resolved');
                setData(todoData);
            },
            (errorData) => {
                setStatus('rejected');
                setError(errorData.message);
            });
    }, []);

    if (status === 'idle' || status === 'pending') {
        return <div>...</div>;
    }
    if (status === 'rejected') {
        return <div>Somenthing wrong: {error}</div>
    }
    if (status === 'resolved') {
        return (
            <ul>
                {data &&
                    data.map((todo) => (
                        <li key={todo.id}>
                            {todo.title} - {todo.completed?'Ok':'Not yet'}
                        </li>
                    ))
                }
            </ul>
        );
    }
    return <></>;
}

export default Todos;