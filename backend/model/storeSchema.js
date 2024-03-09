const mongoose = require("mongoose");

const { Schema } = mongoose;

const storeSchema = new Schema({
  storename: {
    type: String,
    required: true,
  },
  tradenumber: {
    type: Number,
    required: true,
  },
  voterid: {
    type: Number,
    required: true,
  },
  ownerId: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("Store", storeSchema);
