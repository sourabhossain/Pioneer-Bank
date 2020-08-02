// login button event handler
document.querySelector("#login").addEventListener("click", function(event) {
    const loginArea = document.querySelector("#login-area");
    loginArea.style.display = "none";

    const transationArea = document.querySelector("#transation-area");
    transationArea.style.display = "block";
});

// deposit button event handler
document.querySelector("#addDeposit").addEventListener("click", function(event) {
    const depositAmount = document.querySelector("#depositAmount");
    const depositNumber = parseFloat(depositAmount.value);
    
    const currentDeposit = document.querySelector("#currentDeposit").innerText;
    const currentDepositNumber = parseFloat(currentDeposit);
    const totalDeposit = depositNumber + currentDepositNumber;
    document.querySelector("#currentDeposit").innerText = totalDeposit;
    document.querySelector("#depositAmount").value = "";
});