import PrismaSingleton from "../../prisma/client.js";

export default class SubjectService {
  constructor() {
    this.subject = PrismaSingleton.subject;
  }

  async create(data) {}

  async update(id, data) {}

  async find(id) {}

  async delete(id) {}

  async get() {}
}
