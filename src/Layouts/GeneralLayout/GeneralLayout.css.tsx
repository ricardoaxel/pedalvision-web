import { css } from "@emotion/react"

export const Style = () => {
  return css`
    @import url("https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
    * {
      margin: 0;
      -webkit-touch-callout: none; /* iOS Safari */
      -webkit-user-select: none; /* Safari */
      -khtml-user-select: none; /* Konqueror HTML */
      -moz-user-select: none; /* Old versions of Firefox */
      -ms-user-select: none; /* Internet Explorer/Edge */
      user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
    }
    body {
      margin: 0;
      color: white;
      transition: color 0.2s;
      font-family: "Rubik";
      width: 100vw;
      height: 100vh;
      background-color: #151625;
      overflow: hidden;
    }
    h1 {
      font-weight: 200;
    }
    h2 {
      font-weight: 400;
    }
  `
}
