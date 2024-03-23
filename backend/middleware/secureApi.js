let secureApi = (req, res, next) => {
  //   console.log(req.headers.authorization);
  if (req.headers.authorization == "amit251") {
    next();
  } else {
    res.send({ error: "need valid permission" });
  }
};

module.exports = secureApi;
