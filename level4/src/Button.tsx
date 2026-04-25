import React from "react";

type ButtonProps = {
  data: string;
};

const Button = ({ data }: ButtonProps) => {

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log("Button clicked");
  };

  return (
    <div>
      <h1>{data}</h1>
      <input type="text" onChange={handleChange} />
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default Button;