import * as React from "react";

export interface ButtonProps {
  children: React.ReactNode;
}

export function Button(props: ButtonProps) {
  return <button style={{color:'red'}}>{props.children}</button>;
}

Button.displayName = "Button";
