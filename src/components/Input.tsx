import React from "react";

interface IProps {
  value: string;
  handleChange: (event: React.FormEvent<HTMLInputElement>) => void;
}

const Input = ({ value, handleChange }: IProps) => {
  return (
    <>
      <input type="text" value={value} onChange={handleChange} />
    </>
  );
};

export default Input;
