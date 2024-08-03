import React from "react";

interface OptionType {
  value: boolean;
  label: string;
}

interface SelectProps {
  label: string;
  name: string;
  value: boolean;
  options: OptionType[];
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Select: React.FC<SelectProps> = ({
  label,
  name,
  value,
  options,
  onChange,
}) => {
  return (
    <div>
      <label className="block text-2xl font-medium" htmlFor={name}>
        {label}
      </label>
      <select
        className="mt-1 block w-full rounded-md border-zinc-300 bg-aurora-18 text-zinc-800 shadow-sm focus:border-zinc-500 focus:ring focus:ring-zinc-500 sm:text-3xl"
        id={name}
        name={name}
        value={String(value)}
        onChange={onChange}
      >
        {options.map((option) => (
          <option key={String(option.value)} value={String(option.value)}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
