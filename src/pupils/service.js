import PrismaSingleton from "../../prisma/client.js";

export default class PupilService {
  constructor() {
    this.pupil = PrismaSingleton.pupil;
  }

  async create(data) {}

  async update(id, data) {}

  async find(id) {}

  async delete(id) {}

  async get() {}
}
