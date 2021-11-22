const mongoose = require("mongoose");

const TransactionSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: [true, "Transaction must belong to a user"],
    },
    transactionId: {
      type: String,
      required: [true, "Please add a id"],
    },
    typeOfInvestment: {
      type: String,
      required: [true, "Please add a type of investment"],
    },
    status: {
      type: String,
      required: [true, "Please add a status"],
    },
    paymentMode: {
      type: String,
      required: [true, "Please add a paymentMode"],
    },
    currencyCode: {
      type: String,
      required: [true, "Please add a currencyCode"],
    },
    amount: {
      type: String,
      required: [true, "Please add a amount"],
    },

    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

module.exports = mongoose.model("Transaction", TransactionSchema);
