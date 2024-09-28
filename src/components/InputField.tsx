
import React from 'react';

interface Props {
    todo: string | number,
    setTodo: React.Dispatch<React.SetStateAction<string | number>>
}

const InputField:React.FC<Props> = ({todo, setTodo}) => {
    return (
        <div>
            <form className='flex relative items-center'>
                <input type="input" placeholder='Enter a task' className='input p-5 ' 
                value={todo}
                onChange={(e)=>{
                    setTodo(e.target.value)
                }}
                />
                <button className='btn' type='submit'>Go</button>
            </form>
        </div>
    );
};

export default InputField;