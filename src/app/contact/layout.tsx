import { ReactNode } from "react";
import Header from "./_components/header";

function ContactLayout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-red-500">
      <Header />
      {children}
    </div>
  );
}

export default ContactLayout;
