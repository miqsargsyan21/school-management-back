import PrismaSingleton from "../../../prisma/client.js";

export default class PupilService {
  constructor() {
    this.pupil = PrismaSingleton.pupil;
  }

  async create(data) {
    return await this.pupil.create({
      data,
    });
  }

  async update(id, data) {
    return await this.pupil.update({
      where: {
        id,
      },
      data,
    });
  }

  async find(id) {
    return await this.pupil.findUnique({
      where: {
        id: id,
      },
    });
  }

  async delete(id) {
    return await this.pupil.delete({
      where: {
        id: id,
      },
    });
  }

  async get() {
    return await this.pupil.findMany();
  }
}
