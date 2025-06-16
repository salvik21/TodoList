type LabelAtomProps = {
  htmlFor: string;
  children: React.ReactNode;
  className?: string;
};

const LabelAtom = ({ htmlFor, children, className = '' }: LabelAtomProps) => {
  return (
    <label htmlFor={htmlFor} className={`label cursor-pointer ${className}`}>
      {children}
    </label>
  );
}

export default LabelAtom;

