import { PrismaClient } from "@prisma/client";

class PrismaSingleton {
  static instance;

  static getInstance() {
    if (!PrismaSingleton.instance) {
      PrismaSingleton.instance = new PrismaClient({
        log: ["query", "info", "warn", "error"],
      });
    }

    return PrismaSingleton.instance;
  }
}

export default PrismaSingleton.getInstance();
