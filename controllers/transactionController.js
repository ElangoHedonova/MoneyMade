const Transaction = require("../models/Transaction");

exports.getAllTransactions = async (req, res, next) => {
  const transactions = await Transaction.find({});

  res.status(200).json({
    success: true,
    data: transactions,
  });
};

exports.createTransaction = async (req, res, next) => {
  const transaction = await Transaction.create(req.body);

  res.status(201).json({
    success: true,
    data: transaction,
  });
};
