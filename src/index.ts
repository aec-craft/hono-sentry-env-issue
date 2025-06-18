import { Hono } from "hono";
// import * as Sentry from "@sentry/cloudflare";
// uncomment the line above and you will get the following TS error:
// Property 'MY_VAR' does not exist on type 'Env'

const app = new Hono<{ Bindings: Env }>();

app.get("/", async (c) => {
  const value = c.env.MY_VAR;
  return c.text(`Env var: ${value}`);
});

export default app;
