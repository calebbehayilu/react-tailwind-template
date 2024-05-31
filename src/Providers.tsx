import React, { FC } from "react";
import { ThemeProvider } from "./theme-provider";

interface Children {
  children: React.ReactNode;
}
const Providers: FC<Children> = ({ children }) => {
  return <ThemeProvider defaultTheme="dark">{children}</ThemeProvider>;
};

export default Providers;
