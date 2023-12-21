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
    <div className="buy">
      <h2>
        Compre seu número por apenas <span className="price">R$5,00</span>
      </h2>

      <div className="numbers">
        <div className="description">
          <div>
            <p>Selecione os números a serem comprados*</p>
            <h4>R$5,00/número</h4>
          </div>

          <ul className="number-list">{renderNumberList()}</ul>
        </div>
      </div>
    </div>
  );
}
