import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import {
  FormControlLabel,
  Radio,
  RadioGroup,
  FormGroup,
  FormControl,
  TextField,
} from "@mui/material";

import { FormLabel } from "@mui/material";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { purple } from "@mui/material/colors";
// Patient
import * as Yup from "yup";
import { Formik } from "formik";
// Importez le sélecteur pour obtenir le token d'authentification
// assets

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
import { useNavigate } from "react-router-dom";

function AntiPersonnel() {
  const navigate = useNavigate(); // Déclarer le hook useNavigate ici

  const handleReset = () => {
    // Reset the form values to their initial state
    resetForm();
  };

  return (
    <Formik
      initialValues={{
        Consanguinite: "",
        Grossesse: "",
        AccouchementVoie: "",
        Incidents: "",
        Incident: "",
        Terme: "",
        Poids: "",
        Taille: "",
        PC: "",
        Allaitement: "",
        DiversificationAlimentaire: "",
        DeveloppementPsychomoteur: "",
        PathologieNeonatale: "",
        PathologieChronique: "",
        Traitement: "",
        ContextePsychoAffectif: "",
      }}
      validationSchema={Yup.object().shape({
        Consanguinite: Yup.string().required("Consanguinite est requis"),
        Grossesse: Yup.string().required("Grossesse est requise"),
        AccouchementVoie: Yup.string().required("AccouchementVoie est requise"),
        Incidents: Yup.string().required("Incidents est requis"),
        Incident: Yup.string().required("Incident est requis"),
        Terme: Yup.string().required("Terme est requise"),
        Poids: Yup.number().required("Poids est requise"),
        Taille: Yup.number().required("Taille est requise"),
        PC: Yup.number().required("PC est requise"),
        Allaitement: Yup.string().required("Allaitement est requise"),
        DeveloppementPsychomoteur: Yup.string().required(
          "Développement psychomoteur  est requis"
        ),
        PathologieChronique: Yup.string().required(
          "Pathologie chronique est requis"
        ),
        DiversificationAlimentaire: Yup.string().required(
          "Diversification alimentaire est requis"
        ),
        ContextePsychoAffectif: Yup.string().required(
          "Contexte psycho affectif est requis"
        ),
        Traitement: Yup.string().required("Traitement est requis"),
        PathologieNeonatale: Yup.string().required(
          "Pathologie néonatale est requis"
        ),
      })}
      // onSubmit={async ( { }) => {

      // }}
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
        <form noValidate>
          <Box sx={{ flexGrow: 1, mt: 3 }}>
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
                    II- ANTECEDENTS-Personnels
                  </Box>
                  <br></br>
                  <br></br>
                  <FormGroup sx={{ mt: 2 }}>
                    <FormControl>
                      <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                          <Grid item xs={12} md={4}>
                            <FormControl>
                              <FormLabel id="Consanguinite">
                                Consanguinité :{" "}
                              </FormLabel>
                              <RadioGroup
                                row
                                aria-labelledby="Consanguinite"
                                name="Consanguinite"
                                value={values.Consanguinite}
                                onChange={handleChange}
                              >
                                <FormControlLabel
                                  value="Oui"
                                  control={<Radio />}
                                  label="Oui"
                                />
                                <FormControlLabel
                                  value="Non"
                                  control={<Radio />}
                                  label="Non"
                                />
                              </RadioGroup>
                            </FormControl>
                          </Grid>
                          <Grid item xs={12} md={4}>
                            <FormControl>
                              <FormLabel id="Grossesse">Grossesse : </FormLabel>
                              <RadioGroup
                                row
                                aria-labelledby="Grossesse"
                                name="Grossesse"
                                value={values.Grossesse}
                                onChange={handleChange}
                              >
                                <FormControlLabel
                                  value="Suivie"
                                  control={<Radio />}
                                  label="Suivie"
                                />
                                <FormControlLabel
                                  value="Non Suivie"
                                  control={<Radio />}
                                  label="Non Suivie"
                                />
                              </RadioGroup>
                            </FormControl>
                          </Grid>
                          <Grid item xs={12} md={4}>
                            <FormControl>
                              <FormLabel id="AccouchementVoie">
                                Accouchement : Voie :
                              </FormLabel>
                              <RadioGroup
                                row
                                aria-labelledby="AccouchementVoie"
                                name="AccouchementVoie"
                                value={values.AccouchementVoie}
                                onChange={handleChange}
                              >
                                <FormControlLabel
                                  value="Haute"
                                  control={<Radio />}
                                  label="Haute"
                                />
                                <FormControlLabel
                                  value="Basse"
                                  control={<Radio />}
                                  label="Basse"
                                />
                              </RadioGroup>
                            </FormControl>
                          </Grid>
                        </Grid>
                      </Box>
                      <br></br>

                      <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                          <Grid item xs={12} md={4}>
                            <TextField
                              id="Incidents"
                              type="text"
                              label="Incidents (HTA, tabac, infection…)"
                              variant="outlined"
                              size="small"
                              fullWidth
                              name="Incidents"
                              onChange={handleChange}
                              value={values.Incidents}
                            />
                          </Grid>
                          <Grid item xs={12} md={4}>
                            <TextField
                              id="Incident"
                              type="text"
                              label="Incident"
                              variant="outlined"
                              size="small"
                              fullWidth
                              name="Incident"
                              onChange={handleChange}
                              value={values.Incident}
                            />
                          </Grid>
                          <Grid item xs={12} md={4}>
                            <TextField
                              id="Terme"
                              type="text"
                              label="Terme"
                              variant="outlined"
                              size="small"
                              fullWidth
                              name="Terme"
                              onChange={handleChange}
                              value={values.Terme}
                            />
                          </Grid>
                        </Grid>
                      </Box>
                      <br></br>

                      <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                          <Grid item xs={12} md={3}>
                            <FormLabel id="MesurationNaissance">
                              Mesurations à la naissance:
                            </FormLabel>
                          </Grid>
                          <Grid item xs={12} md={3}>
                            <TextField
                              id="Poids"
                              type="number"
                              label="Poids"
                              variant="outlined"
                              size="small"
                              fullWidth
                              name="Poids"
                              onChange={handleChange}
                              value={values.Poids}
                            />
                          </Grid>
                          <Grid item xs={12} md={3}>
                            <TextField
                              id="Taille"
                              type="number"
                              label="Taille"
                              variant="outlined"
                              size="small"
                              fullWidth
                              name="Taille"
                              onChange={handleChange}
                              value={values.Taille}
                            />
                          </Grid>
                          <Grid item xs={12} md={3}>
                            <TextField
                              id="PC"
                              type="number"
                              label="PC"
                              variant="outlined"
                              size="small"
                              fullWidth
                              name="PC"
                              onChange={handleChange}
                              value={values.PC}
                            />
                          </Grid>
                        </Grid>
                      </Box>
                      <br></br>
                      <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                          <Grid item xs={12} md={6}>
                            <TextField
                              id="Allaitement"
                              type="text"
                              label="Allaitement"
                              variant="outlined"
                              size="small"
                              fullWidth
                              name="Allaitement"
                              onChange={handleChange}
                              value={values.Allaitement}
                            />
                          </Grid>
                          <Grid item xs={12} md={6}>
                            <TextField
                              id="DiversificationAlimentaire"
                              type="text"
                              label="Diversification alimentaire"
                              variant="outlined"
                              size="small"
                              fullWidth
                              name="DiversificationAlimentaire"
                              onChange={handleChange}
                              value={values.DiversificationAlimentaire}
                            />
                          </Grid>
                        </Grid>
                      </Box>
                      <br></br>

                      <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                          <Grid item xs={12} md={6}>
                            <TextField
                              id="DeveloppementPsychomoteur"
                              type="text"
                              label="Développement psychomoteur :"
                              variant="outlined"
                              size="small"
                              fullWidth
                              name="DeveloppementPsychomoteur"
                              onChange={handleChange}
                              value={values.DeveloppementPsychomoteur}
                            />
                          </Grid>
                          <Grid item xs={12} md={6}>
                            <TextField
                              id="PathologieNeonatale"
                              type="text"
                              label="Pathologie néonatale (hypoglycémie, ictère prolongé...) :"
                              variant="outlined"
                              size="small"
                              fullWidth
                              name="PathologieNeonatale"
                              onChange={handleChange}
                              value={values.PathologieNeonatale}
                            />
                          </Grid>
                        </Grid>
                      </Box>
                      <br></br>

                      <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                          <Grid item xs={12} md={4}>
                            <TextField
                              id="PathologieChronique"
                              type="text"
                              label="Pathologie chronique :"
                              variant="outlined"
                              size="small"
                              fullWidth
                              name="PathologieChronique"
                              onChange={handleChange}
                              value={values.PathologieChronique}
                            />
                          </Grid>
                          <Grid item xs={12} md={4}>
                            <TextField
                              id="Traitement"
                              type="text"
                              label="Traitement (corticoïdes ; radiothérapie…) :"
                              variant="outlined"
                              size="small"
                              fullWidth
                              name="Traitement"
                              onChange={handleChange}
                              value={values.Traitement}
                            />
                          </Grid>
                          <Grid item xs={12} md={4}>
                            <TextField
                              id="ContextePsychoAffectif"
                              type="text"
                              label="Contexte psycho affectif :"
                              variant="outlined"
                              size="small"
                              fullWidth
                              name="ContextePsychoAffectif"
                              onChange={handleChange}
                              value={values.ContextePsychoAffectif}
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
                                onClick={handleReset}
                                sx={{ width: "100%" }}
                              >
                                <label className="bouton">Effacer</label>
                              </ColorButton>
                              <BootstrapButton
                                type="submet"
                                component={Link}
                                to="/AntiFamiliaux"
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
export default AntiPersonnel;
