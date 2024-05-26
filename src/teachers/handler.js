import teacherSchema from "./validation.js";
import TeacherService from "./service.js";

export default class TeacherHandler {
  constructor() {
    this.service = new TeacherService();
  }

  async create(data) {
    await teacherSchema.validate(data, { abortEarly: false });
    const response = await this.service.create(data);

    return response;
  }

  async update(id, data) {
    await teacherSchema.validate(data, { abortEarly: false });
    const response = await this.service.update(id, data);

    return response;
  }

  async find(id) {
    const response = await this.service.find(id);

    return response;
  }

  async delete(id) {
    const response = await this.service.delete(id);

    return response;
  }

  async get() {
    const response = await this.service.get();

    return response;
  }
}
