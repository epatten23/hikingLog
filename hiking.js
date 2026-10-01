const hikeForm = document.getElementById("hike-form");
const hikeList = document.getElementById("hike-list");

const hikes = JSON.parse(localStorage.getItem("hikingLogHikes") || "[]");

// makes sure that all fields are valid -- distance and elevation must be positive, and all other fields must be filled
function checkHike(hike) {
  if (hike.name === "" || hike.distance < 0 || hike.elevation <= 0 || hike.date === "" || isNaN(hike.distance) || isNaN(hike.elevation) || isNaN(hike.duration)) {
    throw new Error("Please fill in all fields with valid values.");
  }
  return hike;
}

// turns a month number into its name
const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// turns hikes array into { year: { month: [hikes] } }
function groupHikes(hikeArray) {
  const grouped = {};

  for (const hike of hikeArray) {
    // using the library day.js to read the date given in local time
    const d = dayjs(hike.date);
    // year and full month which will become the group keys and headings
    const year = d.format("YYYY");
    const month = d.format("MMMM");

    if (!grouped[year]) {
      grouped[year] = {};
    }
    if (!grouped[year][month]) {
      grouped[year][month] = [];
    }
    grouped[year][month].push(hike);
  }

  return grouped;
}

// newest first: by year and then by month
function sortKeys(keys) {
  return keys.sort((a, b) => {
    if (MONTHS.includes(a)) {
      return MONTHS.indexOf(b) - MONTHS.indexOf(a);
    }
    return Number(b) - Number(a);
  });
}

// recursive: keeps going down until it reaches the hike array
// tracks the current depth so it doesn't go too deep
function renderGroup(node, parentElement, depth = 0) {
  if (Array.isArray(node)) {
    // Base case: the list of hikes
    const sorted = [...node].sort((a, b) => b.date.localeCompare(a.date));
    const listItems = sorted.map((hike) => {
      const listItem = document.createElement("li");
      listItem.textContent = `${hike.name} - ${hike.date} - ${hike.distance} miles - ${hike.elevation} feet gained - ${hike.duration} hours`;
      return listItem;
    });
    // adds the list items to the parent element
    listItems.forEach((item) => parentElement.appendChild(item));
    return;
  }

  // group the hikes by year and month
  for (const key of sortKeys(Object.keys(node))) {
    const groupItem = document.createElement("li");
    const heading = document.createElement(`h${depth + 2}`);
    heading.textContent = key;
    const subList = document.createElement("ul");

    groupItem.appendChild(heading);
    groupItem.appendChild(subList);
    parentElement.appendChild(groupItem);

    renderGroup(node[key], subList, depth + 1);
  }
}

// show the grouped hikes in their filtered state
function showHikes() {
  // clears the existing list
  hikeList.innerHTML = "";
  const grouped = groupHikes(hikes);
  // prints the new list
  renderGroup(grouped, hikeList);
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
