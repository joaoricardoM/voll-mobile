import { Button, IButtonProps } from "native-base";
import { ReactNode } from "react";

interface ButtonProps extends IButtonProps {
  children: ReactNode;
  autoSize?: boolean;
  color?: string;
}

export function Buttons({
  children,
  autoSize = false,
  color,
  ...rest
}: ButtonProps) {
  return (
    <Button
      w={autoSize ? "auto" : "100%"}
      bgColor={color || "blue.800"}
      borderRadius="lg"
      mt={10}
      _text={{ color: "white" }}
      {...rest}
    >
      {children}
    </Button>
  );
}
