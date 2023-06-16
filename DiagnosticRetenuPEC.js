import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormGroup, FormControl } from "@mui/material";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { purple } from "@mui/material/colors";
// import axios from "axios";
import TextareaAutosize from "@mui/base/TextareaAutosize";

import * as Yup from "yup";
import { Formik } from "formik";
import { selectUserAndToken } from "../../store/slices/authSlice"; // Importez le sélecteur pour obtenir le token d'authentification
import { useDispatch, useSelector } from "react-redux";

// project import
import AnimateButton from "components/@extended/AnimateButton";
import { strengthColor, strengthIndicator } from "utils/password-strength";
import { useNavigate } from "react-router";
import { addPatientSuccess } from "store/slices/addPatientSlice";
import { useAddPatientMutation } from "services/addPatientApi";

// assets
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";
import { dispatch } from "../../store";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  "&:hover": {
    backgroundColor: purple[700],
  },
}));

const BootstrapButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 16,
  padding: "6px 12px",
  border: "1px solid",
  lineHeight: 1.5,
  backgroundColor: "#0063cc",
  borderColor: "#0063cc",
  fontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
  "&:hover": {
    backgroundColor: "#0069d9",
    borderColor: "#0062cc",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#0062cc",
    borderColor: "#005cbf",
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
  },
});

function DiagnosticRetenuPEC() {
  const blue = {
    100: "#DAECFF",
    200: "#b6daff",
    400: "#3399FF",
    500: "#007FFF",
    600: "#0072E5",
    900: "#003A75",
  };

  const grey = {
    50: "#f6f8fa",
    100: "#eaeef2",
    200: "#d0d7de",
    300: "#afb8c1",
    400: "#8c959f",
    500: "#6e7781",
    600: "#57606a",
    700: "#424a53",
    800: "#32383f",
    900: "#24292f",
  };

  const Root = styled("div")(
    ({ theme }) => `
    table {
      font-family: IBM Plex Sans, sans-serif;
      font-size: 0.875rem;
      border-collapse: collapse;
      width: 100%;
    }
  
    td,
    th {
      border: 1px solid ${
        theme.palette.mode === "dark" ? grey[800] : grey[200]
      };
      text-align: left;
      padding: 6px;
    }
  
    th {
      background-color: ${
        theme.palette.mode === "dark" ? grey[900] : grey[100]
      };
    }
    `
  );

  const navigate = useNavigate(); // Déclarer le hook useNavigate ici

  const handleReset = () => {
    // Reset the form values to their initial state
    resetForm();
  };

  return (
    <Formik
      initialValues={{
        diagnosticRetenu: "Diagnostic retenu :",
        PECTerapeutique: "PEC thérapeutique :",
        submit: null
      }}
      validationSchema={Yup.object().shape({
        diagnosticRetenu: Yup.string().required("Diagnostic retenu est requis"),
        PECTerapeutique: Yup.string().required("PEC thérapeutique est requise"),
      })}
      onSubmit={async () => {}}
    >
      {({
        errors,
        handleBlur,
        handleChange,
        handleSubmit,
        isSubmitting,
        touched,
        values,
      }) => (
        <form noValidate onSubmit={handleSubmit}>
          <Box sx={{ flexGrow: 1, mt: 2 }}>
            <Grid container spacing={2} justifyContent="center">
              <Grid item xs={12} md={11}>
                <Item>
                  <Box
                    sx={{
                      display: "black",
                      justifyContent: "center",
                      alignItems: "center",
                      bgcolor: "primary.main",
                      color: "primary.contrastText",
                      p: 2,
                      m: -1,
                    }}
                  >
                    <label>V- Diagnostic retenu et PEC thérapeutique</label>
                  </Box>
                  <br></br>
                  <br></br>
                  <FormGroup sx={{ mt: 2 }}>
                    <FormControl>
                      <Box sx={{ flexGrow: 1 }}>
                        <Grid container>
                          <Grid item xs={11} md={11}>
                            <TextareaAutosize
                              aria-label="diagnosticRetenu"
                              placeholder="Diagnostic retenu"
                              className="form-control"
                              sx={{ width: "100%" }}
                              onChange={handleChange}
                              name="diagnosticRetenu"
                              id="diagnosticRetenu"
                              rows="3"
                              value={values.diagnosticRetenu}
                            />
                          </Grid>
                        </Grid>
                      </Box>
                      <br></br>
                      <Box sx={{ flexGrow: 1 }}>
                        <Grid container>
                          <Grid item xs={11} md={11}>
                            <TextareaAutosize
                              onChange={handleChange}
                              className="form-control"
                              name="PECTerapeutique"
                              id="PECTerapeutique"
                              rows="3"
                              value={values.PECTerapeutique}
                              aria-label="PECTerapeutique"
                              placeholder=" PEC thérapeutique"
                              sx={{ width: "100%" }}
                            />
                          </Grid>
                        </Grid>
                      </Box>
                      <br></br>

                      <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2} justifyContent="end">
                          <Grid item xs={12} md={2}>
                            <Stack spacing={2} direction="row">
                              <ColorButton
                                onClick={handleReset}
                                type="reset"
                                variant="contained"
                                sx={{ width: "100%" }}
                              >
                                <label className="bouton">Effacer</label>
                              </ColorButton>
                              <BootstrapButton
                                type="submet"
                                onClick={handleSubmit}
                                variant="contained"
                                disableRipple
                                sx={{ width: "100%" }}
                              >
                                <label className="bouton">Valider</label>
                              </BootstrapButton>
                            </Stack>
                          </Grid>
                        </Grid>
                      </Box>
                      <br></br>
                    </FormControl>
                  </FormGroup>
                </Item>
              </Grid>
            </Grid>
          </Box>
        </form>
      )}
    </Formik>
  );
}
export default DiagnosticRetenuPEC;
