import { Formik } from "formik";

// import { useRootStore } from "stores";
import {
  Layout,
  // Input,
  // Button,
  Checkbox,
} from "antd";
import Link from "antd/es/typography/Link";

import { Input } from "../../components/shared/ui/input";
import { Button } from "shared/ui";
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
      <Layout>
        <div>
          <div>
            <div mb={3}>
              <p>Войти</p>
              <p>
                Еще нет аккаунта на Craftshare?
                <Link color="primary">Зарегистрироваться</Link>
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
                <form onSubmit={handleSubmit} style={{ width: "50%" }}>
                  <div justifyContent="center" spacing={2}>
                    <Input name="email" type="email" placeholder="email" />
                    <Input
                      name="password"
                      type="password"
                      placeholder="пароль"
                    />
                    <Button type="submit">Войти</Button>
                  </div>
                </form>
              )}
            </Formik>
            <Button btnText="Забыл пароль?"></Button>
            <Checkbox>Запомнить меня</Checkbox>
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
