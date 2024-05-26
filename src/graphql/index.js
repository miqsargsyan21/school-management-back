import TeacherHandler from "../modules/teachers/handler.js";
import SubjectHandler from "../modules/subjects/handler.js";
import PupilHandler from "../modules/pupils/handler.js";
import ResolverFactory from "./ResolverFactory.js";
import { graphqlHTTP } from "express-graphql";
import graphqlSchema from "./schema.js";

const graphqlMiddleware = graphqlHTTP(async (req, res, params) => {
  const teacherHandler = new TeacherHandler();
  const subjectHandler = new SubjectHandler();
  const pupilHandler = new PupilHandler();

  const context = { teacherHandler, pupilHandler, subjectHandler };

  return {
    schema: graphqlSchema,
    rootValue: ResolverFactory,
    context,
    graphiql: true,
  };
});

export default graphqlMiddleware;
