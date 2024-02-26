function Label({ children, column }) {
  return (
    <label
      className={`
        items-center
        gap-2
        grid
        w-full
        ${column ? "grid-cols-none" : "grid-cols-[150px_1fr]"} 
        `}
    >
      {children}
    </label>
  );
}

export default Label;
