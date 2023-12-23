import * as React from "react";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";


const steps = ["DADOS PESSOAIS", "CONCLUÍDO"];

const Forms = ({ show, closeSidebar }) => {
  const sidebarStyles = {
    width: "85%",
    heigth: "100%",
    backgroundColor: "#1F2832",
    position: "fixed",
    overflowY: "auto",
    maxHeight: "100vh",
  };

  const [value, setValue] = React.useState("pessoal");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 2);
  };

  const closeSidebarForm = () => {
    setActiveStep(0);
    closeSidebar();
  };

  return (
    <div
      className="navigation_header"
      style={show ? sidebarStyles : { display: "none" }}
    >
      {" "}
      <div className="logo_sidebar">
        <h2>Comprar número</h2>
        <button onClick={closeSidebar} className="btn_icon_header">
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21 7L7 21"
              stroke="#D9D9D9"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7 7L21 21"
              stroke="#D9D9D9"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>{" "}
      <div className="form_style">
      
          <Stepper activeStep={activeStep}>
            {steps.map((label, index) => {
              const stepProps = {};
              const labelProps = {};

              return (
                <Step key={label} {...stepProps}>
                  <StepLabel {...labelProps}>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
      
      </div>
      <div>
        {activeStep === steps.length ? (
          <div>
            <div className="form_style">
              <p>
                Obrigado por ser parte deste capítulo importante na vida dos
                alunos. Cada passo dado em direção ao objetivo é possível graças
                a pessoas incríveis como você.
              </p>
            </div>

            <div className="form_footer">
              <button onClick={closeSidebarForm} className="button_buy_sidebar">
                Fechar
              </button>
            </div>
          </div>
        ) : (
          <div className="form_style">
            <div className="form_sidebar" component="form" autoComplete="off">
              <div className="form_main_data">
                <TextField label="Insira seu nome" variant="standard" />
                <TextField label="Insira seu e-mail" variant="standard" />
                <TextField
                  type="number"
                  label="Insira seu telefone"
                  variant="standard"
                />
              </div>
              <div className="address_style">
                <TextField
                  label="Insira seu CEP"
                  type="number"
                  variant="standard"
                />
                <TextField label="Bairro" variant="standard" />
              </div>
              <div className="address_style">
                <TextField label="Insira sua rua" variant="standard" />
                <TextField label="Número" type="number" variant="standard" />
              </div>
              <div className="address_style">
                <TextField label="Insira sua cidade" variant="standard" />
                <TextField label="UF" variant="standard" />
              </div>
            </div>

            <FormControl>
              <RadioGroup value={value} onChange={handleChange}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    paddingTop: "28px",
                  }}
                >
                  <FormControlLabel
                    value="pessoal"
                    control={<Radio />}
                    label="Pessoal"
                  />
                  <FormControlLabel
                    value="empresa"
                    control={<Radio />}
                    label="Empresa"
                  />
                </div>
              </RadioGroup>
            </FormControl>

            <TextField
              className="form_sidebar"
              type="number"
              label="Insira seu CPF/CNPJ"
              variant="standard"
            />

            <h4>NÚMEROS SELECIONADOS</h4>

            <div className="form_footer">
              <button onClick={handleNext} className="button_buy_sidebar">
                Concluir
              </button>
              <button className="button_cancel_sidebar">Cancelar</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Forms;
