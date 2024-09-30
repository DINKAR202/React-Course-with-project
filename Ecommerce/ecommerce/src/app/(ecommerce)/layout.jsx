import Header from "@/components/Header";
import React from "react";

const EcommerceLayout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default EcommerceLayout;
