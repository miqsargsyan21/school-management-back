import PrismaSingleton from "../../../prisma/client.js";

export default class TeacherService {
  constructor() {
    this.teacher = PrismaSingleton.teacher;
  }

  async create(data) {
    const { subjectIds, ...teacherInfo } = data;

    let requestData;

    if (subjectIds) {
      requestData = {
          subjects: {
            connect: subjectIds.map(id => ({id}))
          },
          ...teacherInfo,
        }
    } else {
      requestData = {
        ...teacherInfo,
      }
    }

    return await this.teacher.create({
      data: requestData,
    });
  }

  async update(id, data) {
    return await this.teacher.update({
      where: {
        id,
      },
      data,
    });
  }

  async find(id) {
    return await this.teacher.findUnique({
      where: {
        id: id,
      },
    });
  }

  async delete(id) {
    return await this.teacher.delete({
      where: {
        id: id,
      },
    });
  }

  async get() {
    return await this.teacher.findMany({
      include: {
        subjects: true,
      },
    });
  }
}
