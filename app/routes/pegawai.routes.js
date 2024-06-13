module.exports = (app) => {
  
  const pegawai = require("../controllers/pegawai.controller");
  var r = require("express").Router();
  r.get("/", pegawai.findAll);
  r.get("/:id", pegawai.show);
  r.post("/", pegawai.create);
  r.put("/:id", pegawai.update);
  r.delete("/:id", pegawai.delete);
  
  app.use("/pegawai", r);
};
