type MenuButtonProps = {
  children: React.ReactNode;
  href: string;
  ariaLabel: string;
  title: string;
};

export function MenuButton({
  children,
  href,
  ariaLabel,
  title,
}: MenuButtonProps) {
  return (
    <a
      href={href}
      aria-label={ariaLabel}
      title={title}
      data-discover="true"
      className={`p-3 rounded-lg bg-red text-zinc-900 transition duration-100 hover:brightness-80`}
    >
      {children}
    </a>
  );
}
