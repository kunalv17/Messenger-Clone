"use client";

import { UseFormRegister, FieldValues, FieldErrors } from "react-hook-form";

interface MessageInputProps {
  id: string;
  type?: string;
  errors: FieldErrors<FieldValues>;
  required?: boolean;
  placeholder?: string;
  register: UseFormRegister<FieldValues>;
}

const MessageInput: React.FC<MessageInputProps> = ({
  id,
  type,
  errors,
  required,
  placeholder,
  register,
}) => {
  return (
    <div className="relative w-full">
      <input id={id} type={type} {...register(id, { required })} placeholder={placeholder} className="text-black font-light py-2 px-4 w-full rounded-full focus:outline-none" />
    </div>
  );
};

export default MessageInput;
