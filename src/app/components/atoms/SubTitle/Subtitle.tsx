type HeadingAtomProps = {
  children: React.ReactNode;
  className?: string;
};

const HeadingAtom = ({ children, className = '' }: HeadingAtomProps) => {
  return <h2 className={className}>{children}</h2>;
}

export default HeadingAtom;
