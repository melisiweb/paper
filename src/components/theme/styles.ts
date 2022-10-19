import { css } from "@emotion/react";

export const globalStyles = css`
  :root {
    --main-shadow: 0px 0px 50px rgba(125, 0, 255, 0.15);
    --main-radius: 8px;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
      "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;
