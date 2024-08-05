import { css } from "@emotion/react";

export const reset = css`
    :root {
        --bg-color: #F1F3F8;
        --line-color:#D6E0F0;
        --font:'Raleway';
    }

    html, body, #root {
        margin: 0;
        padding: 0;
    }

    body {
        background-color: var(--bg-color);
        font-family: var(--font);
    }

    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
    }

    a {
        text-decoration: none;
        color: #000000;
        cursor: pointer;
    }

    button {
        box-sizing: border-box;
        border: 1px solid #dbdbdb;
        padding: 5px 10px;
        background-color: #ffffff;
        cursor: pointer;
        &:hover {
            background-color: #fafafa;
        }
        &:active {
            background-color: #eeeeee;
        }
    }

    input[type="text"],
    input[type="password"] {
        box-sizing: border-box;
        border: 1px solid #dbdbdb;
        outline: none;
        padding: 5px 10px;
    }
`;