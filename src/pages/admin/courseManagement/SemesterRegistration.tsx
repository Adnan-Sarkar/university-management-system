import { FieldValues, SubmitHandler } from "react-hook-form";
import { Button, Col, DatePicker, Flex } from "antd";

import { toast } from "sonner";
import { useGetAllSemestersQuery } from "../../../redux/features/admin/academicManagement.api";
import { useAddRegisteredSemesterMutation } from "../../../redux/features/admin/courseManagement";
import { TResponse } from "../../../types/global";
import CustomForm from "../../../components/form/CustomForm";
import CustomSelect from "../../../components/form/CustomSelect";
import CustomInput from "../../../components/form/CustomInput";
import { semesterStatusOptions } from "../../../constants/semester";

const SemesterRegistration = () => {
  const [addSemester] = useAddRegisteredSemesterMutation();
  const { data: academicSemester } = useGetAllSemestersQuery([
    { name: "sort", value: "year" },
  ]);

  const academicSemesterOptions = academicSemester?.data?.map((item) => ({
    value: item._id,
    label: `${item.name} ${item.year}`,
  }));

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Creating...");

    const semesterData = {
      ...data,
      minCredit: Number(data.minCredit),
      maxCredit: Number(data.maxCredit),
    };

    console.log(semesterData);

    try {
      const res = (await addSemester(semesterData)) as TResponse;
      console.log(res);
      if (res.error) {
        toast.error(res.error.data.message, { id: toastId });
      } else {
        toast.success("Semester created", { id: toastId });
      }
    } catch (err) {
      toast.error("Something went wrong", { id: toastId });
    }
  };

  return (
    <Flex justify="center" align="center">
      <Col span={6}>
        <CustomForm onSubmit={onSubmit}>
          <CustomSelect
            label="Academic Semester"
            name="academicSemester"
            options={academicSemesterOptions}
          />

          <CustomSelect
            name="status"
            label="Status"
            options={semesterStatusOptions}
          />
          <DatePicker name="startDate" />
          <DatePicker name="endDate" />
          <CustomInput type="text" name="minCredit" label="Min Credit" />
          <CustomInput type="text" name="maxCredit" label="Max Credit" />

          <Button htmlType="submit">Submit</Button>
        </CustomForm>
      </Col>
    </Flex>
  );
};

export default SemesterRegistration;
