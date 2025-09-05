"use client";
import React, { useState, useEffect } from "react";
import { FiCheckCircle, FiXCircle } from "react-icons/fi";

type InputProps = {
  label: string;
  className?: string;
  placeholder?: string;
  onChange: (value: string) => void;
  value?: string | number;
  isNumber?: boolean;
  children?: React.ReactNode;
};

const Input: React.FC<InputProps> = ({
  label,
  className = "",
  placeholder = "",
  onChange,
  value = "",
  isNumber = false,
  children,
}) => {
  const [focused, setFocused] = useState(false);

  return (
    <div className="relative w-full">
      {/* Input */}
      <input
        type={isNumber ? "number" : "text"}
        value={value}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onChange={(e) => {
          const val = e.target.value;
          if (isNumber) {
            if (!isNaN(Number(val))) {
              onChange(val);
            }
          } else {
            onChange(val);
          }
        }}
        className={`peer w-full p-4 pt-6 border border-[#333333] rounded-full text-sm bg-white outline-none ${className}`}
        placeholder=" " // Should be blank so that the label floats.
      />

      {/* Floating Label */}
      <label
        className={`
          absolute left-3 text-[#333333] transition-all duration-200
          ${focused || value
            ? "-top-2.5 text-xs bg-white px-1"
            : "top-5 px-1.5 text-sm text-[#444B5A]"}
        `}
      >
        {label}
      </label>

      {/* Children */}
      {children && (
        <div className="absolute right-3 top-1/2 -translate-y-1/2 text-[#3E6BFF]">
          {children}
        </div>
      )}
    </div>
  );
};

export default Input;

  