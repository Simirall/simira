import { type CSSProperties, render, useEffect, useState } from "hono/jsx/dom";

function App() {
  return <span className="loading loading-spinner loading-xl"></span>;
}

const domNode = document.getElementById("client")!;
render(<App />, domNode);
