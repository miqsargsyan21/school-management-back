import yup from "yup";

const teacherSchema = yup.object().shape({
  id: yup
    .number()
    .integer()
    .positive()
    .default(() => undefined),
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  createdAt: yup.date().default(() => new Date()),
  updatedAt: yup.date().default(() => new Date()),
});

export default teacherSchema;
