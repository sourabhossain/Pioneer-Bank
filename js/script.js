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
    
    const currentDeposit = document.querySelector("#currentDeposit").innerText;
    const currentDepositNumber = parseFloat(currentDeposit);
    const totalDeposit = depositNumber + currentDepositNumber;
    
    document.querySelector("#currentDeposit").innerText = totalDeposit;
    
    const currentBanlance = document.querySelector("#currentBanlance").innerText;
    const currentBanlanceNumber = parseFloat(currentBanlance);
    const totalBanlance = depositNumber + currentBanlanceNumber;

    document.querySelector("#currentBanlance").innerText = totalBanlance;
    document.querySelector("#depositAmount").value = "";
});