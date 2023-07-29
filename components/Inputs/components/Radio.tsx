type RadioProps = {
  label: string;
  name: string;
  value: string | number;
};
export function Radio({ name, value, label }: RadioProps) {
  return (
    <div>
      <input
        id={String(value)}
        checked
        type="radio"
        value={value}
        name={name}
        className="text-primary h-4 w-4 focus:ring-2 focus:ring-green-100"
      />
      <label
        htmlFor={String(value)}
        className="ml-2 w-full text-sm font-medium"
      >
        {label}
      </label>
    </div>
  );
}
