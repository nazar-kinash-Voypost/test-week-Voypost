import { Typography } from "@material-ui/core";
import React from "react";

const Text = ({
  variant,
  component,
  content,
}: {
  content: string;
  variant:
    | "inherit"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "subtitle1"
    | "subtitle2"
    | "body1"
    | "body2"
    | "caption"
    | "button"
    | "overline"
    | "srOnly"
    | undefined;
  component: React.ElementType<any>;
}) => {
  return (
    <>
      <Typography variant={variant} component={component}>
        {content}
      </Typography>
    </>
  );
};

export default Text;
