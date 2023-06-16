import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import {
  FormGroup,
  FormControl,
  FormControlLabel,
  Checkbox,
  TextField,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useState } from "react";
import { FormLabel } from "@mui/material";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import {purple} from "@mui/material/colors";
import { useNavigate } from "react-router-dom";

import * as Yup from 'yup';
import { Formik } from 'formik';
import { selectUserAndToken } from '../../store/slices/authSlice'; // Importez le sélecteur pour obtenir le token d'authentification
import { useDispatch, useSelector } from 'react-redux';

// project import
import AnimateButton from 'components/@extended/AnimateButton';
import { strengthColor, strengthIndicator } from 'utils/password-strength';
import { useNavigate } from 'react-router';
import { addPatientSuccess } from 'store/slices/addPatientSlice';
import { useAddPatientMutation } from 'services/addPatientApi';

// assets
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import { dispatch } from '../../store';

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

function ExamenPhysique() {
    


 

  const navigate = useNavigate(); // Déclarer le hook useNavigate ici

  

  const handleReset = () => {
    // Reset the form values to their initial state
    resetForm();
  };

  return (
    <Formik
    initialValues={{
        poids: "",
        taille: "",
        imc: "",
        pc: "",
        bu: "",
        signesDysmorphiques: "",
        stadePubertaireTanner: "",
        fenteLabiale: false,
        fentePalatine: false,
        incisiveCentraleUnique: false,
        flechissement: false,
        stagnation: false,
        hippocratismeDigital: "",
        syndromeCushing: "",
        micropenis: "",
        examenThyroide: "",
        examenCardioVx: "",
        examenPleuroPulmonaire: "",
        examenNeurologique: "",
        autresExamenPhysique: "",
        submit: null
    }}
    validationSchema ={ Yup.object().shape({
        poids: Yup.number().required('Poids est requis'),
        taille: Yup.number().required('Taille requis'),
        imc: Yup.number().required('IMC est requis'),
        pc: Yup.number().required('PC est requis'),
        bu: Yup.string().required('BU est requis'),
        signesDysmorphiques: Yup.string().required('Signes dysmorphiques est requis'),
        stadePubertaireTanner: Yup.string().required('Stade pubertaire de Tanner est requis'),
        fenteLabiale: false,
        fentePalatine: false,
        incisiveCentraleUnique: false,
        flechissement: false,
        stagnation: false,
        hippocratismeDigital: Yup.string().required('Hippocratisme digital est requis'),
        syndromeCushing: Yup.string().required('Syndrome de cushing est requis'),
        micropenis: Yup.string().required('Micropénis est requis'),
        examenThyroide: Yup.string().required('Examen de la thyroide est requis'),
        examenCardioVx: Yup.string().required('Examen cardio vx est requis'),
        examenPleuroPulmonaire: Yup.string().required('Examen pleuro pulmonaire est requis'),
        examenNeurologique: Yup.string().required('Examen neurologique est requis'),
        autresExamenPhysique: Yup.string().required('Autres est requis'),
      
                                          })}
    onSubmit={async () => {
       
    }}
>
    {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
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
              III- Examen physique
            </Box>
            <br></br>
            <br></br>
            <FormGroup sx={{ mt: 2 }}>
              <FormControl>
                <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={3}>
                    <TextField
                    id="Poids"
                    type="number"
                    label="Poids"
                    variant="outlined"
                    size="small"
                    fullWidth
                    name="poids"
                    value={values.poids}
                    onChange={handleChange}
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
                    name="taille"
                    value={values.taille}
                    onChange={handleChange}
                  />
                    </Grid>
                    <Grid item xs={12} md={3}>
                    <TextField
                    id="IMC"
                    type="number"
                    label="IMC"
                    variant="outlined"
                    size="small"
                    fullWidth
                    name="imc"
                    value={values.imc}
                    onChange={handleChange}
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
                    name="pc"
                    value={values.pc}
                    onChange={handleChange}
                  />
                    </Grid>
                  </Grid>
                </Box>
                <br></br>

                <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={4}>
                    <TextField
                    id="BU"
                    type="text"
                    label="BU"
                    variant="outlined"
                    size="small"
                    fullWidth
                    name="bu"
                    value={values.bu}
                    onChange={handleChange}
                  />
                    </Grid>
                    <Grid item xs={12} md={4}>
                    <TextField
                    id="SignesDysmorphiques"
                    type="text"
                    label="Signes dysmorphiques"
                    variant="outlined"
                    size="small"
                    fullWidth
                    name="signesDysmorphiques"
                    value={values.signesDysmorphiques}
                    onChange={handleChange}
                  />
                    </Grid>
                    <Grid item xs={12} md={4}>
                    <TextField
                    id="StadePubertaireTanner"
                    type="text"
                    label="Stade pubertaire de Tanner"
                    variant="outlined"
                    size="small"
                    fullWidth
                    name="stadePubertaireTanner"
                    value={values.stadePubertaireTanner}
                    onChange={handleChange}
                  />
                    </Grid>
                  </Grid>
                </Box>
                <br></br>
                <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={12}>
                    <FormLabel id="AnomaliesLigneMediane">
                  Anomalies de la ligne médiane :
                </FormLabel>
                    </Grid>
                  </Grid>
                </Box>
                <br></br>
                <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={4}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="fenteLabiale"
                        checked={values.fenteLabiale}
                        onChange={handleChange}
                        value="Fente labiale"
                      />
                    }
                    label="Fente labiale"
                  />
                    </Grid>
                    <Grid item xs={12} md={4}>
                    <FormControlLabel
                    control={
                      <Checkbox
                        name="fentePalatine"
                        checked={values.fentePalatine}
                        onChange={handleChange}
                        value="Fente palatine"
                        color="secondary"
                      />
                    }
                    label="Fente palatine"
                  />
                    </Grid>
                    <Grid item xs={12} md={4}>
                    <FormControlLabel
                    control={
                      <Checkbox
                        name="incisiveCentraleUnique"
                        checked={values.incisiveCentraleUnique}
                        onChange={handleChange}
                        value="Incisive centrale unique"
                        color="success"
                      />
                    }
                    label="Incisive centrale unique"
                  />
                    </Grid>
                  </Grid>
                </Box>
                <br></br>
                <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={4}>
                    <FormLabel id="CourbeCroissance">
                    Courbe de croissance :
                  </FormLabel>
                    </Grid>
                    <Grid item xs={12} md={4}>
                    <FormControlLabel
                    control={
                      <Checkbox
                        name="flechissement"
                        checked={values.flechissement}
                        onChange={handleChange}
                        value="Fléchissement"
                        color="secondary"
                      />
                    }
                    label="Fléchissement"
                  />
                    </Grid>
                    <Grid item xs={12} md={4}>
                    <FormControlLabel
                    control={
                      <Checkbox
                        name="stagnation"
                        checked={values.stagnation}
                        onChange={handleChange}
                        value="Stagnation"
                        color="success"
                      />
                    }
                    label="Stagnation"
                  />
                    </Grid>
                  </Grid>
                </Box>
                <br></br>
                <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={4}>
                    <FormControl>
                    <FormLabel id="HippocratismeDigital">
                      Hippocratisme digital :
                    </FormLabel>
                    <RadioGroup
                      row
                      aria-labelledby="HippocratismeDigital"
                      name="hippocratismeDigital"
                      value={values.hippocratismeDigital}
                      onChange={handleChange}
                    >
                      <FormControlLabel
                        value="Présent"
                        control={<Radio />}
                        label="Présent"
                      />

                      <FormControlLabel
                        value="Absent"
                        control={<Radio />}
                        label="Absent"
                      />
                    </RadioGroup>
                  </FormControl>
                    </Grid>
                    <Grid item xs={12} md={4}>
                    <FormControl>
                    <FormLabel id="SyndromeCushing">
                      Syndrome de cushing :
                    </FormLabel>
                    <RadioGroup
                      row
                      aria-labelledby="SyndromeCushing"
                      name="syndromeCushing"
                      value={values.syndromeCushing}
                      onChange={handleChange}
                    >
                      <FormControlLabel
                        value="Présent"
                        control={<Radio />}
                        label="Présent"
                      />
                      <FormControlLabel
                        value="Absent"
                        control={<Radio />}
                        label="Absent"
                      />
                    </RadioGroup>
                  </FormControl>
                    </Grid>
                    <Grid item xs={12} md={4}>
                    <FormControl>
                    <FormLabel id="Micropenis">Micropénis :</FormLabel>
                    <RadioGroup
                      row
                      aria-labelledby="Micropenis"
                      name="micropenis"
                      value={values.micropenis}
                      onChange={handleChange}
                    >
                      <FormControlLabel
                        value="Présent"
                        control={<Radio />}
                        label="Présent"
                      />
                      <FormControlLabel
                        value="Absent"
                        control={<Radio />}
                        label="Absent"
                      />
                    </RadioGroup>
                  </FormControl>
                    </Grid>
                  </Grid>
                </Box>
                <br></br>
                <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                    <TextField
                    id="ExamenThyroide"
                    type="text"
                    label="Examen de la thyroide"
                    variant="outlined"
                    size="small"
                    fullWidth
                    name="examenThyroide"
                    value={values.examenThyroide}
                    onChange={handleChange}
                  />
                    </Grid>
                    <Grid item xs={12} md={6}>
                    <TextField
                    id="ExamenCardioVx"
                    type="text"
                    label="Examen cardio vx"
                    variant="outlined"
                    size="small"
                    fullWidth
                    name="examenCardioVx"
                    value={values.examenCardioVx}
                    onChange={handleChange}
                  />
                    </Grid>
                  </Grid>
                </Box>
                <br></br>
                <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                    <TextField
                    id="ExamenPleuroPulmonaire"
                    type="text"
                    label="Examen pleuro pulmonaire"
                    variant="outlined"
                    size="small"
                    fullWidth
                    name="examenPleuroPulmonaire"
                    value={values.examenPleuroPulmonaire}
                    onChange={handleChange}
                  />
                    </Grid>
                    <Grid item xs={12} md={6}>
                    <TextField
                    id="ExamenNeurologique"
                    type="text"
                    label="Examen neurologique"
                    variant="outlined"
                    size="small"
                    fullWidth
                    name="examenNeurologique"
                    value={values.examenNeurologique}
                    onChange={handleChange}
                  />
                    </Grid>
                  </Grid>
                </Box>
                <br></br>

                <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={1}>
                    <Grid sx={{ md: 1 }} item xs={12} md={12}>
                    <label htmlFor="AutresExamenPhysique">Autres :</label>
                      <TextField
                       className="form-control"
                       name="autresExamenPhysique"
                       id="AutresExamenPhysique"
                       onChange={handleChange}
                       value={values.autresExamenPhysique}
                            sx={{width:'100%'}}
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
                    <Stack spacing={2} direction="row" >
                        <ColorButton
                          type="reset"
                          variant="contained"
                          sx={{width:'100%'}}
                          onClick={handleResetExamenPhysiqueData}
                        >
                          <label className="bouton">Effacer</label>
                        </ColorButton>
                        <BootstrapButton
                          type="submet"
                          onClick={handleSubmitExamenPhysiqueData}
                          variant="contained"
                          disableRipple
                          sx={{width:'100%'}}
                          
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
export default ExamenPhysique;