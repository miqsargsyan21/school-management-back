import { userSchema } from "./validation.js";
import AuthService from "./service.js";

export default class UserHandler {
  constructor() {
    this.service = new AuthService();
  }

  async createUser(data) {
    await userSchema.validate(data, { abortEarly: false });
    const response = await this.service.createUser(data);

    return response;
  }

  async find(token) {
    const response = await this.service.find(token);

    return response;
  }
}
