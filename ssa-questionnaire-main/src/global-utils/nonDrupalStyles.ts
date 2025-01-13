import { uswdsStyles } from "./uswdsStyles";

export const nonDrupalStyles: string = `
html {
    height: 100%;
    overflow:auto; 
}

html,
html * {
    font-family: 'PublicSans' !important;
   /* color: var(--main-black); */
    box-sizing: border-box;
}

body {
    margin: 0;
    font-family: 'PublicSans';
    height: 100%;
    /* background-color: #F1F3F6; */
}

p {
    line-height: 1.6;
}

#root {
    margin-left: auto;
    margin-right: auto;
    height: 100%;
    /* margin-top: 40px; */
    /* margin-bottom: 40px; */
    /* max-width: 48rem; */
    /* max-width: 768px; */
    /* padding: 20px 50px 70px 50px; */
}

/* @media (min-width: 480px) {
    #root {
        padding: 0;
    } 
} */

${uswdsStyles}
`;
