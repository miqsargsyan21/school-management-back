import { authSchema } from "./validation.js";
import AuthService from "./service.js";

export default class AuthHandler {
  constructor() {
    this.service = new AuthService();
  }

  async signIn(data) {
    await authSchema.validate(data, { abortEarly: false });
    const response = await this.service.signIn(data);

    return response;
  }

  async authorize() {}
}
