document.querySelector("#login").addEventListener("click", function(event) {
    const loginArea = document.querySelector("#login-area");
    loginArea.style.display = "none";

    const transationArea = document.querySelector("#transation-area");
    transationArea.style.display = "block";
});