const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed),
  ]);
};

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

ReactDOM.render(React.createElement(App), document.getElementById("root"));
