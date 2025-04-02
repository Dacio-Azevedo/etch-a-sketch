const gridSize = document.querySelector("button");

const container = document.querySelector("#container");

function generateGrid(side, total) {

    container.innerHTML = "";

    if (side <= 100) {
        for (let i = 1; i <= total; i++) {
            const div = document.createElement("div");
            div.classList.add("container-divs");
            div.style.width = `calc(100%/${side})`;
            div.style.height = `calc(100%/${side})`;
            container.appendChild(div);

            div.addEventListener("mouseover", (event) => {
                event.target.style.backgroundColor = `#${randomColor()}`;

            });

            div.addEventListener("mouseout", (event) => {
                event.target.style.backgroundColor = `#${randomColor()}`;

            });
        }
    }
    else {
        alert("The grid size must no be longer than 100. Try again with a lower number.");
    }
}

function randomColor() {
    // console.log(Math.floor(Math.random() * 16777215).toString(16));
    return Math.floor(Math.random() * 16777215).toString(16);
}

gridSize.addEventListener("click", () => {
    const divsPerSide = parseInt(prompt("Enter the size of the grid: ", ""));
    const totalDivs = divsPerSide * divsPerSide;

    generateGrid(divsPerSide, totalDivs);

})