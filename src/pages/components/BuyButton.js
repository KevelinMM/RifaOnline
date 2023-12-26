import React from "react";

export default function BuyNumber() {
  const handleCompraClick = (event, targetId) => {
    event.preventDefault();

    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <a onClick={(e) => handleCompraClick(e, "buy")} className="button_blue">
      Comprar número
    </a>
  );
}
