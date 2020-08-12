const homeController = require("./controllers/homeController");
  express = require("express"),
  app = express();
  chalkAnimation = require('chalk-Animation')

app.get("/items/:vegetable", homeController.sendReqParam);
