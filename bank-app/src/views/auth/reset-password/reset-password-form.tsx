import FormContainer from "../../../components/form/form-container";
import FormItem from "../../../components/form/form-item";
import Button from "../../../components/form/button";
// import { Link } from "react-router-dom";

const ResetPasswordForm = () => {
  return (
    <FormContainer>
      <FormItem type="code" label="code" id="code" placeholder="Enter code" />
      {/* <FormItem type="email" label="email" id="email" placeholder="Enter email" /> */}
      <FormItem type="password" label="New password" id="password" placeholder="Enter password" />
      <Button text="Reset password" />
      {/* <div className="text-right mt-5 p-3">
        <Link to="/sign-in" className="text-purple-600 text-sm font-semibold">
         Don't have an account ? Register
        </Link>
      </div> */}
    </FormContainer>
  );
};

export default ResetPasswordForm;
