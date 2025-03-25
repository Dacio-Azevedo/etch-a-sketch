const container = document.querySelector("#container");

for (let i = 1; i <= 256; i++) {
    const div = document.createElement("div");
    div.classList.add("container-divs")
    container.appendChild(div);

    div.addEventListener("mouseover", (event) => {
        event.target.style.backgroundColor = `#${randomColor()}`;

    });

    div.addEventListener("mouseout", (event) => {
        event.target.style.backgroundColor = `#${randomColor()}`;

    });
}

function randomColor() {
    console.log(Math.floor(Math.random() * 16777215).toString(16));
    return Math.floor(Math.random() * 16777215).toString(16);
}