const sentences = [
    "All the best.",
    "Never give up.",
    "Best of luck.",
    "try again.",
    "hari shamith."
];

function generateSentence() {
    const randomIndex = Math.floor(Math.random() * sentences.length);
    document.getElementById('sentenceDisplay').innerText = sentences[randomIndex];
}
