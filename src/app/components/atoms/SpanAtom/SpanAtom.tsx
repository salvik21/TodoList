type SpanAtomProps = {
  text: string;
  className?: string;
};

export default function SpanAtom({ text, className = '' }: SpanAtomProps) {
  return <span className={`label-text ${className}`}>{text}</span>;
}
