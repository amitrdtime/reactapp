import React from "react";
import { Formik, Form, Field } from "formik";
import {
  TextField,
  Button,
  Box,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Typography,
} from "@mui/material";
import * as Yup from "yup";

const validationSchema = Yup.object({
  fname: Yup.string().required("First name is required"),
  lname: Yup.string().required("Last name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  phone: Yup.string()
    .matches(/^\d{10}$/, "Phone must be 10 digits")
    .required("Phone is required"),
  address: Yup.string().required("Address is required"),
  status: Yup.string().required("Status is required"),
});

const Reg = () => {
  const initialValues = {
    fname: "",
    lname: "",
    email: "",
    phone: "",
    address: "",
    status: "",
  };

  const handleSubmit = (values, { resetForm }) => {
    console.log("Form Submitted", values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched, handleChange, values }) => (
        <Form>
          <Box
            sx={{
              maxWidth: "500px",
              margin: "auto",
              display: "flex",
              flexDirection: "column",
              gap: 2,
              padding: 2,
              boxShadow: 2,
              borderRadius: 2,
            }}
          >
            <Typography variant="h5" textAlign="center">
              User Form
            </Typography>

            {/* First Name */}
            <TextField
              label="First Name"
              name="fname"
              value={values.fname}
              onChange={handleChange}
              error={touched.fname && !!errors.fname}
              helperText={touched.fname && errors.fname}
              fullWidth
            />

            {/* Last Name */}
            <TextField
              label="Last Name"
              name="lname"
              value={values.lname}
              onChange={handleChange}
              error={touched.lname && !!errors.lname}
              helperText={touched.lname && errors.lname}
              fullWidth
            />

            {/* Email */}
            <TextField
              label="Email"
              name="email"
              type="email"
              value={values.email}
              onChange={handleChange}
              error={touched.email && !!errors.email}
              helperText={touched.email && errors.email}
              fullWidth
            />

            {/* Phone */}
            <TextField
              label="Phone"
              name="phone"
              value={values.phone}
              onChange={handleChange}
              error={touched.phone && !!errors.phone}
              helperText={touched.phone && errors.phone}
              fullWidth
            />

            {/* Address */}
            <TextField
              label="Address"
              name="address"
              value={values.address}
              onChange={handleChange}
              error={touched.address && !!errors.address}
              helperText={touched.address && errors.address}
              fullWidth
              multiline
              rows={3}
            />

            {/* Status */}
            <FormControl fullWidth error={touched.status && !!errors.status}>
              <InputLabel>Status</InputLabel>
              <Select
                name="status"
                value={values.status}
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>Select Status</em>
                </MenuItem>
                <MenuItem value="Active">Active</MenuItem>
                <MenuItem value="Inactive">Inactive</MenuItem>
              </Select>
              {touched.status && errors.status && (
                <Typography variant="caption" color="error">
                  {errors.status}
                </Typography>
              )}
            </FormControl>

            {/* Submit Button */}
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Submit
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default Reg;
