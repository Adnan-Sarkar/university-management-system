import { Button, Row } from "antd";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { TUser, setUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import CustomForm from "../components/form/CustomForm";
import CustomInput from "../components/form/CustomInput";
import { FieldValues } from "react-hook-form";

const Login = () => {
  const navigate = useNavigate();
  const [login] = useLoginMutation();
  const dispatch = useAppDispatch();

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Logging In");

    try {
      const userInfo = {
        id: data.id,
        password: data.password,
      };
      const res = await login(userInfo).unwrap();

      const user = verifyToken(res.data.accessToken) as TUser;

      dispatch(
        setUser({
          user: user,
          token: res.data.accessToken,
        })
      );

      toast.success("Logged In", {
        id: toastId,
        duration: 1000,
      });

      navigate(`/${user.role}/dashboard`);
    } catch (err) {
      toast.error("Something went wrong!", {
        id: toastId,
        duration: 1000,
      });
    }
  };

  return (
    <Row justify={"center"} align={"middle"} style={{ height: "100vh" }}>
      <CustomForm onSubmit={onSubmit}>
        <div
          style={{ display: "flex", flexDirection: "column", rowGap: "20px" }}
        >
          <CustomInput type="text" name="id" label="ID:" />
          <CustomInput type="text" name="password" label="Password:" />
          <Button htmlType="submit">Login</Button>
        </div>
      </CustomForm>
    </Row>
  );
};

export default Login;
