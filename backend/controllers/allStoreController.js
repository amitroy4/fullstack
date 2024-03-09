const store = require("../model/storeSchema");

let allStoreController = async (req, res) => {
  //   let storeData = await store.find({}).populate("category");
  const { id } = req.params;
  let data = await store.find({ ownerId: id });
  res.send(data);
};

module.exports = allStoreController;
