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

const OpenIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    cursor="pointer"
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
      strokeWidth="1.67421"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

const ClosedIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    cursor="pointer"
  >
    <circle cx="14" cy="14" r="14" fill="#47A4F9" />
    <path
      d="M9.4364 12.2812L13.9997 16.8239L18.563 12.2812"
      stroke="#0A294C"
      strokeWidth="1.67421"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export default function About() {
  const [openSections, setOpenSections] = useState(sections.map(() => false));

  const handleClick = (index) => {
    const newOpenSections = [...openSections];
    newOpenSections[index] = !newOpenSections[index];
    setOpenSections(newOpenSections);
  };

  return (
    <div id="about" className="content">
      <div className="header_about">
        <svg
          width="61"
          height="13"
          viewBox="0 0 61 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.658 12.176C0.583333 12.176 0.518 12.148 0.462 12.092C0.406 12.036 0.378 11.9707 0.378 11.896C0.378 11.8493 0.392 11.7933 0.42 11.728L5.236 0.206C5.25467 0.168666 5.28733 0.126666 5.334 0.0799996C5.38067 0.0239997 5.45067 -0.00400019 5.544 -0.00400019H5.782C5.85667 -0.00400019 5.922 0.0239997 5.978 0.0799996C6.034 0.135999 6.062 0.201333 6.062 0.276C6.062 0.313333 6.048 0.369333 6.02 0.444L1.204 11.966C1.19467 12.0033 1.162 12.0453 1.106 12.092C1.05933 12.148 0.989333 12.176 0.896 12.176H0.658ZM4.36308 12.176C4.28841 12.176 4.22308 12.148 4.16708 12.092C4.11108 12.036 4.08308 11.9707 4.08308 11.896C4.08308 11.8493 4.09708 11.7933 4.12508 11.728L8.94108 0.206C8.95975 0.168666 8.99241 0.126666 9.03908 0.0799996C9.08574 0.0239997 9.15574 -0.00400019 9.24908 -0.00400019H9.48708C9.56175 -0.00400019 9.62708 0.0239997 9.68308 0.0799996C9.73908 0.135999 9.76708 0.201333 9.76708 0.276C9.76708 0.313333 9.75308 0.369333 9.72508 0.444L4.90908 11.966C4.89974 12.0033 4.86708 12.0453 4.81108 12.092C4.76441 12.148 4.69441 12.176 4.60108 12.176H4.36308ZM8.06816 12.176C7.99349 12.176 7.92816 12.148 7.87216 12.092C7.81616 12.036 7.78816 11.9707 7.78816 11.896C7.78816 11.8493 7.80216 11.7933 7.83016 11.728L12.6462 0.206C12.6648 0.168666 12.6975 0.126666 12.7442 0.0799996C12.7908 0.0239997 12.8608 -0.00400019 12.9542 -0.00400019H13.1922C13.2668 -0.00400019 13.3322 0.0239997 13.3882 0.0799996C13.4442 0.135999 13.4722 0.201333 13.4722 0.276C13.4722 0.313333 13.4582 0.369333 13.4302 0.444L8.61416 11.966C8.60482 12.0033 8.57216 12.0453 8.51616 12.092C8.46949 12.148 8.39949 12.176 8.30616 12.176H8.06816ZM11.7732 12.176C11.6986 12.176 11.6332 12.148 11.5772 12.092C11.5212 12.036 11.4932 11.9707 11.4932 11.896C11.4932 11.8493 11.5072 11.7933 11.5352 11.728L16.3512 0.206C16.3699 0.168666 16.4026 0.126666 16.4492 0.0799996C16.4959 0.0239997 16.5659 -0.00400019 16.6592 -0.00400019H16.8972C16.9719 -0.00400019 17.0372 0.0239997 17.0932 0.0799996C17.1492 0.135999 17.1772 0.201333 17.1772 0.276C17.1772 0.313333 17.1632 0.369333 17.1352 0.444L12.3192 11.966C12.3099 12.0033 12.2772 12.0453 12.2212 12.092C12.1746 12.148 12.1046 12.176 12.0112 12.176H11.7732ZM21.6466 11.14C20.8906 11.14 20.2466 11.0187 19.7146 10.776C19.192 10.5333 18.7906 10.2207 18.5106 9.838C18.2306 9.45533 18.0813 9.04933 18.0626 8.62C18.0626 8.54533 18.0906 8.48 18.1466 8.424C18.2026 8.368 18.2726 8.34 18.3566 8.34H18.6366C18.73 8.34 18.8 8.368 18.8466 8.424C18.9026 8.48 18.9353 8.54533 18.9446 8.62C18.982 8.88133 19.0986 9.14267 19.2946 9.404C19.4906 9.656 19.78 9.87067 20.1626 10.048C20.5453 10.216 21.04 10.3 21.6466 10.3C22.5613 10.3 23.2286 10.1367 23.6486 9.81C24.0686 9.474 24.2786 9.026 24.2786 8.466C24.2786 8.09267 24.1666 7.794 23.9426 7.57C23.728 7.33667 23.3966 7.13133 22.9486 6.954C22.5006 6.76733 21.9266 6.562 21.2266 6.338C20.564 6.12333 20.018 5.904 19.5886 5.68C19.1593 5.44667 18.842 5.16667 18.6366 4.84C18.4406 4.51333 18.3426 4.09333 18.3426 3.58C18.3426 3.104 18.4686 2.67933 18.7206 2.306C18.9726 1.92333 19.3366 1.62 19.8126 1.396C20.298 1.172 20.886 1.06 21.5766 1.06C22.1273 1.06 22.608 1.13467 23.0186 1.284C23.4293 1.43333 23.77 1.634 24.0406 1.886C24.3113 2.12867 24.5166 2.39467 24.6566 2.684C24.7966 2.964 24.8713 3.23933 24.8806 3.51C24.8806 3.57533 24.8573 3.64067 24.8106 3.706C24.764 3.762 24.6893 3.79 24.5866 3.79H24.3066C24.26 3.79 24.1993 3.77133 24.1246 3.734C24.0593 3.69667 24.0173 3.622 23.9986 3.51C23.9426 3.04333 23.6953 2.66067 23.2566 2.362C22.8273 2.054 22.2673 1.9 21.5766 1.9C20.886 1.9 20.3213 2.03533 19.8826 2.306C19.444 2.57667 19.2246 3.00133 19.2246 3.58C19.2246 3.95333 19.3226 4.26133 19.5186 4.504C19.7146 4.73733 20.0226 4.94733 20.4426 5.134C20.8626 5.31133 21.404 5.50733 22.0666 5.722C22.7666 5.946 23.3453 6.17 23.8026 6.394C24.26 6.618 24.6006 6.89333 24.8246 7.22C25.0486 7.53733 25.1606 7.95267 25.1606 8.466C25.1606 9.03533 25.016 9.52067 24.7266 9.922C24.4466 10.314 24.0453 10.6173 23.5226 10.832C23 11.0373 22.3746 11.14 21.6466 11.14ZM30.5012 11.14C29.7265 11.14 29.0685 11.0047 28.5272 10.734C27.9859 10.454 27.5705 10.0293 27.2812 9.46C26.9919 8.88133 26.8332 8.15333 26.8052 7.276C26.7959 6.856 26.7912 6.464 26.7912 6.1C26.7912 5.736 26.7959 5.344 26.8052 4.924C26.8332 4.056 27.0012 3.33733 27.3092 2.768C27.6172 2.18933 28.0419 1.76 28.5832 1.48C29.1339 1.2 29.7732 1.06 30.5012 1.06C31.2292 1.06 31.8639 1.2 32.4052 1.48C32.9559 1.76 33.3852 2.18933 33.6932 2.768C34.0105 3.33733 34.1785 4.056 34.1972 4.924C34.2159 5.344 34.2252 5.736 34.2252 6.1C34.2252 6.464 34.2159 6.856 34.1972 7.276C34.1785 8.15333 34.0199 8.88133 33.7212 9.46C33.4319 10.0293 33.0165 10.454 32.4752 10.734C31.9339 11.0047 31.2759 11.14 30.5012 11.14ZM30.5012 10.3C31.3039 10.3 31.9619 10.0573 32.4752 9.572C32.9979 9.08667 33.2779 8.298 33.3152 7.206C33.3339 6.786 33.3432 6.41733 33.3432 6.1C33.3432 5.78267 33.3339 5.414 33.3152 4.994C33.2965 4.266 33.1612 3.67333 32.9092 3.216C32.6665 2.75867 32.3352 2.42733 31.9152 2.222C31.5045 2.00733 31.0332 1.9 30.5012 1.9C29.9785 1.9 29.5072 2.00733 29.0872 2.222C28.6765 2.42733 28.3452 2.75867 28.0932 3.216C27.8505 3.67333 27.7152 4.266 27.6872 4.994C27.6779 5.414 27.6732 5.78267 27.6732 6.1C27.6732 6.41733 27.6779 6.786 27.6872 7.206C27.7245 8.298 28.0045 9.08667 28.5272 9.572C29.0499 10.0573 29.7079 10.3 30.5012 10.3ZM36.7607 11C36.6674 11 36.5927 10.972 36.5367 10.916C36.4807 10.86 36.4527 10.7853 36.4527 10.692V1.522C36.4527 1.41933 36.4807 1.34 36.5367 1.284C36.5927 1.228 36.6674 1.2 36.7607 1.2H40.4147C41.0681 1.2 41.6001 1.31667 42.0107 1.55C42.4307 1.78333 42.7387 2.09133 42.9347 2.474C43.1307 2.84733 43.2287 3.258 43.2287 3.706C43.2287 4.10733 43.1634 4.45267 43.0327 4.742C42.9114 5.022 42.7527 5.25067 42.5567 5.428C42.3701 5.60533 42.1834 5.74067 41.9967 5.834C42.3701 6.02067 42.7014 6.31933 42.9907 6.73C43.2801 7.14067 43.4247 7.64 43.4247 8.228C43.4247 8.69467 43.3127 9.14267 43.0887 9.572C42.8741 9.992 42.5474 10.3373 42.1087 10.608C41.6794 10.8693 41.1474 11 40.5127 11H36.7607ZM37.3347 10.16H40.3727C41.0634 10.16 41.5954 9.978 41.9687 9.614C42.3514 9.25 42.5427 8.788 42.5427 8.228C42.5427 7.65867 42.3514 7.19667 41.9687 6.842C41.5954 6.478 41.0634 6.296 40.3727 6.296H37.3347V10.16ZM37.3347 5.456H40.2327C40.9234 5.456 41.4461 5.302 41.8007 4.994C42.1647 4.686 42.3467 4.25667 42.3467 3.706C42.3467 3.15533 42.1647 2.74 41.8007 2.46C41.4461 2.18 40.9234 2.04 40.2327 2.04H37.3347V5.456ZM45.9072 11C45.8139 11 45.7392 10.972 45.6832 10.916C45.6272 10.86 45.5992 10.7853 45.5992 10.692V1.522C45.5992 1.41933 45.6272 1.34 45.6832 1.284C45.7392 1.228 45.8139 1.2 45.9072 1.2H49.1692C50.1492 1.2 50.9285 1.43333 51.5072 1.9C52.0952 2.36667 52.3892 3.076 52.3892 4.028C52.3892 4.77467 52.2025 5.372 51.8292 5.82C51.4559 6.268 50.9379 6.57133 50.2752 6.73L52.5292 10.566C52.5572 10.622 52.5712 10.6733 52.5712 10.72C52.5712 10.7947 52.5432 10.86 52.4872 10.916C52.4312 10.972 52.3659 11 52.2912 11H52.1232C51.9739 11 51.8619 10.9627 51.7872 10.888C51.7125 10.804 51.6472 10.7153 51.5912 10.622L49.3652 6.856H46.4812V10.692C46.4812 10.7853 46.4532 10.86 46.3972 10.916C46.3412 10.972 46.2619 11 46.1592 11H45.9072ZM46.4812 6.016H49.0992C49.9112 6.016 50.5132 5.85267 50.9052 5.526C51.3065 5.19 51.5072 4.69067 51.5072 4.028C51.5072 3.36533 51.3065 2.87067 50.9052 2.544C50.5132 2.208 49.9112 2.04 49.0992 2.04H46.4812V6.016ZM54.8623 11C54.7689 11 54.6943 10.972 54.6383 10.916C54.5823 10.86 54.5543 10.7853 54.5543 10.692V1.522C54.5543 1.41933 54.5823 1.34 54.6383 1.284C54.6943 1.228 54.7689 1.2 54.8623 1.2H60.3223C60.4249 1.2 60.5043 1.228 60.5603 1.284C60.6163 1.34 60.6443 1.41933 60.6443 1.522V1.732C60.6443 1.82533 60.6163 1.9 60.5603 1.956C60.5043 2.012 60.4249 2.04 60.3223 2.04H55.4363V5.61H60.0143C60.1169 5.61 60.1963 5.638 60.2523 5.694C60.3083 5.75 60.3363 5.82933 60.3363 5.932V6.142C60.3363 6.23533 60.3083 6.31 60.2523 6.366C60.1963 6.422 60.1169 6.45 60.0143 6.45H55.4363V10.16H60.4343C60.5369 10.16 60.6163 10.188 60.6723 10.244C60.7283 10.3 60.7563 10.3793 60.7563 10.482V10.692C60.7563 10.7853 60.7283 10.86 60.6723 10.916C60.6163 10.972 60.5369 11 60.4343 11H54.8623Z"
            fill="#EDF0F3"
          />
        </svg>
        <h2>Como funciona a rifa?</h2>
      </div>

      {sections.map(({ title, content }, index) => (
        <List className="help_students" key={index}>
          <div className="about">
            <div className="collapse" onClick={() => handleClick(index)}>
              <h4>{title}</h4>
              {openSections[index] ? OpenIcon : ClosedIcon}
            </div>
            <Collapse in={openSections[index]} timeout="0" unmountOnExit>
              <List component="div" disablePadding>
                <p>{content}</p>
              </List>
            </Collapse>
          </div>
        </List>
      ))}
    </div>
  );
}
