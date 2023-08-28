import React from "react";
import { RoughNotation } from "react-rough-notation";
export default function Highlight({
  color,
  children,
}: {
  color: string;
  children: React.ReactElement;
}) {
  return (
    <RoughNotation
      type="highlight"
      color={color}
      animate={true}
      animationDelay={8}
      multiline={true}
      padding={[0,10]}
      iterations={1}
    >
      {children}
    </RoughNotation>
  );
}
