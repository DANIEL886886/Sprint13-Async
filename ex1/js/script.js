function extractPlanetData(planetIndex) {
    fetch("./data/data.json")
        .then((response) => response.json())
        .then((data) => {
            const planetData = data.destinations[planetIndex];
            const planetImgElement = document.querySelector(".pic-container img");
            planetImgElement.src = planetData.images.gif;

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

function extractCrewData(crewIndex) {
    fetch("./data/data.json")
        .then((response) => response.json())
        .then((data) => {
            const crewData = data.crew[crewIndex];
            const crewImgElement = document.querySelector(".pic-container img");
            crewImgElement.src = crewData.images.png;

            const bioElement = document.querySelector(".bio");
            bioElement.textContent = crewData.bio;

            const nameElement = document.querySelector(".name");
            nameElement.textContent = crewData.name;

            const roleElement = document.querySelector(".role");
            roleElement.textContent = crewData.role;
        })
        .catch((error) => console.error("Error reading JSON file:", error));
}



document.addEventListener("DOMContentLoaded", () => {

    // CREW PAGE BUTTONS EVENT LISTENER
    //DOUGLAS HURLEY BUTTON
    const button02A = document.getElementById("btn-douglas");
    const handleClick02A = () => {
        extractCrewData(0);
    };
    button02A.addEventListener("click", handleClick02A);
    // Mark Shuttleworth BUTTON ...................................
    const button02B = document.getElementById("btn-mark");
    const handleClick02B = () => {
        extractCrewData(1);
    };
    button02B.addEventListener("click", handleClick02B);
    // Victor Glover BUTTON ...................................
    const button02C = document.getElementById("btn-victoria");
    const handleClick02C = () => {
        extractCrewData(2);
    };
    button02C.addEventListener("click", handleClick02C);
    // Anousheh Ansari BUTTON ...................................
    const button02D = document.getElementById("btn-ansari");
    const handleClick02D = () => {
        extractCrewData(3);
    };
    button02D.addEventListener("click", handleClick02D);
    //UNLOAD THE EVENT LISTENERS................................
    window.addEventListener("beforeunload", () => {
        button02A.removeEventListener("click", handleClick);
        button02B.removeEventListener("click", handleClick);
        button02C.removeEventListener("click", handleClick);
        button02D.removeEventListener("click", handleClick);
    });

    // PLANET PAGE BUTTONS EVENT LISTENER
    //MOON BUTTON
    const button01A = document.getElementById("moonbtn");
    button01A.addEventListener("click", () => extractPlanetData(0));
    // MARS BUTTON ...................................
    const button01B = document.getElementById("marsbtn");
    button01B.addEventListener("click", () => extractPlanetData(1));
    // EUROPA BUTTON ...................................
    const button01C = document.getElementById("europabtn");
    button01C.addEventListener("click", () => extractPlanetData(2));
    // TITANBUTTON ...................................
    const button01D = document.getElementById("titanbtn");
    button01D.addEventListener("click", () => extractPlanetData(3));
});
