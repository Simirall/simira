import { type FC, render } from "hono/jsx/dom";

export const renderClientComponent = (Component: FC, targetId: string) => {
  const domNode = document.getElementById(targetId)!;
  render(<Component />, domNode);
};
