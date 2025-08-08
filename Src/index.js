require('dotenv').config();
const express = require('express');
const { Sequelize } = require('sequelize');
const app = express();
const path =require("path")
const PORT = 3000;

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    port: process.env.DB_PORT,
  }
);

const User = require('../Src/models/user')(sequelize);

app.use(express.json());
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'views'));
app.get('/', async (req, res) => {
  const users = await User.findAll();
console.log(":::::::::::::::::::",users);
  res.render('home', { studentList: users});
});

app.post('/user', async (req, res) => {
  const user = await User.create(req.body);
  res.json(user);
});

// sequelize.sync({force:false}).then((resp) => {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
// }).catch((error)=>{
//     console.log("error",error);
// })
