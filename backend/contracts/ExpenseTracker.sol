pragma solidity ^0.6.0;

contract ExpenseTracker {
    int balance = 0;
    struct Transaction {
        address transactionOwner;
        int64 amount;
        string transactionDescription;
    }
    Transaction[] public transaction;

    function addTransaction(
        string memory _transactionDescription,
        int64 _amount
    ) public {
        Transaction memory _tx = Transaction(
            msg.sender,
            _amount,
            _transactionDescription
        );
        transaction.push(_tx);
        balance += _amount;
    }

    function transactionCount() public view returns (uint) {
        return transaction.length;
    }
}
