import React, { useState } from "react";
import List from "@mui/material/List";
import Collapse from "@mui/material/Collapse";

const sections = [
  {
    title: "Como funciona a compra?",
    content:
      "Ipsum tincidunt platea dolor auctor posuere tellus quis semper. Ultrices diam enim sit adipiscing venenatis blandit. Egestas scelerisque id mattis quam tellus. Nam suscipit lacus lacus vel malesuada nibh tristique dui. Nisl sed in volutpat vitae felis.",
  },
  {
    title: "Como funciona o sorteio?",
    content:
      "Sit dolorum consequuntur vel dicta rerum non similique atque ut eaque aliquam. Sed optio dolor ut soluta reprehenderit est quod nesciunt cum internos saepe et error distinctio.",
  },
  {
    title: "Como vou receber o resultado?",
    content:
      "Et enim omnis rem corporis dolores et labore quam nam asperiores repellat ex laborum cumque! Qui voluptas ducimus non doloribus totam ut doloremque unde.",
  },
];

export default function About() {
  const [openSections, setOpenSections] = useState(sections.map(() => false));

  const handleClick = (index) => {
    const newOpenSections = [...openSections];
    newOpenSections[index] = !newOpenSections[index];
    setOpenSections(newOpenSections);
  };

  return (
    <div id="info" className="content">
      <div className="helpStudents"></div>
      {sections.map((section, index) => (
        <List className="help_students" key={index}>
          <div className="about">
            <div className="collapse" onClick={() => handleClick(index)}>
              <h4>{section.title}</h4>
              {openSections[index] ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                >
                  <circle
                    cx="14"
                    cy="14"
                    r="14"
                    transform="rotate(-180 14 14)"
                    fill="#47A4F9"
                  />
                  <path
                    d="M18.5637 15.7185L14.0004 11.1758L9.43712 15.7185"
                    stroke="#0A294C"
                    stroke-width="1.67421"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                >
                  <circle cx="14" cy="14" r="14" fill="#47A4F9" />
                  <path
                    d="M9.4364 12.2812L13.9997 16.8239L18.563 12.2812"
                    stroke="#0A294C"
                    stroke-width="1.67421"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              )}
            </div>
            <Collapse in={openSections[index]} timeout="0" unmountOnExit>
              <List component="div" disablePadding>
                <p>{section.content}</p>
              </List>
            </Collapse>
          </div>
        </List>
      ))}
    </div>
  );
}
