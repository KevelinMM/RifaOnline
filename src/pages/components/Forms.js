import * as React from "react";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import axios from "axios";
import InputMask from "react-input-mask";

const steps = ["DADOS PESSOAIS", "CONCLUÍDO"];

const buyNumberSvg = (
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
);

const sucessMensageSvg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="35"
    height="35"
    viewBox="0 0 35 35"
    fill="none"
  >
    <path
      d="M32.0547 16.1439V17.4844C32.0529 20.6264 31.0355 23.6836 29.1542 26.2001C27.273 28.7166 24.6286 30.5576 21.6156 31.4485C18.6025 32.3393 15.3823 32.2323 12.435 31.1435C9.48772 30.0546 6.97139 28.0422 5.26128 25.4064C3.55117 22.7706 2.73891 19.6526 2.94565 16.5174C3.15238 13.3822 4.36702 10.3979 6.40843 8.00945C8.44984 5.621 11.2086 3.95644 14.2734 3.264C17.3381 2.57157 20.5445 2.88837 23.4145 4.16715"
      stroke="#47A4F9"
      stroke-width="1.55417"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M32.0547 5.82825L17.4844 20.4131L13.1133 16.042"
      stroke="#47A4F9"
      stroke-width="1.55417"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

const Forms = ({ show, closeSidebar, selectedNumbers, resetNumbers }) => {
  // Estado do formulário
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    cep: "",
    bairro: "",
    rua: "",
    numeroRua: "",
    cidade: "",
    uf: "",
    cpfCnpj: "",
    tipoPessoa: true,
  });

  // Estado da interface
  const [activeStep, setActiveStep] = useState(0);
  const [error, setError] = useState(false);
  const [missingInfo, setMissingInfo] = useState(false);

  const sidebarFormStyles = {
    height: "100%",
    backgroundColor: "#1F2832",
    position: "fixed",
    overflowY: "auto",
    maxHeight: "100vh",
  };

  const commonInputStyle = {
    color: "white",
    background: "transparent",
  };

  const closeSidebarForm = () => {
    setActiveStep(0);
    closeSidebar();
  };

  // Função para lidar com a mudança de qualquer campo do formulário
  const handleChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  // Função para lidar com a mudança do tipo de pessoa (RadioGroup)
  const handleTipoPessoaChange = (event) => {
    setTipoPessoa(event.target.value === "true");
  };

  //Finalizando a compra dos números escolhidos

  async function handleFinish() {
    setError(false);
    setMissingInfo(false);
    try {
      const { nome, email, telefone, cpfCnpj } = formData;
      if (!nome || !email || !telefone || !cpfCnpj) {
        setMissingInfo(true);
        return;
      }
      await axios.post(process.env.BACKEND + "create", {
        ...formData,
        numerosId: selectedNumbers,
      });

      // Ir para a última etapa
      setActiveStep((prevActiveStep) => prevActiveStep + 2);

      // Limpar o estado relacionado aos números selecionados
      resetNumbers();

      // Zerar os campos do formulário
      setFormData({
        nome: "",
        email: "",
        telefone: "",
        cep: "",
        bairro: "",
        rua: "",
        numeroRua: "",
        cidade: "",
        uf: "",
        cpfCnpj: "",
        tipoPessoa: true,
      });
    } catch (error) {
      console.log(error);
      setMissingInfo(false);
      setError(true);
    }
  }

  return (
    <div
      className={`navigation_form large-screen`}
      style={show ? sidebarFormStyles : { display: "none" }}
    >
      {" "}
      <div className="logo_sidebar">
        <h2>Comprar número</h2>
        <button onClick={closeSidebar} className="btn_icon_header">
          {buyNumberSvg}
        </button>
      </div>{" "}
      <div className="form_style">
        <Stepper activeStep={activeStep}>
          {steps.map((label) => {
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
          <div className="form_style">
            <div className="sucess_mensage">
              {sucessMensageSvg}
              <p>COMPRA FINALIZADA COM SUCESSO</p>
            </div>
            <div>
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
                <TextField
                  label="Insira seu nome"
                  variant="standard"
                  required
                  InputProps={{
                    style: commonInputStyle,
                  }}
                  onChange={(e) => handleChange("nome", e.target.value)}
                  value={formData.nome}
                />
                <TextField
                  label="Insira seu e-mail"
                  variant="standard"
                  required
                  InputProps={{
                    style: commonInputStyle,
                  }}
                  onChange={(e) => handleChange("email", e.target.value)}
                  value={formData.email}
                />

                <InputMask
                  mask="(99) 99999-9999"
                  onChange={(e) => handleChange("telefone", e.target.value)}
                  value={formData.telefone}
                >
                  {() => (
                    <TextField
                      label="Insira seu telefone"
                      variant="standard"
                      required
                      InputProps={{
                        style: commonInputStyle,
                      }}
                      type="tel"
                    />
                  )}
                </InputMask>
              </div>
              <div className="address_style">
                <InputMask
                  mask="99999-999"
                  onChange={(e) => handleChange("cep", e.target.value)}
                  value={formData.cep}
                >
                  {() => (
                    <TextField
                      label="Insira seu CEP"
                      variant="standard"
                      InputProps={{
                        style: commonInputStyle,
                      }}
                      type="tel"
                    />
                  )}
                </InputMask>
                <TextField
                  label="Bairro"
                  variant="standard"
                  InputProps={{
                    style: commonInputStyle,
                  }}
                  onChange={(e) => setBairro(e.target.value)}
                />
              </div>
              <div className="address_style">
                <TextField
                  label="Insira sua rua"
                  variant="standard"
                  InputProps={{
                    style: commonInputStyle,
                  }}
                  onChange={(e) => handleChange("rua", e.target.value)}
                  value={formData.rua}
                />
                <TextField
                  label="Número"
                  type="number"
                  variant="standard"
                  InputProps={{
                    style: commonInputStyle,
                  }}
                  onChange={(e) => handleChange("numeroRua", e.target.value)}
                  value={formData.numeroRua}
                />
              </div>
              <div className="address_style">
                <TextField
                  label="Insira sua cidade"
                  variant="standard"
                  InputProps={{
                    style: commonInputStyle,
                  }}
                  onChange={(e) => handleChange("cidade", e.target.value)}
                  value={formData.cidade}
                />
                <TextField
                  label="UF"
                  variant="standard"
                  InputProps={{
                    style: commonInputStyle,
                  }}
                  onChange={(e) => handleChange("uf", e.target.value)}
                  value={formData.uf}
                />
              </div>
            </div>

            <RadioGroup
              value={formData.tipoPessoa}
              onChange={handleTipoPessoaChange}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  paddingTop: "28px",
                }}
              >
                <FormControlLabel
                  value={true}
                  control={<Radio />}
                  label="Pessoal"
                />
                <FormControlLabel
                  value={false}
                  control={<Radio />}
                  label="Empresa"
                />
              </div>
            </RadioGroup>

            <div className="form_sidebar">
              {" "}
              <TextField
                label="Insira seu CPF/CNPJ"
                variant="standard"
                InputProps={{
                  style: commonInputStyle,
                }}
                required
                type="number"
                onChange={(e) => handleChange("cpfCnpj", e.target.value)}
                value={formData.cpfCnpj}
              />{" "}
            </div>

            <h4>NÚMEROS SELECIONADOS</h4>
            <ul className="numbers">
              {selectedNumbers &&
                selectedNumbers.map((num, index) => (
                  <li className="numbers_available" key={index}>
                    {num}
                  </li>
                ))}
            </ul>

            <div className="price">
              <div>Valor</div>
              <div>R${selectedNumbers && selectedNumbers.length * 5},00</div>
            </div>

            {error && <p>Erro ao comprar, tente novamente mais tarde.</p>}

            {missingInfo && (
              <p>Por favor, preencha todos os campos obrigatórios. *</p>
            )}

            <div className="form_footer">
              <button onClick={handleFinish} className="button_buy_sidebar">
                Concluir
              </button>
              <button
                onClick={closeSidebarForm}
                className="button_cancel_sidebar"
              >
                Cancelar
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Forms;
