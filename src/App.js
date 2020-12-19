import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", { id: "something-important" }, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Grotto",
      animal: "dog",
      breed: "German Sherpherd",
    }),
    React.createElement(Pet, {
      name: "Speedy",
      animal: "frog",
      breed: "Froggy Frog",
    }),
    React.createElement(Pet, {
      name: "Rocky",
      animal: "dog",
      breed: "Havanese",
    }),
  ]);
};

render(React.createElement(App), document.getElementById("root"));
