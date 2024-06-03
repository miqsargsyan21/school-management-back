import { userSchema } from "./validation.js";
import UserService from "./service.js";

export default class UserHandler {
  constructor() {
    this.service = new UserService();
  }

  async createUser(data) {
    await userSchema.validate(data, { abortEarly: false });
    const response = await this.service.createUser(data);

    return response;
  }

  async find(token) {
    console.log('xlo')
    const response = await this.service.find(token);

    return response;
  }
}
