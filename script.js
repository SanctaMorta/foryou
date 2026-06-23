let firstClick = true;

function showNext() {
    const hiddenMessage = document.getElementById("hidden-message");
    const button = document.querySelector(".confession-button");

    if (firstClick) {
        hiddenMessage.classList.remove("hidden");
        button.textContent = "Я согласна! ❤️";
        button.style.background = "#2ecc71";
        firstClick = false;
    } else {
        window.location.href = "food.html";
    }
}
function showDecline() {
    document.getElementById("decline-message")
        .classList.remove("hidden");

    document.querySelector(".buttons")
        .style.display = "none";

    document.getElementById("hidden-message")
        .classList.add("hidden");
}