const field = document.getElementById("field");
const initialStates = ["dirt", "rock", "weed"];
const columns = 12;

for (let i = 0; i < 144; i++) {
  const cell = document.createElement("div");
  cell.classList.add("cell");

  const state = initialStates[Math.floor(Math.random() * initialStates.length)];
  cell.classList.add(state);

  cell.addEventListener("click", () => {
    if (
      cell.classList.contains("dirt") ||
      cell.classList.contains("rock") ||
      cell.classList.contains("weed")
    ) {
      cell.classList.remove("dirt", "rock", "weed");
      cell.classList.add("done");
    } else if (cell.classList.contains("done")) {
      cell.classList.add("seeds");
    }
  });

  field.appendChild(cell);
}
