import { forwardRef } from "react";

function Input({ label, isTextArea, ...props }, ref) {
  const classes =
    "w-full border-b-2 p-1 bg-stone-200 border-stone-300 rounded-sm text-stone-600 focus:outline-none focus:border-stone-800";

  return (
    <p className="flex flex-col gap-1 my-4 ">
      <label className="text-sm uppercase font-bold text-stone-500">
        {label}
      </label>
      {isTextArea ? (
        <textarea className={classes} {...props} required ref={ref}/>
      ) : (
        <input className={classes} {...props} required ref={ref}/>
      )}
    </p>
  );
}

export default forwardRef(Input);
