import React from "react";
import Input from "./Input";

interface IProps {
  value: string;
  handleInputChange: (event: React.FormEvent<HTMLInputElement>) => void;
  handleAddNote: () => void;
}

const InputField = ({ value, handleInputChange, handleAddNote }: IProps) => {
  return (
    <form className="input-field" onSubmit={(e) => e.preventDefault()}>
      <Input value={value} handleChange={handleInputChange} />
      <button className="plus-button" onClick={handleAddNote}>
        +
      </button>
    </form>
  );
};

export default InputField;
