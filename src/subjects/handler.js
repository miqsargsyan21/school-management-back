import SubjectService from "./service.js";

export default class SubjectHandler {
  constructor() {
    this.service = new SubjectService();
  }

  async create(data) {}

  async update(id, data) {}

  async find(id) {}

  async delete(id) {}

  async get() {}
}
