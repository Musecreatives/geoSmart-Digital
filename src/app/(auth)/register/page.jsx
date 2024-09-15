import FormField from "@/components/form/Form";

const RegistrationPage = () => {
  return (
    <FormField
      form_tile="Registration"
      form_paragraph="Please kindly enter your details"
      field_one_title="Fullname"
      field_one_placehold="Enter full name"
      field_two_title="Email"
      field_two_placehold="Enter a valid email"
      button_title="Register"
      field_password_title="Create password"
      field_password_placehold="Enter unique password"
      field_password_title_two="Confirm password"
      field_password_placehold_two="Re-enter password"
    //   TODO: Callback required
      btn_btm_msg2="Already have an account?"
      btn_btm_msg_link2="/login"
    />
  );
};

export default RegistrationPage;
