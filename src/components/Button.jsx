const Button = ({ children, ...rest }) => (
  <button
    className="cursor-pointer py-2 px-4 rounded w-full mr-4 bg-slate-50 text-slate-800 hover:bg-slate-200"
    {...rest}
  >
    {children}
  </button>
);

export default Button;
