import React from "react";

const Sidebar = ({ show, closeSidebar }) => {
  const sidebarStyles = {
    width: "80%",
    height: "100%",
    backgroundColor: "#1F2832",
    position: "fixed",
  };

  const handleNavLinkClick = (event, targetId) => {
    event.preventDefault();
    closeSidebar();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div
      className="navigation_header"
      style={show ? sidebarStyles : { display: "none" }}
    >
      {" "}
      <div className="logo_sidebar">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="120"
          height="30"
          viewBox="0 0 100 25"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0 0.999342C0 0.84066 0.129323 0.712023 0.28885 0.712023H1.51576C1.67529 0.712023 1.80462 0.84066 1.80462 0.999341V21.5911C1.80462 22.1216 2.23701 22.5517 2.7704 22.5517H4.98085V0.999342C4.98085 0.84066 5.11017 0.712023 5.2697 0.712023H6.49661C6.65614 0.712023 6.78546 0.84066 6.78546 0.999342V24.3468H2.40992C1.07896 24.3468 0 23.2735 0 21.9496L0 0.999342Z"
            fill="#EDF0F3"
          />
          <path
            d="M11.1518 24.3468C9.82086 24.3468 8.74191 23.2736 8.74191 21.9497V0.652225H13.9271C14.0866 0.652225 14.2159 0.780861 14.2159 0.939543V2.15995C14.2159 2.31863 14.0866 2.44727 13.9271 2.44727H10.5465V9.93878H13.9271C14.0866 9.93878 14.2159 10.0674 14.2159 10.2261V11.4465C14.2159 11.6052 14.0866 11.7338 13.9271 11.7338H10.5465V21.5911C10.5465 22.1217 10.9789 22.5518 11.5123 22.5518H13.9271C14.0866 22.5518 14.2159 22.6804 14.2159 22.8391V24.0595C14.2159 24.2182 14.0866 24.3468 13.9271 24.3468H11.1518Z"
            fill="#EDF0F3"
          />
          <path
            d="M18.3748 24.3468C17.0439 24.3468 15.9649 23.2736 15.9649 21.9497V0.652222H21.1501C21.3096 0.652222 21.4389 0.780859 21.4389 0.93954V2.15995C21.4389 2.31863 21.3096 2.44726 21.1501 2.44726H17.7695V9.93878H21.1501C21.3096 9.93878 21.439 10.0674 21.439 10.2261V11.4465C21.439 11.6052 21.3096 11.7338 21.1501 11.7338H17.7695V21.5911C17.7695 22.1217 18.2019 22.5518 18.7353 22.5518H21.1501C21.3096 22.5518 21.4389 22.6804 21.4389 22.8391V24.0595C21.4389 24.2182 21.3096 24.3468 21.1501 24.3468H18.3748Z"
            fill="#EDF0F3"
          />
          <path
            d="M27.2626 10.7764L24.9768 8.43655L24.9768 0.940382C24.9768 0.7817 24.8475 0.653064 24.6879 0.653064H23.461C23.3015 0.653064 23.1722 0.7817 23.1722 0.940382V24.0603C23.1722 24.219 23.3015 24.3476 23.461 24.3476H24.6879C24.8475 24.3476 24.9768 24.219 24.9768 24.0603V11.0683L27.2626 13.5632V24.0603C27.2626 24.219 27.3919 24.3476 27.5515 24.3476H28.7784C28.9379 24.3476 29.0672 24.219 29.0672 24.0603V13.7246C29.0672 12.9425 28.7467 12.1941 28.1795 11.6523L27.2876 10.8003L29.0672 9.03013V0.940578C29.0672 0.781897 28.9379 0.65326 28.7784 0.65326H27.5514C27.3919 0.65326 27.2626 0.781897 27.2626 0.940579V10.7764Z"
            fill="#EDF0F3"
          />
          <path
            d="M64.8228 10.9331C63.5624 10.9331 62.6172 10.5783 61.987 9.86871C61.3568 9.14938 61.0175 8.18704 60.969 6.98168C60.9593 6.71922 60.9545 6.29151 60.9545 5.69855C60.9545 5.09587 60.9593 4.65844 60.969 4.38626C61.0175 3.1809 61.3568 2.22342 61.987 1.51381C62.6172 0.794479 63.5624 0.434814 64.8228 0.434814C65.6856 0.434814 66.4031 0.595205 66.9751 0.915987C67.5471 1.22705 67.9688 1.62559 68.2403 2.11163C68.5214 2.58794 68.6765 3.07883 68.7056 3.58431V3.61347C68.7056 3.69123 68.6765 3.75442 68.6184 3.80302C68.5602 3.85162 68.4875 3.87593 68.4002 3.87593H68.1094C67.9349 3.87593 67.8282 3.77386 67.7895 3.56973C67.6053 2.74347 67.2708 2.16023 66.786 1.82001C66.3013 1.47979 65.6469 1.30967 64.8228 1.30967C63.9114 1.30967 63.2037 1.56727 62.6996 2.08247C62.1954 2.59766 61.924 3.38989 61.8852 4.45917C61.8755 4.72162 61.8706 5.12503 61.8706 5.66939C61.8706 6.21374 61.8755 6.62687 61.8852 6.90877C61.924 7.97804 62.1954 8.77028 62.6996 9.28547C63.2037 9.80067 63.9114 10.0583 64.8228 10.0583C65.6469 10.0583 66.3013 9.88815 66.786 9.54793C67.2708 9.20771 67.6053 8.62447 67.7895 7.79821C67.8282 7.59408 67.9349 7.49201 68.1094 7.49201H68.4002C68.4875 7.49201 68.5602 7.52117 68.6184 7.5795C68.6862 7.6281 68.7153 7.69614 68.7056 7.78363C68.6765 8.2891 68.5214 8.78486 68.2403 9.27089C67.9688 9.7472 67.5471 10.1457 66.9751 10.4665C66.4031 10.7776 65.6856 10.9331 64.8228 10.9331Z"
            fill="#EDF0F3"
          />
          <path
            d="M75.7496 10.9331C73.2579 10.9331 71.9782 9.59167 71.9103 6.90877C71.9006 6.61715 71.8958 6.20888 71.8958 5.68397C71.8958 5.15905 71.9006 4.75079 71.9103 4.45917C71.9491 3.13716 72.3078 2.13593 72.9865 1.45548C73.6651 0.775037 74.5862 0.434814 75.7496 0.434814C76.913 0.434814 77.834 0.775037 78.5126 1.45548C79.1913 2.13593 79.55 3.13716 79.5888 4.45917C79.6082 5.04241 79.6179 5.45067 79.6179 5.68397C79.6179 5.91726 79.6082 6.32553 79.5888 6.90877C79.5209 9.59167 78.2412 10.9331 75.7496 10.9331ZM75.7496 10.0583C76.6221 10.0583 77.3153 9.79581 77.8291 9.27089C78.3527 8.73625 78.6338 7.92458 78.6726 6.83587C78.692 6.25263 78.7017 5.86866 78.7017 5.68397C78.7017 5.49928 78.692 5.11531 78.6726 4.53207C78.6338 3.44336 78.3527 2.63654 77.8291 2.11163C77.3056 1.57699 76.6124 1.30967 75.7496 1.30967C74.8867 1.30967 74.1935 1.57699 73.67 2.11163C73.1464 2.63654 72.8653 3.44336 72.8265 4.53207C72.8168 4.82369 72.812 5.20766 72.812 5.68397C72.812 6.16028 72.8168 6.54425 72.8265 6.83587C72.8653 7.92458 73.1416 8.73625 73.6554 9.27089C74.179 9.79581 74.877 10.0583 75.7496 10.0583Z"
            fill="#EDF0F3"
          />
          <path
            d="M83.7059 10.7873C83.609 10.7873 83.5314 10.7582 83.4732 10.6998C83.4151 10.6415 83.386 10.5637 83.386 10.4665V0.915987C83.386 0.81878 83.4151 0.741015 83.4732 0.682691C83.5314 0.614647 83.609 0.580624 83.7059 0.580624H84.0113C84.1373 0.580624 84.2391 0.638948 84.3167 0.755596L89.6829 8.97927V0.915987C89.6829 0.81878 89.712 0.741015 89.7701 0.682691C89.8283 0.614647 89.9059 0.580624 90.0028 0.580624H90.2646C90.3712 0.580624 90.4536 0.609786 90.5118 0.668111C90.57 0.726434 90.5991 0.80906 90.5991 0.915987V10.4519C90.5991 10.5492 90.57 10.6318 90.5118 10.6998C90.4536 10.7582 90.3761 10.7873 90.2791 10.7873H89.9592C89.8332 10.7873 89.7314 10.729 89.6538 10.6123L84.3022 2.41783V10.4665C84.3022 10.5637 84.2682 10.6415 84.2004 10.6998C84.1422 10.7582 84.0646 10.7873 83.9677 10.7873H83.7059Z"
            fill="#EDF0F3"
          />
          <path
            d="M94.6827 6.83587C94.5857 6.83587 94.5082 6.8067 94.45 6.74838C94.3918 6.69006 94.3627 6.61229 94.3627 6.51508V6.31095C94.3627 6.21374 94.3918 6.13598 94.45 6.07765C94.5082 6.01933 94.5857 5.99017 94.6827 5.99017H98.9727C99.0697 5.99017 99.1472 6.01933 99.2054 6.07765C99.2636 6.13598 99.2927 6.21374 99.2927 6.31095V6.51508C99.2927 6.61229 99.2636 6.69006 99.2054 6.74838C99.1472 6.8067 99.0697 6.83587 98.9727 6.83587H94.6827Z"
            fill="#EDF0F3"
          />
          <path
            d="M61.6961 24.2018C61.5992 24.2018 61.5216 24.1727 61.4635 24.1143C61.4053 24.056 61.3762 23.9782 61.3762 23.881V14.3305C61.3762 14.2333 61.4053 14.1555 61.4635 14.0972C61.5216 14.0292 61.5992 13.9951 61.6961 13.9951H62.0015C62.1276 13.9951 62.2294 14.0535 62.3069 14.1701L67.6731 22.3938V14.3305C67.6731 14.2333 67.7022 14.1555 67.7604 14.0972C67.8185 14.0292 67.8961 13.9951 67.9931 13.9951H68.2548C68.3615 13.9951 68.4439 14.0243 68.502 14.0826C68.5602 14.1409 68.5893 14.2236 68.5893 14.3305V23.8665C68.5893 23.9637 68.5602 24.0463 68.502 24.1143C68.4439 24.1727 68.3663 24.2018 68.2694 24.2018H67.9494C67.8234 24.2018 67.7216 24.1435 67.644 24.0268L62.2924 15.8323V23.881C62.2924 23.9782 62.2584 24.056 62.1906 24.1143C62.1324 24.1727 62.0549 24.2018 61.9579 24.2018H61.6961Z"
            fill="#EDF0F3"
          />
          <path
            d="M73.0916 24.2018C72.9946 24.2018 72.9171 24.1727 72.8589 24.1143C72.8007 24.056 72.7716 23.9782 72.7716 23.881V14.3305C72.7716 14.2333 72.8007 14.1555 72.8589 14.0972C72.9171 14.0292 72.9946 13.9951 73.0916 13.9951H78.7632C78.8698 13.9951 78.9522 14.0243 79.0104 14.0826C79.0685 14.1409 79.0976 14.2236 79.0976 14.3305V14.5492C79.0976 14.6464 79.0637 14.7242 78.9958 14.7825C78.9377 14.8408 78.8601 14.87 78.7632 14.87H73.6878V18.5881H78.4432C78.5499 18.5881 78.6323 18.6173 78.6904 18.6756C78.7486 18.7339 78.7777 18.8166 78.7777 18.9235V19.1422C78.7777 19.2394 78.7438 19.3172 78.6759 19.3755C78.6177 19.4338 78.5402 19.463 78.4432 19.463H73.6878V23.327H78.8795C78.9861 23.327 79.0685 23.3561 79.1267 23.4144C79.1849 23.4728 79.214 23.5554 79.214 23.6623V23.881C79.214 23.9782 79.18 24.056 79.1122 24.1143C79.054 24.1727 78.9764 24.2018 78.8795 24.2018H73.0916Z"
            fill="#EDF0F3"
          />
          <path
            d="M86.1793 24.3476C84.9189 24.3476 83.9737 23.9928 83.3435 23.2832C82.7133 22.5639 82.374 21.6015 82.3255 20.3962C82.3158 20.1337 82.311 19.706 82.311 19.1131C82.311 18.5104 82.3158 18.0729 82.3255 17.8008C82.374 16.5954 82.7133 15.6379 83.3435 14.9283C83.9737 14.209 84.9189 13.8493 86.1793 13.8493C87.0421 13.8493 87.7596 14.0097 88.3316 14.3305C88.9036 14.6416 89.3253 15.0401 89.5968 15.5261C89.8779 16.0024 90.033 16.4933 90.0621 16.9988V17.028C90.0621 17.1057 90.033 17.1689 89.9749 17.2175C89.9167 17.2661 89.844 17.2904 89.7567 17.2904H89.4659C89.2914 17.2904 89.1847 17.1884 89.146 16.9842C88.9617 16.158 88.6273 15.5747 88.1425 15.2345C87.6578 14.8943 87.0034 14.7242 86.1793 14.7242C85.2679 14.7242 84.5602 14.9818 84.0561 15.497C83.5519 16.0122 83.2805 16.8044 83.2417 17.8737C83.232 18.1361 83.2271 18.5395 83.2271 19.0839C83.2271 19.6282 83.232 20.0414 83.2417 20.3233C83.2805 21.3925 83.5519 22.1848 84.0561 22.7C84.5602 23.2152 85.2679 23.4728 86.1793 23.4728C87.0034 23.4728 87.6578 23.3027 88.1425 22.9624C88.6273 22.6222 88.9617 22.039 89.146 21.2127C89.1847 21.0086 89.2914 20.9065 89.4659 20.9065H89.7567C89.844 20.9065 89.9167 20.9357 89.9749 20.994C90.0427 21.0426 90.0718 21.1106 90.0621 21.1981C90.033 21.7036 89.8779 22.1994 89.5968 22.6854C89.3253 23.1617 88.9036 23.5603 88.3316 23.881C87.7596 24.1921 87.0421 24.3476 86.1793 24.3476Z"
            fill="#EDF0F3"
          />
          <path
            d="M96.2044 24.2018C96.1075 24.2018 96.0299 24.1727 95.9717 24.1143C95.9136 24.056 95.8845 23.9782 95.8845 23.881V14.87H93.0051C92.9081 14.87 92.8305 14.8408 92.7724 14.7825C92.7142 14.7242 92.6851 14.6464 92.6851 14.5492V14.3305C92.6851 14.2333 92.7142 14.1555 92.7724 14.0972C92.8305 14.0292 92.9081 13.9951 93.0051 13.9951H99.6655C99.7722 13.9951 99.8546 14.0243 99.9128 14.0826C99.9709 14.1409 100 14.2236 100 14.3305V14.5492C100 14.6464 99.9661 14.7242 99.8982 14.7825C99.84 14.8408 99.7625 14.87 99.6655 14.87H96.8007V23.881C96.8007 23.9782 96.7667 24.056 96.6989 24.1143C96.6407 24.1727 96.5631 24.2018 96.4662 24.2018H96.2044Z"
            fill="#EDF0F3"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M38.1085 2.41514L40.1971 -3.36285e-05L40.5128 0.36499L38.4242 2.78016L38.1085 2.41514Z"
            fill="#EDF0F3"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M38.1088 5.79638L43.1215 -3.36285e-05L43.4371 0.36499L38.4244 6.1614L38.1088 5.79638Z"
            fill="#EDF0F3"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M38.1089 9.17762L46.0457 -3.36285e-05L46.3613 0.36499L38.4245 9.54265L38.1089 9.17762Z"
            fill="#EDF0F3"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M38.1085 12.5589L48.9694 -3.36285e-05L49.285 0.36499L38.4242 12.9239L38.1085 12.5589Z"
            fill="#EDF0F3"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M38.1086 15.9401L50.6404 1.44906L50.9561 1.81409L38.4243 16.3051L38.1086 15.9401Z"
            fill="#EDF0F3"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M38.1086 19.3213L50.6404 4.83029L50.9561 5.19531L38.4243 19.6863L38.1086 19.3213Z"
            fill="#EDF0F3"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M38.1086 22.7027L50.6404 8.21164L50.9561 8.57666L38.4243 23.0677L38.1086 22.7027Z"
            fill="#EDF0F3"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M39.3618 24.6348L50.6404 11.5929L50.9561 11.9579L39.6775 24.9998L39.3618 24.6348Z"
            fill="#EDF0F3"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M42.2859 24.6349L50.6404 14.9742L50.9561 15.3392L42.6015 24.9999L42.2859 24.6349Z"
            fill="#EDF0F3"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M45.2099 24.6346L50.6404 18.3552L50.9561 18.7202L45.5256 24.9997L45.2099 24.6346Z"
            fill="#EDF0F3"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M48.134 24.635L50.6404 21.7368L50.9561 22.1018L48.4497 25L48.134 24.635Z"
            fill="#EDF0F3"
          />
        </svg>
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
      </div>
      <div className="list_sidebar">
        <ul>
          <a onClick={(e) => handleNavLinkClick(e, "connect")}>Início</a>
        </ul>
        <ul>
          <a onClick={(e) => handleNavLinkClick(e, "about")}>Como funciona?</a>
        </ul>
        <ul>
          <a onClick={(e) => handleNavLinkClick(e, "premio")}>Prêmio</a>
        </ul>
      </div>
      <div className="sidebar_itens">
        <div
          className="button_buy_sidebar"
          onClick={(e) => handleNavLinkClick(e, "buy")}
        >
          Comprar número
        </div>

        <div className="detail_sidebar">
          <svg
            width="279"
            height="72"
            viewBox="0 0 279 72"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              y1="-0.388268"
              x2="18.4038"
              y2="-0.388268"
              transform="matrix(-0.755689 -0.654931 0.755689 -0.654931 142.857 12.0532)"
              stroke="white"
              stroke-width="0.776536"
            />
            <line
              y1="-0.388268"
              x2="44.169"
              y2="-0.388268"
              transform="matrix(-0.755689 -0.654931 0.755689 -0.654931 142.857 28.9302)"
              stroke="white"
              stroke-width="0.776536"
            />
            <line
              y1="-0.388268"
              x2="69.9343"
              y2="-0.388268"
              transform="matrix(-0.755689 -0.654931 0.755689 -0.654931 142.857 45.8037)"
              stroke="white"
              stroke-width="0.776536"
            />
            <line
              y1="-0.388268"
              x2="95.6995"
              y2="-0.388268"
              transform="matrix(-0.755689 -0.654931 0.755689 -0.654931 142.857 62.6772)"
              stroke="white"
              stroke-width="0.776536"
            />
            <line
              y1="-0.388268"
              x2="110.423"
              y2="-0.388268"
              transform="matrix(-0.755689 -0.654931 0.755689 -0.654931 134.512 72.3226)"
              stroke="white"
              stroke-width="0.776536"
            />
            <line
              y1="-0.388268"
              x2="110.423"
              y2="-0.388268"
              transform="matrix(-0.755689 -0.654931 0.755689 -0.654931 115.042 72.3226)"
              stroke="white"
              stroke-width="0.776536"
            />
            <line
              y1="-0.388268"
              x2="110.423"
              y2="-0.388268"
              transform="matrix(-0.755689 -0.654931 0.755689 -0.654931 95.5708 72.3226)"
              stroke="white"
              stroke-width="0.776536"
            />
            <line
              y1="-0.388268"
              x2="99.3803"
              y2="-0.388268"
              transform="matrix(-0.755689 -0.654931 0.755689 -0.654931 76.1005 72.3226)"
              stroke="white"
              stroke-width="0.776536"
            />
            <line
              y1="-0.388268"
              x2="73.615"
              y2="-0.388268"
              transform="matrix(-0.755689 -0.654931 0.755689 -0.654931 56.6302 72.3226)"
              stroke="white"
              stroke-width="0.776536"
            />
            <line
              y1="-0.388268"
              x2="47.8498"
              y2="-0.388268"
              transform="matrix(-0.755689 -0.654931 0.755689 -0.654931 37.1596 72.3226)"
              stroke="white"
              stroke-width="0.776536"
            />
            <line
              y1="-0.388268"
              x2="22.0845"
              y2="-0.388268"
              transform="matrix(-0.755689 -0.654931 0.755689 -0.654931 17.6891 72.3226)"
              stroke="white"
              stroke-width="0.776536"
            />
            <line
              y1="-0.388268"
              x2="18.4038"
              y2="-0.388268"
              transform="matrix(-0.755689 -0.654931 0.755689 -0.654931 279 12.0531)"
              stroke="white"
              stroke-width="0.776536"
            />
            <line
              y1="-0.388268"
              x2="44.169"
              y2="-0.388268"
              transform="matrix(-0.755689 -0.654931 0.755689 -0.654931 279 28.9302)"
              stroke="white"
              stroke-width="0.776536"
            />
            <line
              y1="-0.388268"
              x2="69.9343"
              y2="-0.388268"
              transform="matrix(-0.755689 -0.654931 0.755689 -0.654931 279 45.8037)"
              stroke="white"
              stroke-width="0.776536"
            />
            <line
              y1="-0.388268"
              x2="95.6995"
              y2="-0.388268"
              transform="matrix(-0.755689 -0.654931 0.755689 -0.654931 279 62.6771)"
              stroke="white"
              stroke-width="0.776536"
            />
            <line
              y1="-0.388268"
              x2="110.423"
              y2="-0.388268"
              transform="matrix(-0.755689 -0.654931 0.755689 -0.654931 270.656 72.3226)"
              stroke="white"
              stroke-width="0.776536"
            />
            <line
              y1="-0.388268"
              x2="110.423"
              y2="-0.388268"
              transform="matrix(-0.755689 -0.654931 0.755689 -0.654931 251.185 72.3226)"
              stroke="white"
              stroke-width="0.776536"
            />
            <line
              y1="-0.388268"
              x2="110.423"
              y2="-0.388268"
              transform="matrix(-0.755689 -0.654931 0.755689 -0.654931 231.714 72.3226)"
              stroke="white"
              stroke-width="0.776536"
            />
            <line
              y1="-0.388268"
              x2="99.3803"
              y2="-0.388268"
              transform="matrix(-0.755689 -0.654931 0.755689 -0.654931 212.244 72.3226)"
              stroke="white"
              stroke-width="0.776536"
            />
            <line
              y1="-0.388268"
              x2="73.615"
              y2="-0.388268"
              transform="matrix(-0.755689 -0.654931 0.755689 -0.654931 192.774 72.3226)"
              stroke="white"
              stroke-width="0.776536"
            />
            <line
              y1="-0.388268"
              x2="47.8498"
              y2="-0.388268"
              transform="matrix(-0.755689 -0.654931 0.755689 -0.654931 173.303 72.3226)"
              stroke="white"
              stroke-width="0.776536"
            />
            <line
              y1="-0.388268"
              x2="22.0845"
              y2="-0.388268"
              transform="matrix(-0.755689 -0.654931 0.755689 -0.654931 153.832 72.3226)"
              stroke="white"
              stroke-width="0.776536"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
