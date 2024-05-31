import React, { FC } from "react";

interface Children {
  children: React.ReactNode;
}
const Providers: FC<Children> = ({ children }) => {
  return <div>{children}</div>;
};

export default Providers;
