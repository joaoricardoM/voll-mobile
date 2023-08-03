import { FormControl, Input } from "native-base";
import { ReactNode } from "react";

interface InputsProps {
  label?: ReactNode;
  placeholder: string;
  securyTextEntry?: boolean;
  value?: string;
  onChangeText?: (text: string) => void;
}

export function Inputs({
  label,
  placeholder,
  securyTextEntry = false,
  value,
  onChangeText,
}: InputsProps): JSX.Element {
  return (
    <FormControl mt={3}>
      {label && <FormControl.Label>{label}</FormControl.Label>}
      <Input
        size="lg"
        w="100%"
        borderRadius="lg"
        bgColor="gray.100"
        shadow={3}
        placeholder={placeholder}
        secureTextEntry={securyTextEntry}
        value={value}
        onChangeText={onChangeText}
      />
    </FormControl>
  );
}
