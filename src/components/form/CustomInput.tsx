import { Input } from "antd";
import { Controller } from "react-hook-form";

type TInputProps = { type: string; name: string; label?: string };

const CustomInput = ({ type, name, label }: TInputProps) => {
  return (
    <div>
      {label && <label htmlFor={name}>{label}</label>}
      <Controller
        name={name}
        render={({ field }) => <Input type={type} id={name} {...field} />}
      />
    </div>
  );
};

export default CustomInput;
