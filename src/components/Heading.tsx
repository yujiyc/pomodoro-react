type HeadingProps = {
  children: React.ReactNode;
};

export function Heading({ children }: HeadingProps) {
  return (
    <h1 className="flex items-center justify-center gap-4 text-3xl font-extrabold mb-4 text-zinc-800 dark:text-zinc-300">
      {children}
    </h1>
  );
}
