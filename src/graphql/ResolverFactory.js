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
    return await context.teacherHandler.delete(id);
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
    return await context.pupilHandler.delete(id);
  },
};

export default ResolverFactory;
