import type { ReactNode } from "react";

export const Title = ({ children }: { children: string }) => {
  return (
    <h1 className="mb-4 rounded-tl-xl rounded-br-xl bg-base-200/50 px-4 py-1 text-4xl text-base-content shadow-lg">
      {children}
    </h1>
  );
};
