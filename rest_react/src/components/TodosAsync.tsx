import React, { useState, useEffect } from "react";
import TodoDto from "../services/TodoDto";
import * as TodosService from "../services/TodoServicesAsync";

function TodosAsync() {
    const [data, setData] = useState<TodoDto[]>([]);
    const [error, setError] = useState('');
    const [status, setStatus] = useState('idle');

    useEffect(() => {
        const getDataAsync = async () => {
            try {
                const todoData = await TodosService.getAll();
                setStatus('resolved');
                setData(todoData);
            } catch (errorData: any) {
                setStatus('rejected');
                setError(errorData.message);
            }
        };
        setStatus('pending');
        getDataAsync();
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

export default TodosAsync;