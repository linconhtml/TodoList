import React from 'react';

interface TodoItemProps {
    todo: {
        id: number;
        text: string;
        completed: boolean;
    };
    toggleComplete: (id: number) => void;
    removeTodo: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, toggleComplete, removeTodo }) => {
    return (
        <div>
            <span
                style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
                onClick={() => toggleComplete(todo.id)}
            >
                {todo.text}
            </span>
            <button onClick={() => removeTodo(todo.id)}>Remover</button>
        </div>
    );
};

export default TodoItem;