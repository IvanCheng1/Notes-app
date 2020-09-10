import React from "react";
import Input from "./Input";

interface IProps {
  value: string;
  handleInputChange: (event: React.FormEvent<HTMLInputElement>) => void;
  handleAddNote: () => void;
}

const InputField = ({ value, handleInputChange, handleAddNote }: IProps) => {
  return (
    <div className="input-field">
      <Input value={value} handleChange={handleInputChange} />
      <button onClick={handleAddNote}>Add note</button>
    </div>
  );
};

export default InputField;
