function extractData(planetIndex) {
    fetch("./data/data.json")
        .then((response) => response.json())
        .then((data) => {
            const planetData = data.destinations[planetIndex];
            const imgElement = document.querySelector(".pic-container img");
            imgElement.src = planetData.images.gif;

            const descriptionElement = document.querySelector(
                ".planet-description"
            );
            descriptionElement.textContent = planetData.description;

            const nameElement = document.querySelector(".planet-name");
            nameElement.textContent = planetData.name;

            const distanceElement = document.querySelector(".dist");
            distanceElement.textContent = `${planetData.distance}`;

            const travelTimeElement = document.querySelector(".time");
            travelTimeElement.textContent = `${planetData.travel}`;
        })
        .catch((error) => console.error("Error reading JSON file:", error));
}

document.addEventListener("DOMContentLoaded", () => {
    // BUTTONS EVENT LISTENER
    //MOON BUTTON
    const button0 = document.getElementById("moonbtn");
    button0.addEventListener("click", () => extractData(0));
    // MARS BUTTON ...................................
    const button1 = document.getElementById("marsbtn");
    button1.addEventListener("click", () => extractData(1));
    // EUROPA BUTTON ...................................
    const button2 = document.getElementById("europabtn");
    button2.addEventListener("click", () => extractData(2));
    // TITANBUTTON ...................................
    const button3 = document.getElementById("titanbtn");
    button3.addEventListener("click", () => extractData(3));
});
