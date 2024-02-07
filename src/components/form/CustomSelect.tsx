import { Form, Select } from "antd";
import { Controller } from "react-hook-form";

type TCustomSelectProps = {
  label: string;
  name: string;
  options: { value: string; label: string; disabled?: boolean | undefined }[];
};

const CustomSelect = ({ label, name, options }: TCustomSelectProps) => {
  return (
    <Controller
      name={name}
      render={({ field: { onChange } }) => (
        <Form.Item label={label}>
          <Select
            popupMatchSelectWidth={false}
            onChange={onChange}
            options={options}
            size="large"
          />
        </Form.Item>
      )}
    />
  );
};

export default CustomSelect;
