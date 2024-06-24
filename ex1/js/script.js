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

function renderCrewList() {
    fetch("./data/data.json")
        .then((response) => response.json())
        .then((data) => {
            const crewList = data.crew;
            const crewListEl = document.querySelector("#crew-list")
            crewList.forEach((crew, index) => {
                const crewElHtml = `<a href="#"><button id="crew-${index}" class="crew-btn listbtn">⚪</button></a>`;
                const crewEl = document.createElement("li");
                crewEl.innerHTML = crewElHtml;
                crewListEl.appendChild(crewEl);
                crewEl.addEventListener("click", crewBtnEvenListener);
            })
            setActiveCrew(0);
        })
        .catch((error) => console.error("Error reading JSON file:", error));
}

function setActiveCrew(crewIndex) {
    const crewEls = document.querySelectorAll(".crew-btn");
    crewEls.forEach((el) => el.classList.remove("active"));
    const crewEl = document.querySelector(`#crew-${crewIndex}`);
    if (!crewEl) {
        console.error("Can not find crew index " + crewIndex);
        return;
    }
    crewEl.classList.add("active");
    extractCrewData(crewIndex);
}

const crewBtnEvenListener = (event) => {
    const crewEl = event.target;
    const crewIndex = crewEl.id.replace("crew-", "");
    setActiveCrew(crewIndex);
}

document.addEventListener("DOMContentLoaded", () => {
    
    renderCrewList();

});
