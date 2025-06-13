type HeadingAtomProps = {
  children: React.ReactNode;
  className?: string;
};

export default function HeadingAtom({ children, className = '' }: HeadingAtomProps) {
  return <h2 className={className}>{children}</h2>;
}
