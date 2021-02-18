import { Button } from "@material-ui/core";
import React from "react";

const Btn = ({
  variant,
  color,
  size,
}: {
  variant: "text" | "outlined" | "contained" | undefined;
  color: "inherit" | "primary" | "secondary" | "default" | undefined;
  size: "small" | "medium" | "large" | undefined;
}) => {
  return (
    <Button variant={variant} color={color} size={size}>
      Sign In
    </Button>
  );
};

export default Btn;
