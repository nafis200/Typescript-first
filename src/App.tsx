
import React, { useState } from 'react';
import InputField from './components/InputField';
import { Todo } from './models/models';

const App: React.FC = () => {
  const [todo,setTodo] = useState<string | number>("")
  const [todos,setTodos] = useState<Todo[]>([]);

  const handle = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo:"", isDone: false }]);
      setTodo("");
    }
  };
  
  
  return (
    <div>
      <h1 className='font-bold text-blue-400'>Hellow word</h1>
      <InputField todo={todo} setTodo={setTodo} handle={handle} />
      {
        todos.map((t)=>(
           <li className='text-red-500'>{t.id}</li>
        ))
      }
    </div>
  );
};

export default App;