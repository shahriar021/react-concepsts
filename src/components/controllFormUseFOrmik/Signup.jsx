import React from "react";
import * as yup from "yup";
import { useFormik } from "formik";

export default function Signup() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },

    validationSchema: yup.object({
      name: yup.string().required(),
      email: yup.email().required(),
      password: yup.required(),
    }),

    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm({
        values: "",
      });
    },
  });

  console.error(formik.errors);

  return (
    <div>
      <h1>Signup</h1>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <input
            name="name"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
        </div>
        <div>
          <input
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
        </div>
        <button type="submit">submit</button>
      </form>
    </div>
  );
}
