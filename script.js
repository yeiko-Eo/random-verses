let verses = [];
fetch('verses.json')
    .then(response => response.json())
    .then(data => {
        verses = data;
    });

function getRandomVerse() {
    if (verses.length === 0) return;
    const index = Math.floor(Math.random() * verses.length);
    const verseElement = document.getElementById("verse");
    verseElement.classList.remove("show"); // Reset animation
    void verseElement.offsetWidth; // Force animation restart
    verseElement.textContent = verses[index];
    verseElement.classList.add("show"); // Apply the animation
}
