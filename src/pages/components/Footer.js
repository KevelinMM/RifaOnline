export default function Footer() {
  const handleNavLinkClick = (event, targetId) => {
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
    <>
      <footer>
        <div className="footer_logo">
          <svg
            width="120"
            height="30"
            viewBox="0 0 120 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0 1.19914C0 1.00872 0.155187 0.854355 0.346621 0.854355H1.81892C2.01035 0.854355 2.16554 1.00872 2.16554 1.19914V25.9092C2.16554 26.5459 2.68441 27.062 3.32448 27.062H5.97702V1.19914C5.97702 1.00872 6.13221 0.854355 6.32364 0.854355H7.79594C7.98737 0.854355 8.14256 1.00872 8.14256 1.19914V29.2161H2.8919C1.29475 29.2161 0 27.9282 0 26.3395L0 1.19914Z"
              fill="#EDF0F3"
            />
            <path
              d="M13.3822 29.2161C11.785 29.2161 10.4903 27.9282 10.4903 26.3395V0.782596H16.7125C16.9039 0.782596 17.0591 0.936961 17.0591 1.12738V2.59187C17.0591 2.78228 16.9039 2.93665 16.7125 2.93665H12.6558V11.9265H16.7125C16.9039 11.9265 17.0591 12.0808 17.0591 12.2712V13.7357C17.0591 13.9261 16.9039 14.0805 16.7125 14.0805H12.6558V25.9092C12.6558 26.5459 13.1747 27.062 13.8148 27.062H16.7125C16.9039 27.062 17.0591 27.2164 17.0591 27.4068V28.8713C17.0591 29.0617 16.9039 29.2161 16.7125 29.2161H13.3822Z"
              fill="#EDF0F3"
            />
            <path
              d="M22.0498 29.2161C20.4527 29.2161 19.1579 27.9282 19.1579 26.3395V0.782593H25.3801C25.5715 0.782593 25.7267 0.936957 25.7267 1.12737V2.59186C25.7267 2.78228 25.5715 2.93664 25.3801 2.93664H21.3234V11.9265H25.3801C25.5716 11.9265 25.7267 12.0808 25.7267 12.2712V13.7357C25.7267 13.9261 25.5716 14.0805 25.3801 14.0805H21.3234V25.9092C21.3234 26.5459 21.8423 27.062 22.4824 27.062H25.3801C25.5715 27.062 25.7267 27.2164 25.7267 27.4068V28.8713C25.7267 29.0617 25.5715 29.2161 25.3801 29.2161H22.0498Z"
              fill="#EDF0F3"
            />
            <path
              d="M32.7151 12.9316L29.9721 10.1238L29.9721 1.12838C29.9721 0.937967 29.8169 0.783603 29.6255 0.783603H28.1532C27.9618 0.783603 27.8066 0.937967 27.8066 1.12838V28.8723C27.8066 29.0627 27.9618 29.2171 28.1532 29.2171H29.6255C29.8169 29.2171 29.9721 29.0627 29.9721 28.8723V13.2819L32.7152 16.2758V28.8723C32.7152 29.0627 32.8703 29.2171 33.0618 29.2171H34.5341C34.7255 29.2171 34.8807 29.0627 34.8807 28.8723V16.4695C34.8807 15.5309 34.496 14.6329 33.8154 13.9827L32.7451 12.9603L34.8807 10.8361V1.12862C34.8807 0.938203 34.7255 0.783839 34.534 0.783839H33.0617C32.8703 0.783839 32.7151 0.938203 32.7151 1.12862V12.9316Z"
              fill="#EDF0F3"
            />
            <path
              d="M77.7873 13.1197C76.2749 13.1197 75.1406 12.6939 74.3844 11.8424C73.6282 10.9792 73.221 9.8244 73.1628 8.37796C73.1512 8.06301 73.1454 7.54976 73.1454 6.83821C73.1454 6.11499 73.1512 5.59008 73.1628 5.26346C73.221 3.81703 73.6282 2.66805 74.3844 1.81652C75.1406 0.953326 76.2749 0.521729 77.7873 0.521729C78.8228 0.521729 79.6837 0.714197 80.3701 1.09914C81.0565 1.47241 81.5626 1.95066 81.8883 2.5339C82.2257 3.10548 82.4119 3.69455 82.4468 4.30112V4.33611C82.4468 4.42943 82.4119 4.50525 82.342 4.56358C82.2722 4.6219 82.185 4.65106 82.0803 4.65106H81.7313C81.5219 4.65106 81.3939 4.52858 81.3473 4.28362C81.1263 3.29212 80.7249 2.59223 80.1432 2.18396C79.5615 1.77569 78.7762 1.57156 77.7873 1.57156C76.6937 1.57156 75.8444 1.88068 75.2395 2.49891C74.6345 3.11714 74.3088 4.06782 74.2622 5.35095C74.2506 5.6659 74.2448 6.14999 74.2448 6.80322C74.2448 7.45644 74.2506 7.9522 74.2622 8.29048C74.3088 9.5736 74.6345 10.5243 75.2395 11.1425C75.8444 11.7608 76.6937 12.0699 77.7873 12.0699C78.7762 12.0699 79.5615 11.8657 80.1432 11.4575C80.7249 11.0492 81.1263 10.3493 81.3473 9.35781C81.3939 9.11284 81.5219 8.99036 81.7313 8.99036H82.0803C82.185 8.99036 82.2722 9.02536 82.342 9.09535C82.4235 9.15367 82.4584 9.23532 82.4468 9.34031C82.4119 9.94688 82.2257 10.5418 81.8883 11.125C81.5626 11.6966 81.0565 12.1749 80.3701 12.5598C79.6837 12.9331 78.8228 13.1197 77.7873 13.1197Z"
              fill="#EDF0F3"
            />
            <path
              d="M90.8995 13.1197C87.9095 13.1197 86.3738 11.51 86.2924 8.29048C86.2808 7.94053 86.2749 7.45061 86.2749 6.82071C86.2749 6.19081 86.2808 5.70089 86.2924 5.35095C86.3389 3.76454 86.7694 2.56307 87.5838 1.74653C88.3981 0.929996 89.5034 0.521729 90.8995 0.521729C92.2955 0.521729 93.4008 0.929996 94.2152 1.74653C95.0295 2.56307 95.46 3.76454 95.5065 5.35095C95.5298 6.05084 95.5414 6.54076 95.5414 6.82071C95.5414 7.10067 95.5298 7.59059 95.5065 8.29048C95.4251 11.51 93.8894 13.1197 90.8995 13.1197ZM90.8995 12.0699C91.9465 12.0699 92.7784 11.7549 93.395 11.125C94.0232 10.4835 94.3606 9.50945 94.4071 8.20299C94.4304 7.5031 94.442 7.04234 94.442 6.82071C94.442 6.59908 94.4304 6.13832 94.4071 5.43844C94.3606 4.13198 94.0232 3.1638 93.395 2.5339C92.7667 1.89234 91.9349 1.57156 90.8995 1.57156C89.864 1.57156 89.0322 1.89234 88.404 2.5339C87.7757 3.1638 87.4383 4.13198 87.3918 5.43844C87.3802 5.78838 87.3744 6.24914 87.3744 6.82071C87.3744 7.39229 87.3802 7.85305 87.3918 8.20299C87.4383 9.50945 87.7699 10.4835 88.3865 11.125C89.0148 11.7549 89.8524 12.0699 90.8995 12.0699Z"
              fill="#EDF0F3"
            />
            <path
              d="M100.447 12.9447C100.331 12.9447 100.238 12.9097 100.168 12.8397C100.098 12.7698 100.063 12.6764 100.063 12.5598V1.09914C100.063 0.982488 100.098 0.889169 100.168 0.819181C100.238 0.737527 100.331 0.6967 100.447 0.6967H100.814C100.965 0.6967 101.087 0.766689 101.18 0.906667L107.619 10.7751V1.09914C107.619 0.982488 107.654 0.889169 107.724 0.819181C107.794 0.737527 107.887 0.6967 108.003 0.6967H108.318C108.445 0.6967 108.544 0.731695 108.614 0.801684C108.684 0.871672 108.719 0.970823 108.719 1.09914V12.5423C108.719 12.6589 108.684 12.7581 108.614 12.8397C108.544 12.9097 108.451 12.9447 108.335 12.9447H107.951C107.8 12.9447 107.678 12.8747 107.585 12.7348L101.163 2.90135V12.5598C101.163 12.6764 101.122 12.7698 101.04 12.8397C100.971 12.9097 100.878 12.9447 100.761 12.9447H100.447Z"
              fill="#EDF0F3"
            />
            <path
              d="M113.619 8.20299C113.503 8.20299 113.41 8.168 113.34 8.09801C113.27 8.02802 113.235 7.9347 113.235 7.81805V7.57309C113.235 7.45645 113.27 7.36313 113.34 7.29314C113.41 7.22315 113.503 7.18815 113.619 7.18815H118.767C118.884 7.18815 118.977 7.22315 119.046 7.29314C119.116 7.36313 119.151 7.45645 119.151 7.57309V7.81805C119.151 7.9347 119.116 8.02802 119.046 8.09801C118.977 8.168 118.884 8.20299 118.767 8.20299H113.619Z"
              fill="#EDF0F3"
            />
            <path
              d="M74.0354 29.0421C73.919 29.0421 73.8259 29.0071 73.7561 28.9371C73.6863 28.8672 73.6514 28.7738 73.6514 28.6572V17.1965C73.6514 17.0799 73.6863 16.9866 73.7561 16.9166C73.8259 16.8349 73.919 16.7941 74.0354 16.7941H74.4018C74.5531 16.7941 74.6752 16.8641 74.7683 17.0041L81.2077 26.8725V17.1965C81.2077 17.0799 81.2426 16.9866 81.3124 16.9166C81.3822 16.8349 81.4753 16.7941 81.5917 16.7941H81.9058C82.0337 16.7941 82.1326 16.8291 82.2024 16.8991C82.2722 16.9691 82.3071 17.0682 82.3071 17.1965V28.6397C82.3071 28.7563 82.2722 28.8555 82.2024 28.9371C82.1326 29.0071 82.0396 29.0421 81.9232 29.0421H81.5393C81.3881 29.0421 81.2659 28.9721 81.1728 28.8322L74.7509 18.9988V28.6572C74.7509 28.7738 74.7101 28.8672 74.6287 28.9371C74.5589 29.0071 74.4658 29.0421 74.3495 29.0421H74.0354Z"
              fill="#EDF0F3"
            />
            <path
              d="M87.7099 29.0421C87.5935 29.0421 87.5005 29.0071 87.4307 28.9371C87.3609 28.8672 87.326 28.7738 87.326 28.6572V17.1965C87.326 17.0799 87.3609 16.9866 87.4307 16.9166C87.5005 16.8349 87.5935 16.7941 87.7099 16.7941H94.5158C94.6438 16.7941 94.7426 16.8291 94.8124 16.8991C94.8823 16.9691 94.9172 17.0682 94.9172 17.1965V17.459C94.9172 17.5756 94.8764 17.669 94.795 17.739C94.7252 17.8089 94.6321 17.8439 94.5158 17.8439H88.4254V22.3057H94.1319C94.2598 22.3057 94.3587 22.3407 94.4285 22.4107C94.4983 22.4807 94.5332 22.5798 94.5332 22.7082V22.9706C94.5332 23.0873 94.4925 23.1806 94.4111 23.2506C94.3413 23.3206 94.2482 23.3555 94.1319 23.3555H88.4254V27.9923H94.6554C94.7834 27.9923 94.8823 28.0273 94.9521 28.0973C95.0219 28.1673 95.0568 28.2664 95.0568 28.3947V28.6572C95.0568 28.7738 95.016 28.8672 94.9346 28.9371C94.8648 29.0071 94.7717 29.0421 94.6554 29.0421H87.7099Z"
              fill="#EDF0F3"
            />
            <path
              d="M103.415 29.2171C101.903 29.2171 100.768 28.7913 100.012 27.9398C99.256 27.0766 98.8488 25.9218 98.7906 24.4754C98.779 24.1604 98.7731 23.6472 98.7731 22.9356C98.7731 22.2124 98.779 21.6875 98.7906 21.3609C98.8488 19.9144 99.256 18.7655 100.012 17.9139C100.768 17.0507 101.903 16.6191 103.415 16.6191C104.451 16.6191 105.311 16.8116 105.998 17.1965C106.684 17.5698 107.19 18.0481 107.516 18.6313C107.854 19.2029 108.04 19.792 108.075 20.3985V20.4335C108.075 20.5268 108.04 20.6027 107.97 20.661C107.9 20.7193 107.813 20.7485 107.708 20.7485H107.359C107.15 20.7485 107.022 20.626 106.975 20.381C106.754 19.3895 106.353 18.6896 105.771 18.2814C105.189 17.8731 104.404 17.669 103.415 17.669C102.322 17.669 101.472 17.9781 100.867 18.5963C100.262 19.2146 99.9366 20.1652 99.89 21.4484C99.8784 21.7633 99.8726 22.2474 99.8726 22.9006C99.8726 23.5538 99.8784 24.0496 99.89 24.3879C99.9366 25.671 100.262 26.6217 100.867 27.2399C101.472 27.8582 102.322 28.1673 103.415 28.1673C104.404 28.1673 105.189 27.9631 105.771 27.5549C106.353 27.1466 106.754 26.4467 106.975 25.4552C107.022 25.2103 107.15 25.0878 107.359 25.0878H107.708C107.813 25.0878 107.9 25.1228 107.97 25.1928C108.051 25.2511 108.086 25.3327 108.075 25.4377C108.04 26.0443 107.854 26.6392 107.516 27.2224C107.19 27.794 106.684 28.2723 105.998 28.6572C105.311 29.0305 104.451 29.2171 103.415 29.2171Z"
              fill="#EDF0F3"
            />
            <path
              d="M115.445 29.0421C115.329 29.0421 115.236 29.0071 115.166 28.9371C115.096 28.8672 115.061 28.7738 115.061 28.6572V17.8439H111.606C111.49 17.8439 111.397 17.8089 111.327 17.739C111.257 17.669 111.222 17.5756 111.222 17.459V17.1965C111.222 17.0799 111.257 16.9866 111.327 16.9166C111.397 16.8349 111.49 16.7941 111.606 16.7941H119.599C119.727 16.7941 119.826 16.8291 119.895 16.8991C119.965 16.9691 120 17.0682 120 17.1965V17.459C120 17.5756 119.959 17.669 119.878 17.739C119.808 17.8089 119.715 17.8439 119.599 17.8439H116.161V28.6572C116.161 28.7738 116.12 28.8672 116.039 28.9371C115.969 29.0071 115.876 29.0421 115.759 29.0421H115.445Z"
              fill="#EDF0F3"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M45.7302 2.89817L48.2366 -4.03452e-05L48.6154 0.437988L46.109 3.33619L45.7302 2.89817Z"
              fill="#EDF0F3"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M45.7305 6.95566L51.7458 -4.03452e-05L52.1246 0.437988L46.1093 7.39368L45.7305 6.95566Z"
              fill="#EDF0F3"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M45.7307 11.0131L55.2548 -4.03452e-05L55.6336 0.437988L46.1095 11.4512L45.7307 11.0131Z"
              fill="#EDF0F3"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M45.7302 15.0706L58.7632 -4.03452e-05L59.142 0.437988L46.109 15.5087L45.7302 15.0706Z"
              fill="#EDF0F3"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M45.7303 19.1281L60.7685 1.73885L61.1473 2.17688L46.1091 19.5661L45.7303 19.1281Z"
              fill="#EDF0F3"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M45.7303 23.1856L60.7685 5.79635L61.1473 6.23438L46.1091 23.6236L45.7303 23.1856Z"
              fill="#EDF0F3"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M45.7303 27.2432L60.7685 9.85396L61.1473 10.292L46.1091 27.6812L45.7303 27.2432Z"
              fill="#EDF0F3"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M47.2342 29.5618L60.7685 13.9115L61.1473 14.3495L47.613 29.9998L47.2342 29.5618Z"
              fill="#EDF0F3"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M50.7431 29.5618L60.7685 17.969L61.1473 18.407L51.1219 29.9998L50.7431 29.5618Z"
              fill="#EDF0F3"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M54.252 29.5617L60.7685 22.0263L61.1473 22.4644L54.6308 29.9997L54.252 29.5617Z"
              fill="#EDF0F3"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M57.7608 29.5619L60.7685 26.0841L61.1473 26.5221L58.1397 29.9999L57.7608 29.5619Z"
              fill="#EDF0F3"
            />
          </svg>
        </div>{" "}
        <div className="footer_links">
          <a onClick={(e) => handleNavLinkClick(e, "connect")}>Inicio</a>
          <a onClick={(e) => handleNavLinkClick(e, "about")}>Como funciona?</a>
          <a onClick={(e) => handleNavLinkClick(e, "premio")}>Prêmio</a>
        </div>
        <img src="rectangle-footer.png" className="rectangle_footer"></img>
        <img
          src="rectangle-footer.png"
          className="rectangle_footer_mobile"
        ></img>
      </footer>
    </>
  );
}
