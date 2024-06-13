const db = require("../models");
const pegawai = db.pegawai;

exports.create = (req, res) => {
  
  req.body.tglLahir = new Date(req.body.tglLahir)
  
  pegawai.create(req.body)
  .then((data) => {
    res.send({message:"Data created successfully"})
    .catch((err) => {
      res.status(500).send({message:err.message})
    })
  })
};
exports.findAll = (req, res) => {
  pegawai.find({}).then((data) => {
    res.send(data)
    .catch((err) => {
      res.status(500).send({message:err.message})
  })
})
};

exports.show = (req, res) => {
  const id = req.params.id;
  pegawai.findById(id)
  .then((data) => {
    if(!data) {
      res.status(404).send({message:"Not found"})
    } else {
      res.send(data)
    }
  })
  .catch((err) => {
    res.status(500).send({message:err.message})
})
};

exports.find = (req, res) => {};
exports.update = (req, res) => {
  const id = req.params.id;
  pegawai.findByIdAndUpdate(id, req.body)
  .then((data) => {
    if(!data) {
      res.status(404).send({message:"Not found"})
    } else {
      res.send({message:"Update successfully"})
    }
  })
  .catch((err) => {
    res.status(500).send({message:err.message})
})
};

exports.delete = (req, res) => {
  const id = req.params.id;
  pegawai.findByIdAndDelete(id)
  .then ((data) => {
    if(!data) {
      res.status(404).send({message:"Tidak dapat menghapus data"})
    }
    res.send({message:"Data berhasil di hapus"})
  })
  .catch((err) => {
    res.status(500).send({message:err.message}) 
  })
};
