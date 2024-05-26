import { buildSchema } from "graphql";

const graphqlSchema = buildSchema(`
  type Query {
    teacher(id: ID!): Teacher
    teachers: [Teacher]
    
    pupil(id: ID!): Pupil
    pupils: [Pupil]
    
    subject(id: ID!): Subject
    subjects: [Subject]
  }

  type Mutation {
    createTeacher(input: TeacherInput!): Teacher
    updateTeacher(id: ID!, input: TeacherInput!): Teacher
    deleteTeacher(id: ID!): Teacher
    
    createPupil(input: PupilInput!): Pupil
    updatePupil(id: ID!, input: PupilInput!): Pupil
    deletePupil(id: ID!): Pupil
    
    createSubject(input: SubjectInput!): Subject
    updateSubject(id: ID!, input: SubjectInput!): Subject
    deleteSubject(id: ID!): Subject
  }

  type Teacher {
    id: ID!
    firstName: String!
    lastName: String!
  }

  input TeacherInput {
    firstName: String!
    lastName: String!
  }
  
  type Pupil {
    id: ID!
    firstName: String!
    lastName: String!
  }

  input PupilInput {
    firstName: String!
    lastName: String!
  }
  
  type Subject {
    id: ID!
    title: String!
  }

  input SubjectInput {
    title: String!
  }
`);

export default graphqlSchema;
