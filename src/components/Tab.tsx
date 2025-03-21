import React, { JSX } from "react";

type Props = {
  title: string;
  children: string | JSX.Element | JSX.Element[];
};

const Tab: React.FC<Props> = ({ children }) => {
  return <div>{children}</div>;
};

export default Tab;
