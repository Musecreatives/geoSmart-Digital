import FormField from "@/components/form/Form";

const LoginPage = () => {
  return (
    <FormField
      form_tile="Welcome back!!"
      form_paragraph="Please kindly enter your details to log in to your account"
      field_one_title="Admin ID"
      field_one_placehold="Please enter your unique admin ID"
      field_password_title="Password"
      field_password_placehold="Enter your password"
      button_title="Login"
      btn_btm_msg="Don't have an account?"
      btn_btm_msg_link="/register"
    />
  );
};

export default LoginPage;
