export type CheckboxAtomProps = {
  name: string;
  id?: string;
  defaultChecked?: boolean;
  className?: string;
};

export default function CheckboxAtom({
  name,
  id,
  defaultChecked = false,
  className = '',
}: CheckboxAtomProps) {
  return (
    <input
      type="checkbox"
      name={name}
      id={id}
      className={className}
      defaultChecked={defaultChecked}
    />
  );
}
