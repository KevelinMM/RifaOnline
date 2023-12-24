import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Forms from "./Forms";

export default function Numbers() {
  const [numberList, setNumberList] = useState([]);
  const [showBackdrop, setShowBackdrop] = useState(false);
  const [showForms, setShowForms] = useState(false);
  const [selectedNumbers, setSelectedNumbers] = useState([]);

  const closeSidebar = () => {
    setShowForms(false);
    setShowBackdrop(false);
  };
  const toggleForm = () => {
    setShowForms(!showForms);
    setShowBackdrop(!showBackdrop);
  };

  useEffect(() => {
    const fetchNumbers = async () => {
      try {
        const response = await axios.get(process.env.BACKEND + "read");
        setNumberList(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchNumbers();
  }, []);

  async function handleNumberClick(number) {
    if (selectedNumbers.includes(number)) {
      setSelectedNumbers(selectedNumbers.filter((num) => num !== number));
    } else {
      setSelectedNumbers([...selectedNumbers, number]);
    }
  }

  const renderNumberList = () => {
    return numberList.map((number) => (
      <li
        key={number.id}
        onClick={() => handleNumberClick(number.numero)}
        className={
          number.disponivel ? "numbers_available" : "numbers_unvailable"
        }
      >
        {number.disponivel ? number.numero : "X"}
      </li>
    ));
  };

  return (
    <div>
      <div id="buy" className="number_list_background">
        {" "}
      </div>
      <div className="content">
        <div className="buy">
          <div className="buy_numbers_home">
            Compre seu número por apenas <span className="price">R$5,00</span>
          </div>

          <div className="numbers_content">
            <div className="description">
              <p>Selecione os números a serem comprados*</p>
              <h4>R$5,00/número</h4>
            </div>

            <li className="numbers">{renderNumberList()}</li>

            {selectedNumbers.length > 0 && (
              <div>
                <p>Números selecionados:</p>
                <ul className="numbers">
                  {selectedNumbers.map((num, index) => (
                    <li
                      onClick={() => handleNumberClick(num)}
                      key={index}
                      className="numbers_available"
                    >
                      {num}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="numbers_footer">
              {selectedNumbers.length > 0 ? (
                <button onClick={toggleForm} className="button_buy_sidebar">
                  Avançar
                </button>
              ) : (
                <button className="button_number">
                  Nenhum número(s) selecionado(s)
                </button>
              )}

              {showBackdrop && (
                <div className="backdrop" onClick={closeSidebar}></div>
              )}

              <Forms
                show={showForms}
                closeSidebar={closeSidebar}
                selectedNumbers={selectedNumbers}
              />

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
