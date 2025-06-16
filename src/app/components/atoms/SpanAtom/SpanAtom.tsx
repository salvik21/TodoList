type SpanAtomProps = {
  text: string;
  className?: string;
};

const SpanAtom = ({ text, className = '' }: SpanAtomProps) => {
  return <span className={`label-text ${className}`}>{text}</span>;
}

export default SpanAtom;
