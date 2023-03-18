import React from "react";

import classNames from "classnames";
import classes from "./Container.module.scss";

type Props = {
  children: any;
  className?: string;
};

const Container = ({ children, className }: Props) => {
  return (
    <div className={classNames(classes["container"], className)}>
      {children}
    </div>
  );
};

export default Container;
