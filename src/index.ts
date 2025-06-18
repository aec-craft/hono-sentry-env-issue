import { Hono } from "hono";
import * as Sentry from "@sentry/cloudflare";

// This is what we want our env to be
type Env = {
  MY_VAR: string;
};

const app = new Hono<{ Bindings: Env }>();

app.get("/", async (c) => {
  // This should show a TypeScript error because Sentry overwrites the Bindings type
  // The type of c.env should be { MY_VAR: string } but Sentry makes it unknown
  const test: Env = c.env; // This should error
  
  // This still works at runtime but TypeScript doesn't know the type
  const value = c.env.MY_VAR;
  return c.text(`Env var: ${value}`);
});

export default app;
