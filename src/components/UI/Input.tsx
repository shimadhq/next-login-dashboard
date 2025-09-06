"use client";
import React, { useState, useEffect } from "react";
import { FiCheckCircle, FiXCircle } from "react-icons/fi";

type InputProps = {
  label: string;
  className?: string;
  placeholder?: string;
  onChange: (value: string) => void;
  value?: string | number;
};

const iranPhoneRegex = /^(?:\+98|0098|0)?9\d{9}$/;

const Input: React.FC<InputProps> = ({
  label,
  className = "",
  placeholder = "",
  onChange,
  value = "",
}) => {
  const [focused, setFocused] = useState(false);
  const [isValid, setIsValid] = useState<null | boolean>(null);

  // Debounce logic
  useEffect(() => {
    if (!value) {
      setIsValid(null);
      return;
    }

    const handler = setTimeout(() => {
      setIsValid(iranPhoneRegex.test(value.toString()));
    }, 500); // 500ms debounce

    return () => clearTimeout(handler);
  }, [value]);

  return (
    <div className="relative w-full">
      {/* Input */}
      <input
        type="tel"
        value={value}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onChange={(e) => onChange(e.target.value)}
        className={`peer w-full p-2 lg:p-2.5 xl:p-4 xl:pt-6 border border-[#333333] rounded-full text-sm bg-white outline-none ${className}`}
        placeholder=" " // Should be blank so that the label floats.
      />

      {/* Floating Label */}
      <label
        className={`
          absolute left-3 text-[#333333] transition-all duration-200
          ${focused || value
            ? "-top-2.5 text-xs bg-white px-1"
            : "top-2 md:top-4 lg:top-2.5 xl:top-5 text-[12px] md:text-[13px] text-[#444B5A]"}
        `}
      >
        {label}
      </label>

      {/* Validation message */}
      {isValid === false && (
        <p className="flex items-center gap-1 mt-1 text-red-500 text-xs">
          <FiXCircle className="text-red-500" />
          mobile number is not valid, example: 09xxxxxxxxx
        </p>
      )}

      {isValid === true && (
        <p className="flex items-center gap-1 mt-1 text-green-600 text-xs">
          <FiCheckCircle className="text-green-600" />
          mobile number is valid
        </p>
      )}
    </div>
  );
};

export default Input;

  