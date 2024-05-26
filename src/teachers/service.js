import PrismaSingleton from "../../prisma/client.js";

export default class TeacherService {
  constructor() {
    this.teacher = PrismaSingleton.teacher;
  }

  async create(data) {
    try {
      await this.teacher.create({
        data,
      });

      return {
        success: true,
        response: "Teacher data added successfully.",
      };
    } catch (e) {
      return {
        success: false,
        message: e.message,
      };
    }
  }

  async update(id, data) {
    try {
      await this.teacher.update({
        where: {
          id: id,
        },
        data: data,
      });

      return {
        success: true,
        response: "Teacher data updated successfully.",
      };
    } catch (e) {
      return {
        success: false,
        message: e.message,
      };
    }
  }

  async find(id) {
    try {
      const teacher = await this.teacher.findUnique({
        where: {
          id: id,
        },
      });

      return {
        success: true,
        teacher,
      };
    } catch (e) {
      return {
        success: false,
        message: e.message,
      };
    }
  }

  async delete(id) {
    try {
      await this.teacher.delete({
        where: {
          id: id,
        },
      });

      return {
        success: true,
        response: "Teacher data deleted successfully.",
      };
    } catch (e) {
      return {
        success: false,
        message: e.message,
      };
    }
  }

  async get() {
    try {
      const teachers = await this.teacher.findMany();

      return {
        success: true,
        teachers,
      };
    } catch (e) {
      return {
        success: false,
        message: e.message,
      };
    }
  }
}
