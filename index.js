import { createHandler } from "graphql-http/lib/use/express";
import TeacherHandler from "./src/teachers/handler.js";
import { ruruHTML } from "ruru/server";
import { buildSchema } from "graphql";
import express from "express";

const schema = buildSchema(`
  type Query {
    hello: String
  }
`);

const root = {
  hello() {
    console.log(5465);
    return "Hello world!";
  },
};

const app = express();

app.all(
  "/graphql",
  createHandler({
    schema: schema,
    rootValue: root,
  }),
);

app.post("/test", async (_req, res) => {
  const teacherHandler = new TeacherHandler();
  const response = await teacherHandler.create({
    firstName: "hello",
    lastName: "helloyan",
  });
  console.log("response: ", response);

  res.json({ test: 95 });
});

app.get("/", (_req, res) => {
  res.type("html");
  res.end(ruruHTML({ endpoint: "/graphql" }));
});

app.listen(4000);
console.log("Running  a GraphQL API server at http://localhost:4000/graphql");
