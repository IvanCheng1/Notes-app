import React from "react";

interface IProps {
  value: string;
  handleInputChange: (event: React.FormEvent<HTMLInputElement>) => void;
  handleAddNote: () => void;
}

const InputField = ({ value, handleInputChange, handleAddNote }: IProps) => {
  return (
    <>
      <input type="text" value={value} onChange={handleInputChange} />
      <button onClick={handleAddNote}>Add note</button>
    </>
  );
};

export default InputField;
