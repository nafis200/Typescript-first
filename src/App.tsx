
import React, { useState } from 'react';
import InputField from './components/InputField';

const App: React.FC = () => {
  const [todo,setTodo] = useState<string | number>("")
  console.log(todo);
  
  return (
    <div>
      <h1 className='font-bold text-blue-400'>Hellow word</h1>
      <InputField todo={todo} setTodo={setTodo} />
    </div>
  );
};

export default App;