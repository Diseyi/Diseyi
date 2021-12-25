import React from "react";

const Button = (props) => {
  return (
    <button className="border-2 border-purple-500 rounded-xl text-2xl p-3 text-black mr-5 hover:bg-purple-700 hover:text-white ">
      {props.value}
    </button>
  );
};

export default Button;
