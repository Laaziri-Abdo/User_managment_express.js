const express = require("express");
const router = express.Router();
const db = require("../models")

// get all Users
router.get('/all_users', (req, res)=>{
db.User.findAll().then((data)=>{
 console.log(data);
  res.render('users',{data })
})
});

//get single User by id
router.get('/user/:id', (req, res)=>{
  db.User.findAll( {
    where: {
      id: req.params.id
    }}).then((data)=>{
    res.render('update_user',{data })
  })
  });


// Post new User  
router.get('/create_user', (req, res) => {
  db.Departement.findAll().then((data)=>{
    res.render('create_user',{data})
  })
 
})
router.post("/newUser", (req, res)=> {
  db.User.create({
    FullName: req.body.FullName,
    Email: req.body.Email,
    Phone: req.body.Phone,
    idDepartement: req.body.departement
  })
  res.redirect('/all_users')
})

// Delete User
router.get('/delete_user/:id', (req, res) =>{
  db.User.destroy({
    where:{
      id: req.params.id
    }
  }).then(() => res.redirect('/all_users'));
});


// Edit a User
router.post('/edit_user', (req, res) => {
  db.User.update({
    FullName: req.body.FullName,
    Email: req.body.Email,
    Phone: req.body.Phone
  },
  {where: {id: req.body.id}}
  ).then(() => res.redirect('/all_users'));
})


module.exports = router;