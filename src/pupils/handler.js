import PupilService from "./service.js";

export default class PupilHandler {
  constructor() {
    this.service = new PupilService();
  }

  async create(data) {}

  async update(id, data) {}

  async find(id) {}

  async delete(id) {}

  async get() {}
}
