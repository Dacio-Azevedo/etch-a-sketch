const gridSize = document.querySelector("button");

const container = document.querySelector("#container");

function generateGrid(row, total) {

    container.innerHTML = "";

    for (let i = 1; i <= total; i++) {
        const div = document.createElement("div");
        div.classList.add("container-divs");
        div.style.width = `calc(100%/${row})`;
        div.style.height = `calc(100%/${row})`;
        container.appendChild(div);

        div.addEventListener("mouseover", (event) => {
            event.target.style.backgroundColor = `#${randomColor()}`;

        });

        div.addEventListener("mouseout", (event) => {
            event.target.style.backgroundColor = `#${randomColor()}`;

        });
    }
}

function randomColor() {
    // console.log(Math.floor(Math.random() * 16777215).toString(16));
    return Math.floor(Math.random() * 16777215).toString(16);
}

gridSize.addEventListener("click", () => {
    const divsPerRow = parseInt(prompt("Enter the size of the grid: ", ""));
    const totalDivs = divsPerRow * divsPerRow;

    generateGrid(divsPerRow, totalDivs);

})