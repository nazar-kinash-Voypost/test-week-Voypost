import { Button } from "@material-ui/core";
import React from "react";

const Btn = ({
  type,
  variant,
  color,
  size,
  title,
}: {
  type: "button" | "submit" | "reset";
  variant: "text" | "outlined" | "contained" | undefined;
  color: "inherit" | "primary" | "secondary" | "default" | undefined;
  size: "small" | "medium" | "large" | undefined;
  title: string;
}) => {
  return (
    <Button type={type} variant={variant} color={color} size={size}>
      {title}
    </Button>
  );
};

export default Btn;
