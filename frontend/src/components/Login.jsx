import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { asyncloginuser } from "../store/actions/UserActions";
import { closeAuth, switchToRegister } from "../store/reducers/UiSlice";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState:{errors} } = useForm();
  const dispatch = useDispatch();
  
  const LoginHandler = (user) => {
    dispatch(asyncloginuser(user)).then((res)=>{
      if(res.success){ 
        toast.success('Login Successful');
        dispatch(closeAuth());
        navigate('/');
      } else {
        toast.error('Invalid Credentials');
      }
    });
  };

  return (
    <form onSubmit={handleSubmit(LoginHandler)} className="flex flex-col w-75 items-center p-4">

      <h2 className="text-2xl mb-3">Login</h2>

      <input 
        {...register("email", { required: "Email is required" })}
        className="mb-4 p-2 border rounded w-full"
        type="email"
        placeholder="Email"
      />
      {errors.email && <small className="text-red-500">{errors.email.message}</small>}

      <input 
        {...register("password", { required: "Password is required" })}
        className="mb-1 p-2 border rounded w-full"
        type="password"
        placeholder="Password"
      />
      {errors.password && <small className="text-red-500">{errors.password.message}</small>}

      <button className="mt-5 px-4 py-2 bg-red-500 text-white rounded">Login</button>

      <p className="mt-4">
        Don't have an account?{" "}
        <span onClick={() => dispatch(switchToRegister())} className="text-red-600 cursor-pointer hover:underline">Register</span>
      </p>
    </form>
  );
};
export default Login;