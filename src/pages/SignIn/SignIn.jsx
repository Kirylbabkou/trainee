import { Formik } from "formik";

// import { useRootStore } from "../../stores";
import { Layout, Input, Button } from "antd";

// import { Input } from "../../components/shared/ui/input";
// import { emailValidation, passwordValidation } from "shared/validations";

// import s from "./Styles.module.scss";

function SignIn() {
  // const { authorization } = useRootStore();

  // const validationSchema = yup.object().shape({
  //   email: emailValidation(),
  //   password: passwordValidation(),
  // });

  return (
    <div>
      <Layout

      // maxWidth="lg"
      // sx={{
      //   height: "100vh",
      //   display: "flex",
      //   alignItems: "center",
      //   flexDirection: "column",
      //   gap: 15,
      // }}
      >
        {/* <img src={logo} className={s.logo} alt="Logo" /> */}

        <div>
          <div
          // elevation={16}
          // sx={{
          //   display: "flex",
          //   flexDirection: "column",
          //   minWidth: 550,
          //   p: 3,
          // }}
          >
            <div mb={3}>
              <p variant="h5">signIn</p>
              <p color="text.secondary" variant="body2">
                dontHaveAccount
                <button color="primary">register</button>
              </p>
            </div>
            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              // validationSchema={validationSchema}
              onSubmit={(values) => {
                // authorization.signIn(values);
              }}
            >
              {({ handleSubmit }) => (
                <form onSubmit={handleSubmit} style={{ width: "100%" }}>
                  <div justifyContent="center" spacing={2}>
                    <Input name="email" />
                    <Input name="password" type="password" />
                    <Button type="submit">Войти</Button>
                  </div>
                </form>
              )}
            </Formik>
            <button color="primary" sx={{ mt: 1 }}>
              forgotPassword
            </button>
          </div>

          {/* <alert severity="error" sx={{ mt: 2.5 }}>
            You can use <strong>&quot;admin@gmail.com&quot;</strong> and
            password <strong>&quot;qwerqwer&quot;</strong>
          </alert> */}
        </div>
      </Layout>
    </div>
  );
}

export default SignIn;
