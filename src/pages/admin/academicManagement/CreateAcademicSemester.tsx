import { FieldValues, SubmitHandler } from "react-hook-form";
import CustomForm from "../../../components/form/CustomForm";
import { Button, Col, Flex } from "antd";
import CustomSelect from "../../../components/form/CustomSelect";
import { semesterOptions } from "../../../constants/semester";
import { monthOptions } from "../../../constants/month";
import { zodResolver } from "@hookform/resolvers/zod";
import { academicSemesterSchema } from "../../../schemas/academicManagement.schema";
import { useAddAcademicSemesterMutation } from "../../../redux/features/admin/academicManagement.api";
import { toast } from "sonner";
import { TResponse } from "../../../types/global";

const currentYear = new Date().getFullYear();
const yearOptions = [1, 2, 3, 4, 5].map((number) => ({
  value: currentYear + number + "",
  label: currentYear + number + "",
}));

const CreateAcademicSemester = () => {
  const [createAcademicSemester] = useAddAcademicSemesterMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Loadding...");

    const name = semesterOptions[Number(data.name) - 1]?.label;
    const semesterData = {
      name,
      code: data.name,
      year: data.year,
      startMonth: data.startMonth,
      endMonth: data.endMonth,
    };

    try {
      const res = (await createAcademicSemester(semesterData)) as TResponse;

      if (res?.error) {
        toast.error(res.error.data.message, {
          id: toastId,
        });
      } else {
        toast.success("Semester created successfull", {
          id: toastId,
        });
      }
      console.log(res);
    } catch (err) {
      toast.error("Something went wrong!", {
        id: toastId,
      });
    }

    console.log(semesterData);
  };

  return (
    <Flex justify="center" align="center">
      <Col span={6}>
        <CustomForm
          onSubmit={onSubmit}
          resolver={zodResolver(academicSemesterSchema)}
        >
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
