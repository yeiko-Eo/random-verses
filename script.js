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
        return; // If there's no verse
    }

    // Select a random verse
    currentVerse = verses[Math.floor(Math.random() * verses.length)];
    document.getElementById("verse").textContent = currentVerse.verse;
    document.getElementById("verse").classList.add("show");

    generateOptions(currentVerse);
}

function generateOptions(correctVerse) {
    const optionsPanel = document.getElementById("options-panel");
    optionsPanel.innerHTML = ""; // Clear previous options

    // Get two incorrect citations
    const incorrectOptions = verses
        .filter(v => v.cite !== correctVerse.cite)
        .sort(() => 0.5 - Math.random())
        .slice(0, 2);

    // Combine and shuffle options
    const allOptions = [...incorrectOptions, correctVerse]
        .sort(() => 0.5 - Math.random());

    allOptions.forEach(option => {
        const btn = document.createElement("button");
        btn.textContent = option.cite;
        btn.style.margin = "5px";

        btn.onclick = () => {
            if (option.cite === correctVerse.cite) {
                alert("✅ Ve' que sabe");
            } else {
                alert("❌ Uhmm mejor nadota dice Don");
            }
        };

        optionsPanel.appendChild(btn);
    });
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
