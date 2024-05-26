import PrismaSingleton from "../../../prisma/client.js";

export default class TeacherService {
  constructor() {
    this.teacher = PrismaSingleton.teacher;
  }

  async create(data) {
    return await this.teacher.create({
      data,
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
    return await this.teacher.findMany();
  }
}
