import { buildSchema } from "graphql";

const graphqlSchema = buildSchema(`
  type Query {
    teacher(id: ID!): Teacher
    teachers: [Teacher]
    
    pupil(id: ID!): Pupil
    pupils: [Pupil]
    
    subject(id: ID!): Subject
    subjects: [Subject]
    
    signIn(input: SignInInput): SignIn
    
    user(token: String!): User
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
    
    createUser(input: UserInput!): User
  }

  type Teacher {
    id: ID!
    firstName: String!
    lastName: String!
    subjects: [Subject]
  }

  input TeacherInput {
    firstName: String!
    lastName: String!
    subjectIds: [Int]
  }
  
  type Pupil {
    id: ID!
    firstName: String!
    lastName: String!
    subjects: [PupilsOnSubject]
  }

  input PupilInput {
    firstName: String!
    lastName: String!
    subjectIds: [Int]
  }
  
  type Subject {
    id: ID!
    title: String!
    teacher: Teacher
  }

  input SubjectInput {
    title: String!
  }
  
  type SignIn {
    token: String!
  }

  input SignInInput {
    email: String!
    password: String!
  }
  
  type User {
    email: String!
    firstName: String!
    lastName: String!
  }

  input UserInput {
    email: String!
    password: String!
    firstName: String!
    lastName: String!
  }
  
  type PupilsOnSubject {
    subject: Subject!
    grade: String
    class: String
  }
`);

export default graphqlSchema;
