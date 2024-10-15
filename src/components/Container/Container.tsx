import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function Container({ children }: Props) {
  return (
    <div className="w-full flex items-start justify-center lg:w-[80%] mx-auto">
      {children}
    </div>
  );
}