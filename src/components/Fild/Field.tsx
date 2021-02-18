import { TextField } from "@material-ui/core";
import { InputLabel } from "@material-ui/core";

import React from "react";

const Field = ({
  variant,
  labelText,
}: {
  variant: "standard" | "filled" | "outlined" | undefined;
  labelText: string;
}) => {
  return (
    <>
      <TextField label="ssdasd" variant={variant} placeholder="placeholder" />
    </>
  );
};

export default Field;
