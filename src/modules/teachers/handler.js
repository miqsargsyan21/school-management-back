import teacherSchema from "./validation.js";
import TeacherService from "./service.js";

export default class TeacherHandler {
  constructor() {
    this.service = new TeacherService();
  }

  async create(data) {
    try {
      await teacherSchema.validate(data, { abortEarly: false });
      return await this.service.create(data);
    } catch (e) {
      return { message: e.message };
    }
  }

  async update(id, data) {
    try {
      await teacherSchema.validate(data, { abortEarly: false });
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
