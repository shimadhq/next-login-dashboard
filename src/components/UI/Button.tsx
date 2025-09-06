import React from "react";
import Link from "next/link";

type ButtonProps = {
  text: string;
  className?: string;
  href?: string;
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
};

function Button({ text, className, href, disabled, loading, onClick }: ButtonProps) {
  const baseClass = `p-2 lg:px-4 lg:py-3 bg-[#4772FF] btn-shadow rounded-full flex items-center justify-center gap-2 transition 
     ${disabled || loading ? "opacity-50 cursor-not-allowed" : "cursor-pointer"} ${className}`;

  const content = (
    <>
      {loading && (
        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
      )}
      {text}
    </>
  );

  return href ? (
    <Link href={href}>
      <button disabled={disabled || loading} className={baseClass}>
        {content}
      </button>
    </Link>
  ) : (
    <button disabled={disabled || loading} className={baseClass} onClick={onClick}>
      {content}
    </button>
  );
}

export default Button;