import React, { useState } from "react";
import styles from "./styles.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

const RegisterPage = () => {
  const [requestResponse, setRequestResponse] = useState({
    message: "",
    alertClassName: ""
  });

  const initialValues = {
    firstName: "",
    email: "",
    mobile: "",
    password: "",
  };

  const onSubmit = (values) => {
    values = {
      ...values,
      username: values.email,
      name: values.firstName,
      role: "USER",
    };
    axios.post("http://localhost:8080/api/auth/register", values)
      .then(response => {
        setRequestResponse({
          message: 'User registered successfully!',
          alertClassName: "alert alert-success"
        });
      })
      .catch(error => {
        setRequestResponse({
          message: error.response?.data?.message || "Registration failed",
          alertClassName: "alert alert-danger"
        });
      });
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required("First name is required"),
    email: Yup.string().email("Invalid email format").required("Email is required"),
    mobile: Yup.string().required("Mobile number is required"),
    password: Yup.string().required("Password is required").min(6, "Password must be at least 6 characters"),
  });

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });

  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        {requestResponse.message && (
          <div className={requestResponse.alertClassName} role="alert">
            {requestResponse.message}
          </div>
        )}
        <h2 className={styles.title}>Register</h2>
        <hr />
        <form onSubmit={formik.handleSubmit}>
          <div className={styles.formGroup}>
            <label>First Name</label>
            <input
              type="text"
              className={formik.errors.firstName && formik.touched.firstName ? styles.errorInput : styles.input}
              name="firstName"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.firstName && formik.touched.firstName && (
              <small className={styles.errorText}>{formik.errors.firstName}</small>
            )}
          </div>

          <div className={styles.formGroup}>
            <label>Email</label>
            <input
              type="email"
              className={formik.errors.email && formik.touched.email ? styles.errorInput : styles.input}
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.email && formik.touched.email && (
              <small className={styles.errorText}>{formik.errors.email}</small>
            )}
          </div>

          <div className={styles.formGroup}>
            <label>Mobile</label>
            <input
              type="text"
              className={formik.errors.mobile && formik.touched.mobile ? styles.errorInput : styles.input}
              name="mobile"
              value={formik.values.mobile}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.mobile && formik.touched.mobile && (
              <small className={styles.errorText}>{formik.errors.mobile}</small>
            )}
          </div>

          <div className={styles.formGroup}>
            <label>Password</label>
            <input
              type="password"
              className={formik.errors.password && formik.touched.password ? styles.errorInput : styles.input}
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.password && formik.touched.password && (
              <small className={styles.errorText}>{formik.errors.password}</small>
            )}
          </div>

          <button type="submit" className={styles.submitButton} disabled={!formik.isValid}>Register</button>
        </form>
        <p className={styles.loginText}>Already Registered? <a href="/">Click Here</a></p>
      </div>
    </div>
  );
};
export default RegisterPage;