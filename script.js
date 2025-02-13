function nextPage() {
    window.location.href = "Lets_go.html"; // Redirect to "Yes" page
}

function moveButton() {
    let button = document.getElementById("no");
    let x = Math.random() * (window.innerWidth - 100);
    let y = Math.random() * (window.innerHeight - 50);

    button.style.position = "absolute";
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
}

document.getElementById("no").addEventListener("click", function() {
    this.innerText = "Yes 😏";
    setTimeout(nextPage, 500); // Redirect after 0.5s delay
});