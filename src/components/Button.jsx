function Button({ children, ...props }) {
  return (
    <button
      {...props}
      className="bg-stone-700 text-stone-400 px-4 py-2 rounded-md hover:bg-stone-600 hover:text-stone-200"
    >
      {children}
    </button>
  );
}

export default Button;