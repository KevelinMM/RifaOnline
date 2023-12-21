import React from "react";

export default function Numbers() {
  const renderNumberList = () => {
    const numbers = [];
    for (let i = 1; i <= 80; i++) {
      numbers.push(<li key={i}>{i}</li>);
    }
    return numbers;
  };

  return (
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

          <ul className="numbers">{renderNumberList()}</ul>
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
      <img className="studens_img" src="students.png"></img>
    </div>
  );
}
