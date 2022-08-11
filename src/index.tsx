import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
const container = document.getElementById("app");
const root = createRoot(container!); // https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html#updates-to-client-rendering-apis
root.render(<App />);
