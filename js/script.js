// login button event handler
document.querySelector("#login").addEventListener("click", function(event) {
    const loginArea = document.querySelector("#login-area");
    loginArea.style.display = "none";

    const transationArea = document.querySelector("#transation-area");
    transationArea.style.display = "block";
});

// deposit button event handler
document.querySelector("#addDeposit").addEventListener("click", function(event) {
    const depositAmount = document.querySelector("#depositAmount").value;
    const depositNumber = parseFloat(depositAmount);
    
    updateSpanText("#currentDeposit", depositNumber);
    updateSpanText("#currentBanlance", depositNumber);

    document.querySelector("#depositAmount").value = "";
});

function updateSpanText(id, depositNumber) {
    const current = document.querySelector(id).innerText;
    const currentNumber = parseFloat(current);
    const totalAmount = depositNumber + currentNumber;
    document.querySelector(id).innerText = totalAmount;
}