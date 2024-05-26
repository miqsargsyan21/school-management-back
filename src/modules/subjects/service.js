import PrismaSingleton from "../../../prisma/client.js";

export default class SubjectService {
  constructor() {
    this.subject = PrismaSingleton.subject;
  }

  async create(data) {
    return await this.subject.create({
      data,
    });
  }

  async update(id, data) {
    return await this.subject.update({
      where: {
        id,
      },
      data,
    });
  }

  async find(id) {
    return await this.subject.findUnique({
      where: {
        id: id,
      },
    });
  }

  async delete(id) {
    return await this.subject.delete({
      where: {
        id: id,
      },
    });
  }

  async get() {
    return await this.subject.findMany();
  }
}
