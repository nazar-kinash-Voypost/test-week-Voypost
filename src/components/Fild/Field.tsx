import { TextField } from "@material-ui/core";
import { InputLabel } from "@material-ui/core";

import React from "react";

const Field = ({
  name,
  variant,
  labelText,
  placeholder,
  color,
  helperText,
  error,
}: {
  name: string;
  variant: "standard" | "filled" | "outlined" | undefined;
  labelText: string;
  placeholder: string;
  color: "primary" | "secondary" | undefined;
  helperText: string;
  error: boolean;
}) => {
  return (
    <>
      <TextField
        label={labelText}
        name={name}
        variant={variant}
        placeholder={placeholder}
        color={color}
        error={error}
        helperText={helperText}
      />
    </>
  );
};

export default Field;
