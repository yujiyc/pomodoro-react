type ContainerProps = {
  children: React.ReactNode;
};

export function Container({ children }: ContainerProps) {
  return (
    <div className="container max-w-[980px] mx-auto">
      <div className="content m-8 pb-2">{children}</div>
    </div>
  );
}
