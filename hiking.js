const hikeForm = document.getElementById("hike-form");
const hikeList = document.getElementById("hike-list");

let hikes = JSON.parse(localStorage.getItem("hikingLogHikes") || "[]");

function showHikes() {
  hikeList.innerHTML = "";

  for (const hike of hikes) {
    const listItem = document.createElement("li");
    listItem.textContent = `${hike.name} - ${hike.date} - ${hike.distance} miles - ${hike.elevation} feet gained - ${hike.duration} hours`;
    hikeList.appendChild(listItem);
  }
}

function addHike(event) {
  event.preventDefault();

  const hike = {
    name: document.getElementById("hike-name").value.trim(),
    date: document.getElementById("hike-date").value,
    distance: Number(document.getElementById("hike-distance").value),
    elevation: Number(document.getElementById("hike-elevation").value),
    duration: Number(document.getElementById("hike-duration").value)
  };
  hikes.push(hike);
  localStorage.setItem("hikingLogHikes", JSON.stringify(hikes));
  showHikes();
  hikeForm.reset();
}

hikeForm.addEventListener("submit", addHike);
showHikes();