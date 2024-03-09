let Store = require("../model/storeSchema");

const createStoreController = async (req, res) => {
  const { storename, tradenumber, voterid, ownerId } = req.body;
  let store = new Store({
    storename: storename,
    tradenumber: tradenumber,
    voterid: voterid,
    ownerId: ownerId,
  });

  store.save();
  res.send({ success: "Store Created" });
};

module.exports = createStoreController;
