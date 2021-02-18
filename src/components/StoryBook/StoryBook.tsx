import React from "react";
import { Box } from "@material-ui/core";
import Btn from "../Btn/Btn";
import Field from "../Fild/Field";
import Text from "../Text/Text";

const StoryBook = () => {
  return (
    <>
      <Box display="flex" flexDirection="column">
        <Box display="flex" alignItems="center" m="10px">
          <Btn type="button" variant="contained" color="primary" size="large" title="sign up" />
          <Btn type="button" variant="contained" color="primary" size="medium" title="sign up" />
          <Btn type="button" variant="contained" color="primary" size="small" title="sign up" />
        </Box>
        <Box display="flex" alignItems="center" m="10px">
          <Btn type="button" variant="contained" color="secondary" size="large" title="sign up" />
          <Btn type="button" variant="contained" color="secondary" size="medium" title="sign up" />
          <Btn type="button" variant="contained" color="secondary" size="small" title="sign up" />
        </Box>
        <Box display="flex" alignItems="center" m="10px">
          <Btn type="button" variant="contained" color="default" size="large" title="sign up" />
          <Btn type="button" variant="contained" color="default" size="medium" title="sign up" />
          <Btn type="button" variant="contained" color="default" size="small" title="sign up" />
        </Box>
      </Box>
      <Box m="10px" display="flex" flexDirection="column">
        <Field
          name="fullName"
          variant="outlined"
          labelText="Full name"
          placeholder="placeholder"
          color="primary"
          helperText=""
          error={false}
        />
        <Field
          name="emailFddres"
          variant="outlined"
          labelText="Email addres"
          placeholder="placeholder"
          color="primary"
          helperText=""
          error={false}
        />
        <Field
          name="password"
          variant="outlined"
          labelText="Password(8 characters)"
          placeholder="placeholder"
          color="primary"
          helperText="Please input your password! The password must be at least 8 characters!"
          error={true}
        />
      </Box>
      <Box>
        <Text variant="h1" component="h1" content="Typography" />
        <Text variant="h2" component="h2" content="Typography" />
        <Text variant="h3" component="h3" content="Typography" />
        <Text variant="h4" component="h4" content="Typography" />
        <Text variant="h5" component="h5" content="Typography" />
        <Text variant="h6" component="h6" content="Typography" />
        <Text variant="subtitle1" component="p" content="Typography" />
        <Text variant="subtitle2" component="p" content="Typography" />
      </Box>
    </>
  );
};

export default StoryBook;
