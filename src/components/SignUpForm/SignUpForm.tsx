import { Box, Button, InputLabel, TextField } from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import { useFormik } from "formik";
import validationSchema from "./validateForm";
import React from "react";
import Btn from "../Btn/Btn";

import Text from "../Text/Text";
import styles from "./SignUpForm.module.css";

const SignUpForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      agree: false,
    },
    onSubmit: (values) => console.log(values),
    validationSchema,
  });

  return (
    <form className={styles.Form} onSubmit={formik.handleSubmit}>
      <Text
        variant="h2"
        component="h2"
        content="Sign up to set your brand up
for success "
      />

      <Box display="flex">
        <Btn type="button" variant="contained" color="secondary" size="large" title="sign up" />
        <Btn type="button" variant="contained" color="default" size="large" title="sign up" />
      </Box>
      <p>or</p>
      <Box>
        <TextField
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
          name="name"
          variant="outlined"
          label="Full name"
          placeholder="placeholder"
          color="primary"
        />

        <TextField
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          name="email"
          variant="outlined"
          label="Email addres"
          placeholder="placeholder"
          color="primary"
        />
        <TextField
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          name="password"
          type="password"
          variant="outlined"
          label="Password(8 characters)"
          placeholder="placeholder"
          color="primary"
        />
        <Box display="flex" alignItems="top">
          <Checkbox
            value={formik.values.agree}
            name="agree"
            onChange={(e) => {
              formik.values.agree = e.target.checked;
              console.log(formik.values);
            }}
            onBlur={formik.handleBlur}
            color="secondary"
          />
          <InputLabel>
            Creating an account means you’re okay with our Terms of Service, Privacy Policy, and our default
            Notification Settings.
          </InputLabel>
        </Box>
        <Button disabled={!formik.values.agree} type="submit" variant="contained" color="primary" size="large">
          sign up
        </Button>
      </Box>
    </form>
  );
};

export default SignUpForm;
