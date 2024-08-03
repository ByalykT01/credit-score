import React, { useState } from "react";

interface InputProps {
  label: string;
  name: string;
  type: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  tooltip?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  name,
  type,
  value,
  onChange,
  tooltip,
}) => {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  return (
    <div className="relative space-y-1">
      <label
        className="block text-2xl font-medium"
        htmlFor={name}
        onMouseEnter={() => setIsTooltipVisible(true)}
        onMouseLeave={() => setIsTooltipVisible(false)}
      >
        {label}
        {tooltip && isTooltipVisible && (
          <div className="absolute bottom-14 mr-2 w-max -translate-y-1/2 transform rounded-md bg-aurora-9 px-3 py-1 text-white shadow-lg">
            {tooltip}
          </div>
        )}
      </label>
      <input
        className="mt-1 block w-full rounded-md border-aurora-1 bg-aurora-18 text-aurora-5 shadow-sm focus:border-aurora-2 focus:ring focus:ring-aurora-2 focus:ring-opacity-50 sm:text-3xl"
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
