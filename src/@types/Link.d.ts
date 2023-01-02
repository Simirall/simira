import { ReactNode } from "react";

export interface Link {
  name: string;
  href: string;
  comment: string;
  color: string;
  icon: ReactNode;
}
