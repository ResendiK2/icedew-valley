const field = document.getElementById("field");
const states = ["dirt", "rock", "weed"];

for (let i = 0; i < 144; i++) {
  const cell = document.createElement("div");
  cell.classList.add("cell");

  const state = states[Math.floor(Math.random() * states.length)];
  cell.classList.add(state);

  cell.addEventListener("click", () => {
    alert(`You clicked on a ${state} cell`);
  });

  field.appendChild(cell);
}
