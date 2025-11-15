import React from "react";

interface ShinyTextProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  gradientStop?: string;
}

const ShinyText: React.FC<ShinyTextProps> = ({
  children,
  className = "",
  style = {},
  gradientStop = "40%",
}) => {
  const defaultStyle: React.CSSProperties = {
    backgroundImage: `radial-gradient(circle, rgba(255, 255, 255, 1) ${gradientStop}, rgb(131, 131, 131) 100%)`,
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    color: "transparent",
  };

  return (
    <span
      className={`font-bold ${className}`}
      style={{ ...defaultStyle, ...style }}
    >
      {children}
    </span>
  );
};

export default ShinyText;
