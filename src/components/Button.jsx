const Button = ({ children, className, ...rest }) => (
  <button
    className={
      className +
      " " +
      "cursor-pointer py-2 px-4 rounded  shadow-lg active:shadow-md"
    }
    {...rest}
  >
    {children}
  </button>
);

export default Button;
