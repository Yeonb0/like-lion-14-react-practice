import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyles = createGlobalStyle`
    ${reset}
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        scroll-behavior: smooth;
    }

    :root {
        /* brand */
        --brand-primary: #b5402d;

        /* background */
        --background-primary: #ffffff;
        --background-secondary: #f5f5f5;

        /* text */
        --text-primary: #1a1a1a;
        --text-secondary: #555555;
        --text-tertiary: #999999;

        /* border */
        --border-primary: #e5e5e5;

        /* icon */
        --icon-tertiary: #999999;
    }

    html {
        font-size: 62.5%;
    }

    body {
        height: 100dvh;
        font-family: "Pretendard", sans-serif;
    }
`;