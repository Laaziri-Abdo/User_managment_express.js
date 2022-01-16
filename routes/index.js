const express = require ('express');
const router = express.Router();
const db = require ('../models');

router.get('/all', (req, res)=>{
  db.Departement.findAll().then(Departements => res.send(Departements));
});

router.post("/new", (req, res)=> {
  db.Departement.create({
    nom: req.body.nom
  }).then(submitedDepartement => res.send(submitedDepartement));
})

module.exports = router;