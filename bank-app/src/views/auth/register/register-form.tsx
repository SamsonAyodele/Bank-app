import FormContainer from "../../../components/form/form-container";
import FormItem from "../../../components/form/form-item";
import Button from "../../../components/form/button";
import { Link } from "react-router-dom";

const RegisterForm = () => {
  return (
    <FormContainer>
      <FormItem type="firstname" label="firstname" id="firstname" placeholder="Enter firstname" />
      <FormItem type="lastname" label="lastname" id="lastname" placeholder="Enter lastname" />
      <FormItem type="email" label="email" id="email" placeholder="Enter email" />
      <FormItem type="password" label="password" id="password" placeholder="Enter password" />
      <Button text="sign-up" />
      <div className="text-right mt-5 p-3">
        <Link to="/sign-in" className="text-purple-600 text-sm font-semibold">
          Already have an account? Login
        </Link>
      </div>
    </FormContainer>
  );
};

export default RegisterForm;
