const express = require('express');
const app = express();
const db = require("./models");

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static('public'));
app.set('view engine', 'ejs')

const departement = require('./routes/departement');
app.use('/',departement);

const User = require('./routes/user')
app.use('/', User);


app.get('/' , (req,res)=>{
  db.User.findAll().then((data)=>{
      db.Departement.findAll().then((departements)=>{
          res.render('home',{data ,url : req.url, departements})
      })   
  })
})

// app.get('/' , (req,res)=>{
//   db.User.findAll().then((data)=>{
//     console.log(data);
//       // db.departement.findAll().then((departements)=>{
//           res.render('users',{data })
//       // })   
//   })
// })


app.listen(3000, ()=>{
  console.log(`we are listening`)
})
db.sequelize.sync({force: false})