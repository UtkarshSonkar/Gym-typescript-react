import React from "react";

type Props = {
  children: React.ReactNode;
};

const HText = ({ children }: Props) => {
  return (
    <h1 className="bsis-3/5 font-monserrat font bold text-3xl">{children}</h1>
  );
};

export default HText;
