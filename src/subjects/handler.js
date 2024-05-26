import SubjectService from "./service.js";

export default class SubjectHandler {
  constructor() {
    this.service = new SubjectService();
  }

  async create(data) {
    try {
      const response = await this.service.create(data);

      return response;
    } catch (e) {
      return { message: e.message };
    }
  }

  async update(id, data) {
    try {
      const response = await this.service.update(id, data);

      return response;
    } catch (e) {
      return { message: e.message };
    }
  }

  async find(id) {
    try {
      const response = await this.service.find(id);

      return response;
    } catch (e) {
      return { message: e.message };
    }
  }

  async delete(id) {
    try {
      const response = await this.service.delete(id);

      return response;
    } catch (e) {
      return { message: e.message };
    }
  }

  async get() {
    try {
      const response = await this.service.get();

      return response;
    } catch (e) {
      return { message: e.message };
    }
  }
}
