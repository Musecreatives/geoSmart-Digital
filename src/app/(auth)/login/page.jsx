import FormField from "@/components/form/Form";

const LoginPage = () => {
    return(
        <FormField
      form_tile="Welcome back!!"
      form_paragraph="Please kindly enter your details, to login to your account"
      field_one_title="Admin ID"
      field_one_placehold="Please enter your unique admin ID"
      field_password_title="Password"
      field_password_placehold="Enter your a password"
      button_title="Login"
    //   TODO: Callback required
      btn_btm_msg2="Don't have an account, Register here"
      btn_btm_msg_link1="/register"
    />
    );
}

export default LoginPage;