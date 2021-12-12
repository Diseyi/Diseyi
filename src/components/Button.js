import React from "react";

const Button = (props) => {
  return (
    <button className="border-2 border-purple-500 rounded-xl text-2xl p-5 bg-purple-500 text-white mr-5">
      {props.value}
    </button>
  );
};

export default Button;
