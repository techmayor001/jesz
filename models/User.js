const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },

  lastName: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  phone: {
    type: String,
  },

  dob: {
    type: String
  },

  state: {
    type: String,
    required: true
  },

  lga: {
    type: String,
    required: true
  },

  address: {
    type: String,
    required: true
  },

  addressProof: {
    type: String,
    required: true
  },

  passportPhoto: {
    type: String,
    required: true
  },

  idType: {
      type: String,
      enum: ["nin", "passport", "drivers", "voters"],
      required: true,
   },
   
  idNumber: {
     type: String,
   },

  idFile: {
    type: String,
    required: true,
  },
  
  paymentReference: {
    type: String,
    required: true,
    unique: true
  },

  paymentAmount: {
    type: Number,
    required: true,
  },

  paymentStatus: {
      type: String,
      enum: ["pending", "paid", "failed"],
      default: "paid",
  },

  status: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending",
  },

  referralCode: {
    type: String,
    required: true,
  },


  password: {
    type: String,
    required: true
  },

  referredUsers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],

  createdAt: {
    type: Date,
    default: Date.now,
  },

  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("User", userSchema);
