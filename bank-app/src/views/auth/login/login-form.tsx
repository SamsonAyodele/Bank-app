import FormContainer from "../../../components/form/form-container";
import FormItem from "../../../components/form/form-item";
import Button from "../../../components/form/button";
import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <FormContainer>
      <FormItem type="email" label="email" id="email" placeholder="Enter email" />
      <FormItem type="password" label="password" id="password" placeholder="Enter password" />
      <Button text="sign-in" />
      <div className="text-right flex justify-between mt-5 p-3">
        <Link to="/sign-up" className="text-purple-600 text-sm font-semibold">
          Don't have an account ? Register
        </Link>
        <Link to="/forgot-password" className="text-purple-600 text-sm font-semibold">
          Forgot Password ?
        </Link>
      </div>
    </FormContainer>
  );
};

export default LoginForm;
