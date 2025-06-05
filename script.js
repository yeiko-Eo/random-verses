let verses = [];
let currentVerse = null;

// Load the JSON file on startup
fetch('verses.json')
    .then(response => response.json())
    .then(data => {
        verses = data;
    })
    .catch(error => console.error('Error loading verses:', error));

// Function to show a random verse
function getRandomVerse() {
    if (verses.length === 0) {
        document.getElementById("verse").textContent = "No verses found.";
        return;
    }

    // Select a random one and save it
    currentVerse = verses[Math.floor(Math.random() * verses.length)];

    // Show only the verse
    document.getElementById("verse").textContent = currentVerse.verse;
    document.getElementById("verse").classList.add("show");
}

// Function to show the citation of the current verse
function getVerseCite() {
    if (!currentVerse) {
        document.getElementById("verse").textContent = "You must show a verse first.";
        return;
    }

    // Show only the citation
    document.getElementById("verse").textContent = currentVerse.cite;
    document.getElementById("verse").classList.add("show");
}
