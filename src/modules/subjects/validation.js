import yup from "yup";

const subjectSchema = yup.object().shape({
  title: yup
    .string()
    .required("Title is required")
    .max(255, "Title must be at most 255 characters long"),
});

export default subjectSchema;
