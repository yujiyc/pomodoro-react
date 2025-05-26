type InputProps = {
  labelText?: string;
} & React.ComponentProps<"input">;

export function Input({ type, labelText, ...rest }: InputProps) {
  return (
    <>
      {labelText && <label htmlFor="">{labelText}</label>}
      <input
        type={type}
        {...rest}
        className="text-center outline-none p-2 border-2 border-transparent border-b-2 border-b-red focus:rounded-lg focus:border-2 focus:border-red placeholder:text-gray-400"
      />
    </>
  );
}
