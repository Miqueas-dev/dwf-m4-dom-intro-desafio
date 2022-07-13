const cosasQueAprendimos = [
  {
    tema: "terminal",
    class: "",
  },
  {
    tema: "node",
    class: "",
  },
  {
    tema: "oop",
    class: "",
  },
  {
    tema: "typescript",
    class: "",
  },
  {
    tema: "css",
    class: "",
  },
  {
    tema: "dom",
    class: "special",
  },
];

function main() {
  const listaEl = document.querySelector(".lista")
  const itemsLiEl = document.querySelectorAll(".lista li");

  // listaEl.forEach((elem) => {
  //   elem.remove()
  // });

  for (const elem of itemsLiEl) {
    elem.remove()
  }

  for (let item of cosasQueAprendimos) {
    const newLiEl = document.createElement("li")
    newLiEl.textContent = item.tema
    newLiEl.classList.add(item.class || "item")
    listaEl.appendChild(newLiEl)
    console.log(newLiEl);
  }
};

main();
