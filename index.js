import graphqlMiddleware from "./src/graphql/index.js";
import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

app.all("/graphql", graphqlMiddleware);

app.listen(4000);
