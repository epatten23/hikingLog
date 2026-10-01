const hikeForm = document.getElementById("hike-form");
const hikeList = document.getElementById("hike-list");

let hikes = JSON.parse(localStorage.getItem("hikingLogHikes") || "[]");

// makes sure that all fields are valid
function checkHike(hike) {
  if (hike.name === "" || hike.distance <= 0 || hike.elevation < 0 || hike.date === "" || isNaN(hike.distance) || isNaN(hike.elevation) || isNaN(hike.duration)) {
    throw new Error("Please fill in all fields with valid values.");
  }
  return hike;
}

function showHikes() {
  hikeList.innerHTML = "";

  // map builds a new array of list items (one per hike) 
  const listItems = hikes.map((hike) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${hike.name} - ${hike.date} - ${hike.distance} miles - ${hike.elevation} feet gained - ${hike.duration} hours`;
    return listItem;
  });

  // adds each one to the page
  listItems.forEach((item) => hikeList.appendChild(item));
}

function addHike(event) {
  event.preventDefault();
  document.getElementById("error-message").textContent = "";
  // reads from the html page
  const hike = {
    name: document.getElementById("hike-name").value.trim(),
    date: document.getElementById("hike-date").value,
    distance: Number(document.getElementById("hike-distance").value),
    elevation: Number(document.getElementById("hike-elevation").value),
    duration: Number(document.getElementById("hike-duration").value)
  };

  try {
    checkHike(hike);
    // runs if checkHike didn't throw
    hikes.push(hike);
    localStorage.setItem("hikingLogHikes", JSON.stringify(hikes));
    showHikes();
    hikeForm.reset();
  } catch (error) {
    document.getElementById("error-message").textContent = error.message;
  }
}


hikeForm.addEventListener("submit", addHike);
showHikes();
