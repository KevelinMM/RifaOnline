import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Numbers() {
  const [numberList, setNumberList] = useState([]);

  useEffect(() => {
    const fetchNumbers = async () => {
      try {
        console.log(process.env.BACKEND);
        const response = await axios.get(process.env.BACKEND + "read");
        setNumberList(response.data);
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    };
    fetchNumbers();
  }, []);

  const renderNumberList = () => {
    return numberList.map((number) => (
      <li
        key={number.id}
        className={
          number.disponivel ? "numbers_available" : "numbers_unvailable"
        }
      >
        {number.numero}
      </li>
    ));
  };

  return (
    <div>
      <div className="content">
        <div className="buy">
          <h2>
            Compre seu número por apenas <span className="price">R$5,00</span>
          </h2>

          <div className="numbers_content">
            <div className="description">
              <p>Selecione os números a serem comprados*</p>
              <h4>R$5,00/número</h4>
            </div>

            <li className="numbers">{renderNumberList()}</li>

            <div className="numbers_footer">
              <button className="button_number">
                Nenhum número(s) selecionado(s)
              </button>
              <p className="numbers_description">
                *Selecione quantos números desejar
              </p>
            </div>
          </div>
        </div>{" "}
      </div>{" "}
      <img className="studens_img" src="students.png"></img>
    </div>
  );
}
