import { Hono } from "hono";
import { ThemeToggle } from "./client/ThemeToggle/ThemeToggle";
import { renderer } from "./renderer";
import { Section1 } from "./section1";

const app = new Hono<{ Bindings: CloudflareBindings }>();

app.use(renderer);

app.get("/", (c) => {
  return c.render(
    <>
      <Section1 name={c.env.NAME} />
      <ThemeToggle />
    </>,
  );
});

export default app;
