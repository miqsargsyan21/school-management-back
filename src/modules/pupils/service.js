import PrismaSingleton from "../../../prisma/client.js";

export default class PupilService {
  constructor() {
    this.subjectsOnPupils = PrismaSingleton.subjectsOnPupils;
    this.pupil = PrismaSingleton.pupil;
  }

  async create(data) {
    const { subjectIds, ...pupilInfo } = data;
    let requestData;

    if (subjectIds) {
      requestData = {
        subjects: {
          create: subjectIds.map((id) => ({
            subject: {
              connect: {id: Number(id)}
            }
          }))
        },
        ...pupilInfo,
      }
    } else {
      requestData = {
        ...pupilInfo,
      }
    }
    console.log(requestData)

    return await this.pupil.create({
      data: requestData,
    });
  }

  async update(id, data) {
    return await this.pupil.update({
      where: {
        id,
      },
      data,
    });
  }

  async find(id) {
    return await this.pupil.findUnique({
      where: {
        id: id,
      },
    });
  }

  async delete(id) {
    await this.subjectsOnPupils.deleteMany({
      where: {
        pupilId: id
      }
    })

    return await this.pupil.delete({
      where: {
        id: id,
      },
    });
  }

  async get() {
    const response = await this.pupil.findMany({
      include: {
        subjects: {
          include: {
            subject: true,
          },
        },
      },
    })

    console.log(response[0].subjects)

    return await this.pupil.findMany({
      include: {
        subjects: {
          include: {
            subject: true,
          },
        },
      },
    });
  }
}
