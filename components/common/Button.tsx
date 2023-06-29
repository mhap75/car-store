"use client";

import { ButtonProps } from "@/types";
import Image from "next/image";

const Button = ({
  title,
  containerStyle,
  handleClick,
  type,
  textStyle,
  disabled,
  rightIcon,
}: ButtonProps) => {
  return (
    <button
      disabled={false}
      type={type || "button"}
      className={`custom-btn hover:shadow-md ${containerStyle}`}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyle}`}>{title}</span>
      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image
            src={rightIcon}
            alt="right icon"
            fill
            className="object-contain"
          />
        </div>
      )}
    </button>
  );
};

export default Button;
