// import React, { useEffect } from "react";
// import "./DashBoard.style.css";

// const DashBoard = () => {
//   useEffect(() => {
//     const divElement = document.getElementById("viz1758523525001");
//     const vizElement = divElement.getElementsByTagName("object")[0];

//     // 항상 100% 기준으로 설정
//     vizElement.style.width = "100%";
//     vizElement.style.height = "100%";
//     vizElement.style.minWidth = "0";
//     vizElement.style.minHeight = "0";
//     vizElement.style.maxWidth = "100%";
//     vizElement.style.maxHeight = "100%";

//     // Tableau API script 로드
//     const scriptElement = document.createElement("script");
//     scriptElement.src = "https://public.tableau.com/javascripts/api/viz_v1.js";
//     vizElement.parentNode.insertBefore(scriptElement, vizElement);
//   }, []);

//   return (
//     <div
//       className="tableauPlaceholder"
//       id="viz1758523525001"
//     >
//       <noscript>
//         <a href="#">
//           <img
//             alt="dashboard"
//             src="https://public.tableau.com/static/images/_1/_17585163361350/1_/1.png"
//             style={{ border: "none" }}
//           />
//         </a>
//       </noscript>
//       <object className="tableauViz">
//         <param name="host_url" value="https%3A%2F%2Fpublic.tableau.com%2F" />
//         <param name="embed_code_version" value="3" />
//         <param name="site_root" value="" />
//         <param name="name" value="_17585163361350/1_" />
//         <param name="tabs" value="yes" />
//         <param name="toolbar" value="yes" />
//         <param name="language" value="ko-KR" />
//       </object>
//     </div>
//   );
// };

// export default DashBoard;


import React from "react";

const DashBoard = () => {
  return (
    <div className="tableauContainer">
      <iframe
        src="https://public.tableau.com/views/_17585163361350/1_?:showVizHome=no&:embed=true"
        frameBorder="0"
        title="Crime Dashboard"
        style={{
          width: "100%",
          height: "90vh", // 화면 전체 높이
          border: "none",
        }}
      ></iframe>
    </div>
  );
};

export default DashBoard;
