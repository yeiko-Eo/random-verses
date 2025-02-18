//Function
async function fetchVerses() {
    try{
        const response = await fetch('json/verses.json'); // Fetch the verses
        const data = await response.json(); // Get the JSON data
        return data.verses; 
    } catch (error){
        console.error(error); 
        return []; // Return an empty array if there is an error
    }
}
//Function
function animation(verse) {
    const verseElement = document.getElementById("verse");
    verseElement.style.opacity = 0; // Start with the verse hidden

    // Fade in animation
    let opacity = 0;
    if (verseElement.fadeIn) {
        clearInterval(verseElement.fadeIn);
    }
    verseElement.fadeIn = setInterval(() => {
        if (opacity >= 1) { // Stop the interval when the opacity reaches 1
            clearInterval(verseElement.fadeIn);
            verseElement.fadeIn = null;// Clear the interval
        }
        verseElement.style.opacity = opacity;// Set the opacity
        opacity += 0.02;
    }, 50);

    return verse;
}
//Function
async function generate_verse() { 
    const verses = await fetchVerses(); 
    if (verses.length > 0){
        const randomIndex = Math.floor(Math.random() * verses.length); // Get a random index
        document.getElementById("verse").textContent = animation(verses[randomIndex]); // Display the verse
    } else {
        document.getElementById("verse").textContent = "Verses haven't been uploaded yet. Please check back later.";
    }
}
