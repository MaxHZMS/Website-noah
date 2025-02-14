// Knop voor de welkomstpagina
document.getElementById("startBtn").addEventListener("click", function() {
    document.getElementById("welcome").classList.add("hidden");
    document.getElementById("gallery").classList.remove("hidden"); // Maakt de fotogalerij zichtbaar
    document.getElementById("gallery").scrollIntoView({ behavior: 'smooth' }); // Scroll naar de fotogalerij
});

// Knop voor de fotogalerij
document.getElementById("nextBtn").addEventListener("click", function() {
    document.getElementById("gallery").classList.add("hidden");
    document.getElementById("loveMessage").classList.remove("hidden"); // Maakt het liefdesbericht zichtbaar
    document.getElementById("loveMessage").scrollIntoView({ behavior: 'smooth' }); // Scroll naar het liefdesbericht
});

// Knop voor het liefdesbericht
document.getElementById("nextMessageBtn").addEventListener("click", function() {
    document.getElementById("loveMessage").classList.add("hidden");
    document.getElementById("playlist").classList.remove("hidden"); // Maakt de afspeellijst zichtbaar
    document.getElementById("playlist").scrollIntoView({ behavior: 'smooth' }); // Scroll naar de afspeellijst
});

// Knop voor de afspeellijst
document.getElementById("finishBtn").addEventListener("click", function() {
    alert("Fijne Valentijnsdag! ❤️ Ik hou zo enorm veel van jou!");
});
