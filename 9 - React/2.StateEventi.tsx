/*
TypeScript aiuta a gestire lo state e gli eventi in modo sicuro,
prevenendo errori comuni come accedere a proprietà inesistenti.
*/

import React, { useState } from 'react';

// STATE CON TIPI SEMPLICI
// TypeScript inferisce automaticamente il tipo
const SimpleState = () => {
  const [count, setCount] = useState(0); // number
  const [name, setName] = useState("Mario"); // string
  const [isActive, setIsActive] = useState(true); // boolean
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
};

// STATE CON OGGETTI
// Definisci un'interfaccia per l'oggetto
interface User {
  id: number;
  name: string;
  email: string;
}

const ObjectState = () => {
  const [user, setUser] = useState<User>({
    id: 1,
    name: "Mario",
    email: "mario@example.com"
  });
  
  const updateName = () => {
    setUser({ ...user, name: "Luigi" });
  };
  
  return (
    <div>
      <p>{user.name} - {user.email}</p>
      <button onClick={updateName}>Cambia nome</button>
    </div>
  );
};

// STATE CON ARRAY
interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  
  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      text,
      completed: false
    };
    setTodos([...todos, newTodo]);
  };
  
  const toggleTodo = (id: number) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  
  return (
    <div>
      <button onClick={() => addTodo("Nuovo task")}>Aggiungi</button>
      <ul>
        {todos.map(todo => (
          <li key={todo.id} onClick={() => toggleTodo(todo.id)}>
            {todo.text} {todo.completed && "✓"}
          </li>
        ))}
      </ul>
    </div>
  );
};

// EVENTI TIPIZZATI
const FormExample = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  
  // Evento input
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  
  // Evento form
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, email });
  };
  
  // Evento click
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log("Button cliccato");
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={name} 
        onChange={handleNameChange}
      />
      <input 
        type="email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit" onClick={handleClick}>Invia</button>
    </form>
  );
};

/*
NOTE IMPORTANTI

STATE:
- TypeScript inferisce il tipo automaticamente da useState(valore)
- Per oggetti/array complessi usa: useState<Type>(valore)
- Usa interface per definire la struttura degli oggetti
- Array: useState<Type[]>([])

EVENTI:
- React.ChangeEvent<HTMLInputElement> per onChange input
- React.FormEvent per onSubmit form
- React.MouseEvent<HTMLButtonElement> per onClick button
- TypeScript ti dà autocomplete per e.target.value

ERRORI COMUNI EVITATI:
- Accesso a proprietà inesistenti dell'oggetto
- Tipo sbagliato nel setTodos
- Dimenticare preventDefault() nel form
*/

export { SimpleState, ObjectState, TodoList, FormExample };
