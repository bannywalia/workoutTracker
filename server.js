const express = require("express");
const sequelize = require('./config/connection');
const path = require('path');
const hbs = exphbs.create({});

const PORT = process.env.PORT || 3002;

const app = express();

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.static("public"));

// routes
// add routes still into the app.use
 app.use(require("./routes/api.js"));
 app.use(require("./routes/htmlRoutes.js"));

 sequelize.sync().then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
