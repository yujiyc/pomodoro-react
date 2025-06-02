type MenuButtonProps = {
  children: React.ReactNode;
  href: string;
  ariaLabel: string;
  title: string;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
};

export function MenuButton({
  children,
  href,
  ariaLabel,
  title,
  onClick,
}: MenuButtonProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      aria-label={ariaLabel}
      title={title}
      data-discover="true"
      className={`p-3 rounded-lg bg-red text-zinc-900 transition duration-100 hover:brightness-80`}
    >
      {children}
    </a>
  );
}
