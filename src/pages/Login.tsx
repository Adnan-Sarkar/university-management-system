import { Button } from "antd";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { setUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Login = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const [login, { isError }] = useLoginMutation();
  const dispatch = useAppDispatch();

  const onSubmit = async (data) => {
    const toastId = toast.loading("Logging In");
    try {
      const userInfo = {
        id: data.id,
        password: data.password,
      };
      const res = await login(userInfo).unwrap();

      const user = verifyToken(res.data.accessToken);

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
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="id">ID: </label>
        <input type="text" id="id" {...register("id")} />
      </div>
      <div>
        <label htmlFor="password">Password: </label>
        <input type="text" id="password" {...register("password")} />
      </div>
      <Button htmlType="submit">Login</Button>
    </form>
  );
};

export default Login;
