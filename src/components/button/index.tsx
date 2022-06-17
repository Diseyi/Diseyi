

const Button = (props) => {
    return (
      <button class=" rounded-xl text-2xl p-3 text-white mr-5 bg-dark-green ">
        {props.children}
      </button>
    );
  };
  
  export default Button;
  