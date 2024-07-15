import React from "react";

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="container mx-auto px-4 md:px-8 xl:px-12 max-w-screen-xl">
      {children}
    </div>
  );
};

export default Container;
