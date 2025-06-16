type ListItemAtomProps = {
  children: React.ReactNode;
  className?: string;
};

const ListItemAtom = ({ children, className = '' }: ListItemAtomProps) => {
  return <li className={className}>{children}</li>;
}

export default ListItemAtom;
