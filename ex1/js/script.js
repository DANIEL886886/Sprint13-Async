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

    const addEventListeners = () => {
        if (document.body.id === "crew-page") {
            // CREW PAGE BUTTONS EVENT LISTENER
            // DOUGLAS HURLEY BUTTON
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
            // UNLOAD THE EVENT LISTENERS................................
            window.addEventListener("beforeunload", () => {
                button02A.removeEventListener("click", handleClick02A);
                button02B.removeEventListener("click", handleClick02B);
                button02C.removeEventListener("click", handleClick02C);
                button02D.removeEventListener("click", handleClick02D);
            });
        } else if (document.body.id === "destination-page") {
            // PLANET PAGE BUTTONS EVENT LISTENER
            // MOON BUTTON
            const button01A = document.getElementById("moonbtn");
            const handleClick01A = () => {
                extractPlanetData(0);
            };
            button01A.addEventListener("click", handleClick01A);
            // MARS BUTTON ...................................
            const button01B = document.getElementById("marsbtn");
            const handleClick01B = () => {
                extractPlanetData(1);
            };
            button01B.addEventListener("click", handleClick01B);
            // EUROPA BUTTON ..................................
            const button01C = document.getElementById("europabtn");
            const handleClick01C = () => {
                extractPlanetData(2);
            };
            button01C.addEventListener("click", handleClick01C);
            // TITAN BUTTON ...................................
            const button01D = document.getElementById("titanbtn");
            const handleClick01D = () => {
                extractPlanetData(3);
            };
            button01D.addEventListener("click", handleClick01D);
            // UNLOAD EVENT LISTENERS..........................
            window.addEventListener("beforeunload", () => {
                button01A.removeEventListener("click", () => handleClick01A);
                button01B.removeEventListener("click", () => handleClick01B);
                button01C.removeEventListener("click", () => handleClick01C);
                button01D.removeEventListener("click", () => handleClick01D);
            });
        }
    };

    addEventListeners();
});
