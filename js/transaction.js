function Transaction(amount){
    let totalBalance = 500000

    // check if the amount is greater than the total balance

    if (amount > totalBalance) {
        console.log( "insufficient funds");
    }else {
        totalBalance = totalBalance -= amount;
        console.log("current balance:", totalBalance);
    }
}

Transaction(5000)