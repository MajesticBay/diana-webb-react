import { ReactNode } from "react";

interface LayoutProps {
  children?: ReactNode; // `children` is optional unless always required
}

const Layout = ({ children }: LayoutProps) => {
  return <>{children}</>;
};

export default Layout;
