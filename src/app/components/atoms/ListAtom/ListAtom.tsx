type UnorderedListAtomProps = {
  children: React.ReactNode;
  className?: string;
};

const ListAtom = ({ children, className }: UnorderedListAtomProps) => {
 return <ul className={className}>{children}</ul>;
}

export default ListAtom