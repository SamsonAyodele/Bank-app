import FormContainer from "../../../components/form/form-container";
import FormItem from "../../../components/form/form-item";
import Button from "../../../components/form/button";
import { Link } from "react-router-dom";

const ForgotPasswordForm = () => {
  return (
    <FormContainer>
      <FormItem type="email" label="email" id="email" placeholder="Enter email" />
     
      <Button text="send code" />
      <div className="text-right mt-5 p-3">
        <Link to="/sign-up" className="text-purple-600 text-sm font-semibold">
          Don't have an account ? Register
        </Link>
      </div>
    </FormContainer>
  );
};

export default ForgotPasswordForm;
