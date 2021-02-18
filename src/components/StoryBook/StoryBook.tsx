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
          <Btn variant="contained" color="primary" size="large" />
          <Btn variant="contained" color="primary" size="medium" />
          <Btn variant="contained" color="primary" size="small" />
        </Box>
        <Box display="flex" alignItems="center" m="10px">
          <Btn variant="contained" color="secondary" size="large" />
          <Btn variant="contained" color="secondary" size="medium" />
          <Btn variant="contained" color="secondary" size="small" />
        </Box>
        <Box display="flex" alignItems="center" m="10px">
          <Btn variant="contained" color="default" size="large" />
          <Btn variant="contained" color="default" size="medium" />
          <Btn variant="contained" color="default" size="small" />
        </Box>
      </Box>
      <Box m="10px" display="flex" flexDirection="column">
        <Field variant="outlined" labelText="full name" />
      </Box>
      <Box>
        <Text variant="h1" component="h1" content="Typography"></Text>
        <Text variant="h2" component="h2" content="Typography"></Text>
        <Text variant="h3" component="h3" content="Typography"></Text>
        <Text variant="h4" component="h4" content="Typography"></Text>
        <Text variant="h5" component="h5" content="Typography"></Text>
        <Text variant="h6" component="h6" content="Typography"></Text>
        <Text variant="subtitle1" component="p" content="Typography"></Text>
        <Text variant="subtitle2" component="p" content="Typography"></Text>
      </Box>
    </>
  );
};

export default StoryBook;
