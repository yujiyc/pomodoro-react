type ButtonProps = {
  children: React.ReactNode;
  color?: "red" | "gray";
  ariaLabel: string;
  title: string;
} & React.ComponentProps<"button">;

export function Button({
  children,
  color = "red",
  ariaLabel,
  title,
}: ButtonProps) {
  const bgColor =
    color === "red"
      ? "bg-red text-dark-gray"
      : color === "gray"
      ? "bg-gray-900 text-gray-100"
      : "";
  return (
    <>
      <button
        type="submit"
        aria-label={ariaLabel}
        title={title}
        data-discover="true"
        className={`flex items-center justify-center min-w-[240px] mt-12 p-2 cursor-pointer rounded-lg transition duration-100 hover:brightness-80 ${bgColor}`}
      >
        {children}
      </button>
    </>
  );
}
