type ListItemAtomProps = {
  children: React.ReactNode;
  className?: string;
};

export default function ListItemAtom({ children, className = '' }: ListItemAtomProps) {
  return <li className={className}>{children}</li>;
}
