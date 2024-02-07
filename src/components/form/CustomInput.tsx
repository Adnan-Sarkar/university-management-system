import { Alert, Form, Input } from "antd";
import { Controller } from "react-hook-form";

type TInputProps = { type: string; name: string; label?: string };

const CustomInput = ({ type, name, label }: TInputProps) => {
  return (
    <div>
      <Controller
        name={name}
        render={({ field, fieldState: { error } }) => (
          <Form.Item label={label}>
            <Input type={type} id={name} {...field} size="large" />
            {error && <Alert message={error.message} type="error" showIcon />}
          </Form.Item>
        )}
      />
    </div>
  );
};

export default CustomInput;
