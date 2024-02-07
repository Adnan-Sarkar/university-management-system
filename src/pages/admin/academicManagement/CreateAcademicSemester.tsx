import { FieldValues, SubmitHandler } from "react-hook-form";
import CustomForm from "../../../components/form/CustomForm";
import { Button, Col, Flex } from "antd";
import CustomSelect from "../../../components/form/CustomSelect";
import { semesterOptions } from "../../../constants/semester";
import { monthOptions } from "../../../constants/month";

const currentYear = new Date().getFullYear();
const yearOptions = [1, 2, 3, 4, 5].map((number) => ({
  value: currentYear + number + "",
  label: currentYear + number + "",
}));

const CreateAcademicSemester = () => {
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const name = semesterOptions[Number(data.name) - 1]?.label;
    const semesterData = {
      name,
      code: data.name,
      year: data.year,
    };

    console.log(semesterData);
  };

  return (
    <Flex justify="center" align="center">
      <Col span={6}>
        <CustomForm onSubmit={onSubmit}>
          <CustomSelect
            name="name"
            label="Semester Name"
            options={semesterOptions}
          />
          <CustomSelect name="year" label="Year" options={yearOptions} />
          <CustomSelect
            name="startMonth"
            label="Start Month"
            options={monthOptions}
          />
          <CustomSelect
            name="endMonth"
            label="End Month"
            options={monthOptions}
          />
          <Button htmlType="submit">Submit</Button>
        </CustomForm>
      </Col>
    </Flex>
  );
};

export default CreateAcademicSemester;
