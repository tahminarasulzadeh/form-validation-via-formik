import styled from "styled-components";
import { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
// import { msgAction } from "../redux/actions/msgAction";
import { getMessage } from "../redux/reducers/msgSlice";

const FormSchema = Yup.object({
  message: Yup.string()
    .min(4, "Too Short")
    .max(300, "Too Long")
    .required("Required"),
});

const TextArea = styled.textarea`
  border: 1px solid #fff;
  width: 350px;
  height: 150px;
`;

const Button = styled.button`
  color: #fff;
  margin: auto;
  width: 150px;
  height: 50px;
  border: 1px solid #fff;
  border-radius: 10px;
  background-color: #242424;
`;

const ErrorField = styled.span`
  color: red;
`;
const Form = () => {
  const msg = useSelector((state) => state.msg); // ?
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      message: "",
    },
    onSubmit: (values) => {
      const requestData = { message: values.message };
      fetch("http://localhost:3000/messages/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      })
        .then((res) => res.json())
        .then((result) => dispatch(getMessage(result.message)))
        .catch((error) => console.error(error));
      values.message = "";
    },
    validationSchema: FormSchema,
  });

  useEffect(() => {
    fetch("http://localhost:3000/messages/")
      .then((res) => res.json())
      .then((result) => dispatch(getMessage(result.message)))
      .catch(error => console.error(error.message))
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <p>{msg}</p>
      <TextArea
        name="message"
        value={formik.values.message}
        onBlur={formik.handleBlur}
        placeholder="message..."
        {...formik.getFieldProps("message")}
      />
      <ErrorField>
        {formik.touched.message && formik.errors.message
          ? formik.errors.message
          : ""}
      </ErrorField>
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default Form;
