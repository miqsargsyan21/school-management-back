import PrismaSingleton from "../../../prisma/client.js";
import { configDotenv } from "dotenv";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const { JWT_SECRET_KEY: jwtSecretKey } = configDotenv().parsed;

export default class UserService {
  constructor() {
    this.user = PrismaSingleton.user;
  }

  async createUser(data) {
    const { email, password, ...restData } = data;

    const foundUser = await this.user.findUnique({
      where: {
        email,
      },
    });

    if (foundUser) {
      throw new Error("Email is already used.");
    }

    await this.user.create({
      data: { email, password: await bcrypt.hash(password, 7), ...restData },
    });

    return {
      email,
      ...restData,
    };
  }

  async find(token) {
    const decoded = jwt.verify(token, jwtSecretKey);
    const { email, password } = decoded;

    const foundUser = await this.user.findUnique({
      where: { email, password },
    });

    if (!foundUser) {
      throw new Error("User not found");
    }

    return {
      firstName: foundUser.firstName,
      lastName: foundUser.lastName,
      email: foundUser.email,
    };
  }
}
