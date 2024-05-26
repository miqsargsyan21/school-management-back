import yup from "yup";

const teacherSchema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
});

export default teacherSchema;
