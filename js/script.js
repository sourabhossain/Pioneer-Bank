// login button event handler
document.querySelector("#login").addEventListener("click", function(event) {
    const loginArea = document.querySelector("#login-area");
    loginArea.style.display = "none";

    const transationArea = document.querySelector("#transation-area");
    transationArea.style.display = "block";
});

// deposit button event handler
document.querySelector("#addDeposit").addEventListener("click", function() {
    const depositNumber =  getInputNumber("#depositAmount")
    
    if (depositNumber < 0) {
        alert("Deposit number cannot be negative.");
    } else {
        updateSpanText("#currentDeposit", depositNumber);
        updateSpanText("#currentBanlance", depositNumber);
    }

    document.querySelector("#depositAmount").value = "";
});

// withdraw button event handler
document.querySelector("#addWithdraw").addEventListener("click", function() {
    const withdrawNumber = getInputNumber("#withdrawAmount");
    
    updateSpanText("#currentWithdraw", withdrawNumber);
    updateSpanText("#currentBanlance", -1 * withdrawNumber);
    
    document.querySelector("#withdrawAmount").value = "";
});

function getInputNumber(id) {
    const amount = document.querySelector(id).value;
    const amountNumber = parseFloat(amount);
    return amountNumber;
}

function updateSpanText(id, addedNumber) {
    const current = document.querySelector(id).innerText;
    const currentNumber = parseFloat(current);
    const totalAmount = addedNumber + currentNumber;
    document.querySelector(id).innerText = totalAmount;
}