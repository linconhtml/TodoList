import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faEdit, faTrashAlt, faUndo } from '@fortawesome/free-solid-svg-icons';

interface TodoListProps {
  todos: Array<{ text: string, done: boolean }>;
  toggleTodo: (index: number) => void;
  removeTodo: (index: number) => void;
  startEditing: (index: number) => void;
  editTodo: (index: number, text: string) => void;
  editingIndex: number | null;
  newText: string;
  setNewText: (text: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({
  todos, toggleTodo, removeTodo, startEditing, editTodo, editingIndex, newText, setNewText
}) => {
  return (
    <ul>
      {todos.map((todo, index) => (
        <li
          key={index}
          style={{ textDecoration: todo.done ? 'line-through' : 'none' }}
        >
          {editingIndex === index ? (
            <>
              <input 
                type="text" 
                value={newText} 
                onChange={(e) => setNewText(e.target.value)} 
              />
              <button onClick={() => editTodo(index, newText)}>Salvar</button>
            </>
          ) : (
            <>
              {todo.text}
              <button onClick={() => toggleTodo(index)}>
                <FontAwesomeIcon icon={todo.done ? faUndo : faCheck} />
              </button>
              <button onClick={() => startEditing(index)}>
                <FontAwesomeIcon icon={faEdit} />
              </button>
              <button onClick={() => removeTodo(index)}>
                <FontAwesomeIcon icon={faTrashAlt} />
              </button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;