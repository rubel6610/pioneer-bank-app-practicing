
let loginBtn = document.querySelector('#login-btn');
let loginEmail = document.querySelector('#login-email');
let loginPwd = document.querySelector('#login-password');
loginBtn.addEventListener("click", function(){
    if(loginEmail.value == "" || loginPwd.value == ""){
        alert("Please enter your email and password")
    }
    else{
        let loginArea = document.querySelector("#Home-page");
        loginArea.style.display = "none";
        let transactionArea = document.querySelector('.second-section');
        transactionArea.style.display = "block";
    }
})



let depositBtn = document.querySelector('.deposit-btn');


depositBtn.addEventListener("click", function(){
    let depositAmount = document.querySelector('#deposit-amount').value;
    let depositNumber = parseFloat(depositAmount);

    let totalDeposit = document.querySelector('#total-deposit').innerText;
    let totalDepositNumber = parseFloat(totalDeposit);
    let currentBalance = document.querySelector('#Current-balance').innerText;
    let currentBalanceAmount = parseFloat(currentBalance);
    let newdepositamount = totalDepositNumber + depositNumber;

    document.querySelector('#total-deposit').innerText = newdepositamount;
    document.querySelector('#Current-balance').innerText = depositNumber + currentBalanceAmount;
    document.querySelector('#deposit-amount').value = "";
  
});

let withdrawBtn = document.querySelector('.withdraw-btn');
withdrawBtn.addEventListener("click", ()=>{
    let withdrawAmount = document.querySelector('#withdraw-amount').value;
    let withdrawNumber = parseFloat(withdrawAmount);
    let totalWithdraw = document.querySelector('#total-withdraw').innerText;
    let totalWithdrawNumber = parseFloat(totalWithdraw);
    let currentBalance = document.querySelector('#Current-balance').innerText;
    let currentBalanceAmount = parseFloat(currentBalance);
    let newwithdrawamount = withdrawNumber + totalWithdrawNumber;
    if(currentBalanceAmount >= withdrawAmount ){
    document.querySelector('#total-withdraw').innerText = newwithdrawamount;
    document.querySelector('#withdraw-amount').value = "";
    document.querySelector('#Current-balance').innerText = currentBalanceAmount - withdrawNumber;
    
    }else{
        alert("Your balance is not sufficient at the moment! Please deposit your account for further Transaction! Thank you for staying with Us")
    }
    
})
