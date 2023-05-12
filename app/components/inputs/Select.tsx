"use client";

import ReactSelect from "react-select";

interface SelectProps {
  disabled?: boolean;
  onChange: (value: Record<string, any>) => void;
  value?: Record<string, any>;
  label: string;
  options: Record<string, any>[];
}

const Select: React.FC<SelectProps> = ({
  disabled,
  onChange,
  value,
  label,
  options,
}) => {
  return (
    <div className="z-[100]">
      <label className="block text-sm font-medium text-gray-900 leading-6">
        {label}
      </label>
      <div className="mt-2">
        <ReactSelect
          isDisabled={disabled}
          value={value}
          onChange={onChange}
          isMulti
          options={options}
          menuPortalTarget={document.body}
          styles={{
            menuPortal: (base) => ({ ...base, zIndex: 9999 }),
          }}
          classNames={{
            control: () => "text-sm",
          }}
        />
      </div>
    </div>
  );
};

export default Select;
