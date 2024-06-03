import PrismaSingleton from "../../../prisma/client.js";
import { configDotenv } from "dotenv";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const { JWT_SECRET_KEY: jwtSecretKey } = configDotenv().parsed;

export default class AuthService {
  constructor() {
    this.user = PrismaSingleton.user;
  }

  async signIn(data) {
    const { email, password } = data;
    const foundUser = await this.user.findUnique({
      where: {
        email,
      },
    });

    if (!foundUser) {
      throw new Error("Incorrect email.");
    }

    if (bcrypt.compareSync(password, foundUser.password)) {
      const accessToken = jwt.sign(
        {
          email: foundUser.email,
          password: foundUser.password,
        },
        jwtSecretKey,
        { expiresIn: "24h" },
      );

      return {
        token: accessToken,
      };
    } else {
      throw new Error("Incorrect password.");
    }
  }

  async authorize() {}
}
