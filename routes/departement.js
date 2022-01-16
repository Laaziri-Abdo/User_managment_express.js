const express = require ('express');
const router = express.Router();
const db = require ('../models');


// get all Departement
// router.get('/all_departement', (req, res)=>{
//   db.Departement.findAll().then((data) => {res.render('departements', {data})
// });
// });

router.get('/all_departement', (req, res)=>{
    db.Departement.findAll().then((departemets)=>{
      res.render('departements',{departemets })
    })
    });


//get single Departement by id
router.get('/departement/:id', (req, res)=>{
  db.Departement.findAll({
    where: {
      id: req.params.id
    }
  }).then((Departement) =>{
     res.render('update_departement' ,{Departement})
  })
});


// post new Departement
router.post("/newDepartement", (req, res)=> {
  db.Departement.create({
    nom: req.body.nom,
    descreption: req.body.descreption
  })
  res.redirect('/all_departement')
})

router.get('/create_departement', (req, res) => {
  res.render('create_departement')
})

// Delete Departement
router.get('/delete_department/:id', (req, res) =>{
  db.Departement.destroy({
    where:{
      id: req.params.id
    }
  }).then(() => res.redirect('/all_departement'));
});


// Edit a Departement
router.post('/edit_departement', (req, res) => {
  db.Departement.update({
    nom: req.body.nom,
    descreption: req.body.descreption
  },
  {where: {id: req.body.id}}
  ).then(() => res.redirect("/all_departement"));
});


module.exports = router;