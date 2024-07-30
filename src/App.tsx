import React, { useState } from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import './App.css';


interface Todo {
  text: string;
  done: boolean;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [newText, setNewText] = useState<string>('');

  const addTodo = (text: string) => {
    setTodos([...todos, { text, done: false }]);
  };

  const toggleTodo = (index: number) => {
    const newTodos = [...todos];
    newTodos[index].done = !newTodos[index].done;
    setTodos(newTodos);
  };

  const removeTodo = (index: number) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const startEditing = (index: number) => {
    setEditingIndex(index);
    setNewText(todos[index].text);
  };

  const editTodo = (index: number, text: string) => {
    const newTodos = [...todos];
    newTodos[index].text = text;
    setTodos(newTodos);
    setEditingIndex(null);
  };

  return (
    <div className="App">
      <h1>Lista de Tarefas</h1>
      <AddTodo addTodo={addTodo} />
      <TodoList 
        todos={todos} 
        toggleTodo={toggleTodo} 
        removeTodo={removeTodo} 
        startEditing={startEditing} 
        editTodo={editTodo} 
        editingIndex={editingIndex}
        newText={newText}
        setNewText={setNewText}
      />
    </div>
  );
}

export default App;