const ResolverFactory = {
  teacher: async ({ id }, context) => {
    return await context.teacherHandler.find(id);
  },
  teachers: async (args, context) => {
    return await context.teacherHandler.get();
  },
  createTeacher: async ({ input }, context) => {
    return await context.teacherHandler.create(input);
  },
  updateTeacher: async ({ id, input }, context) => {
    return await context.teacherHandler.update(id, input);
  },
  deleteTeacher: async ({ id }, context) => {
    return await context.teacherHandler.delete(Number(id));
  },
  pupil: async ({ id }, context) => {
    return await context.pupilHandler.find(id);
  },
  pupils: async (args, context) => {
    return await context.pupilHandler.get();
  },
  createPupil: async ({ input }, context) => {
    return await context.pupilHandler.create(input);
  },
  updatePupil: async ({ id, input }, context) => {
    return await context.pupilHandler.update(id, input);
  },
  deletePupil: async ({ id }, context) => {
    return await context.pupilHandler.delete(Number(id));
  },
  subject: async ({ id }, context) => {
    return await context.subjectHandler.find(id);
  },
  subjects: async (args, context) => {
    return await context.subjectHandler.get();
  },
  createSubject: async ({ input }, context) => {
    return await context.subjectHandler.create(input);
  },
  updateSubject: async ({ id, input }, context) => {
    return await context.subjectHandler.update(id, input);
  },
  deleteSubject: async ({ id }, context) => {
    return await context.subjectHandler.delete(Number(id));
  },
  signIn: async ({ input }, context) => {
    return await context.authHandler.signIn(input);
  },
  createUser: async ({ input }, context) => {
    return await context.userHandler.createUser(input);
  },
  user: async ({ token }, context) => {
    return await context.userHandler.find(token);
  },
};

export default ResolverFactory;
