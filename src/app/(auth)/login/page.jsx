import FormField from "@/components/form/Form";

const LoginPage = () => {
    return(
        <FormField
      form_tile="Welcome"
      form_paragraph="Please kindly enter your details"
      field_one_title="Fullname"
      field_one_placehold="Enter full name"
      field_password_title="Password"
      field_password_placehold="Enter a password"
      button_title="Login"
    //   TODO: Callback required
      btn_btm_msg=""
      btn_btm_msg_link="/register"
    />
    );
}

export default LoginPage;