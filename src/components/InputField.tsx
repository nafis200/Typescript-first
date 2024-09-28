import React, { useRef } from "react";

interface Props {
  todo: string | number;
  setTodo: React.Dispatch<React.SetStateAction<string | number>>;
  handle: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({ todo, setTodo, handle }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div>
      <form
        onSubmit={(e) => {
          handle(e);
          inputRef.current?.blur();
        }}
        className="flex relative items-center"
      >
        <input
          type="input"
          ref={inputRef}
          placeholder="Enter a task"
          className="input p-5 "
          value={todo}
          onChange={(e) => {
            setTodo(e.target.value);
          }}
        />
        <button className="btn" type="submit">
          Go
        </button>
      </form>
    </div>
  );
};

export default InputField;
