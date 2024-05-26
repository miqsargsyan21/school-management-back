import express from "express";
import graphqlMiddleware from "./src/graphql/index.js";

const app = express();

app.all("/graphql", graphqlMiddleware);

app.listen(4000);
