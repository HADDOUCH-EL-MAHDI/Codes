import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Checkbox from "@mui/material/Checkbox";
import {
  FormGroup,
  FormControl,
  TextField,
  FormControlLabel,
} from "@mui/material";
import { useState } from "react";
import { FormLabel } from "@mui/material";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { purple } from "@mui/material/colors";
//Patient
import { useNavigate } from "react-router-dom";

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
  textAlign: "start",
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

function AntiFamiliaux() {
  const navigate = useNavigate(); // Déclarer le hook useNavigate ici

  const handleReset = () => {
    // Reset the form values to their initial state
    resetForm();
  };

  return (
    <Formik
      initialValues={{
        TaillePere: "",
        ageDePubertPere: "",
        TailleMere: "",
        ageDePubertMere: "",
        TailleCible: "",
        TailleFreres: "",
        PathologieFamiliale: "",
        diarrhee: false,
        vomissements: false,
        distensionAbominale: false,
        cephalees: false,
        troublesVisuels: false,
        vomissementsHTIC: false,
        constipation: false,
        rectorragies: false,
        douleurAbdominale: false,
        paleur: false,
        asthenie: false,
        anorexie: false,
        boulimie: false,
        syndromePolyuroPolydipsique: false,
        AutresFamiliaux: "",
        submit: null,
      }}
      validationSchema={Yup.object().shape({
        TaillePere: Yup.number().required("Taille père et requis"),
        ageDePubertPere: Yup.number().required("âge de la puberté est requise"),
        TailleMere: Yup.number().required("Taille mère est requise"),
        ageDePubertMere: Yup.number().required("âge de la puberté est requise"),
        TailleCible: Yup.number().required("Taille cible est requise"),
        TailleFreres: Yup.number().required("Taille Freres est requise"),
        PathologieFamiliale: Yup.string().required(
          "Pathologie familiale est requise"
        ),
        diarrhee: Yup.string().required("La diarrhee est requise"),
        vomissements: Yup.string().required("Signes digestifs est requise"),
        distensionAbominale: Yup.string().required(
          "Signes digestifs est requise"
        ),
        cephalees: Yup.string().required("Syndrome d’HTIC est requise"),
        troublesVisuels: Yup.string().required("Syndrome d’HTIC est requise"),
        vomissementsHTIC: Yup.string().required("Syndrome d’HTIC est requise"),
        constipation: Yup.string().required("Signes digestifs est requise"),
        rectorragies: Yup.string().required("Signes digestifs est requise"),
        douleurAbdominale: Yup.string().required("Signes digestifs est requis"),
        paleur: Yup.string().required("Pâleur est requis"),
        asthenie: Yup.string().required("Asthénie est requise"),
        anorexie: Yup.string().required("Anorexie est requis"),
        boulimie: Yup.string().required("Boulimie est requis"),
        syndromePolyuroPolydipsique: Yup.string().required(
          "Syndrome polyuro- polydipsique est requis"
        ),
        AutresFamiliaux: Yup.string().required("Autres  est requis"),
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
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      bgcolor: "primary.main",
                      color: "primary.contrastText",
                      p: 2,
                      m: -1,
                    }}
                  >
                    II- ANTECEDENTS-Familiaux
                  </Box>
                  <br></br>
                  <br></br>
                  <FormGroup sx={{ mt: 2 }}>
                    <FormControl>
                      <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                          <Grid item xs={12} md={1}>
                            <FormLabel>Père :</FormLabel>
                          </Grid>
                          <Grid item xs={12} md={2}>
                            <TextField
                              id="TaillePere"
                              type="number"
                              label="Taille"
                              variant="outlined"
                              size="small"
                              fullWidth
                              name="TaillePere"
                              value={values.TaillePere}
                              onChange={handleChange}
                            />
                          </Grid>
                          <Grid item xs={12} md={3}>
                            <TextField
                              id="ageDePubertPere"
                              type="number"
                              label="âge de la puberté"
                              variant="outlined"
                              size="small"
                              fullWidth
                              name="ageDePubertPere"
                              value={values.ageDePubertPere}
                              onChange={handleChange}
                            />
                          </Grid>
                          <Grid item xs={12} md={1}>
                            <FormLabel>Mère :</FormLabel>
                          </Grid>
                          <Grid item xs={12} md={2}>
                            <TextField
                              id="TailleMere"
                              type="number"
                              label="Taille"
                              variant="outlined"
                              size="small"
                              fullWidth
                              name="TailleMere"
                              value={values.TailleMere}
                              onChange={handleChange}
                            />
                          </Grid>
                          <Grid item xs={12} md={3}>
                            <TextField
                              id="ageDePubertMere"
                              type="number"
                              label="âge de la puberté"
                              variant="outlined"
                              size="small"
                              fullWidth
                              name="ageDePubertMere"
                              value={values.ageDePubertMere}
                              onChange={handleChange}
                            />
                          </Grid>
                        </Grid>
                      </Box>
                      <br></br>

                      <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                          <Grid item xs={12} md={3}>
                            <TextField
                              id="TailleCible"
                              type="number"
                              label="Taille cible"
                              variant="outlined"
                              size="small"
                              fullWidth
                              name="TailleCible"
                              value={values.TailleCible}
                              onChange={handleChange}
                            />
                          </Grid>
                          <Grid item xs={12} md={4}>
                            <TextField
                              id="TailleFreres"
                              type="number"
                              label="Taille des frères"
                              variant="outlined"
                              size="small"
                              fullWidth
                              name="TailleFreres"
                              value={values.TailleFreres}
                              onChange={handleChange}
                            />
                          </Grid>
                          <Grid item xs={12} md={5}>
                            <TextField
                              id="PathologieFamiliale"
                              type="text"
                              label="Pathologie familiale connue ayant un impact sur la croissance"
                              variant="outlined"
                              size="small"
                              fullWidth
                              name="PathologieFamiliale"
                              value={values.PathologieFamiliale}
                              onChange={handleChange}
                            />
                          </Grid>
                        </Grid>
                      </Box>
                      <br></br>
                      <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={1}>
                          <Grid sx={{ md: 1 }} item xs={12} md={3}>
                            <FormLabel>Signes digestifs : </FormLabel>
                          </Grid>
                          <Grid sx={{ md: 1 }} item xs={12} md={3}>
                            <FormControlLabel
                              control={
                                <Checkbox
                                  name="diarrhee"
                                  checked={values.diarrhee}
                                  onChange={(e) =>
                                    handleCheckboxChange(
                                      "diarrhee",
                                      e.target.checked
                                    )
                                  }
                                  value="diarrhee"
                                />
                              }
                              label="Diarrhée"
                            />
                          </Grid>
                          <Grid item xs={12} md={3}>
                            <FormControlLabel
                              control={
                                <Checkbox
                                  name="vomissements"
                                  checked={values.vomissements}
                                  onChange={(e) =>
                                    handleCheckboxChange(
                                      "vomissements",
                                      e.target.checked
                                    )
                                  }
                                  value="Vomissements"
                                  color="secondary"
                                />
                              }
                              label="Vomissements"
                            />
                          </Grid>
                          <Grid item xs={12} md={3}>
                            <FormControlLabel
                              control={
                                <Checkbox
                                  name="distensionAbominale"
                                  checked={values.distensionAbominale}
                                  onChange={(e) =>
                                    handleCheckboxChange(
                                      "distensionAbominale",
                                      e.target.checked
                                    )
                                  }
                                  value="Distension abominale"
                                  color="success"
                                />
                              }
                              label="Distension abominale"
                            />
                          </Grid>
                        </Grid>
                      </Box>
                      <br></br>
                      <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={1}>
                          <Grid sx={{ md: 1 }} item xs={12} md={3}>
                            <FormLabel></FormLabel>
                          </Grid>
                          <Grid sx={{ md: 1 }} item xs={12} md={3}>
                            <FormControlLabel
                              control={
                                <Checkbox
                                  name="constipation"
                                  checked={values.constipation}
                                  onChange={(e) =>
                                    handleCheckboxChange(
                                      "constipation",
                                      e.target.checked
                                    )
                                  }
                                  value="Constipation"
                                />
                              }
                              label="Constipation"
                            />
                          </Grid>
                          <Grid item xs={12} md={3}>
                            <FormControlLabel
                              control={
                                <Checkbox
                                  name="rectorragies"
                                  checked={values.rectorragies}
                                  onChange={(e) =>
                                    handleCheckboxChange(
                                      "rectorragies",
                                      e.target.checked
                                    )
                                  }
                                  value="Rectorragies"
                                  color="secondary"
                                />
                              }
                              label="Rectorragies"
                            />
                          </Grid>
                          <Grid item xs={12} md={3}>
                            <FormControlLabel
                              control={
                                <Checkbox
                                  name="douleurAbdominale"
                                  checked={values.douleurAbdominale}
                                  onChange={(e) =>
                                    handleCheckboxChange(
                                      "douleurAbdominale",
                                      e.target.checked
                                    )
                                  }
                                  value="Douleur abdominale"
                                  color="success"
                                />
                              }
                              label="Douleur abdominale"
                            />
                          </Grid>
                        </Grid>
                      </Box>
                      <br></br>

                      <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={1}>
                          <Grid sx={{ md: 1 }} item xs={12} md={3}>
                            <FormLabel>Syndrome d’HTIC : </FormLabel>
                          </Grid>
                          <Grid sx={{ md: 1 }} item xs={12} md={3}>
                            <FormControlLabel
                              control={
                                <Checkbox
                                  name="cephalees"
                                  checked={values.cephalees}
                                  onChange={(e) =>
                                    handleCheckboxChange(
                                      "cephalees",
                                      e.target.checked
                                    )
                                  }
                                  value="Céphalées"
                                />
                              }
                              label="Céphalées"
                            />
                          </Grid>
                          <Grid item xs={12} md={3}>
                            <FormControlLabel
                              control={
                                <Checkbox
                                  name="troublesVisuels"
                                  checked={values.troublesVisuels}
                                  onChange={(e) =>
                                    handleCheckboxChange(
                                      "troublesVisuels",
                                      e.target.checked
                                    )
                                  }
                                  value="troubles visuels"
                                  color="secondary"
                                />
                              }
                              label="troubles visuels"
                            />
                          </Grid>
                          <Grid item xs={12} md={3}>
                            <FormControlLabel
                              control={
                                <Checkbox
                                  name="vomissements"
                                  checked={values.vomissementsHTIC}
                                  onChange={(e) =>
                                    handleCheckboxChange(
                                      "vomissements",
                                      e.target.checked
                                    )
                                  }
                                  value="Vomissements"
                                  color="success"
                                />
                              }
                              label="Vomissements"
                            />
                          </Grid>
                        </Grid>
                      </Box>
                      <br></br>

                      <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={1}>
                          <Grid sx={{ md: 1 }} item xs={12} md={2}>
                            <FormControlLabel
                              control={
                                <Checkbox
                                  name="paleur"
                                  checked={values.paleur}
                                  onChange={(e) =>
                                    handleCheckboxChange(
                                      "paleur",
                                      e.target.checked
                                    )
                                  }
                                  value="Pâleur"
                                  color="success"
                                />
                              }
                              label="Pâleur"
                            />
                          </Grid>
                          <Grid sx={{ md: 1 }} item xs={12} md={2}>
                            <FormControlLabel
                              control={
                                <Checkbox
                                  name="asthenie"
                                  checked={values.asthenie}
                                  onChange={(e) =>
                                    handleCheckboxChange(
                                      "asthenie",
                                      e.target.checked
                                    )
                                  }
                                  value="Asthénie"
                                />
                              }
                              label="Asthénie"
                            />
                          </Grid>
                          <Grid item xs={12} md={2}>
                            <FormControlLabel
                              control={
                                <Checkbox
                                  name="anorexie"
                                  checked={values.anorexie}
                                  onChange={(e) =>
                                    handleCheckboxChange(
                                      "anorexie",
                                      e.target.checked
                                    )
                                  }
                                  value="Anorexie"
                                  color="secondary"
                                />
                              }
                              label="Anorexie"
                            />
                          </Grid>
                          <Grid item xs={12} md={2}>
                            <FormControlLabel
                              control={
                                <Checkbox
                                  name="boulimie"
                                  checked={values.boulimie}
                                  onChange={(e) =>
                                    handleCheckboxChange(
                                      "boulimie",
                                      e.target.checked
                                    )
                                  }
                                  value="Boulimie"
                                  color="default"
                                />
                              }
                              label="Boulimie"
                            />
                          </Grid>
                          <Grid item xs={12} md={4}>
                            <FormControlLabel
                              control={
                                <Checkbox
                                  name="syndromePolyuroPolydipsique"
                                  checked={values.syndromePolyuroPolydipsique}
                                  onChange={(e) =>
                                    handleCheckboxChange(
                                      "syndromePolyuroPolydipsique",
                                      e.target.checked
                                    )
                                  }
                                  value="Syndrome polyuro-polydipsique"
                                  color="default"
                                />
                              }
                              label="Syndrome polyuro-polydipsique"
                            />
                          </Grid>
                        </Grid>
                      </Box>
                      <br></br>
                      <br></br>

                      <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={1}>
                          <Grid sx={{ md: 1 }} item xs={12} md={12}>
                            <label htmlFor="AutresFamiliaux">Autres :</label>
                            <TextField
                              className="form-control"
                              name="AutresFamiliaux"
                              id="AutresFamiliaux"
                              onChange={handleChange}
                              value={values.AutresFamiliaux}
                              sx={{ width: "100%" }}
                              size="small"
                              type="text"
                              variant="outlined"
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
                                type="reset"
                                variant="contained"
                                sx={{ width: "100%" }}
                              >
                                <label className="bouton">Effacer</label>
                              </ColorButton>
                              <BootstrapButton
                                type="submet"
                                onClick={handleSubmitAntiFamiliaux}
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
export default AntiFamiliaux;
