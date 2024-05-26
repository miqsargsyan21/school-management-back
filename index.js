import { createHandler } from "graphql-http/lib/use/express";
import TeacherHandler from "./src/teachers/handler.js";
import { ruruHTML } from "ruru/server";
import { buildSchema } from "graphql";
import express from "express";

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
    hello: String
    gago: String
  }

`);

// The root provides a resolver function for each API endpoint
var root = {
  gago() {
    console.log("gagulik");
    return "Babayan Gagik";
  },
  hello() {
    console.log(5465);
    return "Hello world!";
  },
};

var app = express();

// Create and use the GraphQL handler.
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

// Serve the GraphiQL IDE.
app.get("/", (_req, res) => {
  res.type("html");
  res.end(ruruHTML({ endpoint: "/graphql" }));
});

// Start the server at port
app.listen(4000);
console.log("Running  a GraphQL API server at http://localhost:4000/graphql");
